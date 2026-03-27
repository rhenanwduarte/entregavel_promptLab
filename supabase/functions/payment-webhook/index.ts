import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"
import { timingSafeEqual } from "https://deno.land/std@0.168.0/crypto/timing_safe_equal.ts"

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const WEBHOOK_SECRET = Deno.env.get('PAYMENT_WEBHOOK_SECRET')

const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function secureCompare(a: string, b: string): boolean {
  const encoder = new TextEncoder()
  const aBuffer = encoder.encode(a)
  const bBuffer = encoder.encode(b)
  
  if (aBuffer.byteLength !== bBuffer.byteLength) return false
  return timingSafeEqual(aBuffer, bBuffer)
}

serve(async (req: Request) => {
  try {
    console.log("[Webhook] Received request")

    const authHeader = req.headers.get('Authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.warn("[Webhook] Unauthorized attempt: Missing or invalid Authorization header format")
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    const token = authHeader.substring(7)
    
    if (!WEBHOOK_SECRET || !secureCompare(token, WEBHOOK_SECRET)) {
      console.warn("[Webhook] Unauthorized attempt: Invalid token signature")
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    const body = await req.json().catch(() => null)
    if (!body) {
      console.warn("[Webhook] Invalid payload: Malformed JSON")
      return new Response(JSON.stringify({ error: 'Bad Request' }), { status: 400 })
    }

    const { email, order_id, status } = body

    if (!email || !order_id || status !== "paid") {
      console.warn(`[Webhook] Invalid payload or unpaid status (Order: ${order_id || 'unknown'})`)
      return new Response(JSON.stringify({ error: 'Invalid payload or unpaid status' }), { status: 400 })
    }

    const normalizedEmail = String(email).trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      console.warn(`[Webhook] Invalid email format received: ${normalizedEmail}`)
      return new Response(JSON.stringify({ error: 'Invalid email format' }), { status: 400 })
    }

    // Replay attack protection: Check if order already processed
    const { data: existingOrder, error: checkError } = await supabase
      .from('processed_orders')
      .select('order_id')
      .eq('order_id', order_id)
      .single()

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "No rows found", which is what we want
      console.error(`[Webhook] DB Error checking order ${order_id}:`, checkError.message)
      throw new Error("Database check failed")
    }

    if (existingOrder) {
      console.log(`[Webhook] Duplicate order ignored (already processed): ${order_id}`)
      return new Response(JSON.stringify({ success: true, message: 'Order already processed' }), { 
        status: 200,
        headers: { "Content-Type": "application/json" }
      })
    }

    const { error: dbError } = await supabase
      .from('authorized_users')
      .upsert({ email: normalizedEmail, created_at: new Date().toISOString() }, { onConflict: 'email' })

    if (dbError) {
      console.error(`[Webhook] DB Error granting access for ${normalizedEmail}:`, dbError.message)
      throw new Error("Database upsert failed")
    }
    
    // Mark order as processed
    const { error: markError } = await supabase
      .from('processed_orders')
      .insert({ order_id, created_at: new Date().toISOString() })
      
    if (markError) {
      // We don't fail the request here since access was granted, but we must log it
      console.error(`[Webhook] CRITICAL: Failed to mark order ${order_id} as processed:`, markError.message)
    }

    console.log(`[Webhook] Successful access grant for ${normalizedEmail} (Order: ${order_id})`)

    const resendKey = Deno.env.get('RESEND_API_KEY')
    if (resendKey) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: 'PromptLab <noreply@promptlab.app>',
            to: normalizedEmail,
            subject: 'Your PromptLab access is ready',
            html: `
              <div style="font-family: sans-serif; color: #333;">
                <h2>Welcome to PromptLab!</h2>
                <p>Your payment (Order ${order_id}) was successful.</p>
                <p>Click the button below to access your dashboard:</p>
                <a href="https://promptlab.app/access" style="display:inline-block; padding: 12px 24px; background: #6d28d9; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold;">Access PromptLab</a>
              </div>
            `
          })
        })

        if (!emailResponse.ok) {
          console.error("[Webhook] Resend API error:", await emailResponse.text())
        }
      } catch (emailErr: any) {
        console.error("[Webhook] Failed to send welcome email:", emailErr.message)
      }
    }

    return new Response(JSON.stringify({ success: true, user: normalizedEmail }), { 
      status: 200,
      headers: { "Content-Type": "application/json" }
    })

  } catch (err: any) {
    console.error("[Webhook] Processing error:", err.message)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
})

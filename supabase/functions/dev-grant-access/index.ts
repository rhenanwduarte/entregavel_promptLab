import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"
import { timingSafeEqual } from "https://deno.land/std@0.168.0/crypto/timing_safe_equal.ts"

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const DEV_SECRET = Deno.env.get('DEV_GRANT_SECRET')

const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function secureCompare(a: string, b: string): boolean {
  const encoder = new TextEncoder()
  const aBuffer = encoder.encode(a)
  const bBuffer = encoder.encode(b)
  
  if (aBuffer.byteLength !== bBuffer.byteLength) return false
  return timingSafeEqual(aBuffer, bBuffer)
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log("[DevGrant] Call received")

    if (!DEV_SECRET) {
      console.warn("[DevGrant] Disabled: DEV_GRANT_SECRET missing from environment")
      return new Response(JSON.stringify({ error: 'Dev endpoint disabled' }), { status: 403, headers: corsHeaders })
    }

    const body = await req.json().catch(() => null)
    if (!body) {
      console.warn("[DevGrant] Invalid payload: Malformed JSON")
      return new Response(JSON.stringify({ error: 'Bad Request' }), { status: 400, headers: corsHeaders })
    }

    const { email, secret } = body

    if (!secret || !secureCompare(String(secret), DEV_SECRET)) {
      console.warn("[DevGrant] Unauthorized access attempt")
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: corsHeaders })
    }

    if (!email) {
      console.warn("[DevGrant] Missing email parameter")
      return new Response(JSON.stringify({ error: 'Email required' }), { status: 400, headers: corsHeaders })
    }

    const normalizedEmail = String(email).trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      console.warn(`[DevGrant] Invalid email format: ${normalizedEmail}`)
      return new Response(JSON.stringify({ error: 'Invalid email format' }), { status: 400, headers: corsHeaders })
    }

    const { error: dbError } = await supabase
      .from('authorized_users')
      .upsert({ email: normalizedEmail, created_at: new Date().toISOString() }, { onConflict: 'email' })

    if (dbError) {
      console.error(`[DevGrant] DB Error granting dev access to ${normalizedEmail}:`, dbError.message)
      throw new Error("Database upsert failed")
    }

    console.log(`[DevGrant] Successful access grant for ${normalizedEmail}`)

    return new Response(JSON.stringify({ success: true, grantedTo: normalizedEmail }), { 
      status: 200, 
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })

  } catch (err: any) {
    console.error("[DevGrant] Endpoint error:", err.message)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: corsHeaders })
  }
})

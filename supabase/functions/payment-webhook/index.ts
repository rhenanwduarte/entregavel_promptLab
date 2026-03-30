import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
)

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")

serve(async (req: Request) => {
  try {
    const { email, order_id, status } = await req.json()

    if (!email || status !== "paid") {
      return new Response(JSON.stringify({ error: "Invalid data" }), { status: 400 })
    }

    const normalizedEmail = email.trim().toLowerCase()

    // Save user
    const { error } = await supabase
      .from("authorized_users")
      .upsert({ email: normalizedEmail }, { onConflict: "email" })

    if (error) throw error

    // Send email via Resend
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "PromptLab <onboarding@resend.dev>",
        to: [normalizedEmail],
        subject: "Your PromptLab Access is Ready 🚀",
        html: `
          <div style="font-family: Arial; max-width: 500px; margin: auto;">
            <h2>Your access is ready</h2>
            <p>You can now access your PromptLab dashboard.</p>

            <a href="https://app.promptlabpack.pro" 
               style="display:inline-block;padding:12px 20px;background:#6d28d9;color:#fff;text-decoration:none;border-radius:8px;">
               Access PromptLab
            </a>

            <p style="margin-top:20px;">
              Login is simple:<br/>
              Just use the same email you used during purchase.
            </p>

            <p style="font-size:12px;color:#666;">
              No password required.
            </p>
          </div>
        `
      })
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})

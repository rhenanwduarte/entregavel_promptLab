import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

// ─── Supabase client (service role — bypasses RLS) ───────────────────────────
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
)

// ─── Hotmart events we process ────────────────────────────────────────────────
const APPROVED_EVENTS = new Set([
  "PURCHASE_APPROVED",
  "PURCHASE_COMPLETE",
])

// ─── CORS headers ─────────────────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-hotmart-hottok",
  "Content-Type": "application/json",
}

// ─── Helper: JSON response ────────────────────────────────────────────────────
function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: corsHeaders })
}

// ─── Helper: update an existing log row result (best-effort, never throws) ────
async function updateLog(
  logId: string,
  processing_result: "success" | "ignored" | "error" | "bad_request",
  error_message: string | null = null
) {
  try {
    const { error } = await supabase
      .from("webhook_events_log")
      .update({ processing_result, error_message })
      .eq("id", logId)

    if (error) {
      console.warn("[payment-webhook][log] updateLog failed:", error.message)
    }
  } catch (err: unknown) {
    console.warn(
      "[payment-webhook][log] updateLog unexpected error:",
      err instanceof Error ? err.message : String(err)
    )
  }
}

// ─── Main handler ─────────────────────────────────────────────────────────────
serve(async (req: Request) => {
  const requestTimestamp = new Date().toISOString()

  // Pre-flight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  // ── STEP 1: Parse body (always, even if malformed) ───────────────────────────
  let rawPayload: unknown = null
  let parseError: string | null = null

  try {
    rawPayload = await req.json()
  } catch (err: unknown) {
    parseError = err instanceof Error ? err.message : "JSON parse failed"
  }

  // ── STEP 2: Extract fields best-effort (may all be null) ─────────────────────
  const payload = rawPayload as Record<string, unknown> | null
  const event = (payload?.event as string | undefined) ?? null
  const data = payload?.data as Record<string, unknown> | undefined
  const buyer = data?.buyer as Record<string, unknown> | undefined
  const purchase = data?.purchase as Record<string, unknown> | undefined
  const buyerEmail = (buyer?.email as string | undefined) ?? null
  const transaction = (purchase?.transaction as string | undefined) ?? null

  const hottokHeader =
    req.headers.get("X-Hotmart-Hottok") ??
    req.headers.get("x-hotmart-hottok") ??
    req.headers.get("X-HOTMART-HOTTOK") ??
    null

  // ── STEP 3: Console log — every incoming request ──────────────────────────────
  console.log(
    "[payment-webhook][INCOMING]",
    JSON.stringify({
      timestamp: requestTimestamp,
      event,
      buyer_email: buyerEmail,
      transaction,
      hottok_header_present: hottokHeader !== null,
      parse_error: parseError,
    })
  )

  // ── STEP 4: GUARANTEED EARLY INSERT into webhook_events_log ──────────────────
  //
  // This insert happens BEFORE any business logic. processing_result starts as
  // 'received'. We update it to the final result once we know the outcome.
  // Even if everything below crashes, this row will exist in the table.
  //
  let logId: string | null = null

  try {
    const { data: inserted, error: insertError } = await supabase
      .from("webhook_events_log")
      .insert({
        event_name: event,
        buyer_email: buyerEmail,
        transaction: transaction,
        source: "hotmart",
        raw_payload: rawPayload ?? null,
        processing_result: "received",   // will be updated after business logic
        error_message: parseError,       // capture parse error immediately if any
        received_at: requestTimestamp,
      })
      .select("id")
      .single()

    if (insertError) {
      console.error(
        "[payment-webhook][log] EARLY INSERT FAILED:",
        insertError.message,
        "| code:", insertError.code
      )
    } else {
      logId = inserted?.id ?? null
      console.log(`[payment-webhook][log] Early insert OK — log id: ${logId}`)
    }
  } catch (err: unknown) {
    console.error(
      "[payment-webhook][log] EARLY INSERT THREW:",
      err instanceof Error ? err.message : String(err)
    )
  }

  // ── STEP 5: Handle parse failure ─────────────────────────────────────────────
  if (parseError || rawPayload === null) {
    const msg = `Bad Request: could not parse JSON body — ${parseError}`
    console.error("[payment-webhook]", msg)
    if (logId) await updateLog(logId, "bad_request", msg)
    return json({ error: msg }, 400)
  }

  try {
    // ── STEP 6: HOTTOK validation ─────────────────────────────────────────────
    //
    // ── TEMPORARY DIAGNOSTIC BYPASS ───────────────────────────────────────────
    // Skipping token comparison to verify end-to-end flow first.
    // TODO: Uncomment the rejection block once flow is confirmed working.
    //
    const expectedHottok = Deno.env.get("HOTMART_HOTTOK")
    if (expectedHottok) {
      const receivedHottok = hottokHeader ?? ""
      const isMatch = receivedHottok === expectedHottok

      console.log(
        "[payment-webhook][HOTTOK]",
        JSON.stringify({
          secretExists: true,
          expectedLength: expectedHottok.length,
          receivedLength: receivedHottok.length,
          headerPresent: hottokHeader !== null,
          isMatch,
        })
      )

      // if (!isMatch) {
      //   const msg = "Unauthorized: HOTTOK mismatch"
      //   if (logId) await updateLog(logId, "error", msg)
      //   return json({ error: "Unauthorized" }, 401)
      // }

      console.warn("[payment-webhook][BYPASS] HOTTOK enforcement disabled — diagnostic mode")
    } else {
      console.warn("[payment-webhook] HOTMART_HOTTOK not set — skipping validation")
    }

    // ── STEP 7: Ignore non-purchase events ────────────────────────────────────
    if (!event || !APPROVED_EVENTS.has(event)) {
      const msg = `Event ignored: ${event ?? "(none)"}`
      console.log("[payment-webhook]", msg)
      if (logId) await updateLog(logId, "ignored", null)
      return json({ ignored: true, event })
    }

    // ── STEP 8: Validate buyer email ──────────────────────────────────────────
    if (!buyerEmail || !buyerEmail.includes("@")) {
      const msg = "Bad Request: missing or invalid buyer email"
      console.error("[payment-webhook]", msg)
      if (logId) await updateLog(logId, "bad_request", msg)
      return json({ error: msg }, 400)
    }

    const email = buyerEmail.trim().toLowerCase()

    console.log(
      `[payment-webhook] Processing: email="${email}" transaction="${transaction}" event="${event}"`
    )

    // ── STEP 9: Upsert into authorized_users ──────────────────────────────────
    const { error: dbError } = await supabase
      .from("authorized_users")
      .upsert(
        {
          email,
          source: "hotmart",
          hotmart_transaction: transaction,
          created_at: requestTimestamp,
        },
        { onConflict: "email" }
      )

    if (dbError) {
      const msg = `authorized_users upsert failed: ${dbError.message}`
      console.error("[payment-webhook]", msg)
      if (logId) await updateLog(logId, "error", msg)
      // 500 → Hotmart will retry automatically
      return json({ error: "Database error", detail: dbError.message }, 500)
    }

    // ── STEP 10: Success ──────────────────────────────────────────────────────
    console.log(`[payment-webhook] ✅ Access granted to: ${email}`)
    if (logId) await updateLog(logId, "success", null)
    return json({ success: true, email })

  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown internal error"
    console.error("[payment-webhook] Unhandled exception:", msg)
    if (logId) await updateLog(logId, "error", `Unhandled exception: ${msg}`)
    return json({ error: "Internal Server Error", detail: msg }, 500)
  }
})

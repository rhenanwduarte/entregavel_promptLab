/**
 * PromptLab — Access Control Module
 * ─────────────────────────────────
 * Centralises all session-related logic for the premium access gate.
 *
 * TEMPORARY IMPLEMENTATION:
 * This is a frontend-only solution while the payment provider integration
 * is pending. When real payment validation is available, replace:
 *   - grantAccess()  →  call after webhook / token confirmation
 *   - hasValidAccess() →  validate against server-side token
 *   - TEMP_ACCESS_CODE  →  remove entirely
 *
 * The rest of the API surface (hasValidAccess, isAccessExpired, etc.) can
 * remain as-is and be backed by a real validation call.
 */

// ─── Constants ───────────────────────────────────────────────────────────────

/** localStorage key for the access session object. */
export const ACCESS_SESSION_KEY = "promptlab_access";

/** Session lifetime in milliseconds. Default: 12 hours. Easy to edit. */
export const ACCESS_DURATION_MS = 12 * 60 * 60 * 1000; // 12 h

/**
 * TEMP: Temporary access code for manual grant flow.
 * Remove when real payment provider goes live.
 */
export const TEMP_ACCESS_CODE = "PROMPTLAB2024";

// ─── Session Shape ────────────────────────────────────────────────────────────
/**
 * @typedef {Object} AccessSession
 * @property {"granted"} status
 * @property {string}    source    – e.g. "checkout" | "manual" | "token"
 * @property {number}    issuedAt  – Unix timestamp (ms)
 * @property {number}    expiresAt – Unix timestamp (ms)
 */

// ─── Core API ─────────────────────────────────────────────────────────────────

/**
 * Write a new access session to localStorage.
 * @param {string} [source="checkout"] – Origin of the access grant.
 * @returns {AccessSession} The session that was written.
 */
export function grantAccess(source = "checkout") {
  const now = Date.now();
  const session = {
    status: "granted",
    source,
    issuedAt: now,
    expiresAt: now + ACCESS_DURATION_MS,
  };
  localStorage.setItem(ACCESS_SESSION_KEY, JSON.stringify(session));
  return session;
}

/**
 * Remove the access session from localStorage.
 */
export function revokeAccess() {
  localStorage.removeItem(ACCESS_SESSION_KEY);
}

/**
 * Return the raw session object, or null if none exists.
 * @returns {AccessSession|null}
 */
export function getAccessSession() {
  try {
    const raw = localStorage.getItem(ACCESS_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Returns true if a valid, non-expired session exists.
 * This is the primary check used by ProtectedRoute and the Access page.
 * @returns {boolean}
 */
export function hasValidAccess() {
  const session = getAccessSession();
  if (!session || session.status !== "granted") return false;
  return Date.now() < session.expiresAt;
}

/**
 * Returns true if a session exists but has expired.
 * Used to differentiate "never had access" from "had access, it lapsed".
 * @returns {boolean}
 */
export function isAccessExpired() {
  const session = getAccessSession();
  if (!session || session.status !== "granted") return false;
  return Date.now() >= session.expiresAt;
}

// ─── TEMP: Manual access code validation ─────────────────────────────────────
// TEMP: Replace this entire function with real token / webhook validation later.

/**
 * Validates a user-supplied code against the temporary access code constant.
 * If valid, calls grantAccess("manual") and returns true.
 * @param {string} code
 * @returns {boolean}
 */
export function redeemTemporaryCode(code) {
  if (typeof code !== "string") return false;
  if (code.trim().toUpperCase() === TEMP_ACCESS_CODE) {
    grantAccess("manual");
    return true;
  }
  return false;
}

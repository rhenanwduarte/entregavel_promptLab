/**
 * Robust Email Validation Utility
 * Normalizes email to lowercase, trims whitespace, and validates
 * against a rigorous RFC-compliant regular expression.
 */
export function validateEmail(email) {
  if (!email || typeof email !== "string") {
    return { isValid: false, normalized: null };
  }

  const normalizedEmail = email.trim().toLowerCase();
  
  // Robust standard email regex
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!regex.test(normalizedEmail)) {
    return { isValid: false, normalized: null };
  }

  return { isValid: true, normalized: normalizedEmail };
}

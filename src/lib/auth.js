import { supabase } from "./supabase";

/**
 * Checks if an authenticated user's email exists in the authorized_users table.
 * This forms the second layer of security (Authorization), decoupled from Authentication.
 * 
 * @param {string} email - The user email to verify
 * @returns {Promise<boolean>} - True if authorized, false otherwise.
 */
export async function checkUserAuthorization(email) {
  try {
    const { data, error } = await supabase
      .from("authorized_users")
      .select("id")
      .eq("email", email)
      .single();

    // If there's an error (like no rows found) or no data, they are not authorized.
    if (error || !data) {
      return false;
    }
    
    return true;
  } catch (err) {
    // Fail silently in production, returning false without exposing stack info
    console.warn("Authorization verification process interrupted.");
    return false;
  }
}

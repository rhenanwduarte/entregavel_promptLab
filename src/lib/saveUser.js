import { supabase } from './supabase'

/**
 * Saves a user to the 'users' table in Supabase.
 * Performs a check to avoid duplicate entries for the same email.
 * 
 * @param {string} identifier - The user's email or identifier
 */
export async function saveUserToSupabase(identifier) {
  if (!identifier) return { success: false, error: 'No identifier provided' }

  try {
    // 1. Check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('users')
      .select('email')
      .eq('email', identifier)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 means no rows found, which is what we want for a new insert
      throw checkError
    }

    if (existingUser) {
      return { success: true, message: 'User already exists' }
    }

    // 2. Perform insert
    const { error: insertError } = await supabase
      .from('users')
      .insert([{ 
        email: identifier,
        created_at: new Date().toISOString()
      }])

    if (insertError) throw insertError

    console.log("✅ User saved to Supabase")
    return { success: true, message: 'User saved to Supabase' }

  } catch (error) {
    console.error("❌ Supabase save error:", error)
    return { success: false, error: error.message }
  }
}

import { supabase } from './supabase'

/**
 * Validates the Supabase connection by performing a limit-1 select on the 'users' table.
 */
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .limit(1)

    if (error) {
      return { 
        success: false, 
        error 
      }
    }

    return { 
      success: true, 
      data 
    }
  } catch (err) {
    return { 
      success: false, 
      error: err 
    }
  }
}

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key is missing in environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export async function checkUserAuthorization(email) {
  const normalizedEmail = email.trim().toLowerCase()

  const { data, error } = await supabase
    .from('authorized_users')
    .select('email')
    .ilike('email', normalizedEmail)
    .maybeSingle()

  if (error) {
    console.error(error)
    return false
  }

  return !!data
}
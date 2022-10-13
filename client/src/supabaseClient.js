import { createClient } from '@supabase/supabase-js'

const supabaseUrl = `https://ccxtctifjdtsfzjndgve.supabase.co`
const supabaseAnonKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjeHRjdGlmamR0c2Z6am5kZ3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2ODc4NDIsImV4cCI6MTk4MTI2Mzg0Mn0.etku2gDb8quBj34B8JZntqDs9dlWmIEqvET5RkVg_6g`

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
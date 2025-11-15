import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://giffjfgbljcwpkopcvan.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZmZqZmdibGpjd3Brb3BjdmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMDg5OTMsImV4cCI6MjA3ODc4NDk5M30.HXFzlJb_JRaogsjPSwhExGvKWUyia2cc40mNBEp5S6s'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


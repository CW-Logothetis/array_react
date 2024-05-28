import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
// Supabase: This key is safe to use in a browser if you have enabled Row Level Security for your tables
//           and configured policies.
// TODO:     research adding RLS for magic link table. Docs and guides silent on issue,

export const supabase = createClient(supabaseUrl, supabaseKey);
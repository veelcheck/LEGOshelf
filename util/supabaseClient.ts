import { createClient } from "@supabase/supabase-js";
import "server-only"; // Ensures it never runs on the client

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! as string;
const supabaseKey = process.env.NEXT_SUPABASE_ANON_KEY! as string;
export const supabase = createClient(supabaseUrl, supabaseKey);

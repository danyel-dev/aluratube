import { createClient } from "@supabase/supabase-js";


const PROJECT_URL = 'https://vrpugbfyyevfhxzgpsgs.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZycHVnYmZ5eWV2Zmh4emdwc2dzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgzMTEsImV4cCI6MTk4Mzc1NDMxMX0.Y0bg9j9_9euYxitixcYuzpw4EmRNjW7sjGFUbj83Ksk'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}

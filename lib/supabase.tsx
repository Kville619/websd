// lib/supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://duslyfgmfacnizupkxve.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1c2x5ZmdtZmFjbml6dXBreHZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0MDY2ODUsImV4cCI6MjAxNDk4MjY4NX0.ur0LxyJN3AIj0GUQZakopt7Dn4v7X8IUqyf_sLL8A4I';
export const supabase = createClient(supabaseUrl, supabaseKey);

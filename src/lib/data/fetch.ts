import { createClient } from '@supabase/supabase-js';
import { cache } from 'react';
import { CACHE_TAGS, CACHE_REVALIDATE, createCacheKey } from '@/lib/cache/config';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to fetch with error handling and fallback
async function fetchWithFallback<T>(
  queryFn: () => Promise<{ data: T | null; error: any }>,
  fallback: T
): Promise<T> {
  try {
    const { data, error } = await queryFn();
    if (error) {
      console.error('Supabase query error:', error);
      return fallback;
    }
    return data ?? fallback;
  } catch (error) {
    console.error('Fetch error:', error);
    return fallback;
  }
}

// Partners - Static content (rarely changes)
export const getPartners = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('partners')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// Metrics - Dynamic content (changes frequently)
export const getMetrics = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('metrics')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// Solutions - Semi-static content (changes occasionally)
export const getSolutions = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('home_solutions')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// Projects - Semi-static content (changes occasionally)
export const getProjects = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false }),
    []
  );
});

// Single project - Semi-static content
export const getProjectById = cache(async (id: string) => {
  return fetchWithFallback(
    () => supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single(),
    null
  );
});

// Innovation Hub - Semi-static content
export const getInnovationHub = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('innovation_hub')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// Testimonials - Dynamic content (changes frequently)
export const getTestimonials = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false }),
    []
  );
});

// Team Members - Static content (rarely changes)
export const getTeamMembers = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// Courses - Semi-static content
export const getCourses = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// Programs - Semi-static content
export const getPrograms = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// ERP Features - Static content
export const getErpFeatures = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('erp_features')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

// Logic Engines - Static content
export const getLogicEngines = cache(async () => {
  return fetchWithFallback(
    () => supabase
      .from('logic_engines')
      .select('*')
      .order('created_at', { ascending: true }),
    []
  );
});

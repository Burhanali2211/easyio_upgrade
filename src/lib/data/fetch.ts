import { createClient } from '@supabase/supabase-js';
import { cache } from 'react';
import { CACHE_TAGS, CACHE_REVALIDATE } from '@/lib/cache/config';

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
    async () => {
      const result = await supabase
        .from('partners')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Metrics - Dynamic content (changes frequently)
export const getMetrics = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('metrics')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Solutions - Semi-static content (changes occasionally)
export const getSolutions = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('home_solutions')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Projects - Semi-static content (changes occasionally)
export const getProjects = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Single project - Semi-static content
export const getProjectById = cache(async (id: string) => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();
      return { data: result.data, error: result.error };
    },
    null
  );
});

// Innovation Hub - Semi-static content
export const getInnovationHub = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('innovation_hub')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Testimonials - Dynamic content (changes frequently)
export const getTestimonials = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Team Members - Static content (rarely changes)
export const getTeamMembers = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Courses - Semi-static content
export const getCourses = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Programs - Semi-static content
export const getPrograms = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('programs')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// ERP Features - Static content
export const getErpFeatures = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('erp_features')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

// Logic Engines - Static content
export const getLogicEngines = cache(async () => {
  return fetchWithFallback(
    async () => {
      const result = await supabase
        .from('logic_engines')
        .select('*')
        .order('created_at', { ascending: true });
      return { data: result.data, error: result.error };
    },
    []
  );
});

import { createClient } from '@supabase/supabase-js';
import { unstable_cache } from 'next/cache';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export const getPartners = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('partners')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['partners'],
  { revalidate: 3600 }
);

export const getMetrics = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('metrics')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['metrics'],
  { revalidate: 3600 }
);

export const getSolutions = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('home_solutions')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['solutions'],
  { revalidate: 3600 }
);

export const getProjects = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    return data || [];
  },
  ['projects'],
  { revalidate: 3600 }
);

export const getInnovationHub = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('innovation_hub')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['innovation_hub'],
  { revalidate: 3600 }
);

export const getTestimonials = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });
    return data || [];
  },
  ['testimonials'],
  { revalidate: 3600 }
);

export const getTeamMembers = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['team_members'],
  { revalidate: 3600 }
);

export const getCourses = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['courses'],
  { revalidate: 3600 }
);

export const getPrograms = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('programs')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['programs'],
  { revalidate: 3600 }
);

export const getErpFeatures = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('erp_features')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['erp_features'],
  { revalidate: 3600 }
);

export const getLogicEngines = unstable_cache(
  async () => {
    const { data } = await supabase
      .from('logic_engines')
      .select('*')
      .order('created_at', { ascending: true });
    return data || [];
  },
  ['logic_engines'],
  { revalidate: 3600 }
);

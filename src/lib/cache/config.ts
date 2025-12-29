/**
 * Centralized Cache Configuration
 * Provides consistent caching strategies across the application
 */

export const CACHE_TAGS = {
  // Data categories for selective invalidation
  PARTNERS: 'partners',
  METRICS: 'metrics',
  SOLUTIONS: 'solutions',
  PROJECTS: 'projects',
  PROJECT: 'project', // Single project
  INNOVATION_HUB: 'innovation-hub',
  TESTIMONIALS: 'testimonials',
  TEAM_MEMBERS: 'team-members',
  COURSES: 'courses',
  PROGRAMS: 'programs',
  ERP_FEATURES: 'erp-features',
  LOGIC_ENGINES: 'logic-engines',
  WEBSITE_SETTINGS: 'website-settings',
} as const;

export const CACHE_REVALIDATE = {
  // Static content - rarely changes
  STATIC: 86400, // 24 hours
  // Semi-static content - changes occasionally
  SEMI_STATIC: 3600, // 1 hour
  // Dynamic content - changes frequently
  DYNAMIC: 300, // 5 minutes
  // Real-time content - changes very frequently
  REALTIME: 60, // 1 minute
  // Never revalidate (until manual invalidation)
  NEVER: false,
} as const;

export const CACHE_STRATEGIES = {
  // For content that rarely changes (partners, team members)
  STATIC: {
    revalidate: CACHE_REVALIDATE.STATIC,
    tags: [] as string[],
  },
  // For content that changes occasionally (projects, solutions)
  SEMI_STATIC: {
    revalidate: CACHE_REVALIDATE.SEMI_STATIC,
    tags: [] as string[],
  },
  // For content that changes frequently (metrics, testimonials)
  DYNAMIC: {
    revalidate: CACHE_REVALIDATE.DYNAMIC,
    tags: [] as string[],
  },
  // For real-time data
  REALTIME: {
    revalidate: CACHE_REVALIDATE.REALTIME,
    tags: [] as string[],
  },
} as const;

// HTTP Cache-Control headers
export const HTTP_CACHE_HEADERS = {
  // Public cache for static assets
  PUBLIC_STATIC: {
    'Cache-Control': 'public, max-age=31536000, immutable',
  },
  // Public cache with revalidation
  PUBLIC_REVALIDATE: {
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  },
  // Private cache for user-specific data
  PRIVATE: {
    'Cache-Control': 'private, max-age=300, stale-while-revalidate=600',
  },
  // No cache for dynamic API responses
  NO_CACHE: {
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  },
  // Cache with revalidation for API data
  API_CACHE: {
    'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
  },
} as const;


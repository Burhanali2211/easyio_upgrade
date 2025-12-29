/**
 * Cache Utilities
 * Helper functions for cache management
 */

import { revalidateTag, revalidatePath } from 'next/cache';

/**
 * Invalidate cache by tag
 */
export async function invalidateCacheByTag(tag: string) {
  try {
    revalidateTag(tag);
    return { success: true };
  } catch (error) {
    console.error(`Failed to invalidate cache tag: ${tag}`, error);
    return { success: false, error };
  }
}

/**
 * Invalidate cache by path
 */
export async function invalidateCacheByPath(path: string) {
  try {
    revalidatePath(path);
    return { success: true };
  } catch (error) {
    console.error(`Failed to invalidate cache path: ${path}`, error);
    return { success: false, error };
  }
}

/**
 * Invalidate multiple cache tags
 */
export async function invalidateMultipleTags(tags: string[]) {
  const results = await Promise.allSettled(
    tags.map(tag => invalidateCacheByTag(tag))
  );
  
  const failed = results.filter(r => r.status === 'rejected');
  if (failed.length > 0) {
    console.error(`Failed to invalidate ${failed.length} cache tags`);
  }
  
  return {
    success: failed.length === 0,
    failed: failed.length,
  };
}

/**
 * Create cache key with versioning
 */
export function createCacheKey(prefix: string, version: string = 'v1', ...parts: (string | number)[]): string[] {
  return [`${prefix}:${version}`, ...parts.map(String)];
}

/**
 * Get cache metadata for debugging
 */
export function getCacheMetadata() {
  return {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  };
}


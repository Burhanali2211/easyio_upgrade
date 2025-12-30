"use client";

import { useState, useEffect, useRef } from 'react';

interface SystemSettings {
  [key: string]: string;
}

// Global cache to prevent multiple simultaneous requests
let settingsCache: SystemSettings | null = null;
let fetchPromise: Promise<SystemSettings> | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

async function fetchSystemSettings(): Promise<SystemSettings> {
  // If there's already a fetch in progress, return that promise
  if (fetchPromise) {
    return fetchPromise;
  }

  // If cache is still valid, return cached data
  const now = Date.now();
  if (settingsCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return settingsCache;
  }

  // Create new fetch promise
  fetchPromise = (async () => {
    try {
      const response = await fetch('/api/system/settings', {
        // Add cache headers to prevent unnecessary requests
        cache: 'force-cache',
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch settings: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.data && Array.isArray(result.data)) {
        const settingsMap: SystemSettings = {};
        result.data.forEach((setting: { setting_key: string; setting_value: string }) => {
          settingsMap[setting.setting_key] = setting.setting_value || '';
        });
        
        // Update cache
        settingsCache = settingsMap;
        cacheTimestamp = now;
        
        return settingsMap;
      }
      
      return {};
    } catch (error) {
      // Silent error - return cached data if available
      if (settingsCache) {
        return settingsCache;
      }
      return {};
    } finally {
      // Clear the promise so next request can start fresh
      fetchPromise = null;
    }
  })();

  return fetchPromise;
}

export function useSystemSettings() {
  const [settings, setSettings] = useState<SystemSettings>(settingsCache || {});
  const [loading, setLoading] = useState(!settingsCache);
  const [error, setError] = useState<Error | null>(null);
  const hasFetched = useRef(false);

  useEffect(() => {
    // Only fetch once per component mount
    if (hasFetched.current) {
      return;
    }

    // If we have cached data, use it immediately
    if (settingsCache) {
      setSettings(settingsCache);
      setLoading(false);
      hasFetched.current = true;
      return;
    }

    // Fetch settings
    setLoading(true);
    fetchSystemSettings()
      .then((data) => {
        setSettings(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        // Silent error handling
      })
      .finally(() => {
        setLoading(false);
        hasFetched.current = true;
      });
  }, []);

  return { settings, loading, error };
}

// Function to invalidate cache (useful after updates)
export function invalidateSystemSettingsCache() {
  settingsCache = null;
  cacheTimestamp = 0;
  fetchPromise = null;
}


"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { LogicEngine } from "../types";

export function useEngines() {
  const [engines, setEngines] = useState<LogicEngine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEngines = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // First try with priority ordering (if column exists)
      let { data, error: fetchError } = await supabase
        .from('logic_engines')
        .select('*')
        .order('priority', { ascending: false, nullsFirst: false })
        .order('created_at', { ascending: false });
      
      // If priority column doesn't exist, fall back to just created_at
      if (fetchError && fetchError.code === '42703') {
        const retry = await supabase
          .from('logic_engines')
          .select('*')
          .order('created_at', { ascending: false });
        data = retry.data;
        fetchError = retry.error;
      }
      
      if (fetchError) {
        console.error('Error fetching engines:', fetchError);
        setError('Failed to load engines');
        setEngines([]);
      } else {
        setEngines(data || []);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred');
      setEngines([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEngines();
  }, [fetchEngines]);

  return { engines, loading, error, refetch: fetchEngines };
}

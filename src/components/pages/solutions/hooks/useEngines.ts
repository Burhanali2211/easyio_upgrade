"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { LogicEngine } from "../types";

export function useEngines() {
  const [engines, setEngines] = useState<LogicEngine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEngines() {
      try {
        const { data, error: fetchError } = await supabase
          .from('logic_engines')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (fetchError) {
          console.error('Error fetching engines:', fetchError);
          setError('Failed to load engines');
        } else {
          setEngines(data || []);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }
    fetchEngines();
  }, []);

  return { engines, loading, error };
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { TeamMember } from "../types";

export function useTeamData() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setTeam(data);
      setLoading(false);
    }
    fetchTeam();
  }, []);

  return { team, loading };
}

"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { NetworkStats } from "../types";

export function useNetworkStats() {
  const [networkStats, setNetworkStats] = useState<NetworkStats>({
    totalNodes: 14000,
    recentAvatars: [1, 2, 3, 4],
    isLoading: true,
  });

  useEffect(() => {
    const fetchNetworkStats = async () => {
      try {
        const { count: contactCount } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true });

        const { data: teamMembers } = await supabase
          .from('team_members')
          .select('id, image, name')
          .limit(4)
          .order('created_at', { ascending: false });

        const { count: testimonialCount } = await supabase
          .from('testimonials')
          .select('*', { count: 'exact', head: true });

        const totalNodes = 14000 + (contactCount || 0) + (testimonialCount || 0);

        let avatars: NetworkStats['recentAvatars'] = [1, 2, 3, 4];
        if (teamMembers && teamMembers.length > 0) {
          avatars = teamMembers.map((member, idx) => ({
            id: member.id,
            image: member.image,
            name: member.name,
            seed: idx + 1,
          }));
        } else {
          const { data: recentContacts } = await supabase
            .from('contact_submissions')
            .select('id, name, email')
            .limit(4)
            .order('created_at', { ascending: false });

          if (recentContacts && recentContacts.length > 0) {
            avatars = recentContacts.map((contact, idx) => ({
              id: contact.id,
              image: null,
              name: contact.name,
              email: contact.email,
              seed: idx + 1,
            }));
          }
        }

        setNetworkStats({
          totalNodes,
          recentAvatars: avatars,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error fetching network stats:', error);
        setNetworkStats({
          totalNodes: 14000,
          recentAvatars: [1, 2, 3, 4],
          isLoading: false,
        });
      }
    };

    fetchNetworkStats();
    const interval = setInterval(fetchNetworkStats, 30000);
    return () => clearInterval(interval);
  }, []);

  return { networkStats };
}

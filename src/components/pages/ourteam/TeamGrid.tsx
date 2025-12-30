"use client";

import { Loader2 } from "lucide-react";
import { TeamMember } from "./types";
import TeamMemberCard from "./TeamMemberCard";

interface TeamGridProps {
  team: TeamMember[];
  loading: boolean;
}

export default function TeamGrid({ team, loading }: TeamGridProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="text-primary/50" size={20} />
          </div>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground dark:text-white/30 uppercase tracking-widest">Loading team...</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {team.map((member, index) => (
        <TeamMemberCard key={member.id} member={member} index={index} />
      ))}
    </div>
  );
}

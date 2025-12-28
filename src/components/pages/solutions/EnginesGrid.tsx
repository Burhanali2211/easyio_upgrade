"use client";

import { Loader2, Terminal, Database } from "lucide-react";
import { LogicEngine } from "./types";
import EngineCard from "./EngineCard";

interface EnginesGridProps {
  engines: LogicEngine[];
  loading: boolean;
  error: string | null;
}

export default function EnginesGrid({ engines, loading, error }: EnginesGridProps) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="text-primary/50" size={20} />
          </div>
        </div>
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading engines...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <Terminal size={24} className="text-red-500" strokeWidth={1.5} />
        </div>
        <p className="text-red-400 font-mono text-sm uppercase tracking-widest">{error}</p>
      </div>
    );
  }

  if (engines.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Database size={24} className="text-white/30" strokeWidth={1.5} />
        </div>
        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">No engines available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {engines.map((engine, index) => (
        <EngineCard key={engine.id} engine={engine} index={index} />
      ))}
    </div>
  );
}

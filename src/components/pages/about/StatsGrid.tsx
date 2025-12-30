"use client";

import { motion } from "framer-motion";
import { Stat } from "./types";

interface StatsGridProps {
  stats: Stat[];
  hoveredStat: string | null;
  setHoveredStat: (label: string | null) => void;
}

const colorClasses = {
  primary: "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20",
  accent: "bg-accent/10 border-accent/20 text-accent hover:bg-accent/20",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-500 hover:bg-amber-500/20",
};

export default function StatsGrid({ stats, hoveredStat, setHoveredStat }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-24 lg:mb-32">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          onMouseEnter={() => setHoveredStat(stat.label)}
          onMouseLeave={() => setHoveredStat(null)}
          className="group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-[2rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 hover:border-primary/30 transition-all text-center overflow-hidden"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[stat.color]} transition-opacity duration-500 ${hoveredStat === stat.label ? 'opacity-100' : 'opacity-0'}`} />
          
          <div className="relative z-10">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${colorClasses[stat.color]} flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
              {stat.icon}
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground dark:text-white mb-1 sm:mb-2 group-hover:scale-105 transition-transform">{stat.value}</h3>
            <p className="text-[8px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono font-bold mb-1">{stat.label}</p>
            <p className="text-[8px] sm:text-[10px] text-muted-foreground dark:text-white/40 opacity-0 group-hover:opacity-100 transition-opacity mt-2">{stat.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

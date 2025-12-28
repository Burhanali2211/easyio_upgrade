"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, BrainCircuit } from "lucide-react";
import { LogicEngine } from "./types";
import { IconMap, IconColorMap } from "./constants";

interface EngineCardProps {
  engine: LogicEngine;
  index: number;
}

const EngineCard = memo(({ engine, index }: EngineCardProps) => {
  const IconComponent = IconMap[engine.icon_type] || BrainCircuit;
  const iconColor = IconColorMap[engine.icon_type] || 'text-primary/30 group-hover:text-primary/70';

  return (
    <motion.div
      key={engine.id}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      <div className="relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-[2rem] bg-white/[0.04] border border-white/10 hover:border-primary/40 transition-all flex flex-col h-full overflow-hidden">
        <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 opacity-[0.05] group-hover:opacity-[0.15] transition-all duration-500 pointer-events-none -z-0 ${iconColor}`}>
          <IconComponent className="w-full h-full" strokeWidth={1} />
        </div>
        
        <div className="relative z-10 w-16 h-12 sm:w-20 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
          <IconComponent size={20} className={`sm:w-6 sm:h-6 ${iconColor}`} strokeWidth={1.5} />
        </div>
        
        <h3 className="relative z-10 text-lg sm:text-xl font-display font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
          {engine.title}
        </h3>
        
        <p className="relative z-10 text-sm sm:text-base text-white/70 leading-relaxed mb-6 sm:mb-8 flex-grow">
          {engine.description}
        </p>
        
        <Link 
          href={`/contact?type=enterprise&engine=${encodeURIComponent(engine.title)}`}
          className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-white/60 group-hover:text-primary transition-colors text-[10px] sm:text-xs uppercase tracking-widest font-mono font-bold mt-auto group/link"
        >
          Access Engine Specs
          <ChevronRight size={12} className="sm:w-[14px] sm:h-[14px] group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
});

EngineCard.displayName = 'EngineCard';

export default EngineCard;

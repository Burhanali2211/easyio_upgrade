"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, BrainCircuit, Zap, TrendingUp, Layers, CheckCircle2 } from "lucide-react";
import { LogicEngine } from "./types";
import { IconMap, IconColorMap } from "./constants";

interface EngineCardProps {
  engine: LogicEngine;
  index: number;
  size?: 'small' | 'medium' | 'large';
}

const ComplexityBadge = memo(({ level }: { level?: string | null }) => {
  if (!level) return null;
  
  const config = {
    low: { label: 'Entry', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
    medium: { label: 'Standard', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
    high: { label: 'Advanced', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
    enterprise: { label: 'Enterprise', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  };

  const style = config[level as keyof typeof config] || config.medium;

  return (
    <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${style.color}`}>
      {style.label}
    </span>
  );
});

ComplexityBadge.displayName = 'ComplexityBadge';

const EngineCard = memo(({ engine, index, size = 'medium' }: EngineCardProps) => {
  const IconComponent = IconMap[engine.icon_type] || BrainCircuit;
  const iconColor = IconColorMap[engine.icon_type] || 'text-primary/30 group-hover:text-primary/70';
  
  const isLarge = size === 'large';
  const isSmall = size === 'small';
  const isFeatured = (engine.priority || 0) > 0;

  // Determine card size based on priority
  const cardSize = isFeatured && !isSmall ? 'large' : size;

  return (
    <motion.div
      key={engine.id}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative flex flex-col h-full"
    >
      <div className={`
        relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-[2rem] 
        bg-card dark:bg-white/[0.04] border border-border dark:border-white/10 
        hover:border-primary/40 dark:hover:bg-white/[0.06]
        transition-all duration-500 flex flex-col h-full overflow-hidden
        ${isFeatured ? 'ring-1 ring-primary/20' : ''}
      `}>
        {/* Background Icon */}
        <div className={`
          absolute top-2 right-2 sm:top-4 sm:right-4 
          opacity-[0.05] group-hover:opacity-[0.15] 
          transition-all duration-500 pointer-events-none -z-0 
          ${iconColor}
          ${cardSize === 'large' ? 'w-40 h-40 sm:w-48 sm:h-48' : 'w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36'}
        `}>
          <IconComponent className="w-full h-full" strokeWidth={1} />
        </div>

        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <Zap size={10} className="text-primary" strokeWidth={2.5} />
              <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider">
                Featured
              </span>
            </div>
          </div>
        )}

        {/* Header Section */}
        <div className="relative z-10 flex items-start justify-between mb-4 sm:mb-6">
          <div className={`
            rounded-xl sm:rounded-2xl bg-primary/20 
            flex items-center justify-center 
            group-hover:scale-110 transition-transform duration-300
            ${cardSize === 'large' ? 'w-20 h-16 sm:w-24 sm:h-20' : 'w-16 h-12 sm:w-20 sm:h-14'}
          `}>
            <IconComponent 
              size={cardSize === 'large' ? 28 : 20} 
              className={`sm:w-6 sm:h-6 ${iconColor}`} 
              strokeWidth={1.5} 
            />
          </div>
          
          <div className="flex flex-col items-end gap-2">
            {engine.category && (
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-muted-foreground dark:text-white/30 uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-muted dark:bg-white/[0.02] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border dark:border-white/5">
                {engine.category}
              </span>
            )}
            <ComplexityBadge level={engine.complexity_level} />
          </div>
        </div>

        {/* Title */}
        <h3 className={`
          relative z-10 font-display font-bold text-foreground dark:text-white mb-2 sm:mb-3 
          group-hover:text-primary transition-colors
          ${cardSize === 'large' ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-lg sm:text-xl'}
        `}>
          {engine.title}
        </h3>

        {/* Description */}
        <p className={`
          relative z-10 text-muted-foreground dark:text-white/70 leading-relaxed mb-4 sm:mb-6 flex-grow
          ${cardSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}
        `}>
          {engine.description}
        </p>

        {/* Use Case */}
        {engine.use_case && cardSize === 'large' && (
          <div className="relative z-10 mb-4 p-4 rounded-xl bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={14} className="text-primary/60" strokeWidth={1.5} />
              <span className="text-[10px] font-mono font-bold text-primary/60 uppercase tracking-wider">
                Use Case
              </span>
            </div>
            <p className="text-sm text-muted-foreground dark:text-white/60 leading-relaxed">{engine.use_case}</p>
          </div>
        )}

        {/* Features List */}
        {engine.features && engine.features.length > 0 && (
          <div className="relative z-10 mb-4 sm:mb-6">
            <div className="flex flex-wrap gap-2">
              {engine.features.slice(0, cardSize === 'large' ? 6 : 3).map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5"
                >
                  <CheckCircle2 size={10} className="text-primary/60" strokeWidth={2} />
                  <span className="text-[10px] font-mono text-muted-foreground dark:text-white/50">{feature}</span>
                </div>
              ))}
              {engine.features.length > (cardSize === 'large' ? 6 : 3) && (
                <div className="px-2.5 py-1 rounded-lg bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5">
                  <span className="text-[10px] font-mono text-muted-foreground dark:text-white/30">
                    +{engine.features.length - (cardSize === 'large' ? 6 : 3)} more
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CTA Link */}
        <Link 
          href={`/contact?type=enterprise&engine=${encodeURIComponent(engine.title)}`}
          className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-muted-foreground dark:text-white/60 group-hover:text-primary transition-colors text-[10px] sm:text-xs uppercase tracking-widest font-mono font-bold mt-auto group/link"
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

"use client";

import React, { memo, useState } from "react";
import { useRouter } from "next/navigation";
import { Database, Terminal, Cpu, Network, Zap, ChevronRight, ArrowRight } from "lucide-react";

interface HomeSolution {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_type: string;
  accent_color: string;
  features: string[];
}

const IconMap: Record<string, React.ElementType> = {
  database: Database,
  terminal: Terminal,
  network: Network,
  cpu: Cpu,
};

const IconColors: Record<string, { icon: string }> = {
  database: { icon: "text-cyan-400" },
  terminal: { icon: "text-emerald-400" },
  network: { icon: "text-violet-400" },
  cpu: { icon: "text-amber-400" },
};

interface SolutionsProps {
  solutions?: HomeSolution[];
}

interface SolutionCardProps {
  solution: HomeSolution;
  index: number;
  Icon: React.ElementType;
  colors: { icon: string };
}

const SolutionCard = memo(({ solution, index, Icon, colors }: SolutionCardProps) => {
  const router = useRouter();

  const handleInitializeSystem = () => {
    router.push(`/solutions#${solution.id}`);
  };

  return (
    <div
      style={{ animationDelay: `${index * 100}ms` }}
      className="group relative animate-fadeIn"
    >
      {/* Base layer with border hover effect only */}
      <div className="absolute inset-0 rounded-2xl sm:rounded-[2.5rem] border border-border dark:border-white/5 bg-card dark:bg-white/[0.01] group-hover:border-primary/30 dark:group-hover:border-white/25 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-500 ease-out" />
      
        <div className="relative p-6 sm:p-8 lg:p-12 flex flex-col h-full z-10">
          <div className={`absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] group-hover:scale-[3] transition-all duration-700 ease-out ${colors.icon} -rotate-12 group-hover:rotate-0 pointer-events-none`}>
            <Icon size={120} />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-6 sm:mb-12">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-[2rem] bg-muted dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${colors.icon}`} />
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold text-muted-foreground dark:text-white/30 uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-muted dark:bg-white/[0.02] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border dark:border-white/5 w-fit">
            {solution.category}
          </span>
        </div>
        
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground mb-3 sm:mb-6">
          {solution.title}
        </h3>
        
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-12 flex-grow leading-relaxed">
          {solution.description}
        </p>
        
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-12">
          {(solution.features || []).map((feature) => (
            <div key={feature} className="flex items-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-lg sm:rounded-xl bg-muted dark:bg-white/[0.02] border border-border dark:border-white/5 whitespace-nowrap">
              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary flex-shrink-0" />
              <span className="text-[8px] sm:text-[9px] font-bold text-foreground/70 dark:text-white/70 uppercase tracking-tight">{feature}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={handleInitializeSystem}
          className={`flex items-center gap-2 sm:gap-3 text-foreground font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-[11px] group/btn group-hover:${colors.icon} transition-colors cursor-pointer`}
          aria-label={`Initialize System - ${solution.title}`}
        >
          Initialize System 
          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-muted dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300`}>
            <ChevronRight size={12} className={`sm:w-[14px] sm:h-[14px] ${colors.icon} group-hover/btn:translate-x-1 transition-transform duration-300`} />
          </div>
        </button>
      </div>
    </div>
  );
});

SolutionCard.displayName = 'SolutionCard';

const SolutionsOverview = memo(({ solutions = [] }: SolutionsProps) => {
  const [showAll, setShowAll] = useState(false);
  
  // Show only 4 solutions initially for better UX
  const INITIAL_DISPLAY = 4;
  const displayedSolutions = showAll ? solutions : solutions.slice(0, INITIAL_DISPLAY);
  const hasMore = solutions.length > INITIAL_DISPLAY;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    // Smooth scroll to section after expanding
    if (!showAll) {
      setTimeout(() => {
        const element = document.querySelector('[data-section="solutions"]');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background dark:bg-[#020202] relative overflow-hidden z-10" data-section="solutions">
      <div className="container relative z-10">
        <div className="flex flex-col mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 animate-fadeIn">
            <div className="w-8 sm:w-12 h-[1px] bg-primary" />
            <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">
              The Protocol
            </span>
          </div>
          
          <h2 className="text-[clamp(2rem,10vw,3.5rem)] sm:text-5xl lg:text-8xl font-display font-bold text-foreground tracking-tighter max-w-4xl animate-fadeIn">
            Universal <span className="text-foreground/20 dark:text-white/20">Business</span> <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40 dark:from-white dark:to-white/40">Infrastructure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
          {displayedSolutions.map((solution, index) => {
            const Icon = IconMap[solution.icon_type] || Database;
            const colors = IconColors[solution.icon_type] || IconColors.database;
            return (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={index}
                Icon={Icon}
                colors={colors}
              />
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-10 sm:mt-16 flex justify-center">
            <button 
              onClick={handleToggleShowAll}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-muted dark:bg-white/5 border border-border dark:border-white/10 rounded-xl sm:rounded-2xl text-foreground font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-muted/80 dark:hover:bg-white/10 hover:border-primary/20 dark:hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <ArrowRight size={14} className="rotate-180 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    <span>View All Solutions</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}
      </div>
      
      <div className="absolute -bottom-[20%] -right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
    </section>
  );
});

SolutionsOverview.displayName = 'SolutionsOverview';

export default SolutionsOverview;

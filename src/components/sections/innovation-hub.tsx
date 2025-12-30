"use client";

import React, { memo, useState } from "react";
import { GraduationCap, Code2, Users2, Rocket, ArrowRight } from "lucide-react";
import { ScrollReveal, StaggerContainer } from "@/components/ScrollReveal";

interface InnovationHubItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_type: string;
  stats: string;
}

const IconMap: Record<string, React.ElementType> = {
  rocket: Rocket,
  'graduation-cap': GraduationCap,
  code: Code2,
  users: Users2,
};

const IconColors: Record<string, string> = {
  rocket: "text-orange-500",
  'graduation-cap': "text-emerald-500",
  code: "text-blue-500",
  users: "text-violet-500",
};

interface InnovationHubProps {
  items?: InnovationHubItem[];
}

const InnovationHub = memo(({ items = [] }: InnovationHubProps) => {
  const [showAll, setShowAll] = useState(false);
  
  // Show only 4 items initially for better UX
  const INITIAL_DISPLAY = 4;
  const displayedItems = showAll ? items : items.slice(0, INITIAL_DISPLAY);
  const hasMore = items.length > INITIAL_DISPLAY;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    // Smooth scroll to section after expanding
    if (!showAll) {
      setTimeout(() => {
        const element = document.querySelector('[data-section="innovation-hub"]');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative bg-muted/30 dark:bg-[#050505] z-10" data-section="innovation-hub">
      <div className="container relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 block">
                The Ecosystem
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-display font-bold text-foreground tracking-tighter">
                Beyond Just <br />
                <span className="text-muted-foreground">Software.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-lg text-muted-foreground max-w-md leading-relaxed lg:mb-2">
              Easyio is a talent-driven engine. We don't just build systems; we build the people who build the future.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4" staggerDelay={0.15} direction="up">
          {displayedItems.map((item) => {
            const Icon = IconMap[item.icon_type] || Rocket;
            return (
              <div
                key={item.id}
                className="group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-[2rem] bg-card dark:bg-white/[0.02] border-2 sm:border border-border/80 dark:border-white/8 sm:border-border/60 sm:dark:border-white/5 hover:bg-emerald-500/[0.03] dark:hover:bg-emerald-500/[0.03] hover:border-emerald-500/20 dark:hover:border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 overflow-hidden backdrop-blur-sm"
              >
                <div className={`absolute top-0 right-0 p-4 sm:p-8 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-[1.8] sm:group-hover:scale-[2] transition-all duration-700 ease-out text-emerald-500/40 group-hover:text-emerald-500/60 group-hover:-rotate-12 origin-top-right`}>
                  <Icon className="w-12 h-12 sm:w-16 sm:h-16" />
                </div>
                
                <div className="relative z-10">
                  <span className="text-[8px] sm:text-[10px] font-mono font-bold text-emerald-500/70 dark:text-emerald-500/70 uppercase tracking-widest mb-2 sm:mb-4 block group-hover:text-emerald-500 transition-colors duration-300">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-display font-bold text-foreground mb-2 sm:mb-4 group-hover:text-emerald-500/90 dark:group-hover:text-emerald-500/90 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-8 line-clamp-3 sm:line-clamp-none pb-1">
                    {item.description}
                  </p>
                  
                  <div className="pt-3 sm:pt-6 border-t border-border dark:border-white/5 group-hover:border-emerald-500/20 dark:group-hover:border-emerald-500/20 transition-colors duration-300 flex items-center justify-between">
                    <span className="text-[8px] sm:text-[10px] font-mono text-muted-foreground uppercase tracking-tighter">Metric</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-emerald-500/90 dark:group-hover:text-emerald-500/90 transition-colors duration-300">{item.stats}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </StaggerContainer>

        {hasMore && (
          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-10 sm:mt-16 flex justify-center">
              <button 
                onClick={handleToggleShowAll}
                className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-card dark:bg-white/5 border border-border dark:border-white/10 rounded-xl sm:rounded-2xl text-foreground font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-card/80 dark:hover:bg-white/10 hover:border-primary/20 dark:hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <ArrowRight size={14} className="rotate-180 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    <span>View All Services</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </ScrollReveal>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-[20%] left-[10%] w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] bg-emerald-500/30 blur-[80px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] bg-emerald-500/20 blur-[80px] rounded-full" />
      </div>
    </section>
  );
});

InnovationHub.displayName = 'InnovationHub';

export default InnovationHub;

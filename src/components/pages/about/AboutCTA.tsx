"use client";

import { useInView } from "@/hooks/useInView";

export default function AboutCTA() {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`mt-20 sm:mt-32 lg:mt-40 p-8 sm:p-12 lg:p-24 rounded-2xl sm:rounded-[4rem] bg-[#050505] border border-white/5 flex flex-col items-center text-center transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}
      style={{ willChange: 'opacity' }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-6xl font-black text-white mb-6 sm:mb-8 uppercase leading-[1.15] pb-2 italic">Built for the <br />1%.</h2>
      <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl leading-relaxed">
        We work exclusively with organizations that demand absolute excellence and won't settle for "good enough".
      </p>
      <button className="px-8 sm:px-12 py-4 sm:py-6 bg-primary text-white font-black rounded-xl sm:rounded-2xl uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:scale-105 active:scale-95 transition-transform shadow-[0_0_50px_rgba(59,130,246,0.3)]">
        Open Command Channel
      </button>
    </div>
  );
}

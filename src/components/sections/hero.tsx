"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Zap, Shield, BarChart3, Globe as GlobeIcon } from "lucide-react";

const Globe = dynamic(() => import("@/components/ui/globe"), { 
  ssr: false,
  loading: () => <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
});

const HeroSection = memo(() => {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleLaunchSequence = () => {
    router.push("/contact?type=enterprise");
  };

  const handleExploreArsenal = () => {
    router.push("/solutions");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed Background Layer - stays fixed only while hero is in viewport */}
      <div className={`fixed inset-0 w-full h-screen bg-[#020202] pointer-events-none z-0 hero-background transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Gradient blurs - fixed */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary/8 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[80px] rounded-full" />
        </div>

        {/* Globe positioned on the right side - fixed */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-[9ytrue-0.1%] sm:-right-[25%] lg:-right-[20%] xl:-right-[15%] 2xl:-right-[10%] w-[140vw] sm:w-[120vw] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] aspect-square pointer-events-none z-10 opacity-50 sm:opacity-70 lg:opacity-100 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Globe className="w-full h-full brightness-[1.1] contrast-[1.1]" />
            {/* Added a subtle glow behind the globe */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75 animate-pulse" />
          </div>
        </div>

        {/* Texture overlay - fixed */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Scrollable Content Layer - moves up smoothly when scrolling */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center py-20 sm:py-24 lg:py-0">
        <div className="container relative z-20 pt-16 sm:pt-20 lg:pt-0">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div className="flex flex-col space-y-6 sm:space-y-10 animate-fadeIn relative z-30">
              <div className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 w-fit backdrop-blur-md">
                <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
                </div>
                <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/80">
                  Operational Status: Optimal
                </span>
              </div>

                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-white leading-[0.8] tracking-[-0.07em] font-display text-[clamp(3rem,13vw,5.5rem)] lg:text-[clamp(4.5rem,9vw,7.5rem)] xl:text-[clamp(5.5rem,11vw,11rem)] font-black uppercase">
                    EASYIO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20">
                      CORE.
                    </span>
                  </h1>
                  <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed font-medium">
                  Engineering high-performance enterprise architecture. We deploy the systems that power the global digital economy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <button 
                  onClick={handleLaunchSequence}
                  className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-white text-black font-black rounded-xl sm:rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer"
                  aria-label="Launch Sequence - Contact us for enterprise solutions"
                >
                  <span className="relative flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-wider text-xs sm:text-sm">
                    Launch Sequence <Zap size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
                  </span>
                </button>
                <button 
                  onClick={handleExploreArsenal}
                  className="group px-6 sm:px-10 py-4 sm:py-5 bg-white/5 border border-white/10 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 sm:gap-3 uppercase tracking-wider text-xs sm:text-sm backdrop-blur-sm cursor-pointer"
                  aria-label="Explore The Arsenal - View our solutions"
                >
                  Explore The Arsenal <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12 border-t border-white/10">
                <div className="space-y-1.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2">
                  <div className="flex items-center gap-2 sm:gap-1.5 md:gap-2 text-primary">
                    <Shield size={16} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white font-display leading-tight">99.9%</p>
                  </div>
                  <p className="text-[10px] sm:text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-muted-foreground font-mono pl-7 sm:pl-0">Precision SLA</p>
                </div>
                <div className="space-y-1.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2">
                  <div className="flex items-center gap-2 sm:gap-1.5 md:gap-2 text-accent">
                    <GlobeIcon size={16} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white font-display leading-tight">14K+</p>
                  </div>
                  <p className="text-[10px] sm:text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-muted-foreground font-mono pl-7 sm:pl-0">Global Nodes</p>
                </div>
                <div className="space-y-1.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2">
                  <div className="flex items-center gap-2 sm:gap-1.5 md:gap-2 text-emerald-500">
                    <BarChart3 size={16} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-white font-display leading-tight">2.4ms</p>
                  </div>
                  <p className="text-[10px] sm:text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-muted-foreground font-mono pl-7 sm:pl-0">Core Latency</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;

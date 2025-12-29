"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, BarChart3, Globe as GlobeIcon, Play, X } from "lucide-react";

const Globe = dynamic(() => import("@/components/ui/globe"), { 
  ssr: false,
  loading: () => <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
});

const HeroSection = memo(() => {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const handleLaunchSequence = () => {
    router.push("/contact?type=enterprise");
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
      {/* Fixed Background Layer - Using transform for better performance */}
      <div className={`fixed inset-0 w-full h-screen bg-background dark:bg-[#020202] pointer-events-none z-0 hero-background transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translateZ(0)', willChange: 'opacity' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-primary/8 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[80px] rounded-full" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-[90%] sm:-right-[25%] lg:-right-[20%] xl:-right-[15%] 2xl:-right-[10%] w-[140vw] sm:w-[120vw] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] aspect-square pointer-events-none z-10 opacity-50 sm:opacity-70 lg:opacity-100 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <Globe className="w-full h-full brightness-[1.1] contrast-[1.1]" />
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75 animate-pulse" />
          </div>
        </div>

        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Scrollable Content Layer */}
      <div className="relative z-20 w-full min-h-0 sm:min-h-screen flex items-start sm:items-center justify-center pt-6 pb-8 sm:py-12 md:py-16 lg:py-20 xl:py-0">
        <div className="container relative z-20 pt-0 sm:pt-12 md:pt-16 lg:pt-0 px-4 sm:px-6 md:px-8 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">
            <motion.div 
              className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 relative z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center space-x-2 px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl md:rounded-2xl bg-muted/50 dark:bg-white/[0.03] border border-border dark:border-white/10 w-fit backdrop-blur-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-foreground/80 whitespace-nowrap">
                  Operational Status: Optimal
                </span>
              </motion.div>

              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <motion.h1 
                  className="text-foreground leading-[1.1] tracking-[-0.05em] sm:tracking-[-0.06em] md:tracking-[-0.07em] font-display text-[clamp(2.5rem,8vw,4rem)] sm:text-[clamp(3rem,10vw,5rem)] md:text-[clamp(4rem,11vw,6.5rem)] lg:text-[clamp(5rem,12vw,8rem)] xl:text-[clamp(6rem,13vw,10rem)] font-black uppercase"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  EASYIO <br />
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-br from-foreground via-foreground to-foreground/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    CORE.
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-[0.875rem] sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl sm:max-w-2xl leading-[1.6] sm:leading-[1.65] md:leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  Engineering high-performance enterprise architecture. We deploy the systems that power the global digital economy.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 w-full sm:w-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button 
                  onClick={handleLaunchSequence}
                  className="group relative px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 lg:py-5 bg-foreground text-background font-black rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer w-full sm:w-auto"
                >
                  <span className="relative flex items-center justify-center gap-2 uppercase tracking-wider text-[0.7rem] sm:text-[0.75rem] md:text-xs lg:text-sm font-semibold sm:font-bold">
                    Launch Sequence <Zap size={14} className="sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] flex-shrink-0" fill="currentColor" />
                  </span>
                </button>
                <button 
                  onClick={() => setShowVideo(true)}
                  className="group px-5 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3.5 md:py-4 lg:py-5 bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 text-foreground font-bold rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-muted dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-[0.7rem] sm:text-[0.75rem] md:text-xs lg:text-sm backdrop-blur-sm cursor-pointer w-full sm:w-auto"
                >
                  Watch System Intro <Play size={14} className="sm:w-4 sm:h-4 md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] flex-shrink-0" fill="currentColor" />
                </button>
              </motion.div>

              <motion.div 
                className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 border-t border-border dark:border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="space-y-0.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-primary">
                    <Shield size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-foreground font-display leading-[1.2]">99.9%</p>
                  </div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.18em] lg:tracking-[0.2em] text-muted-foreground font-mono">Precision SLA</p>
                </motion.div>
                <motion.div 
                  className="space-y-0.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-accent">
                    <GlobeIcon size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-foreground font-display leading-[1.2]">14K+</p>
                  </div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.18em] lg:tracking-[0.2em] text-muted-foreground font-mono">Global Nodes</p>
                </motion.div>
                <motion.div 
                  className="space-y-0.5 sm:space-y-1 md:space-y-1.5 lg:space-y-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-emerald-500">
                    <BarChart3 size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-foreground font-display leading-[1.2]">2.4ms</p>
                  </div>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.18em] lg:tracking-[0.2em] text-muted-foreground font-mono">Core Latency</p>
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-fadeIn" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(var(--primary),0.2)]" onClick={e => e.stopPropagation()}>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/u31qwQUeGuM?autoplay=1&mute=1&loop=1&playlist=u31qwQUeGuM" 
                title="EASYIO System Intro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;

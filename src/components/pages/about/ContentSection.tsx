"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";

export default function ContentSection() {
  const { ref: ref1, isInView: isInView1 } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ref2, isInView: isInView2 } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ref3, isInView: isInView3 } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ref4, isInView: isInView4 } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center text-left">
        <div
          ref={ref1 as React.RefObject<HTMLDivElement>}
          className={`relative transition-all duration-700 ${isInView1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 blur-[60px] rounded-full opacity-50" />
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-foreground dark:text-white mb-6 sm:mb-8 uppercase leading-[1.15] pb-2 relative z-10">
            Zero-Latency <br />
            <span className="text-primary">Philosophy</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 relative z-10">
            Every millisecond matters. In a world defined by real-time data flow, we engineer systems that eliminate friction, maximize throughput, and ensure absolute reliability under any load.
          </p>
        </div>
        <div 
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className={`relative aspect-square rounded-2xl sm:rounded-[3rem] overflow-hidden border border-border dark:border-white/10 group transition-all duration-700 ${isInView2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Infrastructure" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center text-left">
        <div 
          ref={ref3 as React.RefObject<HTMLDivElement>}
          className={`relative aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden border border-border dark:border-white/10 order-2 lg:order-1 group transition-all duration-700 ${isInView3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
            alt="R&D" 
            fill 
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div
          ref={ref4 as React.RefObject<HTMLDivElement>}
          className={`order-1 lg:order-2 relative transition-all duration-700 ${isInView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 blur-[60px] rounded-full opacity-50" />
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-foreground dark:text-white mb-6 sm:mb-8 uppercase leading-[1.15] pb-2 relative z-10">
            Aggressive <br />
            <span className="text-accent">Innovation</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 relative z-10">
            We don't wait for the future; we build it. Our R&D labs are constantly pushing the boundaries of what's possible with neural logic, quantum-resistant encryption, and edge intelligence.
          </p>
          <button className="relative z-10 px-6 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground font-black rounded-xl sm:rounded-2xl uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-transform shadow-[0_0_30px_rgba(var(--primary),0.3)]">
            Access Innovation Labs
          </button>
        </div>
      </div>
    </div>
  );
}

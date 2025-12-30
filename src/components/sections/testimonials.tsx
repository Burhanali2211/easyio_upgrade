"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const Testimonials = memo(({ testimonials = [] }: TestimonialsProps) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="w-full bg-muted/50 dark:bg-[#030306] py-16 sm:py-24 lg:py-32 overflow-hidden relative z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[300px] h-[300px] bg-primary/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-accent/5 blur-[80px] rounded-full" />
      </div>
      
      <div className="container mx-auto mb-12 sm:mb-16 lg:mb-20 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block animate-fadeIn">
              Validation
            </span>
            <h2 className="text-foreground text-2xl sm:text-4xl lg:text-5xl animate-fadeIn">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60 dark:from-white dark:to-white/60">Global Visionaries</span>
            </h2>
          </div>
          <div className="flex items-center gap-6 animate-fadeIn">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-foreground">50+</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono">Enterprises</p>
            </div>
            <div className="w-[1px] h-10 bg-border dark:bg-white/10" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-black text-foreground">4.9</p>
              <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono">Avg Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-muted/50 dark:from-[#030306] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-muted/50 dark:from-[#030306] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee-mobile sm:animate-marquee hover:[animation-play-state:paused] whitespace-nowrap py-4 will-change-transform">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.id}-${idx}`}
              className="group/card inline-flex flex-col w-[280px] sm:w-[400px] lg:w-[450px] mx-2 sm:mx-3 p-6 sm:p-8 bg-card dark:bg-[#050508] border-2 sm:border border-border/80 dark:border-white/30 sm:border-border/60 sm:dark:border-white/10 rounded-2xl whitespace-normal hover:border-primary/20 dark:hover:border-white/10 transition-all relative overflow-hidden flex-shrink-0"
            >
              <div className="absolute top-6 right-6 text-foreground/5 dark:text-white/5 group-hover/card:text-foreground/10 dark:group-hover/card:text-white/10 transition-colors">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed mb-6 font-light relative">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border dark:border-white/5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2 ring-offset-card dark:ring-offset-[#050508]">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                      loading="lazy"
                    />
                    ) : (
                      <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold rounded-full">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest mt-0.5">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-mobile {
          animation: marquee-mobile 40s linear infinite;
        }
        @media (max-width: 640px) {
          .animate-marquee-mobile {
            animation: marquee-mobile 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;

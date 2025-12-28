"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Zap, Terminal } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="relative w-full bg-background dark:bg-[#020205] pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 overflow-hidden z-10" id="contact">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[400px] h-[400px] bg-primary/3 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] bg-accent/3 blur-[100px] rounded-full" />
      </div>
      
      <div className="container mx-auto max-w-[1440px] relative">
        <div className="mb-12 sm:mb-16 lg:mb-20 max-w-[800px]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-white/[0.03] border border-border dark:border-white/10 mb-6">
            <Terminal size={14} className="text-primary" />
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Open Channel</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[650px] leading-relaxed">
            We&apos;re open to collaborations and sponsorships, as well as enterprise engineering work opportunities. With our experience in systems architecture, distributed computing, and business automation, we&apos;re ready to bring your project to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-border dark:border-white/5 rounded-2xl overflow-hidden">
            <Link 
              href="/contact?type=collaboration"
              className="group relative flex flex-col justify-between p-8 sm:p-12 min-h-[280px] sm:min-h-[350px] border-b md:border-b-0 md:border-r border-border dark:border-white/5 transition-all duration-500 hover:bg-muted dark:hover:bg-white/[0.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] group-hover:scale-[3] transition-all duration-700 ease-out text-primary -rotate-12 group-hover:rotate-0 pointer-events-none">
                <Zap size={120} />
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary transition-all group-hover:scale-110">
                  <Zap size={20} />
                </div>
              <div className="w-12 h-12 rounded-full bg-muted dark:bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-foreground group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="relative">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3 block">Alliance Protocol</span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-foreground group-hover:text-primary transition-colors">
                Strategic Alliances & <br /> Power Partnerships
              </h3>
            </div>
          </Link>

            <Link 
              href="/contact?type=enterprise"
              className="group relative flex flex-col justify-between p-8 sm:p-12 min-h-[280px] sm:min-h-[350px] transition-all duration-500 hover:bg-muted dark:hover:bg-white/[0.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] group-hover:scale-[3] transition-all duration-700 ease-out text-accent -rotate-12 group-hover:rotate-0 pointer-events-none">
                <Terminal size={120} />
              </div>
              
              <div className="relative flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent transition-all group-hover:scale-110">
                  <Terminal size={20} />
                </div>
              <div className="w-12 h-12 rounded-full bg-muted dark:bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-foreground group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors" strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="relative">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3 block">Elite Deployment</span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.1] text-foreground group-hover:text-accent transition-colors">
                Deploy The Elite <br /> For Your Mission
              </h3>
            </div>
          </Link>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 border-t border-border dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 sm:gap-x-10">
            {['Instagram', 'LinkedIn', 'Twitter', 'GitHub'].map((social) => (
              <a 
                key={social}
                href={`https://www.${social.toLowerCase()}.com/`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {social} 
                <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
          
          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest text-center">
            © {new Date().getFullYear()} Easyio Technologies
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

"use client";

import { Terminal } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="mb-12 sm:mb-16 lg:mb-20 animate-fadeIn">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted dark:bg-white/[0.03] border border-border dark:border-white/10 mb-6">
        <Terminal size={14} className="text-primary" />
        <span className="text-[10px] font-mono text-muted-foreground dark:text-white/60 uppercase tracking-widest">Communication Protocol</span>
      </div>
      <h1 className="text-foreground dark:text-white mb-6 sm:mb-8 text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter">
        INITIATE <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/30 dark:from-white dark:via-white dark:to-white/30">CONTACT.</span>
      </h1>
      <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
        Ready to architect your next digital breakthrough? Open a secure channel with our engineering team.
      </p>
    </div>
  );
}

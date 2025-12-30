"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Link from "next/link";

export default function TeamCTA() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="mt-20 sm:mt-32 lg:mt-40 relative overflow-hidden rounded-2xl sm:rounded-[4rem] bg-card dark:bg-gradient-to-br dark:from-[#050505] dark:to-[#080808] border border-border dark:border-white/5"
    >
      <div className="absolute inset-0 grid-command opacity-20" />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/10 blur-[80px] rounded-full" />
      
      <div className="relative p-8 sm:p-12 lg:p-24 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Users size={14} className="text-primary" />
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Join The Force</span>
        </div>
        <h2 className="text-xl sm:text-3xl lg:text-6xl font-black text-foreground dark:text-white mb-6 sm:mb-8 uppercase leading-[1.15] pb-2">
          We&apos;re always looking for <br className="hidden sm:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">elite talent.</span>
        </h2>
        <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl leading-relaxed">
          Think you have what it takes to join the most aggressive engineering team on the planet? We want to hear from you.
        </p>
        <Link 
          href="/careers"
          className="px-8 sm:px-12 py-4 sm:py-6 bg-primary text-primary-foreground font-black rounded-xl sm:rounded-2xl uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(var(--primary),0.3)]"
        >
          Apply for Deployment
        </Link>
      </div>
    </motion.div>
  );
}

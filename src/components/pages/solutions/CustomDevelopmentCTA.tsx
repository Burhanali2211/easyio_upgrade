"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2, CpuIcon } from "lucide-react";

export default function CustomDevelopmentCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="mt-16 sm:mt-24 lg:mt-32 relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-[#050505] border border-white/5 p-8 sm:p-12 lg:p-20"
    >
      <div className="absolute inset-0 grid-command opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/5 blur-[80px] rounded-full" />
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Code2 size={14} className="text-primary" strokeWidth={1.5} />
            <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Custom Development</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-display font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">
            Custom Logic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Development</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-medium">
            Need a proprietary engine built from the ground up? Our elite R&D team specializes in solving &quot;impossible&quot; architectural challenges.
          </p>
          <Link 
            href="/contact?type=enterprise&service=custom"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-display font-black rounded-lg sm:rounded-xl uppercase tracking-widest text-[10px] sm:text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)]"
          >
            Connect With R&D Command
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 flex items-center justify-center transition-all group"
            >
              <CpuIcon size={28} className="text-primary/20 group-hover:text-primary/40 transition-colors" strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export default function AboutHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 sm:mb-16 lg:mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <Rocket size={14} className="text-primary" />
        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">The Mission</span>
      </div>
      <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-8xl font-black uppercase tracking-tighter">
        Engineering <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/30">The Future.</span>
      </h1>
      <p className="max-w-3xl text-muted-foreground text-base sm:text-xl lg:text-2xl leading-relaxed font-medium">
        We are not just a technology company. We are architects of digital ecosystems, building the high-performance infrastructures that power the next generation of global industry.
      </p>
    </motion.div>
  );
}

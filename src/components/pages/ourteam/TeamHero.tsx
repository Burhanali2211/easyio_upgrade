"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function TeamHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 sm:mb-16 lg:mb-24"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <Users size={14} className="text-primary" />
        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Elite Force</span>
      </div>
      <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
        The <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/30">Architects.</span>
      </h1>
      <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed">
        Meet the world-class engineers and strategists behind the Easyio core hub.
      </p>
    </motion.div>
  );
}

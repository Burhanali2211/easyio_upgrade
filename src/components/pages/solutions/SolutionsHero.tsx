"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, TrendingUp } from "lucide-react";

export default function SolutionsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12 sm:mb-16 lg:mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <BrainCircuit size={14} className="text-primary" strokeWidth={1.5} />
        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Logic Engines</span>
      </div>
      
      <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter leading-tight">
        SYSTEM <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/30">
          ARCHITECTURES.
        </span>
      </h1>
      
      <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed font-medium mb-8">
        We don&apos;t just write code; we engineer digital life-forms. Our logic engines are the heart of the most advanced systems in the world.
      </p>

      {/* Stats or Features */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <Zap size={18} className="text-primary" strokeWidth={2} />
          </div>
          <div>
            <div className="text-sm font-mono text-white/40 uppercase tracking-wider">Featured</div>
            <div className="text-lg font-display font-bold text-white">Engines</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <TrendingUp size={18} className="text-primary" strokeWidth={2} />
          </div>
          <div>
            <div className="text-sm font-mono text-white/40 uppercase tracking-wider">Enterprise</div>
            <div className="text-lg font-display font-bold text-white">Ready</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

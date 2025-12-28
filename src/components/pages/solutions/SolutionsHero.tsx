"use client";

import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

export default function SolutionsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 sm:mb-16 lg:mb-20"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <BrainCircuit size={14} className="text-primary" strokeWidth={1.5} />
        <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Logic Engines</span>
      </div>
      <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-display font-black uppercase tracking-tighter">
        SYSTEM <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/30">ARCHITECTURES.</span>
      </h1>
      <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed font-medium">
        We don&apos;t just write code; we engineer digital life-forms. Our logic engines are the heart of the most advanced systems in the world.
      </p>
    </motion.div>
  );
}

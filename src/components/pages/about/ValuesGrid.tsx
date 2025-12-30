"use client";

import { motion } from "framer-motion";
import { Value } from "./types";

interface ValuesGridProps {
  values: Value[];
}

export default function ValuesGrid({ values }: ValuesGridProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mb-16 sm:mb-24 lg:mb-32"
    >
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">
          Core Principles
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-foreground dark:text-white uppercase tracking-tight">
          What Drives <span className="text-primary">Us</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-6 sm:p-8 rounded-xl sm:rounded-[2rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              {value.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

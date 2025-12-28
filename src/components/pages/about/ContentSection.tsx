"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContentSection() {
  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center text-left">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="absolute -left-4 -top-4 w-24 h-24 bg-primary/10 blur-[60px] rounded-full opacity-50" />
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8 uppercase leading-tight relative z-10">
            Zero-Latency <br />
            <span className="text-primary">Philosophy</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 relative z-10">
            Every millisecond matters. In a world defined by real-time data flow, we engineer systems that eliminate friction, maximize throughput, and ensure absolute reliability under any load.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 relative z-10">
            {[
              "Deterministic Performance",
              "Infinite Scalability",
              "Military-Grade Security"
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all group/item"
              >
                <div className="w-2 h-2 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                <span className="text-white font-bold uppercase tracking-widest text-[9px] sm:text-[10px] group-hover/item:text-primary transition-colors">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-square rounded-2xl sm:rounded-[3rem] overflow-hidden border border-white/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Infrastructure" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center text-left">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-video rounded-2xl sm:rounded-[3rem] overflow-hidden border border-white/10 order-2 lg:order-1 group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
            alt="R&D" 
            fill 
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 blur-[60px] rounded-full opacity-50" />
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-white mb-6 sm:mb-8 uppercase leading-tight relative z-10">
            Aggressive <br />
            <span className="text-accent">Innovation</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 relative z-10">
            We don't wait for the future; we build it. Our R&D labs are constantly pushing the boundaries of what's possible with neural logic, quantum-resistant encryption, and edge intelligence.
          </p>
          <button className="relative z-10 px-6 sm:px-10 py-4 sm:py-5 bg-white text-black font-black rounded-xl sm:rounded-2xl uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            Access Innovation Labs
          </button>
        </motion.div>
      </div>
    </div>
  );
}

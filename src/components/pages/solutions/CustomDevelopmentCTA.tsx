"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code2 } from "lucide-react";

const techVectors = [
  {
    label: "Cloud Infrastructure",
    gradient: "from-blue-500/20 to-cyan-500/20",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M150 80C150 65 138 53 123 53C120 53 117 53 114 54C110 45 101 38 90 38C78 38 68 46 65 56C62 55 59 55 56 55C45 55 36 64 36 75C36 86 45 95 56 95H144C152 95 159 88 159 80C159 72 152 65 144 65C142 65 140 65 138 66C145 71 150 78 150 80Z" fill="url(#cloudGrad)" className="dark:opacity-80" />
        <circle cx="80" cy="70" r="3" fill="rgb(59, 130, 246)" className="dark:fill-blue-400" opacity="0.6" />
        <circle cx="120" cy="75" r="2.5" fill="rgb(59, 130, 246)" className="dark:fill-blue-400" opacity="0.5" />
        <circle cx="100" cy="85" r="2" fill="rgb(14, 165, 233)" className="dark:fill-cyan-400" opacity="0.4" />
        <rect x="50" y="110" width="100" height="60" rx="5" fill="url(#cloudGrad)" className="dark:opacity-60" />
        <rect x="60" y="120" width="20" height="15" rx="2" fill="rgb(59, 130, 246)" className="dark:fill-blue-400" opacity="0.4" />
        <rect x="85" y="120" width="20" height="15" rx="2" fill="rgb(59, 130, 246)" className="dark:fill-blue-400" opacity="0.4" />
        <rect x="110" y="120" width="20" height="15" rx="2" fill="rgb(59, 130, 246)" className="dark:fill-blue-400" opacity="0.4" />
        <rect x="60" y="140" width="70" height="20" rx="2" fill="rgb(14, 165, 233)" className="dark:fill-cyan-400" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "AI & Machine Learning",
    gradient: "from-purple-500/20 to-pink-500/20",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="50" fill="url(#aiGrad)" className="dark:opacity-80" />
        <circle cx="85" cy="85" r="8" fill="rgb(168, 85, 247)" className="dark:fill-purple-400" opacity="0.6" />
        <circle cx="115" cy="85" r="8" fill="rgb(168, 85, 247)" className="dark:fill-purple-400" opacity="0.6" />
        <path d="M85 115 Q100 125 115 115" stroke="rgb(236, 72, 153)" className="dark:stroke-pink-400" strokeWidth="3" fill="none" opacity="0.6" />
        <circle cx="100" cy="70" r="5" fill="rgb(168, 85, 247)" className="dark:fill-purple-400" opacity="0.5" />
        <circle cx="70" cy="100" r="5" fill="rgb(168, 85, 247)" className="dark:fill-purple-400" opacity="0.5" />
        <circle cx="130" cy="100" r="5" fill="rgb(168, 85, 247)" className="dark:fill-purple-400" opacity="0.5" />
        <circle cx="100" cy="130" r="5" fill="rgb(236, 72, 153)" className="dark:fill-pink-400" opacity="0.5" />
        <path d="M100 70 L85 85 M100 70 L115 85 M70 100 L85 85 M130 100 L115 85 M100 130 L85 115 M100 130 L115 115" stroke="rgb(168, 85, 247)" className="dark:stroke-purple-400" strokeWidth="1.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "Security Systems",
    gradient: "from-emerald-500/20 to-teal-500/20",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path d="M100 40 L120 50 L120 80 C120 100 110 115 100 120 C90 115 80 100 80 80 L80 50 Z" fill="url(#securityGrad)" className="dark:opacity-80" />
        <rect x="70" y="120" width="60" height="50" rx="5" fill="url(#securityGrad)" className="dark:opacity-60" />
        <rect x="75" y="125" width="50" height="8" rx="2" fill="rgb(16, 185, 129)" className="dark:fill-emerald-400" opacity="0.4" />
        <rect x="75" y="138" width="50" height="8" rx="2" fill="rgb(16, 185, 129)" className="dark:fill-emerald-400" opacity="0.4" />
        <rect x="75" y="151" width="35" height="8" rx="2" fill="rgb(20, 184, 166)" className="dark:fill-teal-400" opacity="0.3" />
        <circle cx="100" cy="60" r="4" fill="rgb(16, 185, 129)" className="dark:fill-emerald-400" opacity="0.6" />
        <path d="M95 60 L100 65 L105 60" stroke="rgb(16, 185, 129)" className="dark:stroke-emerald-400" strokeWidth="2" fill="none" opacity="0.8" />
        <circle cx="85" cy="75" r="2" fill="rgb(16, 185, 129)" className="dark:fill-emerald-400" opacity="0.5" />
        <circle cx="115" cy="75" r="2" fill="rgb(16, 185, 129)" className="dark:fill-emerald-400" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: "Data Architecture",
    gradient: "from-orange-500/20 to-amber-500/20",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dataGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(245, 158, 11)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="60" rx="40" ry="20" fill="url(#dataGrad)" className="dark:opacity-80" />
        <ellipse cx="100" cy="100" rx="50" ry="25" fill="url(#dataGrad)" className="dark:opacity-70" />
        <ellipse cx="100" cy="150" rx="45" ry="22" fill="url(#dataGrad)" className="dark:opacity-60" />
        <rect x="75" y="50" width="50" height="20" rx="3" fill="rgb(249, 115, 22)" className="dark:fill-orange-400" opacity="0.3" />
        <rect x="80" y="90" width="40" height="20" rx="3" fill="rgb(249, 115, 22)" className="dark:fill-orange-400" opacity="0.3" />
        <rect x="78" y="140" width="44" height="20" rx="3" fill="rgb(245, 158, 11)" className="dark:fill-amber-400" opacity="0.3" />
        <path d="M100 70 L100 90 M70 100 L80 90 M130 100 L120 90 M100 125 L100 140 M75 150 L78 140 M125 150 L122 140" stroke="rgb(249, 115, 22)" className="dark:stroke-orange-400" strokeWidth="2" opacity="0.4" />
        <circle cx="100" cy="100" r="3" fill="rgb(249, 115, 22)" className="dark:fill-orange-400" opacity="0.6" />
        <circle cx="85" cy="60" r="2" fill="rgb(245, 158, 11)" className="dark:fill-amber-400" opacity="0.5" />
        <circle cx="115" cy="60" r="2" fill="rgb(245, 158, 11)" className="dark:fill-amber-400" opacity="0.5" />
      </svg>
    ),
  },
];

export default function CustomDevelopmentCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="mt-16 sm:mt-24 lg:mt-32 relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-card dark:bg-[#050505] border border-border dark:border-white/5 p-8 sm:p-12 lg:p-20"
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
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-display font-black text-foreground dark:text-white mb-4 sm:mb-6 uppercase tracking-tight">
            Custom Logic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Development</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-medium">
            Need a proprietary engine built from the ground up? Our elite R&D team specializes in solving &quot;impossible&quot; architectural challenges.
          </p>
          <Link 
            href="/contact?type=enterprise&service=custom"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-display font-black rounded-lg sm:rounded-xl uppercase tracking-widest text-[10px] sm:text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(var(--primary),0.2)]"
          >
            Connect With R&D Command
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {techVectors.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="aspect-square rounded-xl sm:rounded-2xl bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/20 flex flex-col items-center justify-center transition-all group relative overflow-hidden p-4 sm:p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4 w-full h-full">
                <div className="w-full h-full max-w-[120px] max-h-[120px] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.svg}
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-foreground/70 dark:text-white/50 group-hover:text-foreground dark:group-hover:text-white uppercase tracking-wider text-center px-2 transition-colors">
                  {tech.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

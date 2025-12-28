"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { Target, Shield, Zap, Globe, Cpu, Users, Award, Rocket, TrendingUp, Code2, Network } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  
  const stats = [
    { label: "Founded", value: "2024", icon: <Rocket size={16} className="sm:w-5 sm:h-5" />, color: "primary", description: "Year of inception" },
    { label: "Global Nodes", value: "14K+", icon: <Globe size={16} className="sm:w-5 sm:h-5" />, color: "accent", description: "Worldwide infrastructure" },
    { label: "Core Engineers", value: "150+", icon: <Cpu size={16} className="sm:w-5 sm:h-5" />, color: "emerald", description: "Elite talent pool" },
    { label: "Uptime", value: "99.99%", icon: <Zap size={16} className="sm:w-5 sm:h-5" />, color: "amber", description: "System reliability" },
  ];

  const values = [
    { icon: <Target size={20} />, title: "Precision", desc: "Every line of code engineered for maximum impact" },
    { icon: <Shield size={20} />, title: "Security", desc: "Military-grade protection for critical systems" },
    { icon: <TrendingUp size={20} />, title: "Scale", desc: "Built to handle infinite growth" },
    { icon: <Code2 size={20} />, title: "Innovation", desc: "Pushing boundaries of what's possible" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
        </div>
        
        {/* Hero Section */}
        <div className="container pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative">
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

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-24 lg:mb-32">
            {stats.map((stat, index) => {
              const colorClasses = {
                primary: "bg-primary/10 border-primary/20 text-primary hover:bg-primary/20",
                accent: "bg-accent/10 border-accent/20 text-accent hover:bg-accent/20",
                emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20",
                amber: "bg-amber-500/10 border-amber-500/20 text-amber-500 hover:bg-amber-500/20",
              };
              
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredStat(stat.label)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className="group relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all text-center overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} transition-opacity duration-500 ${hoveredStat === stat.label ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className="relative z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      {stat.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2 group-hover:scale-105 transition-transform">{stat.value}</h3>
                    <p className="text-[8px] sm:text-xs text-muted-foreground uppercase tracking-widest font-mono font-bold mb-1">{stat.label}</p>
                    <p className="text-[8px] sm:text-[10px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity mt-2">{stat.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Core Values Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 sm:mb-24 lg:mb-32"
          >
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">
                Core Principles
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
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
                  className="group p-6 sm:p-8 rounded-xl sm:rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
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

          {/* Enhanced CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 sm:mt-32 lg:mt-40 p-8 sm:p-12 lg:p-24 rounded-2xl sm:rounded-[4rem] bg-[#050505] border border-white/5 flex flex-col items-center text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-black text-white mb-6 sm:mb-8 uppercase leading-tight italic">Built for the <br />1%.</h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl leading-relaxed">
              We work exclusively with organizations that demand absolute excellence and won't settle for "good enough".
            </p>
            <button className="px-8 sm:px-12 py-4 sm:py-6 bg-primary text-white font-black rounded-xl sm:rounded-2xl uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(59,130,246,0.3)]">
              Open Command Channel
            </button>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

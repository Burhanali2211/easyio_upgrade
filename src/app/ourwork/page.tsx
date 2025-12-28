"use client";

import Navigation from "@/components/sections/navigation";
import OurWork from "@/components/sections/our-work";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Shield, TrendingUp, ArrowRight } from "lucide-react";

export default function OurWorkPage() {
  const highlights = [
    { icon: <Code2 size={18} />, label: "Custom Systems", value: "50+" },
    { icon: <Database size={18} />, label: "ERP Deployments", value: "30+" },
    { icon: <Globe size={18} />, label: "Global Reach", value: "40+" },
    { icon: <Shield size={18} />, label: "Security Grade", value: "A+" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-8 sm:pt-16 lg:pt-20 relative"
        >
          <div className="container mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 sm:mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Code2 size={14} className="text-primary" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Enterprise Portfolio</span>
              </div>
              <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase">
                Selected <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/30">Engineering</span> Works.
              </h1>
              <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed">
                A collection of high-impact digital infrastructures, custom ERP systems, and business automation logic engineered by Easyio Technologies.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {highlight.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">{highlight.value}</div>
                  <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest font-mono">{highlight.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <OurWork />
        </motion.div>
        <Footer />
      </main>
    </div>
  );
}

"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Database, Shield, Zap, BarChart3, Settings, Cloud, Loader2, BrainCircuit, Network, Code2, Cpu, Atom, Microscope, FlaskConical, TrendingUp, Users, Globe, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface ERPFeature {
  id: string;
  title: string;
  description: string;
  icon_type: string;
}

const IconMap: Record<string, React.ReactNode> = {
  database: <Database size={20} className="sm:w-6 sm:h-6" />,
  zap: <Zap size={20} className="sm:w-6 sm:h-6" />,
  shield: <Shield size={20} className="sm:w-6 sm:h-6" />,
  'bar-chart': <BarChart3 size={20} className="sm:w-6 sm:h-6" />,
  settings: <Settings size={20} className="sm:w-6 sm:h-6" />,
  cloud: <Cloud size={20} className="sm:w-6 sm:h-6" />,
  brain: <BrainCircuit size={20} className="sm:w-6 sm:h-6" />,
  network: <Network size={20} className="sm:w-6 sm:h-6" />,
  code: <Code2 size={20} className="sm:w-6 sm:h-6" />,
  cpu: <Cpu size={20} className="sm:w-6 sm:h-6" />,
  atom: <Atom size={20} className="sm:w-6 sm:h-6" />,
  microscope: <Microscope size={20} className="sm:w-6 sm:h-6" />,
  flask: <FlaskConical size={20} className="sm:w-6 sm:h-6" />,
};

export default function ERPPage() {
  const [features, setFeatures] = useState<ERPFeature[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatures() {
      const { data, error } = await supabase
        .from('erp_features')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setFeatures(data);
      setLoading(false);
    }
    fetchFeatures();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">
              Enterprise Logic
            </span>
            <h1 className="text-foreground dark:text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
              ERP <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/30">SOLUTIONS.</span>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed">
              We build the nervous systems of modern industry. Our ERP solutions are custom-engineered for absolute efficiency and scale.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20"
          >
            {[
              { icon: <TrendingUp size={20} />, label: "Efficiency Gain", value: "300%+" },
              { icon: <Users size={20} />, label: "Enterprise Clients", value: "50+" },
              { icon: <Globe size={20} />, label: "Global Deployments", value: "100+" },
              { icon: <Zap size={20} />, label: "Uptime", value: "99.9%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 hover:border-primary/30 transition-all text-center"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-foreground dark:text-white mb-1">{stat.value}</div>
                <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground dark:text-white mb-2 uppercase tracking-tight">
                  Core <span className="text-primary">Capabilities</span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Comprehensive modules designed for enterprise-scale operations
                </p>
              </div>
            </div>
          </motion.div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="text-primary/50" size={20} />
                </div>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground dark:text-white/30 uppercase tracking-widest">Loading features...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 sm:p-8 rounded-xl sm:rounded-[2rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 hover:border-primary/30 transition-all overflow-hidden h-full flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 dark:bg-white/[0.03] border border-primary/20 dark:border-white/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform text-primary">
                      {IconMap[feature.icon_type] || <Database size={20} className="sm:w-6 sm:h-6" />}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-grow">
                      {feature.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border dark:border-white/5">
                      <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider">
                        <CheckCircle2 size={12} />
                        <span>Enterprise Grade</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-card dark:bg-white/[0.02] border border-border dark:border-white/5 p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
              <div className="relative z-10">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground dark:text-white mb-4 uppercase tracking-tight">
                    Why Choose Our <span className="text-primary">ERP Systems</span>
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
                    Built for organizations that demand absolute precision and scalability
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { title: "Zero-Downtime Architecture", desc: "Built for 24/7 operations with automatic failover" },
                    { title: "Infinite Scalability", desc: "Grows with your business, from startup to enterprise" },
                    { title: "Military-Grade Security", desc: "Bank-level encryption and compliance built-in" },
                    { title: "Real-Time Analytics", desc: "Instant insights into every aspect of your operations" },
                    { title: "Custom Integration", desc: "Seamlessly connects with your existing infrastructure" },
                    { title: "24/7 Support", desc: "Elite engineering team always on standby" },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 sm:p-6 rounded-xl bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={16} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-foreground dark:text-white mb-1">{benefit.title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-card dark:bg-gradient-to-br dark:from-primary/10 dark:to-accent/10 border border-border dark:border-white/10"
          >
            <div className="absolute inset-0 grid-command opacity-20" />
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/20 blur-[80px] rounded-full" />
            
            <div className="relative p-8 sm:p-12 lg:p-16 text-center z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Database size={14} className="text-primary" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Enterprise Ready</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-5xl font-black text-foreground dark:text-white mb-4 sm:mb-6 uppercase tracking-tight">
                Ready to upgrade your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/60 dark:from-white dark:via-white dark:to-white/60">core?</span>
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Our engineers are standing by to architect your next-generation enterprise system.
              </p>
              <Link 
                href="/contact?type=enterprise"
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground font-black rounded-xl sm:rounded-2xl uppercase tracking-widest text-xs sm:text-sm hover:scale-[1.05] active:scale-95 transition-all shadow-[0_20px_40px_rgba(var(--primary),0.3)] group"
              >
                Request Architecture Brief
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

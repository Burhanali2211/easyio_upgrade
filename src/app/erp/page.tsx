"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Database, Shield, Zap, BarChart3, Settings, Cloud, Loader2, BrainCircuit, Network, Code2, Cpu, Atom, Microscope, FlaskConical } from "lucide-react";
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
            <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-black">
              ERP <br /><span className="text-primary">SOLUTIONS.</span>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed">
              We build the nervous systems of modern industry. Our ERP solutions are custom-engineered for absolute efficiency and scale.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="text-primary/50" size={20} />
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading features...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative p-6 sm:p-8 rounded-xl sm:rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/[0.03] flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform text-primary">
                      {IconMap[feature.icon_type] || <Database size={20} className="sm:w-6 sm:h-6" />}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 sm:mt-24 lg:mt-32 relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10"
          >
            <div className="absolute inset-0 grid-command opacity-20" />
            <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/20 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/20 blur-[80px] rounded-full" />
            
            <div className="relative p-8 sm:p-12 lg:p-16 text-center z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Database size={14} className="text-white" />
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">Enterprise Ready</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-5xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">
                Ready to upgrade your <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">core?</span>
              </h2>
              <p className="text-base sm:text-xl text-white/60 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Our engineers are standing by to architect your next-generation enterprise system.
              </p>
              <Link 
                href="/contact?type=enterprise"
                className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-white text-black font-black rounded-xl sm:rounded-2xl uppercase tracking-widest text-xs sm:text-sm hover:scale-[1.05] active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
              >
                Request Architecture Brief
              </Link>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

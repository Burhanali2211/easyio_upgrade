"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Loader2, 
  ChevronRight, 
  ArrowRight,
  BrainCircuit,
  Network,
  Code2,
  Cpu,
  Database,
  Zap,
  Shield,
  BarChart3,
  Settings,
  Cloud,
  Atom,
  Microscope,
  FlaskConical,
  Server,
  Activity,
  Terminal,
  Rocket,
  Workflow,
  CircuitBoard,
  CpuIcon,
  HardDrive,
  Layers,
  GitBranch,
  Boxes,
  Package,
  FileCode,
  Wrench,
  Cog
} from "lucide-react";
import { useEffect, useState, memo } from "react";
import { supabase } from "@/lib/supabase";

interface LogicEngine {
  id: string;
  title: string;
  description: string;
  icon_type: string;
}

// Icon component mapping with Lucide icons - proper relatable icons
const IconMap: Record<string, React.ElementType> = {
  brain: BrainCircuit,
  network: Network,
  code: Code2,
  cpu: Cpu,
  database: Database,
  zap: Zap,
  shield: Shield,
  'bar-chart': BarChart3,
  settings: Settings,
  cloud: Cloud,
  atom: Atom,
  microscope: Microscope,
  flask: FlaskConical,
  server: Server,
  activity: Activity,
  terminal: Terminal,
  rocket: Rocket,
  workflow: Workflow,
  'circuit-board': CircuitBoard,
  'cpu-icon': CpuIcon,
  'hard-drive': HardDrive,
  layers: Layers,
  'git-branch': GitBranch,
  boxes: Boxes,
  package: Package,
  'file-code': FileCode,
  wrench: Wrench,
  cog: Cog,
};

// Color mapping for icons - very light colors related to what they represent
const IconColorMap: Record<string, string> = {
  brain: 'text-purple-400/30 group-hover:text-purple-400/70',
  network: 'text-blue-400/30 group-hover:text-blue-400/70',
  code: 'text-emerald-400/30 group-hover:text-emerald-400/70',
  cpu: 'text-amber-400/30 group-hover:text-amber-400/70',
  database: 'text-cyan-400/30 group-hover:text-cyan-400/70',
  zap: 'text-yellow-400/30 group-hover:text-yellow-400/70',
  shield: 'text-green-400/30 group-hover:text-green-400/70',
  'bar-chart': 'text-indigo-400/30 group-hover:text-indigo-400/70',
  settings: 'text-slate-400/30 group-hover:text-slate-400/70',
  cloud: 'text-sky-400/30 group-hover:text-sky-400/70',
  atom: 'text-violet-400/30 group-hover:text-violet-400/70',
  microscope: 'text-teal-400/30 group-hover:text-teal-400/70',
  flask: 'text-orange-400/30 group-hover:text-orange-400/70',
  server: 'text-red-400/30 group-hover:text-red-400/70',
  activity: 'text-pink-400/30 group-hover:text-pink-400/70',
  terminal: 'text-lime-400/30 group-hover:text-lime-400/70',
  rocket: 'text-rose-400/30 group-hover:text-rose-400/70',
  workflow: 'text-fuchsia-400/30 group-hover:text-fuchsia-400/70',
  'circuit-board': 'text-amber-400/30 group-hover:text-amber-400/70',
  'cpu-icon': 'text-orange-400/30 group-hover:text-orange-400/70',
  'hard-drive': 'text-blue-400/30 group-hover:text-blue-400/70',
  layers: 'text-indigo-400/30 group-hover:text-indigo-400/70',
  'git-branch': 'text-emerald-400/30 group-hover:text-emerald-400/70',
  boxes: 'text-cyan-400/30 group-hover:text-cyan-400/70',
  package: 'text-purple-400/30 group-hover:text-purple-400/70',
  'file-code': 'text-green-400/30 group-hover:text-green-400/70',
  wrench: 'text-slate-400/30 group-hover:text-slate-400/70',
  cog: 'text-gray-400/30 group-hover:text-gray-400/70',
};

const EngineCard = memo(({ engine, index }: { engine: LogicEngine; index: number }) => {
  const IconComponent = IconMap[engine.icon_type] || BrainCircuit;
  const iconColor = IconColorMap[engine.icon_type] || 'text-primary/30 group-hover:text-primary/70';

  return (
    <motion.div
      key={engine.id}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col h-full"
    >
      <div className="relative p-6 sm:p-8 lg:p-10 rounded-xl sm:rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all flex flex-col h-full overflow-hidden">
        {/* Background Icon - Top Right Corner */}
        <div className={`absolute top-2 right-2 sm:top-4 sm:right-4 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 opacity-[0.02] group-hover:opacity-[0.12] transition-all duration-500 pointer-events-none -z-0 ${iconColor}`}>
          <IconComponent className="w-full h-full" strokeWidth={1} />
        </div>
        
        {/* Icon - Horizontal orientation */}
        <div className="relative z-10 w-16 h-12 sm:w-20 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
          <IconComponent size={20} className={`sm:w-6 sm:h-6 ${iconColor}`} strokeWidth={1.5} />
        </div>
        
        {/* Title */}
        <h3 className="relative z-10 text-lg sm:text-xl font-display font-bold text-white mb-2 sm:mb-3 group-hover:text-primary transition-colors">
          {engine.title}
        </h3>
        
        {/* Description */}
        <p className="relative z-10 text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8 flex-grow">
          {engine.description}
        </p>
        
        {/* CTA Link */}
        <Link 
          href={`/contact?type=enterprise&engine=${encodeURIComponent(engine.title)}`}
          className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-white/40 group-hover:text-primary transition-colors text-[10px] sm:text-xs uppercase tracking-widest font-mono font-bold mt-auto group/link"
        >
          Access Engine Specs
          <ChevronRight size={12} className="sm:w-[14px] sm:h-[14px] group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
});

EngineCard.displayName = 'EngineCard';

export default function SolutionsPage() {
  const [engines, setEngines] = useState<LogicEngine[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEngines() {
      try {
        const { data, error: fetchError } = await supabase
        .from('logic_engines')
        .select('*')
        .order('created_at', { ascending: true });
        
        if (fetchError) {
          console.error('Error fetching engines:', fetchError);
          setError('Failed to load engines');
        } else {
          setEngines(data || []);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        setError('An unexpected error occurred');
      } finally {
      setLoading(false);
      }
    }
    fetchEngines();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative z-10">
          {/* Hero Section */}
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

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="text-primary/50" size={20} />
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading engines...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <Terminal size={24} className="text-red-500" strokeWidth={1.5} />
              </div>
              <p className="text-red-400 font-mono text-sm uppercase tracking-widest">{error}</p>
            </div>
          ) : engines.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Database size={24} className="text-white/30" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">No engines available</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {engines.map((engine, index) => (
                <EngineCard key={engine.id} engine={engine} index={index} />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 sm:mt-24 lg:mt-32 relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-[#050505] border border-white/5 p-8 sm:p-12 lg:p-20"
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
                <h2 className="text-xl sm:text-3xl lg:text-5xl font-display font-black text-white mb-4 sm:mb-6 uppercase tracking-tight">
                  Custom Logic <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Development</span>
                </h2>
                <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-medium">
                  Need a proprietary engine built from the ground up? Our elite R&D team specializes in solving &quot;impossible&quot; architectural challenges.
                </p>
                <Link 
                  href="/contact?type=enterprise&service=custom"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-display font-black rounded-lg sm:rounded-xl uppercase tracking-widest text-[10px] sm:text-xs hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                >
                  Connect With R&D Command
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 flex items-center justify-center transition-all group"
                  >
                    <CpuIcon size={28} className="text-primary/20 group-hover:text-primary/40 transition-colors" strokeWidth={1.5} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

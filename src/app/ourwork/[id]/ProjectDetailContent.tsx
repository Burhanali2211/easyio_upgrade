"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ExternalLink, 
  Database, 
  Calendar, 
  Building2, 
  Code2, 
  Shield, 
  Cpu, 
  Zap, 
  BarChart3,
  Globe,
  Settings,
  Terminal,
  Activity,
  Layers,
  Network,
  Lock,
  Search,
  ChevronRight,
  Monitor
} from "lucide-react";
import { Project } from "@/components/sections/our-work/types";
import { IconMap } from "@/components/sections/our-work/constants";
import { motion } from "framer-motion";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const Icon = IconMap[project.icon_type] || Database;
  const [activeMetric, setActiveMetric] = useState(0);

  const performanceMetrics = [
    { label: "Core Response", value: "84ms", status: "Optimal", color: "text-emerald-500" },
    { label: "Data Integrity", value: "99.99%", status: "Verified", color: "text-primary" },
    { label: "Logic Throughput", value: "1.2GB/s", status: "Nominal", color: "text-accent" },
    { label: "Encryption", value: "AES-256", status: "Active", color: "text-white" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % performanceMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-8 sm:py-16 lg:py-24 relative overflow-hidden selection:bg-primary selection:text-white">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-command opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link 
          href="/ourwork" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 sm:mb-12 font-mono text-xs uppercase tracking-widest group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Arsenal
        </Link>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr,400px] gap-8 lg:gap-16">
        <div className="space-y-16">
          {/* Project Header */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-6 mb-10"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary relative group">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon size={40} className="relative z-10" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-primary font-mono text-[10px] uppercase tracking-[0.4em] font-black">
                    Unit_{project.id.slice(0, 4).toUpperCase()}
                  </span>
                  <div className="h-px w-8 bg-primary/30" />
                  <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">
                    Rev_01.25
                  </span>
                </div>
                <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[1.1] pb-2">
                  {project.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {i % 2 === 1 ? <span className="text-primary">{word}</span> : word}{' '}
                    </React.Fragment>
                  ))}
                </h1>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="aspect-[16/9] w-full overflow-hidden rounded-[3rem] border border-white/10 relative group bg-black shadow-2xl"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/[0.02] to-transparent">
                  <Icon size={120} className="text-white/5" />
                </div>
              )}
              {/* UI Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 font-mono text-[10px] uppercase tracking-widest text-white/60 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Feed: Connected
                    </div>
                    <div>Source: {project.id.slice(0, 12)}</div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="px-6 py-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 text-primary font-mono text-[10px] font-bold uppercase tracking-[0.3em]">
                    System_Visual_Report
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 h-px bg-primary/30 top-0 animate-[scan_4s_ease-in-out_infinite]" />
            </motion.div>
          </div>

          {/* Detailed Content Sections */}
          <div className="grid sm:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xs font-mono font-black uppercase tracking-[0.4em] text-primary flex items-center gap-3">
                <Layers size={14} /> Architecture Summary
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {project.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-xs font-mono font-black uppercase tracking-[0.4em] text-accent flex items-center gap-3">
                <Search size={14} /> Project Scope
              </h2>
              <div className="space-y-4">
                {['Complex Workflow Automation', 'Distributed Data Management', 'High-Frequency Processing', 'Secure Logic Layer'].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-1 h-1 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-bold uppercase tracking-tight text-white/60 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* The Technical Blueprint (New Interactive Section) */}
          <div className="space-y-8 p-10 sm:p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative z-10">
              <div className="space-y-2">
                <h3 className="text-3xl font-black uppercase tracking-tighter">System Blueprint.</h3>
                <p className="text-sm text-white/40 font-mono uppercase tracking-widest">Logic Stack & Infrastructure</p>
              </div>
              <div className="flex gap-2">
                {project.tech_stack?.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 relative z-10">
              <BlueprintNode icon={<Database size={20} />} title="Core Layer" desc="Optimized PostgreSQL persistence with real-time replication." />
              <BlueprintNode icon={<Network size={20} />} title="API Gateway" desc="Next.js serverless routes with edge caching protocols." />
              <BlueprintNode icon={<Lock size={20} />} title="Logic Vault" desc="Encrypted business logic execution within isolated environments." />
            </div>
          </div>
        </div>

        {/* Sidebar Status Dashboard */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[3rem] border border-white/10 bg-black/40 backdrop-blur-2xl sticky top-24 space-y-10 shadow-2xl overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center">
                <h3 className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] font-black flex items-center gap-2">
                  <Activity size={14} className="animate-pulse" /> System Diagnostics
                </h3>
                <span className="text-[10px] font-mono font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">HEALTHY</span>
              </div>
              
              <div className="space-y-8">
                <StatusItem label="Entity" value={project.client_name || "Proprietary Client"} icon={<Building2 size={16} />} />
                <StatusItem label="Deployment" value={project.completion_date || "Operational"} icon={<Calendar size={16} />} />
                
                <div className="pt-6 space-y-4 border-t border-white/5">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Live Load</span>
                    <span className="text-xs font-mono font-black text-primary">0.04%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "4%" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-mono font-bold text-white/30 uppercase tracking-widest">Logic Efficiency</span>
                    <span className="text-xs font-mono font-black text-accent">98.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "98.2%" }}
                      className="h-full bg-accent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-[0.2em] text-[10px] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
                >
                  Access Interface <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
                </a>
              )}
              <Link
                href="/contact"
                className="w-full px-8 py-5 bg-white/5 text-white border border-white/10 font-black rounded-2xl uppercase tracking-[0.2em] text-[10px] hover:bg-white/10 transition-all flex items-center justify-center gap-3 group"
              >
                Request Similar System <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 relative z-10">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Lat_Ref</span>
                <div className="text-xs font-mono font-bold text-white/60">34.0837° N</div>
              </div>
              <div className="space-y-1 text-right">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Long_Ref</span>
                <div className="text-xs font-mono font-bold text-white/60">74.7973° E</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0%, 100% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function StatusItem({ label, value, icon }: any) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 group-hover:text-primary group-hover:bg-primary/5 transition-all">
        {icon}
      </div>
      <div>
        <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-black block mb-1 font-mono">{label}</span>
        <span className="text-white font-black text-lg tracking-tight group-hover:text-primary transition-colors">{value}</span>
      </div>
    </div>
  );
}

function BlueprintNode({ icon, title, desc }: any) {
  return (
    <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-all group">
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h4 className="text-sm font-black uppercase tracking-widest mb-2 group-hover:text-primary transition-colors">{title}</h4>
      <p className="text-xs text-white/40 leading-relaxed font-mono uppercase">{desc}</p>
    </div>
  );
}

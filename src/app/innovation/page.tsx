"use client";

import React, { useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { 
  Beaker, 
  Terminal, 
  Cpu, 
  Search, 
  Braces, 
  Zap, 
  ArrowRight,
  Code2,
  Gauge,
  History,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import Link from "next/link";

export default function InnovationHubPage() {
  const [activeTab, setActiveTab] = useState("tools");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 grid-command opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
        </div>

        <div className="container py-12 sm:py-24 relative z-10">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 font-mono text-[10px] uppercase tracking-widest font-bold">
                <Beaker size={14} /> The Innovation Labs
              </div>
              <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[1.1] pb-2">
                Where Ideas <br />
                <span className="text-accent">Become Systems.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our sandbox of interactive engineering tools, technical research, and beta prototypes designed for the next generation of business.
              </p>
            </div>

            {/* Labs Navigation */}
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setActiveTab("tools")}
                className={`px-8 py-3 rounded-2xl font-mono text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'tools' ? 'bg-accent text-white shadow-[0_0_30px_rgba(var(--accent),0.3)]' : 'bg-muted/50 text-muted-foreground border border-border dark:border-white/10'}`}
              >
                Engineering Tools
              </button>
              <button 
                onClick={() => setActiveTab("research")}
                className={`px-8 py-3 rounded-2xl font-mono text-xs uppercase tracking-widest font-bold transition-all ${activeTab === 'research' ? 'bg-accent text-white shadow-[0_0_30px_rgba(var(--accent),0.3)]' : 'bg-muted/50 text-muted-foreground border border-border dark:border-white/10'}`}
              >
                Technical R&D
              </button>
            </div>

            {activeTab === "tools" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ToolCard 
                  icon={<Braces size={24} />}
                  title="JSON Blueprint Validator"
                  description="Sanitize and validate complex enterprise data structures against global standards."
                  color="text-blue-500"
                  link="/innovation/json-validator"
                  active
                />
                <ToolCard 
                  icon={<Gauge size={24} />}
                  title="System Performance Audit"
                  description="Simulate real-world load conditions to test the endurance of your digital architecture."
                  color="text-emerald-500"
                  link="#"
                />
                <ToolCard 
                  icon={<Terminal size={24} />}
                  title="Logic Engine Shell"
                  description="A browser-based playground to test custom business logic algorithms in real-time."
                  color="text-orange-500"
                  link="#"
                />
                <ToolCard 
                  icon={<ShieldCheck size={24} />}
                  title="Security Protocol Tester"
                  description="Analyze your endpoint vulnerability and encryption strength against modern threats."
                  color="text-primary"
                  link="#"
                />
                <ToolCard 
                  icon={<Smartphone size={24} />}
                  title="Cross-Device Optimizer"
                  description="Preview and refine system responsiveness across every possible viewport and OS."
                  color="text-violet-500"
                  link="#"
                />
                <ToolCard 
                  icon={<History size={24} />}
                  title="Legacy Migration Map"
                  description="Input your legacy tech stack to generate a step-by-step modernization blueprint."
                  color="text-accent"
                  link="#"
                />
              </div>
            ) : (
              <div className="space-y-12">
                <ResearchItem 
                  title="Project Quantum Resonance"
                  date="March 2025"
                  description="Implementing post-quantum cryptography in distributed enterprise ledger systems."
                  tags={["Security", "Quantum", "Research"]}
                />
                <ResearchItem 
                  title="Neural Architecture Optimization"
                  date="February 2025"
                  description="Using machine learning to dynamically re-allocate server resources based on predictive traffic patterns."
                  tags={["AI", "Infrastructure", "Scaling"]}
                />
                <ResearchItem 
                  title="Zero-Latency State Sync"
                  date="January 2025"
                  description="Exploring new WebSocket protocols for real-time data synchronization in high-frequency environments."
                  tags={["Networking", "Performance", "R&D"]}
                />
              </div>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}

function ToolCard({ icon, title, description, color, link, active = false }: { icon: React.ReactNode, title: string, description: string, color: string, link: string, active?: boolean }) {
  return (
    <Link 
      href={link}
      className={`p-8 rounded-[2.5rem] border transition-all group flex flex-col justify-between h-full relative overflow-hidden ${
        active 
        ? 'bg-white/[0.03] border-accent/40 hover:border-accent shadow-[0_20px_40px_rgba(var(--accent),0.1)]' 
        : 'bg-white/[0.01] border-white/5 hover:border-white/10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
      }`}
    >
      {active && (
        <div className="absolute top-0 right-0 p-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] font-mono font-bold text-emerald-500 uppercase tracking-widest">Active_Beta</span>
          </div>
        </div>
      )}
      <div>
        <div className={`w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-8 ${color} group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          {icon}
        </div>
        <h3 className="text-xl font-black uppercase tracking-tight mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-white/40 leading-relaxed mb-8 font-medium">{description}</p>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-accent group-hover:translate-x-2 transition-all">
        {active ? 'Initialize Tool' : 'System Pending'} <ArrowRight size={14} />
      </div>
    </Link>
  );
}

function ResearchItem({ title, date, description, tags }: { title: string, date: string, description: string, tags: string[] }) {
  return (
    <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all grid md:grid-cols-[1fr,200px] gap-8 items-center group">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-white/30 font-bold tracking-widest uppercase">{date}</span>
          <div className="h-px w-8 bg-white/10" />
          <div className="flex gap-2">
            {tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-accent/10 text-accent rounded text-[10px] font-mono uppercase font-bold">{tag}</span>
            ))}
          </div>
        </div>
        <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-white/40 max-w-2xl leading-relaxed">{description}</p>
      </div>
      <button className="px-8 py-5 bg-accent/10 text-accent border border-accent/20 rounded-2xl font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-accent hover:text-white transition-all shadow-[0_10px_20px_rgba(var(--accent),0.1)]">
        Read Blueprint
      </button>
    </div>
  );
}

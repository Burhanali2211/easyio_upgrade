"use client";

import React, { useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { 
  Code2, 
  FileJson, 
  Check, 
  Copy, 
  AlertCircle, 
  Trash2, 
  Maximize2,
  Minimize2,
  Zap,
  Braces
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function JSONValidatorPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFormat = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const handleMinify = () => {
    try {
      if (!input.trim()) return;
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError(null);
    } catch (e: any) {
      setError(e.message);
      setOutput("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <section className="container py-12 sm:py-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-[10px] uppercase tracking-[0.3em] font-black">
                <Braces size={14} /> The Labs // Tools
              </div>
              <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter">
                JSON <span className="text-primary">Architect.</span>
              </h1>
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                Professional-grade validator & formatter for complex data structures.
              </p>
            </div>

            <div className={`grid gap-6 ${isExpanded ? "grid-cols-1" : "lg:grid-cols-2"}`}>
              {/* Input Area */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <Code2 size={12} /> Input Source
                  </span>
                  <button 
                    onClick={handleClear}
                    className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-red-500 transition-colors flex items-center gap-2"
                  >
                    <Trash2 size={12} /> Clear
                  </button>
                </div>
                <div className="relative group">
                  <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste your raw JSON here..."
                    className="w-full h-[400px] p-6 rounded-[2rem] bg-card/50 backdrop-blur-sm border border-border dark:border-white/10 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button 
                      onClick={handleMinify}
                      className="px-4 py-2 bg-background border border-border dark:border-white/10 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-muted transition-colors"
                    >
                      Minify
                    </button>
                    <button 
                      onClick={handleFormat}
                      className="px-6 py-2 bg-primary text-white rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                    >
                      <Zap size={12} fill="currentColor" /> Format
                    </button>
                  </div>
                </div>
              </div>

              {/* Output Area */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <FileJson size={12} /> Output Feed
                  </span>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {isExpanded ? <><Minimize2 size={12} /> Collapse</> : <><Maximize2 size={12} /> Expand</>}
                    </button>
                    {output && (
                      <button 
                        onClick={handleCopy}
                        className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
                      >
                        {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy Result</>}
                      </button>
                    )}
                  </div>
                </div>
                <div className="relative min-h-[400px]">
                  <AnimatePresence mode="wait">
                    {error ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 p-8 rounded-[2rem] bg-red-500/5 border border-red-500/20 text-red-500 font-mono text-sm space-y-4"
                      >
                        <div className="flex items-center gap-2 font-black">
                          <AlertCircle size={18} /> CRITICAL PARSE ERROR
                        </div>
                        <p className="opacity-80 leading-relaxed uppercase">{error}</p>
                      </motion.div>
                    ) : (
                      <div className="w-full h-full p-6 rounded-[2rem] bg-foreground text-background font-mono text-sm overflow-auto whitespace-pre selection:bg-primary selection:text-white border border-border dark:border-white/10">
                        {output || "Formatted output will appear here..."}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-border dark:border-white/10">
              <ToolFeature 
                title="Strict Validation"
                desc="Identifies missing commas, trailing quotes, and structural inconsistencies."
              />
              <ToolFeature 
                title="Zero Logging"
                desc="Data is processed client-side. We never store or transmit your code."
              />
              <ToolFeature 
                title="Big Data Ready"
                desc="Optimized for large JSON files up to 5MB with instant rendering."
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function ToolFeature({ title, desc }: any) {
  return (
    <div className="space-y-2">
      <h3 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-primary">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-tight">{desc}</p>
    </div>
  );
}

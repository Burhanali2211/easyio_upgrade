"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface TerminalWidgetProps {
  lines: string[];
  onCommand?: (command: string) => void;
}

export default function TerminalWidget({ lines, onCommand }: TerminalWidgetProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && onCommand) {
      onCommand(input);
      setInput("");
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card dark:bg-[#08080f] border border-border dark:border-white/10 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border dark:border-white/10 relative z-10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80 animate-pulse" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 animate-pulse" />
        </div>
        <span className="text-[10px] font-mono text-muted-foreground dark:text-white/50 uppercase tracking-widest ml-2">terminal_v2.5_interactive</span>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-mono text-emerald-500 uppercase font-bold">LIVE</span>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="font-mono text-xs sm:text-sm space-y-1.5 text-emerald-400 relative z-10 h-[220px] overflow-y-auto overflow-x-hidden hide-scrollbar pr-2"
      >
        {lines.map((line, i) => (
          <motion.div
            key={`${line}-${i}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-start gap-2 break-all"
          >
            {!line.startsWith('>') && !line.startsWith(' ') && <span className="text-emerald-500/60 flex-shrink-0">$</span>}
            <span className={line.startsWith('>') ? 'text-primary' : ''}>{line}</span>
          </motion.div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
          <span className="text-emerald-500/60">$</span>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-emerald-400 focus:ring-0 p-0"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}

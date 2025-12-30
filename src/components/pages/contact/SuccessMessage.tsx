"use client";

import { CheckCircle2 } from "lucide-react";

interface SuccessMessageProps {
  onReset: () => void;
}

export default function SuccessMessage({ onReset }: SuccessMessageProps) {
  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-card dark:bg-[#050508] border border-border dark:border-white/5 text-center relative overflow-hidden">
      <div className="absolute inset-0 grid-command opacity-50" />
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} className="text-emerald-500" />
        </div>
        <h2 className="text-foreground dark:text-white text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight">Transmission Complete</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Your message has been encrypted and delivered. Expect a response within 24 hours via your specified channel.
        </p>
        <button
          onClick={onReset}
          className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-transform"
        >
          Initiate New Channel
        </button>
      </div>
    </div>
  );
}

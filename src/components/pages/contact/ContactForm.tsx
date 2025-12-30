"use client";

import { Send, Loader2, ArrowRight } from "lucide-react";
import { ContactFormData, ContactType } from "./types";
import ContactTypeSelector from "./ContactTypeSelector";
import { contactTypes } from "./constants";

interface ContactFormProps {
  formData: ContactFormData;
  loading: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
  onUpdate: (updates: Partial<ContactFormData>) => void;
  onTypeSelect: (type: ContactType) => void;
}

export default function ContactForm({
  formData,
  loading,
  error,
  onSubmit,
  onUpdate,
  onTypeSelect,
}: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <ContactTypeSelector
        types={contactTypes}
        selectedType={formData.type}
        onSelect={onTypeSelect}
      />

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="group">
            <label className="text-muted-foreground dark:text-white/50 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => onUpdate({ name: e.target.value })}
              className="w-full px-5 py-4 bg-card dark:bg-[#08080f] border border-border dark:border-white/15 rounded-xl text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-mono text-sm"
              placeholder="identifier_"
            />
          </div>
          <div className="group">
            <label className="text-muted-foreground dark:text-white/50 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => onUpdate({ email: e.target.value })}
              className="w-full px-5 py-4 bg-card dark:bg-[#08080f] border border-border dark:border-white/15 rounded-xl text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-mono text-sm"
              placeholder="node@domain.com"
            />
          </div>
        </div>

        <div>
          <label className="text-muted-foreground dark:text-white/50 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Organization</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => onUpdate({ company: e.target.value })}
            className="w-full px-5 py-4 bg-card dark:bg-[#08080f] border border-border dark:border-white/15 rounded-xl text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-mono text-sm"
            placeholder="corp_entity (optional)"
          />
        </div>

        <div>
          <label className="text-muted-foreground dark:text-white/50 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Message Payload</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => onUpdate({ message: e.target.value })}
            className="w-full px-5 py-4 bg-card dark:bg-[#08080f] border border-border dark:border-white/15 rounded-xl text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/40 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all resize-none font-mono text-sm"
            placeholder="Enter transmission data..."
          />
        </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-sm font-mono">
          [ERROR] {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="group w-full px-8 py-5 bg-primary text-primary-foreground font-black rounded-xl uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <>
            <Send size={18} /> 
            Execute Transmission
            <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          </>
        )}
      </button>
    </form>
  );
}

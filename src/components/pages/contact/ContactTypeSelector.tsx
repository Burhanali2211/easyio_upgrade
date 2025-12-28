"use client";

import { motion } from "framer-motion";
import { ContactType, ContactTypeOption } from "./types";

interface ContactTypeSelectorProps {
  types: ContactTypeOption[];
  selectedType: ContactType;
  onSelect: (type: ContactType) => void;
}

export default function ContactTypeSelector({ types, selectedType, onSelect }: ContactTypeSelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {types.map((type) => (
        <motion.button
          key={type.id}
          type="button"
          onClick={() => onSelect(type.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
            className={`group relative p-4 sm:p-6 rounded-2xl border transition-all text-left overflow-hidden ${
              selectedType === type.id
                ? 'bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                : 'bg-white/[0.04] border-white/10 hover:border-white/20'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${
              selectedType === type.id 
                ? 'bg-primary/30 text-primary scale-110 rotate-3' 
                : 'bg-white/10 text-white/50 group-hover:scale-105'
            }`}>
              {type.icon}
            </div>
            <p className={`font-bold text-xs sm:text-sm transition-colors ${
              selectedType === type.id ? 'text-white' : 'text-white/70 group-hover:text-white'
            }`}>
              {type.label}
            </p>
            <p className="text-[10px] text-white/40 mt-1 hidden sm:block">{type.desc}</p>
          {selectedType === type.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary"
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}

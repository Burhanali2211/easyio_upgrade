"use client";

import { memo, useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = memo(({ value, onChange, placeholder = "Search engines..." }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-8 sm:mb-12"
    >
      <div className={`
        relative flex items-center gap-3
        px-4 sm:px-6 py-3 sm:py-4
        rounded-xl sm:rounded-2xl
        bg-card dark:bg-white/[0.04] border border-border dark:border-white/10
        transition-all duration-300
        ${isFocused ? 'border-primary/40 dark:bg-white/[0.06] shadow-[0_0_20px_rgba(var(--primary),0.1)]' : ''}
      `}>
        <Search 
          size={18} 
          className={`transition-colors ${isFocused ? 'text-primary' : 'text-muted-foreground dark:text-white/40'}`} 
          strokeWidth={1.5}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="
            flex-1 bg-transparent border-none outline-none
            text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/30
            text-sm sm:text-base font-medium
          "
        />
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => onChange('')}
            className="p-1 rounded-lg hover:bg-muted dark:hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={16} className="text-muted-foreground dark:text-white/40 hover:text-foreground dark:hover:text-white/60" strokeWidth={2} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;


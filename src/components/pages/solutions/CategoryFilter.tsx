"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = memo(({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  if (categories.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12 w-full overflow-x-hidden">
      <motion.button
        onClick={() => onCategoryChange(null)}
          className={`
            px-4 sm:px-6 py-2 sm:py-2.5 rounded-full 
            text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider
            transition-all duration-300
            ${activeCategory === null
              ? 'bg-primary text-primary-foreground border border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]'
              : 'bg-muted/50 dark:bg-white/[0.04] text-muted-foreground dark:text-white/60 border border-border dark:border-white/10 hover:border-primary/30 dark:hover:text-white/80'
            }
          `}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        All Engines
      </motion.button>
      
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 sm:px-6 py-2 sm:py-2.5 rounded-full 
            text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider
            transition-all duration-300
            ${activeCategory === category
              ? 'bg-primary text-primary-foreground border border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]'
              : 'bg-muted/50 dark:bg-white/[0.04] text-muted-foreground dark:text-white/60 border border-border dark:border-white/10 hover:border-primary/30 dark:hover:text-white/80'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
});

CategoryFilter.displayName = 'CategoryFilter';

export default CategoryFilter;


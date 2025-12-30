"use client";

import { useMemo } from "react";
import { Loader2, Terminal, Database } from "lucide-react";
import { LogicEngine } from "./types";
import EngineCard from "./EngineCard";
import CategoryFilter from "./CategoryFilter";
import SearchBar from "./SearchBar";

interface EnginesGridProps {
  engines: LogicEngine[];
  loading: boolean;
  error: string | null;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  activeCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
}

export default function EnginesGrid({ 
  engines, 
  loading, 
  error,
  searchQuery = '',
  onSearchChange,
  activeCategory = null,
  onCategoryChange
}: EnginesGridProps) {
  // Extract unique categories
  const categories = useMemo(() => {
    const cats = engines
      .map(e => e.category)
      .filter((cat): cat is string => Boolean(cat));
    return Array.from(new Set(cats)).sort();
  }, [engines]);

  // Filter engines based on search and category
  const filteredEngines = useMemo(() => {
    let filtered = engines;

    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(e => e.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(query) ||
        e.description.toLowerCase().includes(query) ||
        e.use_case?.toLowerCase().includes(query) ||
        e.category?.toLowerCase().includes(query) ||
        e.features?.some(f => f.toLowerCase().includes(query))
      );
    }

    // Sort by priority (featured first), then by created_at
    return filtered.sort((a, b) => {
      const priorityA = a.priority || 0;
      const priorityB = b.priority || 0;
      if (priorityA !== priorityB) {
        return priorityB - priorityA; // Higher priority first
      }
      return 0;
    });
  }, [engines, activeCategory, searchQuery]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="text-primary/50" size={20} />
          </div>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground dark:text-white/30 uppercase tracking-widest">Loading engines...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <Terminal size={24} className="text-red-500" strokeWidth={1.5} />
        </div>
        <p className="text-red-400 font-mono text-sm uppercase tracking-widest">{error}</p>
      </div>
    );
  }

  if (engines.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-16 h-16 rounded-full bg-muted dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center">
          <Database size={24} className="text-muted-foreground dark:text-white/30" strokeWidth={1.5} />
        </div>
        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">No engines available</p>
      </div>
    );
  }

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-8 sm:mb-12">
        {onSearchChange && (
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        )}
        {onCategoryChange && categories.length > 0 && (
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory}
            onCategoryChange={onCategoryChange}
          />
        )}
      </div>

      {/* Results Count */}
      {filteredEngines.length !== engines.length && (
        <div className="mb-6 text-sm font-mono text-muted-foreground dark:text-white/40 uppercase tracking-wider">
          Showing {filteredEngines.length} of {engines.length} engines
        </div>
      )}

      {/* No Results */}
      {filteredEngines.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-16 h-16 rounded-full bg-muted dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center">
            <Database size={24} className="text-muted-foreground dark:text-white/30" strokeWidth={1.5} />
          </div>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
            No engines found matching your criteria
          </p>
        </div>
      )}

      {/* Dynamic Grid Layout */}
      {filteredEngines.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr w-full overflow-x-hidden">
          {filteredEngines.map((engine, index) => {
            // Determine card size based on priority
            const isFeatured = (engine.priority || 0) > 0;
            const size = isFeatured ? 'large' : 'medium';
            
            return (
              <div
                key={engine.id}
                className={`${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''} w-full min-w-0`}
              >
                <EngineCard 
                  engine={engine} 
                  index={index}
                  size={size}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

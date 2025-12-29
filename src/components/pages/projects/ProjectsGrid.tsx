"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, X, Loader2, Database } from "lucide-react";
import { Project } from "@/components/sections/our-work/types";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  loading: boolean;
}

export default function ProjectsGrid({ projects, loading }: ProjectsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('newest');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = projects
      .map(p => p.category)
      .filter((cat): cat is string => Boolean(cat));
    return Array.from(new Set(cats)).sort();
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category?.toLowerCase().includes(query) ||
        p.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        p.tech_stack?.some(tech => tech.toLowerCase().includes(query)) ||
        p.client_name?.toLowerCase().includes(query)
      );
    }

    // Sort projects
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
      }
      
      if (sortBy === 'newest') {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateB - dateA;
      } else {
        const dateA = a.created_at ? new Date(a.created_at).getTime() : 0;
        const dateB = b.created_at ? new Date(b.created_at).getTime() : 0;
        return dateA - dateB;
      }
    });

    return filtered;
  }, [projects, selectedCategory, searchQuery, sortBy]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="text-primary/50" size={20} />
          </div>
        </div>
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading projects...</span>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <Database size={24} className="text-white/30" strokeWidth={1.5} />
        </div>
        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">No projects available</p>
      </div>
    );
  }

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-8 sm:mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} strokeWidth={1.5} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by name, tech, client..."
            className="w-full pl-12 pr-12 py-4 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 text-sm sm:text-base font-medium focus:border-primary/40 focus:bg-white/[0.06] focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X size={16} className="text-white/40" />
            </button>
          )}
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-white/40" />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Filter:</span>
          </div>
          
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all ${
              selectedCategory === null
                ? 'bg-primary text-white border border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                : 'bg-white/[0.04] text-white/60 border border-white/10 hover:border-primary/30 hover:text-white/80'
            }`}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white border border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'bg-white/[0.04] text-white/60 border border-white/10 hover:border-primary/30 hover:text-white/80'
              }`}
            >
              {category}
            </button>
          ))}

          {/* Sort Dropdown */}
          <div className="ml-auto flex items-center gap-2">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'featured')}
              className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider focus:border-primary/40 focus:outline-none transition-all"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="featured">Featured</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        {filteredProjects.length !== projects.length && (
          <div className="text-sm font-mono text-white/40 uppercase tracking-wider">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        )}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <Database size={24} className="text-white/30" strokeWidth={1.5} />
          </div>
          <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
            No projects found matching your criteria
          </p>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="flex">
              <ProjectCard 
                project={project} 
                index={index}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


"use client";

import React, { memo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Project } from './types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface OurWorkSectionProps {
  projects?: Project[];
}

const OurWorkSection = memo(({ projects = [] }: OurWorkSectionProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_DISPLAY = 3;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY);
  const hasMore = projects.length > INITIAL_DISPLAY;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setTimeout(() => {
        const element = document.getElementById('our-work');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section id="our-work" className="py-20 sm:py-32 bg-background dark:bg-[#020202] relative z-10 overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 sm:px-6">
        <div className="flex flex-col mb-12 sm:mb-20 text-center items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold mb-6 animate-fadeIn">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            System Portfolio
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 animate-fadeIn tracking-tight">
            Engineering <span className="text-primary">Success Stories</span>
          </h2>
          <p className="max-w-3xl text-muted-foreground text-base sm:text-xl animate-fadeIn leading-relaxed">
            We don&apos;t just build websites; we architect high-performance digital ecosystems that power global enterprises at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 transition-all duration-500 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id} 
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fadeIn"
            >
              <ProjectCard 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
        
        {hasMore && (
          <div className="mt-10 sm:mt-16 flex justify-center">
            <button 
              onClick={handleToggleShowAll}
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-muted dark:bg-white/5 border border-border dark:border-white/10 rounded-xl sm:rounded-2xl text-foreground font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-muted/80 dark:hover:bg-white/10 hover:border-primary/20 dark:hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <ArrowRight size={14} className="rotate-180 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    <span>View All Projects</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
});

OurWorkSection.displayName = 'OurWorkSection';

export default OurWorkSection;

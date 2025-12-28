"use client";

import React, { memo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectCard from './our-work/ProjectCard';
import ProjectModal from './our-work/ProjectModal';
import { Project } from './our-work/types';

interface OurWorkProps {
  projects?: Project[];
}

const OurWork = memo(({ projects = [] }: OurWorkProps) => {
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
    <section id="our-work" className="py-16 sm:py-24 bg-background dark:bg-[#020202] relative z-10">
      <div className="container">
        <div className="flex flex-col mb-10 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 animate-fadeIn">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-8 animate-fadeIn">
            Engineering <span className="text-foreground">Success Stories</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground text-sm sm:text-lg animate-fadeIn">
            We don&apos;t just build websites; we architect complex digital systems that power businesses at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 transition-all duration-500">
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

OurWork.displayName = 'OurWork';

export default OurWork;

"use client";

import React, { memo, useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Database, Cpu, Globe, Shield, X, Calendar, Building2, Code2, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon_type: string;
  tags: string[];
  client_name?: string;
  completion_date?: string;
  tech_stack?: string[];
  live_url?: string;
  case_study?: string;
  featured?: boolean;
}

const IconMap: Record<string, React.ElementType> = {
  database: Database,
  cpu: Cpu,
  globe: Globe,
  shield: Shield,
};

const ProjectCard = memo(({ project, onClick }: { project: Project; onClick: () => void }) => {
  const Icon = IconMap[project.icon_type] || Database;
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col obsidian-card rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer animate-fadeIn hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
            <Icon size={40} className="text-white/20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 p-2 sm:p-3 rounded-lg sm:rounded-xl glass-effect text-primary">
          <Icon size={20} className="sm:w-6 sm:h-6" />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="px-6 py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
            Access Mission Report <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col p-5 sm:p-8 pt-4 sm:pt-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-primary font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">
            {project.category}
          </span>
          <ExternalLink size={14} className="sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <h3 className="text-white text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
          {(project.tags || []).slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[8px] sm:text-[10px] text-white/60 font-medium uppercase tracking-tight">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

const ProjectModal = memo(({ project, onClose }: { project: Project; onClose: () => void }) => {
  const Icon = IconMap[project.icon_type] || Database;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0f] border border-white/10 rounded-3xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X size={20} className="text-white" />
        </button>
        
        <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <Icon size={60} className="text-white/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        </div>
        
        <div className="p-8 sm:p-12 -mt-20 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
              <Icon size={24} />
            </div>
            <div>
              <span className="text-primary font-mono text-xs uppercase tracking-widest font-bold">
                {project.category}
              </span>
              <h2 className="text-white text-2xl sm:text-4xl font-black">{project.title}</h2>
            </div>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {project.description}
          </p>
          
          {project.case_study && (
            <div className="mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-primary font-mono text-xs uppercase tracking-widest font-bold mb-4">Case Study</h3>
              <p className="text-white/80 leading-relaxed">{project.case_study}</p>
            </div>
          )}
          
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {project.client_name && (
              <div className="flex items-start gap-3">
                <Building2 size={20} className="text-primary mt-1" />
                <div>
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold block mb-1">Client</span>
                  <span className="text-white font-medium">{project.client_name}</span>
                </div>
              </div>
            )}
            {project.completion_date && (
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-primary mt-1" />
                <div>
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold block mb-1">Completed</span>
                  <span className="text-white font-medium">{project.completion_date}</span>
                </div>
              </div>
            )}
            {project.tech_stack && project.tech_stack.length > 0 && (
              <div className="flex items-start gap-3 sm:col-span-1">
                <Code2 size={20} className="text-primary mt-1" />
                <div>
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold block mb-1">Tech Stack</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech_stack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-md font-medium">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Launch Live System <ExternalLink size={14} />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl uppercase tracking-widest text-xs hover:bg-white/10 transition-colors"
            >
              Terminate Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectModal.displayName = 'ProjectModal';

interface OurWorkProps {
  projects?: Project[];
}

const OurWork = memo(({ projects = [] }: OurWorkProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Show only 3 projects initially for better UX
  const INITIAL_DISPLAY = 3;
  const displayedProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY);
  const hasMore = projects.length > INITIAL_DISPLAY;

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
    // Smooth scroll to section after expanding
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
    <section id="our-work" className="py-16 sm:py-24 bg-[#020202] relative z-10">
      <div className="container">
        <div className="flex flex-col mb-10 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 animate-fadeIn">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-8 animate-fadeIn">
            Engineering <span className="text-white">Success Stories</span>
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
              className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
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

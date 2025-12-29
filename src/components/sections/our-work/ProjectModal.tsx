"use client";

import React, { memo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Database, X, Calendar, Building2, Code2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { Project } from './types';
import { IconMap } from './constants';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = memo(({ project, onClose }: ProjectModalProps) => {
  const Icon = IconMap[project.icon_type] || Database;

  // Lock body scroll when modal is open
  useEffect(() => {
    // Save the current scroll position
    const scrollY = window.scrollY;
    
    // Lock body scroll
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // Cleanup: restore scroll when modal closes
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-3xl max-h-[50vh] sm:max-h-[75vh] md:max-h-[90vh] overflow-hidden bg-card dark:bg-[#050507] border border-border dark:border-white/10 rounded-xl sm:rounded-2xl md:rounded-[2rem] shadow-2xl flex flex-col animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-2.5 sm:p-4 border-b border-border dark:border-white/5 bg-muted/30 dark:bg-white/[0.02]">
          <div className="flex items-center gap-1.5 sm:gap-2 text-primary font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold">
            <ShieldCheck size={12} className="sm:w-[14px] sm:h-[14px]" />
            <span className="hidden sm:inline">Secure System Preview</span>
            <span className="sm:hidden">Preview</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted dark:bg-white/5 flex items-center justify-center hover:bg-muted/80 dark:hover:bg-white/20 transition-all hover:rotate-90 duration-300"
          >
            <X size={14} className="sm:w-4 sm:h-4 text-foreground" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Hero Image Area */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full bg-muted dark:bg-white/5 flex items-center justify-center">
                <Icon size={32} className="sm:w-12 sm:h-12 text-muted-foreground dark:text-white/20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card dark:from-[#050507] via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-2 sm:mb-3">
                <Cpu size={10} className="sm:w-3 sm:h-3" />
                {project.category}
              </div>
              <h2 className="text-foreground text-lg sm:text-2xl md:text-4xl font-black leading-[1.15] pb-1 sm:pb-2 drop-shadow-lg">
                {project.title}
              </h2>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 md:p-10 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Description Section */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                {project.description}
              </p>
              
              {project.case_study && (
                <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-muted/50 dark:bg-white/[0.03] border border-border dark:border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                  <h3 className="text-primary font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-black mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                    Operational Insights
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed italic">
                    "{project.case_study}"
                  </p>
                </div>
              )}
            </div>
            
            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-muted/30 dark:bg-white/[0.01] border border-border dark:border-white/5">
              {project.client_name && (
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">
                    <Building2 size={10} className="sm:w-3 sm:h-3 text-primary/70" />
                    Client Partner
                  </div>
                  <div className="text-foreground text-xs sm:text-sm font-semibold truncate pb-0.5">
                    {project.client_name}
                  </div>
                </div>
              )}
              {project.completion_date && (
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">
                    <Calendar size={10} className="sm:w-3 sm:h-3 text-primary/70" />
                    Deployment Date
                  </div>
                  <div className="text-foreground text-xs sm:text-sm font-semibold">
                    {project.completion_date}
                  </div>
                </div>
              )}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <div className="space-y-1.5 sm:space-y-2 col-span-full sm:col-span-1 lg:col-span-1">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-bold">
                    <Code2 size={10} className="sm:w-3 sm:h-3 text-primary/70" />
                    System Core
                  </div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {project.tech_stack.map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 sm:px-2 text-[8px] sm:text-[9px] bg-primary/10 text-primary border border-primary/20 rounded-md font-bold uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 pt-3 sm:pt-4">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 bg-primary text-white font-black rounded-lg uppercase tracking-widest text-[9px] sm:text-[10px] hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all flex items-center justify-center gap-1.5 sm:gap-2 group"
                >
                  Initiate System <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 group-hover:rotate-12 transition-transform" />
                </a>
              )}
              <Link
                href={`/ourwork/${project.id}`}
                className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 bg-foreground text-background font-black rounded-lg uppercase tracking-widest text-[9px] sm:text-[10px] hover:shadow-[0_0_20px_rgba(var(--foreground),0.4)] transition-all flex items-center justify-center gap-1.5 sm:gap-2 group"
              >
                Deep Analytics <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 text-foreground/70 font-black rounded-lg uppercase tracking-widest text-[9px] sm:text-[10px] hover:text-foreground hover:bg-muted dark:hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Abort Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectModal.displayName = 'ProjectModal';

export default ProjectModal;

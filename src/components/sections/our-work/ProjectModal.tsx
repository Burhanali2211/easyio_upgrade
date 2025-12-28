"use client";

import React, { memo } from 'react';
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
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-card dark:bg-[#050507] border border-border dark:border-white/10 rounded-2xl sm:rounded-[2rem] shadow-2xl flex flex-col animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 border-b border-border dark:border-white/5 bg-muted/30 dark:bg-white/[0.02]">
          <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
            <ShieldCheck size={14} />
            <span>Secure System Preview</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-muted dark:bg-white/5 flex items-center justify-center hover:bg-muted/80 dark:hover:bg-white/20 transition-all hover:rotate-90 duration-300"
          >
            <X size={16} className="text-foreground" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Hero Image Area */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
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
                <Icon size={48} className="text-muted-foreground dark:text-white/20" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card dark:from-[#050507] via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary font-mono text-[10px] uppercase tracking-wider mb-3">
                <Cpu size={12} />
                {project.category}
              </div>
              <h2 className="text-foreground text-2xl sm:text-4xl font-black leading-tight drop-shadow-lg">
                {project.title}
              </h2>
            </div>
          </div>
          
          <div className="p-6 sm:p-10 space-y-8">
            {/* Description Section */}
            <div className="space-y-4">
              <p className="text-foreground/90 text-base sm:text-lg leading-relaxed font-medium">
                {project.description}
              </p>
              
              {project.case_study && (
                <div className="p-5 rounded-xl bg-muted/50 dark:bg-white/[0.03] border border-border dark:border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10 group-hover:bg-primary/10 transition-colors" />
                  <h3 className="text-primary font-mono text-[10px] uppercase tracking-widest font-black mb-3 flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                    Operational Insights
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic">
                    "{project.case_study}"
                  </p>
                </div>
              )}
            </div>
            
            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-muted/30 dark:bg-white/[0.01] border border-border dark:border-white/5">
              {project.client_name && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-[9px] uppercase tracking-widest font-bold">
                    <Building2 size={12} className="text-primary/70" />
                    Client Partner
                  </div>
                  <div className="text-foreground text-sm font-semibold truncate">
                    {project.client_name}
                  </div>
                </div>
              )}
              {project.completion_date && (
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-[9px] uppercase tracking-widest font-bold">
                    <Calendar size={12} className="text-primary/70" />
                    Deployment Date
                  </div>
                  <div className="text-foreground text-sm font-semibold">
                    {project.completion_date}
                  </div>
                </div>
              )}
              {project.tech_stack && project.tech_stack.length > 0 && (
                <div className="space-y-2 col-span-full sm:col-span-1 lg:col-span-1">
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-[9px] uppercase tracking-widest font-bold">
                    <Code2 size={12} className="text-primary/70" />
                    System Core
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech_stack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[9px] bg-primary/10 text-primary border border-primary/20 rounded-md font-bold uppercase tracking-tighter">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-primary text-white font-black rounded-lg uppercase tracking-widest text-[10px] hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  Initiate System <ExternalLink size={14} className="group-hover:rotate-12 transition-transform" />
                </a>
              )}
              <Link
                href={`/ourwork/${project.id}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-foreground text-background font-black rounded-lg uppercase tracking-widest text-[10px] hover:shadow-[0_0_20px_rgba(var(--foreground),0.4)] transition-all flex items-center justify-center gap-2 group"
              >
                Deep Analytics <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 bg-muted/50 dark:bg-white/5 border border-border dark:border-white/10 text-foreground/70 font-black rounded-lg uppercase tracking-widest text-[10px] hover:text-foreground hover:bg-muted dark:hover:bg-white/10 transition-all flex items-center justify-center"
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

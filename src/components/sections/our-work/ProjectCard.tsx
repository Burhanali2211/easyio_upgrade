"use client";

import React, { memo } from 'react';
import Image from 'next/image';
import { ExternalLink, Database, ArrowRight } from 'lucide-react';
import { Project } from './types';
import { IconMap } from './constants';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = memo(({ project, onClick }: ProjectCardProps) => {
  const Icon = IconMap[project.icon_type] || Database;
  return (
    <div 
      onClick={onClick}
      className="group relative flex flex-col obsidian-card rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer animate-fadeIn hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500"
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
          <div className="w-full h-full bg-muted dark:bg-white/5 flex items-center justify-center">
            <Icon size={40} className="text-muted-foreground dark:text-white/20" />
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
        
        <h3 className="text-foreground text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
          {(project.tags || []).slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-[8px] sm:text-[10px] text-muted-foreground dark:text-white/60 font-medium uppercase tracking-tight">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;

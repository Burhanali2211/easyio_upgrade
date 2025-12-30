"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ExternalLink, Calendar, Building2, Code2, 
  ArrowRight, Sparkles, TrendingUp, CheckCircle2 
} from "lucide-react";
import { Project } from "@/components/sections/our-work/types";
import { IconMap } from "@/components/sections/our-work/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  const Icon = IconMap[project.icon_type] || Code2;
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative flex flex-col w-full h-full"
    >
      <div className={`
        relative rounded-xl sm:rounded-2xl overflow-hidden
        bg-card dark:bg-white/[0.04] border border-border dark:border-white/10 
        hover:border-primary/40 dark:hover:bg-white/[0.06]
        transition-all duration-500 flex flex-col h-full w-full
        ${isFeatured ? 'ring-1 ring-primary/20' : ''}
      `}>
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <Sparkles size={10} className="text-primary" strokeWidth={2.5} />
              <span className="text-[9px] font-mono font-bold text-primary uppercase tracking-wider">
                Featured
              </span>
            </div>
          </div>
        )}

        {/* Image Section */}
        <div className="relative overflow-hidden flex-shrink-0 aspect-[4/3]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
              <Icon size={32} className="text-primary/30" strokeWidth={1.5} />
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent dark:from-background dark:via-background/40 dark:to-transparent opacity-80 dark:opacity-80 group-hover:opacity-60 dark:group-hover:opacity-60 transition-opacity" />
          
          {/* Icon Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon size={18} className="sm:w-5 sm:h-5 text-primary" strokeWidth={2} />
            </div>
          </div>

          {/* Hover CTA */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <Link
              href={project.live_url || `/ourwork/${project.id}`}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground font-bold text-[10px] sm:text-xs uppercase tracking-widest rounded-full flex items-center gap-2 transform group-hover:scale-105 transition-transform shadow-lg"
            >
              View Project
              <ArrowRight size={12} className="sm:w-[14px] sm:h-[14px]" />
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-4 sm:p-5 lg:p-6 min-h-0">
          {/* Category & Meta */}
          <div className="flex items-center justify-between mb-2 sm:mb-3 flex-shrink-0">
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider">
              {project.category}
            </span>
            {project.completion_date && (
              <div className="flex items-center gap-1.5 text-muted-foreground dark:text-white/40 text-[8px] sm:text-[9px] font-mono uppercase tracking-wider">
                <Calendar size={9} className="sm:w-[10px] sm:h-[10px]" />
                {new Date(project.completion_date).getFullYear()}
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-foreground dark:text-white mb-2 group-hover:text-primary transition-colors flex-shrink-0 line-clamp-2 text-base sm:text-lg lg:text-xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground dark:text-white/70 leading-relaxed mb-2 sm:mb-3 flex-grow min-h-0 line-clamp-3 text-xs sm:text-sm">
            {project.description}
          </p>

          {/* Client Info */}
          {project.client_name && (
            <div className="flex items-center gap-2 mb-2 sm:mb-3 p-2 rounded-lg bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5 flex-shrink-0">
              <Building2 size={11} className="sm:w-3 sm:h-3 text-primary/60" />
              <span className="text-[9px] sm:text-[10px] text-muted-foreground dark:text-white/50 font-mono uppercase tracking-wider truncate">
                {project.client_name}
              </span>
            </div>
          )}

          {/* Tech Stack */}
          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="mb-2 sm:mb-3 flex-shrink-0">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Code2 size={9} className="sm:w-[10px] sm:h-[10px] text-primary/60" />
                <span className="text-[7px] sm:text-[8px] font-mono font-bold text-primary/60 uppercase tracking-wider">
                  Tech
                </span>
              </div>
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {project.tech_stack.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 sm:px-2 py-0.5 rounded-lg bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5 text-[8px] sm:text-[9px] font-mono text-muted-foreground dark:text-white/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech_stack.length > 3 && (
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-lg bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5 text-[8px] sm:text-[9px] font-mono text-muted-foreground dark:text-white/30">
                    +{project.tech_stack.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3 flex-shrink-0">
              {project.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-1.5 sm:px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[7px] sm:text-[8px] font-mono text-primary uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Links */}
          <div className="flex items-center gap-2 sm:gap-3 mt-auto pt-2 sm:pt-3 border-t border-border dark:border-white/5 flex-shrink-0">
            <Link
              href={`/ourwork/${project.id}`}
              className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground dark:text-white/60 hover:text-primary transition-colors text-[10px] sm:text-xs font-mono uppercase tracking-wider group/link"
            >
              View Details
              <ArrowRight size={11} className="sm:w-3 sm:h-3 group-hover/link:translate-x-1 transition-transform" />
            </Link>
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground dark:text-white/60 hover:text-primary transition-colors text-[10px] sm:text-xs font-mono uppercase tracking-wider ml-auto"
              >
                <ExternalLink size={11} className="sm:w-3 sm:h-3" />
                Live Site
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;


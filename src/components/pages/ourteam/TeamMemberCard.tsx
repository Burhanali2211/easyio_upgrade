"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TeamMember } from "./types";

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const openSocialLink = (url: string | undefined) => {
    if (url) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-square rounded-full bg-white/[0.03] border border-white/5 overflow-hidden mb-4 sm:mb-6 group-hover:border-primary/30 transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        {member.image ? (
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary text-2xl sm:text-3xl font-black">
            {member.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 sm:gap-4 z-20">
          {member.twitter_url && (
            <button 
              onClick={() => openSocialLink(member.twitter_url)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all shadow-lg"
            >
              <Twitter size={14} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          )}
          {member.linkedin_url && (
            <button 
              onClick={() => openSocialLink(member.linkedin_url)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all shadow-lg"
            >
              <Linkedin size={14} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          )}
          {member.github_url && (
            <button 
              onClick={() => openSocialLink(member.github_url)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all shadow-lg"
            >
              <Github size={14} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          )}
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-lg sm:text-2xl font-bold text-white mb-0.5 sm:mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
        <p className="text-primary/60 font-mono text-[8px] sm:text-[10px] uppercase tracking-widest mb-2 sm:mb-4 font-bold">{member.role}</p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none pb-1">
          {member.bio}
        </p>
        
        <Link 
          href={`/contact?about=${encodeURIComponent(member.name)}`}
          className="flex items-center gap-1.5 sm:gap-2 text-white/40 group-hover:text-primary transition-colors text-[10px] sm:text-xs uppercase tracking-widest font-bold mt-auto group/link"
        >
          Open Channel 
          <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px] group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

"use client";

import { SocialLink } from "./types";

interface SocialLinksProps {
  links: SocialLink[];
  size?: "sm" | "md";
}

export default function SocialLinks({ links, size = "sm" }: SocialLinksProps) {
  const iconSize = size === "sm" ? 16 : 20;
  
  return (
    <div className={`flex items-center gap-2 ${size === "md" ? "justify-center py-6" : ""}`}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a 
            key={link.name} 
            href={link.href} 
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center justify-center rounded-lg transition-all duration-300
              ${size === "sm" 
                ? "w-9 h-9 bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary border border-white/5" 
                : "w-11 h-11 bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border"}
            `}
            title={link.name}
            aria-label={link.name}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}

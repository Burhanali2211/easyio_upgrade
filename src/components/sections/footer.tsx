"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/components/ui/logo';

type FooterLink = 
  | { name: string; href: string }
  | { name: string; href: string; external: boolean; icon: React.ReactElement };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks: Array<{
    title: string;
    links: FooterLink[];
  }> = [
    {
      title: "The Arsenal",
      links: [
        { name: "Quantum ERP", href: "/erp" },
        { name: "Neural Engines", href: "/solutions" },
        { name: "The Forge", href: "/programs" },
      ]
    },
    {
      title: "The Collective",
      links: [
        { name: "The Nucleus", href: "/about" },
        { name: "Alpha Squad", href: "/ourteam" },
        { name: "Mission Archive", href: "/ourwork" },
        { name: "Join The Ranks", href: "/careers" },
      ]
    },
    {
      title: "Knowledge Base",
      links: [
        { name: "Innovation Labs", href: "/courses" },
        { name: "Signal Hub", href: "/testimonials" },
        { name: "Open Channel", href: "/contact" },
      ]
    },
    {
      title: "Network Nodes",
      links: [
    { name: "LinkedIn", href: "https://linkedin.com", external: true, icon: <Linkedin size={14} className="sm:w-4 sm:h-4 text-[#0A66C2]" /> },
    { name: "Twitter", href: "https://twitter.com", external: true, icon: <Twitter size={14} className="sm:w-4 sm:h-4 text-[#1DA1F2]" /> },
    { name: "GitHub", href: "https://github.com", external: true, icon: <Github size={14} className="sm:w-4 sm:h-4 text-white" /> },
      ]
    }
  ];

  return (
    <footer className="relative w-full bg-background dark:bg-[#020202] border-t border-border dark:border-white/5 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 z-30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4 sm:gap-6">
            <Logo className="scale-90 sm:scale-100 origin-left" />
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
              Architecting the underlying infrastructure of the modern digital economy. Engineering for scale, performance, and impact.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-4 sm:gap-6">
              <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-primary">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5 sm:gap-4">
                {group.links.map((link) => {
                  const isExternal = 'external' in link && link.external;
                  const hasIcon = 'icon' in link && link.icon;
                  
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 sm:gap-2 group"
                        >
                          {hasIcon && <span>{'icon' in link ? link.icon : null}</span>}
                          {link.name}
                          <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </a>
                      ) : (
                        <Link 
                          href={link.href}
                          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 sm:gap-2 group"
                        >
                          {hasIcon && <span>{'icon' in link ? link.icon : null}</span>}
                          {link.name}
                          <ArrowUpRight size={12} className="sm:w-[14px] sm:h-[14px] opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

          <div className="pt-6 sm:pt-8 border-t border-border dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p className="text-[10px] sm:text-xs text-muted-foreground font-mono uppercase tracking-wider">
                © {currentYear} EASYIO TECHNOLOGIES
              </p>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-foreground/20" />
              <div className="flex items-center gap-4 sm:gap-6">
                <Link href="/privacy-policy" className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-widest">
                  Privacy Protocol
                </Link>
                <Link href="/terms-of-service" className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors font-mono uppercase tracking-widest">
                  Usage Agreement
                </Link>
              </div>
            </div>

          
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[8px] sm:text-[10px] font-mono font-bold text-primary uppercase tracking-wider">
              System Status: Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ChevronRight } from "lucide-react";
import { menuItems } from "./constants";
import { NetworkStats, SocialLink } from "./types";
import NetworkStatsWidget from "./NetworkStatsWidget";
import SocialLinks from "./SocialLinks";

interface DesktopNavProps {
  networkStats: NetworkStats;
  socialLinks: SocialLink[];
}

export default function DesktopNav({ networkStats, socialLinks }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-0 bottom-0 w-[288px] z-[100] hidden lg:block border-r border-border bg-background">
      <nav className="flex flex-col h-full">
        <div className="pt-12 pb-16 flex flex-col items-center">
          <div className="mb-8 flex items-center justify-between w-full px-6">
            <Link href="/" className="block transition-opacity hover:opacity-80">
              <Logo />
            </Link>
            <ThemeToggle />
          </div>

          <div className="w-full flex flex-col space-y-1 px-4 max-h-[60vh] overflow-y-auto hide-scrollbar">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center px-6 py-3 rounded-2xl transition-colors duration-200 ${
                    isActive 
                      ? "bg-primary/10 text-foreground" 
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 w-1 h-6 bg-[#20BA9D] rounded-r-full" />
                  )}
                    <div className={`mr-4 transition-all duration-300 ${isActive ? item.color : `text-muted-foreground group-hover:${item.color}`} group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={18} />
                    </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.15em] font-mono">
                    {item.name}
                  </span>
                  <ChevronRight size={12} className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${isActive ? "opacity-100 text-[#20BA9D]" : ""}`} />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-auto p-6 space-y-4">
          <NetworkStatsWidget networkStats={networkStats} />
          <SocialLinks links={socialLinks} size="sm" />
        </div>
      </nav>
    </div>
  );
}

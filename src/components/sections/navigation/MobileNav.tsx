"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { menuItems } from "./constants";
import { SocialLink } from "./types";
import SocialLinks from "./SocialLinks";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  socialLinks: SocialLink[];
}

export default function MobileNav({ isOpen, setIsOpen, socialLinks }: MobileNavProps) {
  const pathname = usePathname();

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Header Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[110] h-16 bg-background/90 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Logo className="scale-75 origin-left" />
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle className="scale-90" />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30 active:scale-90 transition-all shadow-lg"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-background/80 dark:bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-[105] w-[85%] max-w-sm bg-background border-l border-border dark:border-white/10 shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header Space */}
              <div className="h-16 flex items-center px-6 border-b border-border dark:border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/70 dark:text-white/70 flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" />
                  Navigation Menu
                </span>
              </div>

              {/* Scrollable Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-center px-4 py-3.5 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                          isActive 
                            ? "bg-primary/20 text-primary font-bold border border-primary/20" 
                            : "text-muted-foreground dark:text-white/60 hover:text-foreground dark:hover:text-white hover:bg-muted dark:hover:bg-white/10 border border-transparent hover:border-border dark:hover:border-white/5"
                        }`}
                      >
                        {isActive && (
                          <motion.div 
                            layoutId="active-pill"
                            className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-full"
                          />
                        )}
                          <div className={`mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${isActive ? item.color : `text-muted-foreground group-hover:${item.color}`}`}>
                            <Icon size={20} />
                          </div>
                        <span className="text-[15px] tracking-tight">
                          {item.name}
                        </span>
                        <ArrowRight size={14} className={`ml-auto transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"}`} />
                      </Link>
                    </motion.div>
                  );
                })}

                  {/* CTA Card */}
                  <div className="pt-4 pb-2">
                    <div className="p-5 rounded-[2rem] bg-gradient-to-br from-primary/10 via-background to-accent/5 border border-primary/30 relative overflow-hidden group shadow-lg">
                      <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                        <Sparkles size={40} className="text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1 leading-[1.2] pb-0.5">Start Project</h4>
                      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">Ready to transform your business infrastructure?</p>
                      <Link 
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-95 flex items-center justify-center gap-2 group"
                      >
                        Launch Protocol
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-6 border-t border-border dark:border-white/10 bg-muted/50 dark:bg-white/[0.02]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground dark:text-white/50">Follow Us</span>
                    <div className="h-[1px] flex-1 mx-4 bg-border dark:bg-white/10" />
                  </div>
                  <SocialLinks links={socialLinks} size="sm" />
                </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

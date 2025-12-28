"use client";

import React, { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "@/components/ui/logo";
import { supabase } from "@/lib/supabase";
import { 
  LayoutGrid, 
  Briefcase, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Database, 
  Terminal, 
  GraduationCap,
  Menu,
  X,
  ChevronRight,
  Cpu,
  Mail,
  UserPlus,
  Github,
  Instagram,
  Twitter
} from "lucide-react";

const menuItems = [
  { name: "Command Center", href: "/", icon: LayoutGrid },
  { name: "The Nucleus", href: "/about", icon: Cpu },
  { name: "Mission Archive", href: "/ourwork", icon: Briefcase },
  { name: "Quantum ERP", href: "/erp", icon: Database },
  { name: "Neural Engines", href: "/solutions", icon: Terminal },
  { name: "The Forge", href: "/programs", icon: GraduationCap },
  { name: "Alpha Squad", href: "/ourteam", icon: Users },
  { name: "Signal Hub", href: "/testimonials", icon: MessageSquare },
  { name: "Innovation Labs", href: "/courses", icon: BookOpen },
  { name: "Open Channel", href: "/contact", icon: Mail },
  { name: "Join The Ranks", href: "/careers", icon: UserPlus },
];

// Default social links - will be overridden by settings

const Navigation = memo(() => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [networkStats, setNetworkStats] = useState<{
    totalNodes: number;
    recentAvatars: Array<number | { id: string; image: string | null; name: string; seed?: number; email?: string }>;
    isLoading: boolean;
  }>({
    totalNodes: 14000,
    recentAvatars: [1, 2, 3, 4],
    isLoading: true,
  });
  const [socialLinks, setSocialLinks] = useState([
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Instagram", href: "https://instagram.com", icon: Instagram },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  ]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const fetchNetworkStats = async () => {
      try {
        // Fetch contact submissions count
        const { count: contactCount } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true });

        // Fetch team members for avatars
        const { data: teamMembers } = await supabase
          .from('team_members')
          .select('id, image, name')
          .limit(4)
          .order('created_at', { ascending: false });

        // Fetch testimonials count
        const { count: testimonialCount } = await supabase
          .from('testimonials')
          .select('*', { count: 'exact', head: true });

        // Calculate total nodes (contacts + testimonials + base network)
        const totalNodes = 14000 + (contactCount || 0) + (testimonialCount || 0);

        // Get avatars from team members or generate from contact submissions
        let avatars: Array<number | { id: string; image: string | null; name: string; seed?: number; email?: string }> = [1, 2, 3, 4];
        if (teamMembers && teamMembers.length > 0) {
          avatars = teamMembers.map((member, idx) => ({
            id: member.id,
            image: member.image,
            name: member.name,
            seed: idx + 1,
          }));
        } else {
          // If no team members, try to get recent contact submissions
          const { data: recentContacts } = await supabase
            .from('contact_submissions')
            .select('id, name, email')
            .limit(4)
            .order('created_at', { ascending: false });

          if (recentContacts && recentContacts.length > 0) {
            avatars = recentContacts.map((contact, idx) => ({
              id: contact.id,
              image: null,
              name: contact.name,
              email: contact.email,
              seed: idx + 1,
            }));
          }
        }

        setNetworkStats({
          totalNodes,
          recentAvatars: avatars,
          isLoading: false,
        });
      } catch (error) {
        console.error('Error fetching network stats:', error);
        setNetworkStats({
          totalNodes: 14000,
          recentAvatars: [1, 2, 3, 4],
          isLoading: false,
        });
      }
    };

    fetchNetworkStats();
    
    // Refresh stats every 30 seconds
    const interval = setInterval(fetchNetworkStats, 30000);
    return () => clearInterval(interval);
  }, []);

  // Fetch social links from settings
  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch('/api/website-settings');
        if (response.ok) {
          const result = await response.json();
          if (result.data) {
            const settingsMap: Record<string, string> = {};
            result.data.forEach((setting: any) => {
              settingsMap[setting.setting_key] = setting.setting_value || '';
            });

            // Update social links from settings
            const updatedLinks = [
              { 
                name: "GitHub", 
                href: settingsMap.github_url || "https://github.com", 
                icon: Github 
              },
              { 
                name: "Instagram", 
                href: settingsMap.instagram_url || "https://instagram.com", 
                icon: Instagram 
              },
              { 
                name: "Twitter", 
                href: settingsMap.twitter_url || "https://twitter.com", 
                icon: Twitter 
              },
            ];
            setSocialLinks(updatedLinks);
          }
        }
      } catch (error) {
        console.error('Error fetching social links:', error);
      }
    };

    fetchSocialLinks();
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 bottom-0 w-[288px] z-[100] hidden lg:block border-r border-white/5 bg-[#020202]">
        <nav className="flex flex-col h-full">
          <div className="pt-12 pb-16 flex flex-col items-center">
            <div className="mb-12">
              <Link href="/" className="block transition-opacity hover:opacity-80">
                <Logo />
              </Link>
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
                        ? "bg-white/[0.03] text-white" 
                        : "text-muted-foreground hover:bg-white/[0.02] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 w-1 h-6 bg-[#20BA9D] rounded-r-full" />
                    )}
                    <div className={`mr-4 transition-colors ${isActive ? "text-[#20BA9D]" : "text-muted-foreground group-hover:text-white"}`}>
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
            <Link 
              href="/ourteam" 
              className="block p-5 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-mono font-bold">Network</p>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <p className="text-[11px] font-bold text-white uppercase tracking-tight mb-4 leading-none">Global Nodes Active</p>
              <div className="flex -space-x-2">
                {networkStats.isLoading ? (
                  // Loading skeleton
                  <>
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-[#020202] bg-white/10 animate-pulse" />
                    ))}
                    <div className="w-6 h-6 rounded-full border-2 border-[#020202] bg-primary/50 animate-pulse" />
                  </>
                ) : (
                  <>
                    {networkStats.recentAvatars.map((avatar, idx) => {
                      // Handle both number and object types
                      const isNumber = typeof avatar === 'number';
                      const seed = isNumber ? avatar : (avatar?.seed || idx + 1);
                      const image = !isNumber && avatar?.image ? avatar.image : null;
                      const name = !isNumber && avatar?.name ? avatar.name : undefined;
                      const avatarId = !isNumber && avatar?.id ? avatar.id : idx;
                      
                      return (
                        <div 
                          key={avatarId} 
                          className="w-6 h-6 rounded-full border-2 border-[#020202] bg-white/10 overflow-hidden group-hover:scale-110 transition-transform"
                          title={name}
                        >
                          {image && image.trim() ? (
                            <img 
                              src={image} 
                              alt={name || ''} 
                              loading="lazy" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback to generated avatar if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
                              }}
                            />
                          ) : (
                            <img 
                              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} 
                              alt={name || ''} 
                              loading="lazy" 
                              className="w-full h-full object-cover" 
                            />
                          )}
                        </div>
                      );
                    })}
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-[#020202] bg-primary flex items-center justify-center text-[8px] font-bold text-white group-hover:scale-110 transition-transform"
                      title={`${networkStats.totalNodes.toLocaleString()} total active nodes`}
                    >
                      {networkStats.totalNodes >= 1000 
                        ? `+${Math.round(networkStats.totalNodes / 1000)}k`
                        : `+${networkStats.totalNodes}`
                      }
                    </div>
                  </>
                )}
              </div>
            </Link>

            <div className="flex justify-center gap-3 px-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center w-5 h-5 text-muted-foreground hover:text-white transition-colors"
                    title={link.name}
                    aria-label={link.name}
                  >
                    <Icon 
                      size={14} 
                      className="transition-colors" 
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      <div className="lg:hidden fixed top-0 left-0 right-0 z-[110] h-16 sm:h-20 bg-[#020202]/95 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Logo className="scale-75 sm:scale-[0.85] origin-left" />
        </Link>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 active:scale-90 transition-transform"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} className="text-white sm:w-6 sm:h-6" /> : <Menu size={20} className="text-white sm:w-6 sm:h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[105] bg-[#020202] pt-16 sm:pt-24 px-4 sm:px-6 overflow-y-auto lg:hidden">
          <div className="flex flex-col space-y-1.5 sm:space-y-2 py-6 sm:py-8">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  style={{ animationDelay: `${index * 30}ms` }}
                  className="animate-slideIn"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center p-4 sm:p-5 rounded-xl sm:rounded-2xl transition-colors ${
                      isActive 
                        ? "bg-[#20BA9D] text-white" 
                        : "bg-white/[0.02] text-muted-foreground hover:text-white"
                    }`}
                  >
                    <div className={`mr-3 sm:mr-4 ${isActive ? "text-white" : "text-[#20BA9D]"}`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-sm sm:text-base font-black uppercase tracking-wider sm:tracking-widest font-display">
                      {item.name}
                    </span>
                    <ChevronRight size={16} className="ml-auto opacity-50 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-8 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10">
            <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter mb-3 sm:mb-4">Initiate Deployment</h4>
            <p className="text-xs sm:text-sm text-white/60 mb-4 sm:mb-6 leading-relaxed">System operational. Deploy your first global business engine today.</p>
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 sm:py-5 bg-white text-black font-black rounded-xl sm:rounded-2xl uppercase tracking-widest text-xs active:scale-95 transition-transform flex items-center justify-center"
            >
              Launch Protocol
            </Link>
          </div>

          <div className="py-8 sm:py-12 flex justify-center gap-6 sm:gap-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-6 h-6 text-muted-foreground hover:text-white transition-colors"
                  title={link.name}
                  aria-label={link.name}
                >
                  <Icon 
                    size={18} 
                    className="transition-colors sm:w-5 sm:h-5" 
                  />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;

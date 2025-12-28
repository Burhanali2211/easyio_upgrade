"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ExternalLink, Loader2, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  twitter_url?: string;
  linkedin_url?: string;
  github_url?: string;
}

export default function OurTeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeam() {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setTeam(data);
      setLoading(false);
    }
    fetchTeam();
  }, []);

  const openSocialLink = (url: string | undefined) => {
    if (url) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-primary/5 blur-[80px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 sm:mb-16 lg:mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users size={14} className="text-primary" />
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Elite Force</span>
            </div>
            <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
              The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/30">Architects.</span>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed">
              Meet the world-class engineers and strategists behind the Easyio core hub.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="text-primary/50" size={20} />
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading team...</span>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col"
                >
                  <div className="relative aspect-square rounded-xl sm:rounded-[2.5rem] bg-white/[0.03] border border-white/5 overflow-hidden mb-4 sm:mb-6 group-hover:border-primary/30 transition-all">
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
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
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
              ))}
            </div>
          )}

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-20 sm:mt-32 lg:mt-40 relative overflow-hidden rounded-2xl sm:rounded-[4rem] bg-gradient-to-br from-[#050505] to-[#080808] border border-white/5"
          >
            <div className="absolute inset-0 grid-command opacity-20" />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-accent/10 blur-[80px] rounded-full" />
            
            <div className="relative p-8 sm:p-12 lg:p-24 flex flex-col items-center text-center z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users size={14} className="text-primary" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Join The Force</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-6xl font-black text-white mb-6 sm:mb-8 uppercase leading-tight">
                We&apos;re always looking for <br className="hidden sm:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">elite talent.</span>
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl leading-relaxed">
                Think you have what it takes to join the most aggressive engineering team on the planet? We want to hear from you.
              </p>
              <Link 
                href="/careers"
                className="px-8 sm:px-12 py-4 sm:py-6 bg-primary text-white font-black rounded-xl sm:rounded-2xl uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(59,130,246,0.3)]"
              >
                Apply for Deployment
              </Link>
            </div>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

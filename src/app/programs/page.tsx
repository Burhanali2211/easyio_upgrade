"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Trophy, Users, Star, ArrowRight, Loader2, Target, Rocket, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Program {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  icon_type: string;
}

const IconMap: Record<string, React.ReactNode> = {
  'graduation-cap': <GraduationCap size={20} className="text-emerald-500" />,
  'star': <Star size={20} className="text-amber-400" />,
  'trophy': <Trophy size={20} className="text-yellow-500" />,
  'rocket': <Rocket size={20} className="text-primary" />,
  'target': <Target size={20} className="text-accent" />,
};

const levelColors: Record<string, { bg: string; text: string; border: string }> = {
  'Beginner': { bg: 'bg-emerald-500/10', text: 'text-emerald-500', border: 'border-emerald-500/20' },
  'Intermediate': { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
  'Advanced': { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
  'Expert': { bg: 'bg-amber-500/10', text: 'text-amber-500', border: 'border-amber-500/20' },
};

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProgram, setHoveredProgram] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrograms() {
      const { data } = await supabase
        .from('programs')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setPrograms(data);
      setLoading(false);
    }
    fetchPrograms();
  }, []);

  const highlights = [
    { icon: <CheckCircle2 size={16} />, text: 'Industry-recognized certification' },
    { icon: <CheckCircle2 size={16} />, text: 'Hands-on project experience' },
    { icon: <CheckCircle2 size={16} />, text: '1-on-1 mentorship sessions' },
    { icon: <CheckCircle2 size={16} />, text: 'Lifetime community access' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 relative">
          <div className="mb-16 sm:mb-20 lg:mb-24 text-center max-w-3xl mx-auto animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <GraduationCap size={14} className="text-primary" />
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">The Academy</span>
            </div>
            <h1 className="text-foreground dark:text-white mb-6 sm:mb-8 text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter">
              TRAINING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground to-foreground/30 dark:from-white dark:via-white dark:to-white/30">ELITE.</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Our training programs are designed to transform talented engineers into world-class architects capable of building global infrastructure.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/5">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-xs text-muted-foreground dark:text-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="text-primary/50" size={20} />
                </div>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground dark:text-white/30 uppercase tracking-widest">Loading programs...</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {programs.map((program, index) => {
                const colors = levelColors[program.level] || levelColors['Intermediate'];
                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative rounded-2xl bg-card dark:bg-[#050508] border border-border dark:border-white/5 overflow-hidden hover:border-primary/30 dark:hover:border-white/10 transition-all"
                    onMouseEnter={() => setHoveredProgram(program.id)}
                    onMouseLeave={() => setHoveredProgram(null)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500 ${hoveredProgram === program.id ? 'opacity-100' : 'opacity-0'}`} />
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 group-hover:text-primary transition-all duration-500 group-hover:scale-110 -rotate-12 group-hover:rotate-0">
                      <BookOpen size={80} />
                    </div>
                    
                    <div className="relative p-6 sm:p-8 h-full flex flex-col z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                          {IconMap[program.icon_type] || <GraduationCap size={20} />}
                        </div>
                        <div className={`px-3 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border} border text-[9px] font-bold uppercase tracking-widest group-hover:scale-105 transition-transform`}>
                          {program.level}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-[9px] text-muted-foreground dark:text-white/30 uppercase tracking-widest font-mono">{program.duration}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-white/40 text-sm leading-relaxed mb-6 flex-grow">
                        {program.description}
                      </p>
                      
                      <button className="w-full py-4 rounded-xl bg-muted dark:bg-white/5 border border-border dark:border-white/10 text-foreground dark:text-white font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-primary-foreground dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-2 group/btn">
                        Access Training Protocol 
                        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          <div className="mt-20 sm:mt-28 lg:mt-32 relative overflow-hidden rounded-3xl bg-card dark:bg-[#050508] border border-border dark:border-white/5">
            <div className="absolute inset-0 grid-command opacity-30" />
            <div className="absolute bottom-0 right-0 w-[60%] h-[80%] bg-gradient-to-tl from-primary/5 to-transparent" />
            
            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex -space-x-3 mb-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-card dark:border-[#050508] bg-muted dark:bg-white/10 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=elite${i}`} alt="Student" className="w-full h-full" />
                      </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-card dark:border-[#050508] bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                      +47
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground dark:text-white mb-4 uppercase tracking-tight">
                    Join the Elite Force
                  </h2>
                  <p className="text-muted-foreground dark:text-white/40 mb-8 leading-relaxed">
                    Our graduates go on to lead engineering teams at the world's most innovative companies. Are you ready for the challenge?
                  </p>
                  <div className="flex items-center gap-8 mb-8">
                    <div>
                      <p className="text-3xl font-black text-foreground dark:text-white">500+</p>
                      <p className="text-[9px] text-muted-foreground dark:text-white/30 uppercase tracking-widest font-mono">Alumni</p>
                    </div>
                    <div className="w-[1px] h-10 bg-border dark:bg-white/10" />
                    <div>
                      <p className="text-3xl font-black text-foreground dark:text-white">98%</p>
                      <p className="text-[9px] text-muted-foreground dark:text-white/30 uppercase tracking-widest font-mono">Placement</p>
                    </div>
                    <div className="w-[1px] h-10 bg-border dark:bg-white/10" />
                    <div>
                      <p className="text-3xl font-black text-foreground dark:text-white">$180k</p>
                      <p className="text-[9px] text-muted-foreground dark:text-white/30 uppercase tracking-widest font-mono">Avg Salary</p>
                    </div>
                  </div>
                  <button className="px-8 py-4 bg-primary text-primary-foreground font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                    Initiate Enrollment
                  </button>
                </div>
                
                <div className="relative">
                  <div className="aspect-video rounded-2xl overflow-hidden bg-muted/50 dark:bg-white/[0.02] border border-border dark:border-white/10 flex items-center justify-center group cursor-pointer relative">
                    {/* Alumni Images Grid Background - More visible */}
                    <div className="absolute inset-0 grid grid-cols-4 gap-1 p-3 opacity-30 dark:opacity-20 group-hover:opacity-40 dark:group-hover:opacity-30 transition-opacity">
                      {[
                        { seed: 'alumni1', name: 'Sarah Chen' },
                        { seed: 'alumni2', name: 'Michael Torres' },
                        { seed: 'alumni3', name: 'Priya Sharma' },
                        { seed: 'alumni4', name: 'David Kim' },
                        { seed: 'alumni5', name: 'Emma Wilson' },
                        { seed: 'alumni6', name: 'James Park' },
                        { seed: 'alumni7', name: 'Lisa Anderson' },
                        { seed: 'alumni8', name: 'Ryan Martinez' },
                      ].map((alumni, i) => (
                        <div 
                          key={alumni.seed} 
                          className="rounded-md overflow-hidden bg-muted dark:bg-white/5 border border-border/50 dark:border-white/5 group-hover:border-primary/20 transition-all relative"
                          title={alumni.name}
                        >
                          <img 
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${alumni.seed}`} 
                            alt={alumni.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button */}
                    <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 dark:bg-primary/5 border-2 border-primary/30 dark:border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow-[0_0_20px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] backdrop-blur-sm">
                      <div className="ml-1 sm:ml-1.5">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="sm:w-8 sm:h-8">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Alumni Count Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-3 py-1.5 rounded-full bg-background/90 dark:bg-black/70 backdrop-blur-md border border-border dark:border-white/10 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-primary" />
                        <span className="text-[10px] font-mono font-bold text-foreground dark:text-white uppercase tracking-wider">
                          500+ Alumni
                        </span>
                      </div>
                    </div>
                    
                    {/* Success Stories Text Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-3 py-2 rounded-lg bg-background/90 dark:bg-black/70 backdrop-blur-md border border-border dark:border-white/10">
                        <p className="text-[9px] font-mono font-bold text-foreground dark:text-white uppercase tracking-wider text-center">
                          Watch Success Stories
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-[9px] text-muted-foreground dark:text-white/30 uppercase tracking-[0.3em]">Watch Alumni Success Stories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

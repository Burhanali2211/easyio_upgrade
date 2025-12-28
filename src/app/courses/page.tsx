"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Loader2, FlaskConical, Beaker, Atom, Sparkles, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: string;
}

interface LabExperiment {
  id: string;
  title: string;
  status: string;
  description: string;
  icon_type: string;
}

const IconMap: Record<string, React.ReactNode> = {
  'beaker': <Beaker size={18} />,
  'atom': <Atom size={18} />,
  'sparkles': <Sparkles size={18} />,
  'flask': <FlaskConical size={18} />,
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [experiments, setExperiments] = useState<LabExperiment[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const [coursesRes, experimentsRes] = await Promise.all([
        supabase.from('courses').select('*').order('created_at', { ascending: true }),
        supabase.from('lab_experiments').select('*').order('created_at', { ascending: true })
      ]);
      
      if (coursesRes.data) setCourses(coursesRes.data);
      if (experimentsRes.data) setExperiments(experimentsRes.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 relative">
          <div className="mb-16 sm:mb-20 lg:mb-24 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen size={14} className="text-primary" />
              <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Knowledge Center</span>
            </div>
            <h1 className="text-white mb-6 sm:mb-8 text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter">
              R&D <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">ACADEMY.</span>
            </h1>
            <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              Where we bridge the gap between experimental research and production-grade engineering. Learn from the architects who build the future.
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="text-primary/50" size={20} />
                </div>
              </div>
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Loading curriculum...</span>
            </div>
          ) : (
            <>
              <div className="mb-20 sm:mb-28 lg:mb-32">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <BookOpen size={18} />
                    </div>
                    Active Curriculums
                  </h2>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{courses.length} courses</span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {courses && courses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group relative rounded-2xl bg-[#050508] border border-white/5 overflow-hidden hover:border-primary/20 transition-all"
                      onMouseEnter={() => setHoveredCourse(course.id)}
                      onMouseLeave={() => setHoveredCourse(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500 ${hoveredCourse === course.id ? 'opacity-100' : 'opacity-0'}`} />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative p-6 sm:p-8 flex flex-col h-full z-10">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                            <Play size={12} className="text-primary ml-0.5" />
                          </div>
                          <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Course</span>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow">
                          {course.description}
                        </p>
                        
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                          <div>
                            <p className="text-[9px] text-white/30 uppercase tracking-widest font-mono mb-1">Instructor</p>
                            <p className="text-white text-sm font-medium">{course.instructor}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[9px] text-white/30 uppercase tracking-widest font-mono mb-1">Investment</p>
                            <p className="text-xl font-black text-white group-hover:scale-110 transition-transform">{course.price}</p>
                          </div>
                        </div>
                        
                        <button className="mt-6 w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group/btn">
                          Activate Course
                          <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <FlaskConical size={18} />
                    </div>
                    Current Experiments
                  </h2>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{experiments.length} active</span>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {experiments && experiments.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="group relative p-6 sm:p-8 rounded-2xl bg-[#050508] border border-white/5 overflow-hidden hover:border-accent/20 transition-all"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform">
                            {IconMap[exp.icon_type] || <FlaskConical size={18} />}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-mono text-emerald-500/80 uppercase tracking-widest font-bold">{exp.status}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        
                        <button className="flex items-center gap-2 text-accent font-mono text-[10px] uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100 transition-opacity group/link">
                          Access Research Data 
                          <ArrowRight size={10} className="group-hover/link:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-20 sm:mt-28 lg:mt-32 relative overflow-hidden rounded-3xl bg-[#050508] border border-white/5">
                <div className="absolute inset-0 grid-command opacity-30" />
                <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-primary/5 to-transparent" />
                
                <div className="relative p-8 sm:p-12 lg:p-16">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Sparkles size={12} className="text-primary" />
                        <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest">Coming Soon</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                        Enterprise Training Program
                      </h2>
                      <p className="text-white/40 max-w-md mb-8">
                        Custom-tailored curriculum for your organization. Transform your engineering team into infrastructure architects.
                      </p>
                      <button className="px-8 py-4 bg-white text-black font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                        Request Deployment Brief
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: '500+', label: 'Engineers Trained' },
                        { value: '98%', label: 'Satisfaction Rate' },
                        { value: '40h', label: 'Avg Curriculum' },
                        { value: '12', label: 'Industries Served' },
                      ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                          <div className="text-2xl sm:text-3xl font-black text-white mb-1">{stat.value}</div>
                          <div className="text-[9px] text-white/30 uppercase tracking-widest font-mono">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

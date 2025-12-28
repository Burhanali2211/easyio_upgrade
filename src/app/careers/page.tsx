"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Loader2, CheckCircle2, X, Send, Code2, Users, Shield, Zap, ChevronRight, Cpu, Database, Globe } from "lucide-react";
import { useState, memo } from "react";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  icon: React.ReactNode;
}

const positions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior Systems Architect',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Design and implement large-scale distributed systems that power enterprise-grade applications.',
    requirements: ['8+ years experience', 'Distributed systems expertise', 'Go/Rust proficiency', 'Cloud architecture'],
    icon: <Cpu size={20} />
  },
  {
    id: '2',
    title: 'AI/ML Engineer',
    department: 'Research',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build and deploy machine learning models at scale for cognitive computing initiatives.',
    requirements: ['5+ years ML experience', 'PyTorch/TensorFlow', 'MLOps expertise', 'PhD preferred'],
    icon: <Database size={20} />
  },
  {
    id: '3',
    title: 'Security Engineer',
    department: 'Security',
    location: 'San Francisco',
    type: 'Full-time',
    description: 'Develop and maintain enterprise security protocols and encryption systems.',
    requirements: ['6+ years security experience', 'Cryptography expertise', 'CISSP certification', 'Penetration testing'],
    icon: <Shield size={20} />
  },
  {
    id: '4',
    title: 'Full-Stack Developer',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build user-facing applications and internal tools using modern web technologies.',
    requirements: ['4+ years experience', 'React/Next.js', 'Node.js/Python', 'Database design'],
    icon: <Globe size={20} />
  }
];

const ApplicationModal = memo(({ job, onClose }: { job: JobPosition; onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio_url: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, position: job.title })
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to submit application');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#050508] border border-white/10 rounded-3xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <X size={18} className="text-white" />
        </button>

        <div className="relative p-8 sm:p-10">
          {success ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} className="text-emerald-500" />
              </div>
              <h2 className="text-white text-2xl font-black mb-4 uppercase tracking-tight">Application Received</h2>
              <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
                Thank you for your interest in {job.title}. Our team will review your application within 5 business days.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-4 bg-white text-black font-bold rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-transform"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-start gap-4 mb-8 pb-8 border-b border-white/5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  {job.icon}
                </div>
                <div>
                  <p className="text-primary font-mono text-[10px] uppercase tracking-widest mb-1">{job.department}</p>
                  <h2 className="text-white text-xl sm:text-2xl font-black">{job.title}</h2>
                  <p className="text-white/40 text-sm mt-1">{job.location}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none transition-all text-sm"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Portfolio / LinkedIn</label>
                  <input
                    type="url"
                    value={formData.portfolio_url}
                    onChange={(e) => setFormData({ ...formData, portfolio_url: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none transition-all text-sm"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Why Easyio?</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none resize-none transition-all text-sm"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-sm font-mono">
                    [ERROR] {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-white text-black font-black rounded-xl uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? <Loader2 className="animate-spin" size={20} /> : <><Send size={16} /> Deploy Application</>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

ApplicationModal.displayName = 'ApplicationModal';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [hoveredJob, setHoveredJob] = useState<string | null>(null);

  const benefits = [
    { icon: <Code2 size={20} />, title: 'Cutting-Edge Tech', desc: 'Work with the latest technologies', stat: '100+', statLabel: 'Tech Stack' },
    { icon: <Users size={20} />, title: 'Remote-First', desc: 'Work from anywhere in the world', stat: '30+', statLabel: 'Countries' },
    { icon: <Shield size={20} />, title: 'Equity Package', desc: 'Competitive compensation + equity', stat: '1.5%', statLabel: 'Avg Equity' },
    { icon: <Zap size={20} />, title: 'Growth Path', desc: 'Clear career advancement', stat: '2x', statLabel: 'Avg Promotion' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 relative">
          <div className="mb-16 sm:mb-20 lg:mb-24 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] font-mono text-accent uppercase tracking-widest">Now Hiring</span>
            </div>
            <h1 className="text-white mb-6 sm:mb-8 text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter">
              BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">FUTURE.</span>
            </h1>
            <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              We&apos;re assembling a team of world-class engineers to architect the infrastructure of tomorrow. Are you ready?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 sm:mb-20 lg:mb-24">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-[#050508] border border-white/5 overflow-hidden hover:border-accent/30 transition-all"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-white font-bold mb-1 group-hover:text-accent transition-colors">{benefit.title}</h3>
                  <p className="text-white/40 text-xs mb-4">{benefit.desc}</p>
                  <div className="pt-4 border-t border-white/5 flex items-baseline justify-between">
                    <span className="text-2xl font-black text-white group-hover:scale-110 transition-transform">{benefit.stat}</span>
                    <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono">{benefit.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight animate-fadeIn">
              Open Positions
            </h2>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{positions.length} roles available</span>
          </div>
          
          <div className="space-y-3">
            {positions.map((job, i) => (
              <div
                key={job.id}
                style={{ animationDelay: `${i * 100}ms` }}
                className="group relative rounded-2xl bg-[#050508] border border-white/5 overflow-hidden animate-fadeIn transition-all hover:border-white/10"
                onMouseEnter={() => setHoveredJob(job.id)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent transition-opacity duration-500 ${hoveredJob === job.id ? 'opacity-100' : 'opacity-0'}`} />
                
                <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      hoveredJob === job.id ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/40'
                    }`}>
                      {job.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold bg-accent/10 px-2 py-0.5 rounded">
                          {job.department}
                        </span>
                      </div>
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                      <p className="text-white/40 text-sm mb-3 max-w-md">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[10px] text-white/30 font-mono uppercase tracking-widest">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1"><Briefcase size={12} /> {job.requirements[0]}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="group/btn flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap"
                  >
                    Join The Mission
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 relative overflow-hidden rounded-3xl bg-[#050508] border border-white/5">
            <div className="absolute inset-0 grid-command opacity-30" />
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-accent/5 to-transparent" />
            
            <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black mb-4 uppercase tracking-tight">
                  Don&apos;t see a perfect fit?
                </h2>
                <p className="text-white/40 max-w-md">
                  We&apos;re always looking for exceptional talent. Send us your profile and we&apos;ll reach out when a matching opportunity arises.
                </p>
              </div>
                <button 
                onClick={() => setSelectedJob({ 
                  id: 'general', 
                  title: 'General Application', 
                  department: 'Open', 
                  location: 'Remote', 
                  type: 'Full-time',
                  description: 'General talent pool application',
                  requirements: [],
                  icon: <Users size={20} />
                })}
                className="px-8 py-4 bg-white text-black font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 transition-transform whitespace-nowrap"
              >
                Submit Your Profile
              </button>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>

      {selectedJob && (
        <ApplicationModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}

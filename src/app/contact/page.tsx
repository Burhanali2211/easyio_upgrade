"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle2, Building2, MessageSquare, Users, Terminal, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type ContactType = 'general' | 'collaboration' | 'enterprise';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general' as ContactType
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      '> Initializing secure connection...',
      '> Encryption protocol: AES-256',
      '> Channel status: OPEN',
      '> Ready to receive transmission',
      '> Waiting for user input...',
      '> Connection established ✓'
    ];
    
    let currentIndex = 0;
    const addLine = () => {
      if (currentIndex < lines.length) {
        setTerminalLines(prev => {
          // Limit to 6 lines max
          if (prev.length >= 6) return prev;
          return [...prev, lines[currentIndex]];
        });
        currentIndex++;
      }
    };
    
    // Add initial lines
    lines.forEach((_, i) => {
      setTimeout(addLine, i * 300);
    });
    
    // Add blinking cursor effect only on the last line
    const cursorInterval = setInterval(() => {
      setTerminalLines(prev => {
        if (prev.length === 0) return prev;
        const lastLine = prev[prev.length - 1];
        // Only add cursor to the last line if it doesn't already have one
        if (lastLine && !lastLine.endsWith('_') && !lastLine.endsWith('✓')) {
          return [...prev.slice(0, -1), lastLine + '_'];
        } else if (lastLine && lastLine.endsWith('_')) {
          return [...prev.slice(0, -1), lastLine.slice(0, -1)];
        }
        return prev;
      });
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', company: '', message: '', type: 'general' });
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactTypes = [
    { id: 'general', label: 'Signal Request', icon: <MessageSquare size={16} />, desc: 'Questions & Support' },
    { id: 'collaboration', label: 'Alliance Protocol', icon: <Users size={16} />, desc: 'Strategic Partnerships' },
    { id: 'enterprise', label: 'Elite Deployment', icon: <Building2 size={16} />, desc: 'Custom Architectures' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-accent/5 blur-[80px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 relative">
          <div className="mb-12 sm:mb-16 lg:mb-20 animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6">
              <Terminal size={14} className="text-primary" />
              <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">Communication Protocol</span>
            </div>
            <h1 className="text-white mb-6 sm:mb-8 text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter">
              INITIATE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">CONTACT.</span>
            </h1>
            <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              Ready to architect your next digital breakthrough? Open a secure channel with our engineering team.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr,420px] gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              {success ? (
                <div className="p-8 sm:p-12 rounded-3xl bg-[#050508] border border-white/5 text-center relative overflow-hidden">
                  <div className="absolute inset-0 grid-command opacity-50" />
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-emerald-500" />
                    </div>
                    <h2 className="text-white text-2xl sm:text-3xl font-black mb-4 uppercase tracking-tight">Transmission Complete</h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Your message has been encrypted and delivered. Expect a response within 24 hours via your specified channel.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-8 py-4 bg-white text-black font-bold rounded-xl uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                    >
                      Initiate New Channel
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-3 gap-3">
                    {contactTypes.map((type) => (
                      <motion.button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: type.id as ContactType })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group relative p-4 sm:p-6 rounded-2xl border transition-all text-left overflow-hidden ${
                          formData.type === type.id
                            ? 'bg-primary/10 border-primary/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                            : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all ${
                          formData.type === type.id 
                            ? 'bg-primary/20 text-primary scale-110 rotate-3' 
                            : 'bg-white/5 text-white/40 group-hover:scale-105'
                        }`}>
                          {type.icon}
                        </div>
                        <p className={`font-bold text-xs sm:text-sm transition-colors ${
                          formData.type === type.id ? 'text-white' : 'text-white/60 group-hover:text-white'
                        }`}>
                          {type.label}
                        </p>
                        <p className="text-[10px] text-white/30 mt-1 hidden sm:block">{type.desc}</p>
                        {formData.type === type.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 bg-[#050508] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-mono text-sm"
                        placeholder="identifier_"
                      />
                    </div>
                    <div className="group">
                      <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 bg-[#050508] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-mono text-sm"
                        placeholder="node@domain.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Organization</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-5 py-4 bg-[#050508] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all font-mono text-sm"
                      placeholder="corp_entity (optional)"
                    />
                  </div>

                  <div>
                    <label className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono block mb-2">Message Payload</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 bg-[#050508] border border-white/5 rounded-xl text-white placeholder:text-white/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all resize-none font-mono text-sm"
                      placeholder="Enter transmission data..."
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
                    className="group w-full px-8 py-5 bg-white text-black font-black rounded-xl uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <Send size={18} /> 
                        Execute Transmission
                        <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#050508] border border-white/5 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5 relative z-10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60 animate-pulse" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest ml-2">terminal_v2.4</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500/60 animate-pulse" />
                    <span className="text-[8px] font-mono text-emerald-500/60 uppercase">LIVE</span>
                  </div>
                </div>
                <div className="font-mono text-xs sm:text-sm space-y-1.5 text-emerald-400/80 relative z-10 h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  {terminalLines.map((line, i) => (
                    <motion.div
                      key={`${line}-${i}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <span className="text-emerald-500/40">$</span>
                      <span>{line}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#050508] border border-white/5">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-xs uppercase tracking-widest">Headquarters</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Silicon Valley HQ</p>
                      <p className="text-white/40 text-xs">123 Innovation Drive, SF 94102</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">hello@easyio.tech</p>
                      <p className="text-white/40 text-xs">24h response time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">+1 (555) 000-0000</p>
                      <p className="text-white/40 text-xs">Mon-Fri, 9am-6pm PST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '24h', label: 'Response' },
                  { value: '50+', label: 'Countries' },
                  { value: '99%', label: 'Satisfied' },
                ].map((stat, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#050508] border border-white/5 text-center">
                    <div className="text-xl font-black text-white mb-0.5">{stat.value}</div>
                    <div className="text-[8px] text-white/30 uppercase tracking-widest font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

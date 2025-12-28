"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { motion } from "framer-motion";
import { MessageSquare, Star, Quote, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: true });
      if (data) setTestimonials(data);
      setLoading(false);
    }
    fetchTestimonials();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="text-emerald-500 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">
              Intel Center
            </span>
            <h1 className="text-white mb-6 sm:mb-8 text-3xl sm:text-5xl lg:text-7xl font-black uppercase">
              Client <br /><span className="text-emerald-500">Validation.</span>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-base sm:text-xl leading-relaxed">
              Real-world feedback from the leaders who have integrated the Easyio core hub into their operations.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="animate-spin text-emerald-500" size={40} />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-all group"
                >
                  <Quote className="absolute top-4 right-6 sm:top-8 sm:right-10 text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors" size={50} />
                  
                  <div className="relative z-10">
                    <div className="flex gap-0.5 sm:gap-1 mb-6 sm:mb-8">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={14} className="sm:w-4 sm:h-4 fill-emerald-500 text-emerald-500" />
                      ))}
                    </div>
                    
                    <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium leading-relaxed mb-8 sm:mb-10 italic">
                      "{t.content}"
                    </p>
                    
                    <div className="flex items-center gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 overflow-hidden">
                        <img 
                          src={t.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} 
                          alt={t.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white">{t.name}</h4>
                        <p className="text-xs sm:text-sm text-emerald-500/60 font-mono uppercase tracking-widest">{t.role} @ {t.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 sm:mt-24 lg:mt-32 p-8 sm:p-12 lg:p-20 rounded-2xl sm:rounded-[3.5rem] bg-gradient-to-br from-[#050505] to-[#080808] border border-white/5 text-center"
          >
            <MessageSquare className="mx-auto mb-6 sm:mb-8 text-emerald-500" size={36} />
            <h2 className="text-xl sm:text-3xl lg:text-5xl font-black text-white mb-4 sm:mb-6 uppercase">Ready to be our next success story?</h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the ranks of elite enterprises that run on Easyio logic.
            </p>
            <button className="px-8 sm:px-12 py-4 sm:py-6 bg-emerald-600 text-white font-black rounded-xl sm:rounded-2xl uppercase tracking-widest text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(16,185,129,0.2)]">
              Launch Your Mission
            </button>
          </motion.div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

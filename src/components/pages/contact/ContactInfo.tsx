"use client";

import { MapPin, Building2, Mail, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <>
      <div className="p-6 rounded-2xl bg-[#08080f] border border-white/10">
        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
          <MapPin size={16} className="text-primary" />
          <span className="text-xs uppercase tracking-widest">Headquarters</span>
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 group-hover:text-primary transition-colors">
              <Building2 size={16} />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Silicon Valley HQ</p>
              <p className="text-white/50 text-xs">123 Innovation Drive, SF 94102</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 group-hover:text-primary transition-colors">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-white text-sm font-medium">hello@easyio.tech</p>
              <p className="text-white/50 text-xs">24h response time</p>
            </div>
          </div>
          <div className="flex items-start gap-4 group">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/50 group-hover:text-primary transition-colors">
              <Phone size={16} />
            </div>
            <div>
              <p className="text-white text-sm font-medium">+1 (555) 000-0000</p>
              <p className="text-white/50 text-xs">Mon-Fri, 9am-6pm PST</p>
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
          <div key={i} className="p-4 rounded-xl bg-[#08080f] border border-white/10 text-center">
            <div className="text-xl font-black text-white mb-0.5">{stat.value}</div>
            <div className="text-[8px] text-white/50 uppercase tracking-widest font-mono">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}

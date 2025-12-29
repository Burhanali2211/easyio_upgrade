"use client";

import React from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { 
  Globe, 
  MapPin, 
  Users, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Zap,
  Shield,
  Code2
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function KashmirSEOPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        {/* Hero Section */}
        <section className="container py-12 sm:py-24 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-mono text-[10px] uppercase tracking-widest font-bold">
                <MapPin size={14} /> Regional HQ: Srinagar, Kashmir
              </div>
              <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[1.1] pb-2">
                The Best Software <br />
                <span className="text-primary">Company in Kashmir.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                EASYIO Technologies is pioneering the digital revolution in Jammu & Kashmir. From Srinagar to the world, we deliver elite enterprise systems and world-class web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-foreground text-background font-black rounded-2xl uppercase tracking-widest text-xs hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-border dark:border-white/10 bg-card/50 backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" width={32} height={32} />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">50+ Local Partners</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden border border-border dark:border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop" 
                alt="Srinagar Kashmir Digital Transformation" 
                fill 
                className="object-cover brightness-50 contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
                <p className="text-sm font-medium text-white italic">
                  &ldquo;The most professional IT team in J&K. They transformed our local retail business into a global e-commerce powerhouse.&rdquo;
                </p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">— Local Business Owner</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services for J&K */}
        <section className="bg-muted/30 dark:bg-white/[0.02] py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Our Regional Services</h2>
              <p className="text-muted-foreground">Tailored solutions for the unique business landscape of Kashmir.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard 
                icon={<Globe size={24} />}
                title="Web Development"
                desc="Bespoke websites designed in Srinagar for global performance. We create the best digital storefronts in Kashmir."
              />
              <ServiceCard 
                icon={<Building2 size={24} />}
                title="Custom ERP Systems"
                desc="Enterprise Resource Planning software optimized for local manufacturing, hospitality, and retail sectors."
              />
              <ServiceCard 
                icon={<Code2 size={24} />}
                title="App Development"
                desc="High-performance iOS and Android applications built with cutting-edge technology right here in J&K."
              />
            </div>
          </div>
        </section>

        {/* Why Us? */}
        <section className="container py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Why Choose EASYIO <br /> In J&K?</h2>
              <div className="space-y-4">
                <BenefitItem text="On-ground support and consultation in Srinagar." />
                <BenefitItem text="Deep understanding of the local J&K market dynamics." />
                <BenefitItem text="Global-standard coding and security protocols." />
                <BenefitItem text="Fastest turnaround time for regional projects." />
                <BenefitItem text="Proven track record with top Kashmiri brands." />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20 space-y-4">
                <Zap className="text-primary" size={32} />
                <h3 className="font-bold uppercase tracking-widest text-xs">Innovation</h3>
                <p className="text-xs text-muted-foreground">Leading the way in tech innovation in the valley.</p>
              </div>
              <div className="p-8 rounded-3xl bg-accent/10 border border-accent/20 space-y-4">
                <Shield className="text-accent" size={32} />
                <h3 className="font-bold uppercase tracking-widest text-xs">Security</h3>
                <p className="text-xs text-muted-foreground">Bank-grade security for local enterprises.</p>
              </div>
              <div className="col-span-2 p-8 rounded-3xl border border-border dark:border-white/10 bg-card space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold uppercase tracking-widest text-xs">Regional Impact</h3>
                  <span className="text-primary font-black text-2xl">95%</span>
                </div>
                <p className="text-xs text-muted-foreground">Of our local clients report a significant increase in efficiency after system deployment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container py-24">
          <div className="p-12 rounded-[3rem] bg-foreground text-background relative overflow-hidden text-center space-y-8">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter relative z-10">
              Let&apos;s Build the Future of <br /> Kashmir Together.
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto relative z-10">
              Join the dozens of Kashmiri businesses that have already scaled with EASYIO Technologies.
            </p>
            <Link 
              href="/contact"
              className="inline-flex px-12 py-5 bg-primary text-white font-black rounded-2xl uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all relative z-10"
            >
              Request a Local Consultation
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-3xl border border-border dark:border-white/10 bg-card hover:border-primary/30 transition-all group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={18} />
      <span className="font-medium">{text}</span>
    </div>
  );
}

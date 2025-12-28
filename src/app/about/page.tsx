"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { useState } from "react";
import {
  AboutHero,
  StatsGrid,
  ValuesGrid,
  ContentSection,
  AboutCTA,
  stats,
  values,
} from "@/components/pages/about";

export default function AboutPage() {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative">
          <AboutHero />
          <StatsGrid stats={stats} hoveredStat={hoveredStat} setHoveredStat={setHoveredStat} />
          <ValuesGrid values={values} />
          <ContentSection />
          <AboutCTA />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

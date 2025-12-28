"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import {
  SolutionsHero,
  EnginesGrid,
  CustomDevelopmentCTA,
  useEngines,
} from "@/components/pages/solutions";

export default function SolutionsPage() {
  const { engines, loading, error } = useEngines();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-primary/5 blur-[100px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 relative z-10">
          <SolutionsHero />
          <EnginesGrid engines={engines} loading={loading} error={error} />
          <CustomDevelopmentCTA />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

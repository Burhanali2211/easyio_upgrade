"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import {
  TeamHero,
  TeamGrid,
  TeamCTA,
  useTeamData,
} from "@/components/pages/ourteam";

export default function OurTeamPage() {
  const { team, loading } = useTeamData();

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
          <TeamHero />
          <TeamGrid team={team} loading={loading} />
          <TeamCTA />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

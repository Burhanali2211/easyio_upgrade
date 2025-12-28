import { Suspense } from "react";
import { notFound } from "next/navigation";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { getProjectById } from "@/lib/data/fetch";
import ProjectDetailContent from "./ProjectDetailContent";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-mono">LOADING SYSTEM BLUEPRINT...</div>}>
          <ProjectDetailContent project={project} />
        </Suspense>
        
        <Footer />
      </main>
    </div>
  );
}

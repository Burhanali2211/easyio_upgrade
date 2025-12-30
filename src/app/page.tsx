import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navigation from "@/components/sections/navigation";
import { LazySection } from "@/components/LazySection";
import { 
  getPartners, 
  getMetrics, 
  getSolutions, 
  getProjects, 
  getInnovationHub, 
  getTestimonials 
} from "@/lib/data/fetch";

// Hero loads immediately (above fold)
const HeroSection = dynamic(() => import("@/components/sections/hero"), {
  ssr: true,
});

// Below-fold sections load lazily (all are client components, so no need for ssr: false)
const Collaborators = dynamic(() => import("@/components/sections/collaborators"), {
  loading: () => <div className="h-32" />,
});

const MetricsVisualization = dynamic(() => import("@/components/sections/metrics-visualization"), {
  loading: () => <div className="h-64" />,
});

const SolutionsOverview = dynamic(() => import("@/components/sections/solutions-overview"), {
  loading: () => <div className="h-96" />,
});

const OurWork = dynamic(() => import("@/components/sections/our-work"), {
  loading: () => <div className="h-96" />,
});

const InnovationHub = dynamic(() => import("@/components/sections/innovation-hub"), {
  loading: () => <div className="h-96" />,
});

const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
  loading: () => <div className="h-96" />,
});

const ContactCTA = dynamic(() => import("@/components/sections/contact-cta"), {
  loading: () => <div className="h-64" />,
});

const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => <div className="h-64" />,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "EASYIO Technologies | Best Software Company in Kashmir | Web Development Srinagar",
  description:
    "EASYIO Technologies is the leading software company in Kashmir, offering web development, app development, custom ERP solutions, and digital transformation services in Srinagar, J&K. Best website creators and IT company in Jammu & Kashmir.",
  keywords: [
    "software company in kashmir",
    "best software company kashmir",
    "web development srinagar",
    "IT company J&K",
    "best website creators",
    "app development kashmir",
    "easyio technologies",
    "custom ERP solutions",
    "enterprise software development",
    "digital transformation kashmir",
  ].join(", "),
  openGraph: {
    title: "EASYIO Technologies | Best Software Company in Kashmir",
    description:
      "Leading software company in Kashmir offering web development, app development, custom ERP solutions, and digital transformation services.",
    url: siteUrl,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies - Best Software Company in Kashmir",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EASYIO Technologies | Best Software Company in Kashmir",
    description:
      "Leading software company in Kashmir offering web development, app development, custom ERP solutions, and digital transformation services.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

// Revalidate strategy: 
// - Static content (partners, team): 24 hours
// - Semi-static (projects, solutions): 1 hour  
// - Dynamic (metrics, testimonials): 5 minutes
// Using ISR with different revalidate times per data type
export const revalidate = 300; // Minimum revalidate for dynamic content

export default async function Home() {
  const [partners, metrics, solutions, projects, innovationHub, testimonials] = await Promise.all([
    getPartners(),
    getMetrics(),
    getSolutions(),
    getProjects(),
    getInnovationHub(),
    getTestimonials(),
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navigation />
      
      <main className="lg:pl-[288px] overflow-hidden pt-16 lg:pt-0 relative z-10 bg-background">
        <HeroSection />
        
        <LazySection rootMargin="200px">
          <Collaborators partners={partners} />
        </LazySection>
        
        <LazySection rootMargin="200px">
          <MetricsVisualization metrics={metrics} />
        </LazySection>
        
        <LazySection rootMargin="200px">
          <SolutionsOverview solutions={solutions} />
        </LazySection>
        
        <LazySection rootMargin="200px">
          <OurWork projects={projects} />
        </LazySection>
        
        <LazySection rootMargin="200px">
          <InnovationHub items={innovationHub} />
        </LazySection>
        
        <LazySection rootMargin="200px">
          <Testimonials testimonials={testimonials} />
        </LazySection>
        
        <LazySection rootMargin="200px">
          <ContactCTA />
        </LazySection>
        
        <LazySection rootMargin="200px">
          <Footer />
        </LazySection>
      </main>
    </div>
  );
}

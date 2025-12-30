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
  title: "EASYIO Technologies | Best Software Company in Kashmir | Web & App Development Srinagar",
  description:
    "EASYIO Technologies is the #1 software company in Kashmir, offering web development, mobile app development, custom ERP solutions, and digital transformation services in Srinagar, J&K. Top IT company with proven portfolio. Get free quote today!",
  keywords: [
    // Brand Keywords
    "easyio technologies",
    "easyio tech",
    "easyio kashmir",
    "easyio srinagar",
    // Best/Top Intent Keywords
    "best software company in kashmir",
    "best software company in srinagar",
    "best it company in kashmir",
    "best web development company in kashmir",
    "best app development company in kashmir",
    "top software company in srinagar",
    "top it company in srinagar",
    "top web development company in srinagar",
    "top mobile app development company in srinagar",
    "best erp software company in kashmir",
    "best website designer in srinagar",
    "best web design company in kashmir",
    // Service Keywords
    "software company in kashmir",
    "web development srinagar",
    "app development kashmir",
    "mobile app developer srinagar",
    "erp software kashmir",
    "custom software development kashmir",
    "website development company kashmir",
    "android app development srinagar",
    "ios app development kashmir",
    // Location Keywords
    "IT company J&K",
    "software company srinagar",
    "it company jammu kashmir",
    "technology company kashmir",
    // Trust Keywords
    "trusted software company srinagar",
    "software company with portfolio srinagar",
    "professional software developers kashmir",
    "enterprise software solutions kashmir",
    // Pricing Keywords
    "software development cost kashmir",
    "website development cost srinagar",
    "app development cost srinagar",
    "get quote software company srinagar",
  ].join(", "),
  openGraph: {
    title: "EASYIO Technologies | Best Software Company in Kashmir | Web & App Development",
    description:
      "Leading software company in Kashmir offering web development, app development, custom ERP solutions, and digital transformation services. Top IT company in Srinagar with proven portfolio.",
    url: siteUrl,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "EASYIO Technologies - Best Software Company in Kashmir | Web & App Development Srinagar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EASYIO Technologies | Best Software Company in Kashmir",
    description:
      "Leading software company in Kashmir offering web development, app development, custom ERP solutions. Top IT company in Srinagar with proven portfolio. Get free quote!",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

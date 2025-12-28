import type { Metadata } from "next";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero";
import Collaborators from "@/components/sections/collaborators";
import MetricsVisualization from "@/components/sections/metrics-visualization";
import SolutionsOverview from "@/components/sections/solutions-overview";
import OurWork from "@/components/sections/our-work";
import InnovationHub from "@/components/sections/innovation-hub";
import Testimonials from "@/components/sections/testimonials";
import ContactCTA from "@/components/sections/contact-cta";
import Footer from "@/components/sections/footer";
import { 
  getPartners, 
  getMetrics, 
  getSolutions, 
  getProjects, 
  getInnovationHub, 
  getTestimonials 
} from "@/lib/data/fetch";

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

export const revalidate = 3600;

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
      
      <main className="lg:pl-[288px] overflow-hidden pt-16 lg:pt-0 relative z-10 bg-[#020202]">
        <HeroSection />
        <Collaborators partners={partners} />
        <MetricsVisualization metrics={metrics} />
        <SolutionsOverview solutions={solutions} />
        <OurWork projects={projects} />
        <InnovationHub items={innovationHub} />
        <Testimonials testimonials={testimonials} />
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { RefreshCw, Palette, Zap, Smartphone, Search, TrendingUp } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Website Redesign Services Kashmir | Website Makeover Srinagar",
  description: "Best website redesign services in Kashmir. Modernize your outdated website with fresh design and better UX. EASYIO Technologies - website redesign in Srinagar, J&K.",
  keywords: "website redesign kashmir, website redesign services srinagar, website makeover kashmir, website refresh J&K, website modernization srinagar, revamp website kashmir",
  openGraph: {
    title: "Website Redesign Services Kashmir | Website Makeover Srinagar",
    description: "Best website redesign services in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/website-redesign-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/website-redesign-kashmir` },
};

const features = [
  { title: "Modern Design", description: "Contemporary look with latest design trends.", icon: <Palette className="h-6 w-6 text-primary" /> },
  { title: "Performance Upgrade", description: "Faster loading and better performance.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Mobile Optimization", description: "Responsive design for all devices.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "SEO Improvement", description: "Better search engine optimization.", icon: <Search className="h-6 w-6 text-primary" /> },
  { title: "Content Migration", description: "Safe transfer of existing content.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "Conversion Focus", description: "Design for better lead generation.", icon: <TrendingUp className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Fresh modern look for your brand",
  "Better user experience and engagement",
  "Improved mobile responsiveness",
  "Faster loading times",
  "Better SEO performance",
  "Increased conversion rates",
  "Security improvements",
  "Easier content management",
];

const faqs = [
  { question: "When should I redesign my website?", answer: "Consider redesigning if your site is over 3 years old, not mobile-friendly, loads slowly, has poor SEO, doesn't represent your current brand, or isn't generating leads." },
  { question: "How much does website redesign cost in Kashmir?", answer: "Website redesign in Kashmir ranges from INR 20,000-40,000 for simple redesigns to INR 50,000-1,50,000 for complete overhauls with new functionality." },
  { question: "Will I lose my SEO rankings?", answer: "We carefully plan redesigns to preserve SEO. We set up proper redirects, maintain URL structures where possible, and improve on-page SEO to maintain or improve rankings." },
  { question: "How long does a website redesign take?", answer: "Simple redesigns take 2-4 weeks, while complete overhauls with new features can take 4-8 weeks depending on complexity." },
];

const relatedServices = [
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "SEO Services", href: "/services/seo-services-srinagar" },
  { title: "WordPress Development", href: "/services/wordpress-development-srinagar" },
  { title: "Website Maintenance", href: "/services/website-maintenance-srinagar" },
];

export default function WebsiteRedesignKashmirPage() {
  return (
    <ServicePageTemplate
      title="Website Redesign Services in Kashmir"
      subtitle="Modernize Your Online Presence"
      description="Transform your outdated website with EASYIO Technologies' redesign services. Modern design, better performance, improved SEO, and enhanced user experience for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "Website Redesign", href: "/services/website-redesign-kashmir" },
      ]}
      primaryKeyword="Website Redesign"
      location="Kashmir"
    />
  );
}


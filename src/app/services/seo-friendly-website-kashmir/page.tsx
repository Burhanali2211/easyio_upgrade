import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Search, BarChart, Globe, Zap, FileText, Target } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "SEO Friendly Website Development Kashmir | SEO Optimized Sites Srinagar",
  description: "Best SEO-friendly website development in Kashmir. Websites built to rank on Google. EASYIO Technologies - SEO website developers in Srinagar, J&K.",
  keywords: "seo friendly website development kashmir, seo optimized website srinagar, seo website J&K, google ranking website kashmir, search optimized website srinagar",
  openGraph: {
    title: "SEO Friendly Website Development Kashmir | SEO Optimized Sites Srinagar",
    description: "Best SEO-friendly website development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/seo-friendly-website-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/seo-friendly-website-kashmir` },
};

const features = [
  { title: "On-Page SEO", description: "Proper meta tags, headings, and content structure.", icon: <Search className="h-6 w-6 text-primary" /> },
  { title: "Technical SEO", description: "Fast loading, mobile-friendly, secure HTTPS.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Schema Markup", description: "Structured data for rich search results.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Local SEO", description: "Optimized for Kashmir local searches.", icon: <Target className="h-6 w-6 text-primary" /> },
  { title: "Analytics Setup", description: "Google Analytics and Search Console setup.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Sitemap & Robots", description: "XML sitemap and robots.txt configuration.", icon: <Globe className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Rank higher on Google for Kashmir searches",
  "Built-in SEO best practices",
  "Local SEO for Srinagar businesses",
  "Fast loading for better rankings",
  "Mobile-friendly (Google requirement)",
  "Clean URL structure",
  "Image optimization with alt tags",
  "Content hierarchy with proper headings",
];

const faqs = [
  { question: "What makes a website SEO-friendly?", answer: "SEO-friendly websites have proper meta tags, fast loading, mobile responsiveness, clean URLs, structured data, quality content, and technical optimization that helps Google understand and rank the site." },
  { question: "Will my website rank on Google immediately?", answer: "SEO takes time. A well-built SEO-friendly website provides the foundation for ranking, but ongoing content and link building help achieve top rankings over 3-6 months." },
  { question: "Do you include SEO in website cost?", answer: "Yes, on-page SEO optimization is included in all our website packages. We also offer ongoing SEO services for better rankings." },
  { question: "Can you optimize my existing website for SEO?", answer: "Yes, we can audit and optimize your existing website for better search engine rankings through technical improvements, content optimization, and on-page SEO." },
];

const relatedServices = [
  { title: "SEO Services", href: "/services/seo-services-srinagar" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "Next.js Development", href: "/services/next-js-development-kashmir" },
  { title: "Website Redesign", href: "/services/website-redesign-kashmir" },
];

export default function SEOFriendlyWebsiteKashmirPage() {
  return (
    <ServicePageTemplate
      title="SEO-Friendly Website Development in Kashmir"
      subtitle="Websites Built to Rank on Google"
      description="Get websites that rank on Google with EASYIO Technologies' SEO-friendly development. Proper on-page optimization, technical SEO, and local SEO for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "SEO-Friendly Websites", href: "/services/seo-friendly-website-kashmir" },
      ]}
      primaryKeyword="SEO-Friendly Website"
      location="Kashmir"
    />
  );
}


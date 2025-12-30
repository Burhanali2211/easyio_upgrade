import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Search, BarChart, Globe, Target, TrendingUp, FileText } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "SEO Services Srinagar | Search Engine Optimization Kashmir - EASYIO",
  description: "Best SEO services in Srinagar, Kashmir. Local SEO, on-page optimization, link building. EASYIO Technologies - SEO company in J&K.",
  keywords: "seo services srinagar, seo company kashmir, search engine optimization srinagar, local seo kashmir, seo agency J&K, google ranking srinagar",
  openGraph: {
    title: "SEO Services Srinagar | Search Engine Optimization Kashmir",
    description: "Best SEO services in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/seo-services-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/seo-services-srinagar` },
};

const features = [
  { title: "Local SEO", description: "Rank for Kashmir and Srinagar local searches.", icon: <Target className="h-6 w-6 text-primary" /> },
  { title: "On-Page SEO", description: "Content, meta tags, and technical optimization.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Off-Page SEO", description: "Link building and online presence.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Keyword Research", description: "Find keywords that bring customers.", icon: <Search className="h-6 w-6 text-primary" /> },
  { title: "Analytics", description: "Monthly reports and performance tracking.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Growth Focus", description: "Strategies for continuous improvement.", icon: <TrendingUp className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Rank on first page of Google",
  "More organic traffic to your website",
  "Local visibility for Kashmir businesses",
  "Google My Business optimization",
  "Transparent monthly reporting",
  "No long-term contracts",
  "Ethical white-hat techniques",
  "Local SEO expertise",
];

const faqs = [
  { question: "How long does SEO take to show results?", answer: "SEO is a long-term strategy. Initial improvements often appear in 2-3 months, with significant results typically visible in 4-6 months. Competitive keywords may take longer." },
  { question: "How much do SEO services cost in Kashmir?", answer: "SEO services in Kashmir range from INR 8,000-15,000/month for local SEO, INR 15,000-25,000/month for standard SEO, and INR 30,000+/month for comprehensive campaigns." },
  { question: "Do you guarantee first page rankings?", answer: "No ethical SEO company can guarantee specific rankings as Google's algorithm is complex. We guarantee our best efforts using proven techniques and transparent reporting of progress." },
  { question: "What's included in SEO services?", answer: "Our SEO services include keyword research, on-page optimization, technical SEO, content optimization, link building, local SEO, and monthly reporting with actionable insights." },
];

const relatedServices = [
  { title: "SEO-Friendly Websites", href: "/services/seo-friendly-website-kashmir" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "Landing Page Design", href: "/services/landing-page-design-srinagar" },
  { title: "Website Redesign", href: "/services/website-redesign-kashmir" },
];

export default function SEOServicesSrinagarPage() {
  return (
    <ServicePageTemplate
      title="SEO Services in Srinagar"
      subtitle="Search Engine Optimization"
      description="Improve your Google rankings with EASYIO Technologies' SEO services. Local SEO, on-page optimization, and link building to help businesses in Srinagar and Kashmir get found online."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "SEO Services", href: "/services/seo-services-srinagar" },
      ]}
      primaryKeyword="SEO Services"
      location="Srinagar, Kashmir"
    />
  );
}


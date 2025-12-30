import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Target, MousePointer, BarChart, Zap, Layout, Sparkles } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Landing Page Design Srinagar | Conversion Pages Kashmir - EASYIO",
  description: "Best landing page design in Srinagar, Kashmir. High-converting landing pages for marketing campaigns. EASYIO Technologies - landing page designers J&K.",
  keywords: "landing page design srinagar, landing page kashmir, conversion page srinagar, marketing page kashmir, lead generation page J&K, campaign page srinagar",
  openGraph: {
    title: "Landing Page Design Srinagar | Conversion Pages Kashmir",
    description: "Best landing page design in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/landing-page-design-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/landing-page-design-srinagar` },
};

const features = [
  { title: "Conversion Focus", description: "Designed to convert visitors into leads or customers.", icon: <Target className="h-6 w-6 text-primary" /> },
  { title: "Clear CTAs", description: "Compelling call-to-action buttons that drive action.", icon: <MousePointer className="h-6 w-6 text-primary" /> },
  { title: "A/B Testing", description: "Test different versions for best results.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Fast Loading", description: "Lightning-fast pages for better conversions.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Modern Design", description: "Eye-catching designs that engage visitors.", icon: <Layout className="h-6 w-6 text-primary" /> },
  { title: "Lead Capture", description: "Optimized forms for lead generation.", icon: <Sparkles className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Higher conversion rates than regular pages",
  "Perfect for ad campaigns",
  "Quick turnaround time",
  "Mobile-optimized designs",
  "Integration with CRM and email tools",
  "Analytics and tracking setup",
  "Multiple design variations",
  "Proven conversion principles",
];

const faqs = [
  { question: "What is a landing page?", answer: "A landing page is a standalone page designed for a specific marketing campaign with a single goal - to convert visitors into leads or customers through focused messaging and clear calls-to-action." },
  { question: "How much does a landing page cost in Kashmir?", answer: "Landing page design in Kashmir ranges from INR 10,000-20,000 for basic pages to INR 30,000-50,000 for advanced pages with A/B testing and integrations." },
  { question: "How long to create a landing page?", answer: "Simple landing pages take 3-5 days, while complex pages with custom designs and integrations take 1-2 weeks." },
  { question: "Can you integrate with Facebook/Google Ads?", answer: "Yes, we set up proper tracking pixels, conversion tracking, and thank-you pages for your advertising campaigns." },
];

const relatedServices = [
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "SEO Services", href: "/services/seo-services-srinagar" },
  { title: "E-commerce Development", href: "/services/ecommerce-website-development-kashmir" },
  { title: "Website Redesign", href: "/services/website-redesign-kashmir" },
];

export default function LandingPageDesignSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Landing Page Design in Srinagar"
      subtitle="High-Converting Marketing Pages"
      description="Create landing pages that convert with EASYIO Technologies' design services. Focused, compelling pages for your marketing campaigns that turn visitors into customers in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "Landing Pages", href: "/services/landing-page-design-srinagar" },
      ]}
      primaryKeyword="Landing Page Design"
      location="Srinagar, Kashmir"
    />
  );
}


import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Code, Search, Zap, Server, Globe, Shield } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Next.js Development Kashmir | Next.js Developers Srinagar - EASYIO",
  description: "Best Next.js development company in Kashmir. SEO-friendly React applications, SSR, static sites. EASYIO Technologies - Next.js experts in Srinagar, J&K.",
  keywords: "next js development kashmir, nextjs developers srinagar, next.js company kashmir, ssr development J&K, static site generation kashmir, vercel deployment srinagar",
  openGraph: {
    title: "Next.js Development Kashmir | Next.js Developers Srinagar",
    description: "Best Next.js development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/next-js-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/next-js-development-kashmir` },
};

const features = [
  { title: "Server-Side Rendering", description: "SEO-optimized pages with server-side rendering.", icon: <Server className="h-6 w-6 text-primary" /> },
  { title: "SEO Optimization", description: "Built-in SEO features for better Google rankings.", icon: <Search className="h-6 w-6 text-primary" /> },
  { title: "Fast Performance", description: "Automatic code splitting and optimized loading.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "API Routes", description: "Built-in API routes for backend functionality.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "Global CDN", description: "Deploy on Vercel's global edge network.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Enterprise Ready", description: "Scalable architecture for any size project.", icon: <Shield className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Best framework for SEO in Kashmir",
  "Fast page loads for better user experience",
  "Zero-config deployment on Vercel",
  "React-based with full ecosystem",
  "Image optimization built-in",
  "TypeScript support",
  "Incremental static regeneration",
  "Used by major companies worldwide",
];

const faqs = [
  { question: "What is Next.js?", answer: "Next.js is a React framework by Vercel that enables server-side rendering, static site generation, and API routes. It's perfect for SEO-focused websites and web applications." },
  { question: "Why choose Next.js over plain React?", answer: "Next.js adds server-side rendering for better SEO, automatic code splitting, image optimization, and simpler routing compared to plain React." },
  { question: "How much does Next.js development cost?", answer: "Next.js development in Kashmir ranges from INR 50,000-1,00,000 for marketing sites to INR 2,00,000+ for complex applications." },
  { question: "Where can Next.js apps be hosted?", answer: "We recommend Vercel for optimal performance, but Next.js apps can also be hosted on AWS, DigitalOcean, Netlify, or any Node.js hosting." },
];

const relatedServices = [
  { title: "React.js Development", href: "/services/react-js-development-srinagar" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "Custom Web Apps", href: "/services/custom-web-application-kashmir" },
  { title: "SEO Services", href: "/services/seo-services-srinagar" },
];

export default function NextJsDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="Next.js Development in Kashmir"
      subtitle="SEO-Optimized React Applications"
      description="Build lightning-fast, SEO-friendly websites with EASYIO Technologies' Next.js development services. Server-side rendering, static generation, and optimal performance for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "Next.js", href: "/services/next-js-development-kashmir" },
      ]}
      primaryKeyword="Next.js Development"
      location="Kashmir"
    />
  );
}


import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Code, Zap, Layers, RefreshCw, Globe, Users } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "React.js Development Srinagar | React Developers Kashmir - EASYIO",
  description: "Best React.js development company in Srinagar, Kashmir. Custom React applications, SPAs, web apps. EASYIO Technologies - React experts J&K.",
  keywords: "react js development srinagar, react developers kashmir, react development J&K, reactjs company srinagar, spa development kashmir, react web app srinagar",
  openGraph: {
    title: "React.js Development Srinagar | React Developers Kashmir",
    description: "Best React.js development in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/react-js-development-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/react-js-development-srinagar` },
};

const features = [
  { title: "React Applications", description: "Modern web applications built with React.js.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "Fast Performance", description: "Optimized React apps with virtual DOM.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Component Architecture", description: "Reusable components for maintainable code.", icon: <Layers className="h-6 w-6 text-primary" /> },
  { title: "State Management", description: "Redux, Zustand, or Context for state management.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "API Integration", description: "RESTful and GraphQL API integration.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Large Community", description: "Backed by Facebook with extensive ecosystem.", icon: <Users className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Expert React developers in Kashmir",
  "Fast, interactive user interfaces",
  "SEO-friendly with Next.js",
  "Reusable component libraries",
  "Easy maintenance and updates",
  "Integration with any backend",
  "Mobile apps with React Native",
  "Enterprise-grade applications",
];

const faqs = [
  { question: "What is React.js?", answer: "React.js is Facebook's JavaScript library for building user interfaces. It's used by Facebook, Instagram, Netflix, and many more. EASYIO Technologies builds modern web applications using React." },
  { question: "How much does React development cost in Kashmir?", answer: "React.js development in Kashmir ranges from INR 50,000-1,00,000 for simple applications to INR 2,00,000+ for complex enterprise applications." },
  { question: "React vs Angular vs Vue - which is better?", answer: "Each has pros and cons. React is most popular with largest ecosystem, Angular is great for enterprise apps, Vue is easier to learn. We recommend based on your specific needs." },
  { question: "Can React be used for e-commerce?", answer: "Yes, React with Next.js is excellent for e-commerce with benefits like fast page loads, SEO optimization, and great user experience." },
];

const relatedServices = [
  { title: "Next.js Development", href: "/services/next-js-development-kashmir" },
  { title: "React Native Development", href: "/services/react-native-app-development-srinagar" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "Custom Web Apps", href: "/services/custom-web-application-kashmir" },
];

export default function ReactJsDevelopmentSrinagarPage() {
  return (
    <ServicePageTemplate
      title="React.js Development in Srinagar"
      subtitle="Modern React Applications"
      description="Build powerful web applications with EASYIO Technologies' React.js development services. Fast, interactive, and scalable React applications for businesses in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "React.js", href: "/services/react-js-development-srinagar" },
      ]}
      primaryKeyword="React.js Development"
      location="Srinagar, Kashmir"
    />
  );
}


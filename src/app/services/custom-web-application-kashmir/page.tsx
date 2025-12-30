import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Code, Database, Shield, Zap, Cloud, Users } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Custom Web Application Development Kashmir | Web Apps Srinagar",
  description: "Best custom web application development in Kashmir. Bespoke web apps, SaaS, portals, dashboards. EASYIO Technologies - web app developers in Srinagar, J&K.",
  keywords: "custom web application development kashmir, web application srinagar, custom web app J&K, web software kashmir, saas development srinagar, web portal development kashmir",
  openGraph: {
    title: "Custom Web Application Development Kashmir | Web Apps Srinagar",
    description: "Best custom web application development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/custom-web-application-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/custom-web-application-kashmir` },
};

const features = [
  { title: "Custom Development", description: "Bespoke applications built for your specific needs.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "Database Design", description: "Optimized database architecture for performance.", icon: <Database className="h-6 w-6 text-primary" /> },
  { title: "Security", description: "Enterprise-grade security and data protection.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Performance", description: "Scalable architecture for high performance.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Cloud Deployment", description: "Deploy on AWS, Azure, or Google Cloud.", icon: <Cloud className="h-6 w-6 text-primary" /> },
  { title: "User Management", description: "Role-based access and user administration.", icon: <Users className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Solutions tailored to your business processes",
  "Scalable for future growth",
  "Integration with existing systems",
  "Full ownership of the application",
  "Expert developers in Kashmir",
  "Agile development methodology",
  "Ongoing support and maintenance",
  "Modern technology stack",
];

const faqs = [
  { question: "What is a custom web application?", answer: "A custom web application is software built specifically for your business needs - not off-the-shelf. It can be a CRM, inventory system, booking portal, customer dashboard, or any business tool accessed via web browser." },
  { question: "How much does custom web application cost?", answer: "Custom web applications in Kashmir start from INR 1,00,000 for simple applications and range up to INR 10,00,000+ for complex enterprise systems depending on features and scale." },
  { question: "How long does development take?", answer: "Simple applications take 8-12 weeks, medium complexity 12-24 weeks, and complex enterprise applications 24-52 weeks depending on requirements." },
  { question: "What technologies do you use?", answer: "We use modern technologies including React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, and more based on project requirements." },
];

const relatedServices = [
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "React.js Development", href: "/services/react-js-development-srinagar" },
  { title: "ERP Software", href: "/services/erp-software-kashmir" },
  { title: "Cloud Solutions", href: "/services/erp-modules/cloud-erp-kashmir" },
];

export default function CustomWebApplicationKashmirPage() {
  return (
    <ServicePageTemplate
      title="Custom Web Application Development in Kashmir"
      subtitle="Bespoke Business Software"
      description="Build powerful web applications tailored to your business with EASYIO Technologies. Custom portals, dashboards, SaaS applications, and enterprise software for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "Custom Web Apps", href: "/services/custom-web-application-kashmir" },
      ]}
      primaryKeyword="Custom Web Application"
      location="Kashmir"
    />
  );
}


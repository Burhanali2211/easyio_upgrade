import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { RefreshCw, Shield, Bug, Zap, Database, Headphones } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Website Maintenance Srinagar | Web Support Services Kashmir",
  description: "Best website maintenance services in Srinagar, Kashmir. Updates, security, backups, content changes. EASYIO Technologies - website support J&K.",
  keywords: "website maintenance srinagar, website maintenance services kashmir, web support srinagar, website updates J&K, website security kashmir, monthly website maintenance cost srinagar",
  openGraph: {
    title: "Website Maintenance Srinagar | Web Support Services Kashmir",
    description: "Best website maintenance services in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/website-maintenance-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/website-maintenance-srinagar` },
};

const features = [
  { title: "Regular Updates", description: "CMS, plugin, and theme updates for security.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "Security Monitoring", description: "24/7 security monitoring and malware scans.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Bug Fixes", description: "Quick resolution of website issues.", icon: <Bug className="h-6 w-6 text-primary" /> },
  { title: "Performance", description: "Speed optimization and uptime monitoring.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Backups", description: "Regular backups with easy restoration.", icon: <Database className="h-6 w-6 text-primary" /> },
  { title: "Support", description: "Dedicated support for your website needs.", icon: <Headphones className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Keep your website secure and updated",
  "Prevent downtime and security breaches",
  "Regular content updates as needed",
  "Peace of mind with professional care",
  "Local support team in Srinagar",
  "Affordable monthly packages",
  "Priority response times",
  "Monthly health reports",
];

const faqs = [
  { question: "Why do websites need maintenance?", answer: "Websites need regular maintenance for security updates, bug fixes, performance optimization, content updates, and to ensure compatibility with new browsers and devices." },
  { question: "How much does website maintenance cost in Srinagar?", answer: "Website maintenance in Srinagar starts from INR 2,000/month for basic maintenance, INR 5,000/month for standard packages, and INR 10,000+/month for premium support." },
  { question: "What's included in maintenance?", answer: "Our packages include CMS updates, security patches, daily backups, uptime monitoring, bug fixes, content updates, and dedicated support hours based on the plan." },
  { question: "Do you maintain websites built by others?", answer: "Yes, we can take over maintenance of existing websites after an initial audit. We support WordPress, custom PHP, React, and other platforms." },
];

const relatedServices = [
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "WordPress Development", href: "/services/wordpress-development-srinagar" },
  { title: "Website Redesign", href: "/services/website-redesign-kashmir" },
  { title: "SEO Services", href: "/services/seo-services-srinagar" },
];

export default function WebsiteMaintenanceSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Website Maintenance in Srinagar"
      subtitle="Professional Website Support"
      description="Keep your website running perfectly with EASYIO Technologies' maintenance services. Regular updates, security monitoring, backups, and support for businesses in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "Website Maintenance", href: "/services/website-maintenance-srinagar" },
      ]}
      primaryKeyword="Website Maintenance"
      location="Srinagar, Kashmir"
    />
  );
}


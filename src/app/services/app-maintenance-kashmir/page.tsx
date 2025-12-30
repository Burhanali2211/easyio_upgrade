import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { RefreshCw, Shield, Bug, Zap, Clock, Headphones } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "App Maintenance Services Kashmir | Mobile App Support Srinagar",
  description: "Best app maintenance services in Kashmir. Bug fixes, updates, performance optimization, security patches. EASYIO Technologies - app support in Srinagar, J&K.",
  keywords: "app maintenance kashmir, app maintenance services srinagar, mobile app support kashmir, app updates J&K, app bug fixes kashmir, app security patches srinagar",
  openGraph: {
    title: "App Maintenance Services Kashmir | Mobile App Support Srinagar",
    description: "Best app maintenance services in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/app-maintenance-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/app-maintenance-kashmir` },
};

const features = [
  { title: "Regular Updates", description: "OS updates, SDK updates, and feature enhancements.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "Security Patches", description: "Timely security updates to protect user data.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Bug Fixes", description: "Quick identification and resolution of issues.", icon: <Bug className="h-6 w-6 text-primary" /> },
  { title: "Performance Optimization", description: "Speed improvements and memory optimization.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Monitoring", description: "24/7 app monitoring with crash reporting.", icon: <Clock className="h-6 w-6 text-primary" /> },
  { title: "Support", description: "Dedicated support team for technical issues.", icon: <Headphones className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Keep your app running smoothly",
  "Stay compatible with latest OS versions",
  "Protect against security vulnerabilities",
  "Improve user experience continuously",
  "Local support team in Srinagar",
  "Flexible maintenance packages",
  "Proactive issue detection",
  "Store rating maintenance",
];

const faqs = [
  { question: "Why do apps need regular maintenance?", answer: "Apps need maintenance for OS compatibility updates, security patches, bug fixes, performance improvements, and to maintain store ratings. Without maintenance, apps become outdated and may stop working." },
  { question: "How much does app maintenance cost in Kashmir?", answer: "App maintenance packages in Kashmir start from INR 5,000/month for basic maintenance, INR 10,000-15,000/month for standard packages, and INR 20,000+/month for premium support with feature updates." },
  { question: "Do you maintain apps developed by others?", answer: "Yes, we can take over maintenance of existing apps developed by other companies after a code review and documentation process." },
  { question: "What is included in maintenance?", answer: "Our maintenance includes bug fixes, OS updates, security patches, performance monitoring, crash analytics, minor enhancements, and dedicated support hours." },
];

const relatedServices = [
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
  { title: "Website Maintenance", href: "/services/website-maintenance-srinagar" },
  { title: "Software Maintenance", href: "/services/erp-software-kashmir" },
  { title: "Flutter Development", href: "/services/flutter-app-development-kashmir" },
];

export default function AppMaintenanceKashmirPage() {
  return (
    <ServicePageTemplate
      title="App Maintenance Services in Kashmir"
      subtitle="Mobile App Support & Updates"
      description="Keep your mobile apps running perfectly with EASYIO Technologies' app maintenance services. Regular updates, security patches, bug fixes, and performance optimization for apps in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "App Maintenance", href: "/services/app-maintenance-kashmir" },
      ]}
      primaryKeyword="App Maintenance Services"
      location="Kashmir"
    />
  );
}


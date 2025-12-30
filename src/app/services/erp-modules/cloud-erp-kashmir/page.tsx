import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Cloud, Globe, Shield, RefreshCw, Smartphone, TrendingUp } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Cloud ERP Kashmir | SaaS ERP Software Srinagar - EASYIO Technologies",
  description: "Best cloud ERP software in Kashmir. SaaS-based enterprise solutions, remote access, automatic updates. EASYIO Technologies - cloud ERP provider in Srinagar, J&K.",
  keywords: "cloud erp kashmir, cloud erp srinagar, saas erp J&K, online erp kashmir, web based erp srinagar, cloud enterprise software kashmir",
  openGraph: {
    title: "Cloud ERP Kashmir | SaaS ERP Software Srinagar",
    description: "Best cloud ERP software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/cloud-erp-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/cloud-erp-kashmir` },
};

const features = [
  { title: "Cloud-Based Access", description: "Access your ERP from anywhere with internet connectivity in Kashmir.", icon: <Cloud className="h-6 w-6 text-primary" /> },
  { title: "Multi-Device Support", description: "Works on desktop, laptop, tablet, and mobile devices.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "Automatic Updates", description: "Always stay updated with the latest features and security patches.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "Data Security", description: "Enterprise-grade security with encryption and regular backups.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Global Access", description: "Access from multiple locations across Kashmir and beyond.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Scalability", description: "Easily scale up as your business grows without infrastructure investment.", icon: <TrendingUp className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "No upfront infrastructure investment",
  "Lower total cost of ownership",
  "Access from anywhere in Kashmir",
  "Automatic backups and disaster recovery",
  "Always on latest version",
  "Pay-as-you-grow pricing model",
  "Quick deployment in days, not months",
  "24/7 cloud support and monitoring",
];

const faqs = [
  { question: "What is cloud ERP?", answer: "Cloud ERP is enterprise resource planning software hosted on cloud servers, accessible via internet from anywhere. No local server installation needed. EASYIO Technologies offers cloud ERP solutions for Kashmir businesses." },
  { question: "How much does cloud ERP cost in Kashmir?", answer: "Cloud ERP in Kashmir starts from INR 5,000/month for small businesses with basic modules. Enterprise packages range from INR 15,000-50,000/month depending on users and modules." },
  { question: "Is cloud ERP secure?", answer: "Yes, our cloud ERP uses enterprise-grade security including SSL encryption, regular backups, access controls, and data centers with ISO certifications. Your data is safer than on local servers." },
  { question: "What if internet connectivity is poor?", answer: "Our cloud ERP has offline capabilities for critical functions and syncs data when connectivity resumes. We also optimize for low-bandwidth connections common in some areas of Kashmir." },
  { question: "Can I migrate from on-premise to cloud?", answer: "Yes, we provide complete migration services from on-premise ERP or legacy systems to cloud ERP with data migration, training, and parallel running support." },
];

const relatedServices = [
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
  { title: "HRMS Software", href: "/services/erp-modules/hrms-software-srinagar" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir" },
];

export default function CloudERPKashmirPage() {
  return (
    <ServicePageTemplate
      title="Cloud ERP Software in Kashmir"
      subtitle="SaaS Enterprise Solutions"
      description="Embrace the future with EASYIO Technologies' cloud ERP solutions. Access your business data from anywhere, automatic updates, and enterprise-grade security for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Cloud ERP", href: "/services/erp-modules/cloud-erp-kashmir" },
      ]}
      primaryKeyword="Cloud ERP"
      location="Kashmir"
    />
  );
}


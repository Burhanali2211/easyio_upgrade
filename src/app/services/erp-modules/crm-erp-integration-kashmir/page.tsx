import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Link2, Users, Database, RefreshCw, Shield, Zap } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "CRM ERP Integration Kashmir | Unified Business Software Srinagar",
  description: "CRM ERP integration services in Kashmir. Unified customer and business data, seamless workflows. EASYIO Technologies - integration specialists in Srinagar, J&K.",
  keywords: "crm erp integration kashmir, crm erp srinagar, business software integration J&K, unified crm erp kashmir, customer management erp kashmir",
  openGraph: {
    title: "CRM ERP Integration Kashmir | Unified Business Software Srinagar",
    description: "CRM ERP integration services in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/crm-erp-integration-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/crm-erp-integration-kashmir` },
};

const features = [
  { title: "Unified Data Platform", description: "Single source of truth for customer and business data.", icon: <Database className="h-6 w-6 text-primary" /> },
  { title: "Seamless Integration", description: "Connect CRM with inventory, billing, and accounting modules.", icon: <Link2 className="h-6 w-6 text-primary" /> },
  { title: "360° Customer View", description: "Complete customer history including orders, payments, and interactions.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Real-time Sync", description: "Automatic data synchronization across all business modules.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "Workflow Automation", description: "Automated processes from lead to order to delivery.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Data Security", description: "Secure data handling with role-based access control.", icon: <Shield className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Eliminate data silos and manual data entry",
  "Improved customer service with complete history",
  "Faster quote-to-order processing",
  "Accurate inventory visibility for sales team",
  "Better sales forecasting with ERP data",
  "Reduced operational costs",
  "Enhanced reporting and analytics",
  "Streamlined business processes",
];

const faqs = [
  { question: "What is CRM ERP integration?", answer: "CRM ERP integration connects your customer relationship management system with enterprise resource planning modules like inventory, billing, and accounting for unified business operations." },
  { question: "Why integrate CRM with ERP?", answer: "Integration eliminates data silos, reduces manual entry, provides 360° customer view, enables accurate quoting with real-time inventory, and streamlines order-to-delivery process." },
  { question: "Can you integrate existing systems?", answer: "Yes, we integrate various CRM and ERP systems including Salesforce, HubSpot, Zoho, Tally, SAP, and custom solutions through APIs and middleware." },
  { question: "How long does integration take?", answer: "Simple integrations take 2-4 weeks, while complex multi-system integrations may take 8-12 weeks depending on data complexity and customization needs." },
];

const relatedServices = [
  { title: "Sales Management", href: "/services/erp-modules/sales-management-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
  { title: "Custom Software", href: "/services/custom-web-application-kashmir" },
  { title: "Cloud ERP", href: "/services/erp-modules/cloud-erp-kashmir" },
];

export default function CRMERPIntegrationKashmirPage() {
  return (
    <ServicePageTemplate
      title="CRM ERP Integration in Kashmir"
      subtitle="Unified Business Platform"
      description="Unify your customer and business data with EASYIO Technologies' CRM ERP integration services. Seamless workflows, real-time sync, and 360° customer view for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "CRM ERP Integration", href: "/services/erp-modules/crm-erp-integration-kashmir" },
      ]}
      primaryKeyword="CRM ERP Integration"
      location="Kashmir"
    />
  );
}


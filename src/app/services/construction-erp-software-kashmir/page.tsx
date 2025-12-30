import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Building, Package, Users, CreditCard, ClipboardList, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Construction ERP Software Kashmir | Builder Software Srinagar",
  description: "Best construction ERP software in Kashmir. Project management, materials, labor, billing for builders. EASYIO Technologies - construction software in Srinagar, J&K.",
  keywords: "construction erp software kashmir, builder software srinagar, construction management software J&K, contractor software kashmir, real estate builder software srinagar",
  openGraph: {
    title: "Construction ERP Software Kashmir | Builder Software Srinagar",
    description: "Best construction ERP software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/construction-erp-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/construction-erp-software-kashmir` },
};

const features = [
  { title: "Project Management", description: "Track multiple construction projects.", icon: <Building className="h-6 w-6 text-primary" /> },
  { title: "Material Management", description: "Track materials, orders, and consumption.", icon: <Package className="h-6 w-6 text-primary" /> },
  { title: "Labor Management", description: "Daily labor attendance and contractor payments.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Billing & Payments", description: "Progress billing and payment tracking.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Site Reports", description: "Daily progress reports and documentation.", icon: <ClipboardList className="h-6 w-6 text-primary" /> },
  { title: "Analytics", description: "Project cost analysis and profitability.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Control project costs effectively",
  "Track material usage and wastage",
  "Real-time project progress",
  "Contractor and vendor management",
  "Mobile app for site engineers",
  "Document management",
  "Multiple project handling",
  "Profit/loss by project",
];

const faqs = [
  { question: "What is construction ERP?", answer: "Construction ERP manages all aspects of construction business - project management, materials, labor, equipment, contractors, billing, and accounting in one system." },
  { question: "How much does construction software cost?", answer: "Construction ERP in Kashmir ranges from INR 1,00,000-2,00,000 for small builders to INR 3,00,000-5,00,000 for large construction companies with multiple projects." },
  { question: "Can site engineers use it on mobile?", answer: "Yes, we provide mobile apps for site engineers to record daily progress, attendance, material consumption, and upload photos from construction sites." },
  { question: "Does it handle contractor payments?", answer: "Yes, the system manages contractor work orders, measurement books, running account bills, and payment tracking with TDS deductions." },
];

const relatedServices = [
  { title: "Real Estate CRM", href: "/services/real-estate-crm-kashmir" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "ERP Software", href: "/services/erp-software-kashmir" },
  { title: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir" },
];

export default function ConstructionERPSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Construction ERP Software in Kashmir"
      subtitle="Builder & Contractor Management"
      description="Manage your construction projects efficiently with EASYIO Technologies' construction ERP. Project tracking, materials, labor, and billing for builders and contractors in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Construction", href: "/services/construction-erp-software-kashmir" },
        { label: "Construction ERP", href: "/services/construction-erp-software-kashmir" },
      ]}
      primaryKeyword="Construction ERP Software"
      location="Kashmir"
    />
  );
}


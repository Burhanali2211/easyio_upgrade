import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { TrendingUp, Users, Target, FileText, PieChart, Zap } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Sales Management System Kashmir | CRM Software Srinagar - EASYIO",
  description: "Best sales management software in Kashmir. Lead tracking, quotation management, sales pipeline. EASYIO Technologies - sales CRM solutions in Srinagar, J&K.",
  keywords: "sales management system kashmir, crm software srinagar, sales tracking kashmir, lead management software J&K, sales pipeline kashmir, quotation software srinagar",
  openGraph: {
    title: "Sales Management System Kashmir | CRM Software Srinagar",
    description: "Best sales management software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/sales-management-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/sales-management-kashmir` },
};

const features = [
  { title: "Lead Management", description: "Capture, track, and nurture leads through the sales funnel.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Sales Pipeline", description: "Visual pipeline management with deal stages and probability tracking.", icon: <TrendingUp className="h-6 w-6 text-primary" /> },
  { title: "Quotation Management", description: "Create professional quotations with product catalog and pricing.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Target & Goals", description: "Set and track sales targets for teams and individuals.", icon: <Target className="h-6 w-6 text-primary" /> },
  { title: "Sales Analytics", description: "Comprehensive sales reports, forecasting, and performance metrics.", icon: <PieChart className="h-6 w-6 text-primary" /> },
  { title: "Automation", description: "Automated follow-ups, reminders, and workflow triggers.", icon: <Zap className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Increase sales conversion rates by 30%+",
  "360-degree customer view for better relationships",
  "Mobile CRM for sales teams in the field",
  "Integration with billing and inventory",
  "Automated lead assignment and follow-ups",
  "Sales forecasting and pipeline analytics",
  "Multi-currency and multi-location support",
  "WhatsApp and email integration for Kashmir",
];

const faqs = [
  { question: "What is sales management software?", answer: "Sales management software helps businesses track leads, manage customer relationships, create quotations, and analyze sales performance. EASYIO Technologies offers complete sales CRM solutions for Kashmir businesses." },
  { question: "How much does CRM software cost in Kashmir?", answer: "CRM software in Kashmir ranges from INR 20,000 for small teams to INR 1,00,000+ for enterprise solutions. Cloud CRM starts from INR 500/user/month." },
  { question: "Can sales team access it on mobile?", answer: "Yes, our mobile CRM app allows sales teams to access leads, update status, create quotations, and view customer history while on the field anywhere in Kashmir." },
  { question: "Does it integrate with WhatsApp?", answer: "Yes, we offer WhatsApp integration for lead communication, automated messages, and customer engagement - very popular among Kashmir businesses." },
];

const relatedServices = [
  { title: "CRM-ERP Integration", href: "/services/erp-modules/crm-erp-integration-kashmir" },
  { title: "Billing Software", href: "/services/erp-modules/billing-software-srinagar" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function SalesManagementKashmirPage() {
  return (
    <ServicePageTemplate
      title="Sales Management System in Kashmir"
      subtitle="Sales CRM & Pipeline Management"
      description="Boost your sales with EASYIO Technologies' powerful sales management software. Lead tracking, quotation management, and sales analytics for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Sales Management", href: "/services/erp-modules/sales-management-kashmir" },
      ]}
      primaryKeyword="Sales Management System"
      location="Kashmir"
    />
  );
}


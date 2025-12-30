import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Receipt, CreditCard, FileText, Printer, BarChart, Shield } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Billing Software Srinagar | GST Invoice Software Kashmir - EASYIO",
  description: "Best billing software in Srinagar, Kashmir. GST-compliant invoicing, multiple payment modes, thermal printing. EASYIO Technologies - leading billing solutions in J&K.",
  keywords: "billing software srinagar, billing software kashmir, gst invoice software kashmir, invoicing software srinagar, billing system J&K, invoice management kashmir",
  openGraph: {
    title: "Billing Software Srinagar | GST Invoice Software Kashmir",
    description: "Best GST-compliant billing software in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/billing-software-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/billing-software-srinagar` },
};

const features = [
  { title: "GST-Compliant Invoicing", description: "Generate GST-compliant invoices with CGST, SGST, IGST calculations.", icon: <Receipt className="h-6 w-6 text-primary" /> },
  { title: "Multiple Payment Modes", description: "Accept cash, card, UPI, and digital wallets with integrated payment tracking.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Invoice Templates", description: "Customizable invoice templates with your business branding.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Thermal & A4 Printing", description: "Support for thermal receipt printers and A4 tax invoice printing.", icon: <Printer className="h-6 w-6 text-primary" /> },
  { title: "Sales Reports", description: "Daily, weekly, monthly sales reports with detailed analytics.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Data Security", description: "Secure data storage with automatic backups and encryption.", icon: <Shield className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "100% GST-compliant for J&K businesses",
  "Fast billing with barcode scanning support",
  "Multi-user access with role-based permissions",
  "Offline mode with data sync capability",
  "Customer management and credit tracking",
  "Integration with inventory and accounting",
  "E-invoice and e-way bill generation",
  "Mobile billing app for on-the-go invoicing",
];

const faqs = [
  { question: "Is your billing software GST compliant?", answer: "Yes, our billing software is 100% GST compliant with support for CGST, SGST, IGST, e-invoicing, and GSTR filing assistance for businesses in Kashmir." },
  { question: "How much does billing software cost in Kashmir?", answer: "Billing software in Kashmir starts from INR 10,000 for basic retail billing to INR 50,000+ for advanced multi-user systems with inventory integration." },
  { question: "Can I use it for multiple shops?", answer: "Yes, our billing software supports multi-branch operations with centralized reporting and inventory management." },
  { question: "Does it work offline?", answer: "Yes, our software works offline and syncs data automatically when internet is available - perfect for areas with connectivity issues in Kashmir." },
];

const relatedServices = [
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir" },
  { title: "POS Software", href: "/services/pos-software-srinagar" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function BillingSoftwareSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Billing Software in Srinagar, Kashmir"
      subtitle="GST-Compliant Invoice Management"
      description="Streamline your billing operations with EASYIO Technologies' professional billing software. GST-compliant invoicing, multiple payment modes, and seamless inventory integration for businesses in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Billing Software", href: "/services/erp-modules/billing-software-srinagar" },
      ]}
      primaryKeyword="Billing Software"
      location="Srinagar, Kashmir"
    />
  );
}


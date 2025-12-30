import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Calculator, BookOpen, PieChart, FileSpreadsheet, TrendingUp, Lock } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Accounting Software Kashmir | Financial Management Srinagar - EASYIO",
  description: "Best accounting software in Kashmir. Complete financial management, GST returns, balance sheet, P&L statements. EASYIO Technologies - accounting solutions in Srinagar, J&K.",
  keywords: "accounting software kashmir, accounting software srinagar, financial management kashmir, bookkeeping software J&K, tally alternative kashmir, gst accounting software srinagar",
  openGraph: {
    title: "Accounting Software Kashmir | Financial Management Srinagar",
    description: "Best accounting software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/accounting-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/accounting-software-kashmir` },
};

const features = [
  { title: "Double-Entry Bookkeeping", description: "Complete accounting with automatic journal entries and ledger management.", icon: <BookOpen className="h-6 w-6 text-primary" /> },
  { title: "GST Compliance", description: "Auto GST calculations, GSTR reports, and return filing assistance.", icon: <Calculator className="h-6 w-6 text-primary" /> },
  { title: "Financial Statements", description: "Auto-generated Balance Sheet, P&L, Cash Flow, and Trial Balance.", icon: <FileSpreadsheet className="h-6 w-6 text-primary" /> },
  { title: "Multi-Currency Support", description: "Handle transactions in multiple currencies with exchange rate management.", icon: <TrendingUp className="h-6 w-6 text-primary" /> },
  { title: "Financial Analytics", description: "Visual dashboards with ratio analysis and financial health indicators.", icon: <PieChart className="h-6 w-6 text-primary" /> },
  { title: "Audit Trail", description: "Complete transaction history with user tracking for audit compliance.", icon: <Lock className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Simplified accounting for Kashmir businesses",
  "GST-ready with automated tax calculations",
  "Bank reconciliation and statement import",
  "Multi-branch accounting consolidation",
  "Integration with billing and inventory",
  "CA-friendly reports and data export",
  "Cloud access from anywhere in J&K",
  "Compliance with Indian accounting standards",
];

const faqs = [
  { question: "Is your accounting software GST compliant?", answer: "Yes, our accounting software is fully GST compliant with automated CGST, SGST, IGST calculations, GSTR report generation, and e-filing support for businesses in Kashmir." },
  { question: "How much does accounting software cost in Kashmir?", answer: "Accounting software in Kashmir ranges from INR 15,000 for small businesses to INR 75,000+ for multi-company enterprise solutions. Cloud options start from INR 1,000/month." },
  { question: "Can my CA access the software remotely?", answer: "Yes, our cloud-based accounting software allows your CA to access financial data remotely with role-based permissions for secure collaboration." },
  { question: "Does it integrate with Tally?", answer: "Yes, we provide data import/export compatibility with Tally and other popular accounting software for easy migration." },
];

const relatedServices = [
  { title: "Billing Software", href: "/services/erp-modules/billing-software-srinagar" },
  { title: "Payroll Software", href: "/services/erp-modules/payroll-software-kashmir" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function AccountingSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Accounting Software in Kashmir"
      subtitle="Financial Management System"
      description="Manage your finances effortlessly with EASYIO Technologies' comprehensive accounting software. GST compliance, automated bookkeeping, and financial reporting for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir" },
      ]}
      primaryKeyword="Accounting Software"
      location="Kashmir"
    />
  );
}


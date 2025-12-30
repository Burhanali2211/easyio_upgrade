import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { ShoppingCart, FileText, Users, TrendingDown, Bell, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Purchase Management System Kashmir | Procurement Software Srinagar",
  description: "Best purchase management software in Kashmir. Vendor management, purchase orders, quotation comparison. EASYIO Technologies - procurement solutions in Srinagar, J&K.",
  keywords: "purchase management system kashmir, procurement software srinagar, vendor management kashmir, purchase order software J&K, supplier management kashmir",
  openGraph: {
    title: "Purchase Management System Kashmir | Procurement Software Srinagar",
    description: "Best purchase management software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/purchase-management-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/purchase-management-kashmir` },
};

const features = [
  { title: "Purchase Order Management", description: "Create, approve, and track purchase orders with multi-level approval workflows.", icon: <ShoppingCart className="h-6 w-6 text-primary" /> },
  { title: "Vendor Management", description: "Comprehensive vendor database with performance tracking and rating.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Quotation Comparison", description: "Request and compare quotations from multiple vendors easily.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Cost Control", description: "Budget tracking, price history, and cost optimization tools.", icon: <TrendingDown className="h-6 w-6 text-primary" /> },
  { title: "Reorder Alerts", description: "Automatic reorder notifications based on stock levels.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Purchase Analytics", description: "Spending analysis, vendor performance, and procurement insights.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Streamlined procurement process for Kashmir businesses",
  "Reduce procurement costs by 15-25%",
  "Automated approval workflows",
  "Better vendor negotiations with price history",
  "Integration with inventory and accounting",
  "GST-compliant purchase documentation",
  "Multi-location procurement support",
  "Real-time budget tracking",
];

const faqs = [
  { question: "What is purchase management software?", answer: "Purchase management software automates procurement processes including vendor management, purchase orders, quotations, and goods receipt. EASYIO Technologies offers comprehensive procurement solutions for Kashmir businesses." },
  { question: "How does it help reduce costs?", answer: "Our software helps reduce costs through quotation comparison, price history analysis, bulk purchase optimization, and vendor performance tracking - typically saving 15-25% on procurement costs." },
  { question: "Can I manage multiple vendors?", answer: "Yes, you can manage unlimited vendors with complete profiles, performance ratings, payment terms, and transaction history." },
  { question: "Does it integrate with inventory?", answer: "Yes, purchase orders automatically update inventory upon goods receipt with full tracking and quality control options." },
];

const relatedServices = [
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Sales Management", href: "/services/erp-modules/sales-management-kashmir" },
  { title: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function PurchaseManagementKashmirPage() {
  return (
    <ServicePageTemplate
      title="Purchase Management System in Kashmir"
      subtitle="Procurement & Vendor Management"
      description="Optimize your procurement with EASYIO Technologies' purchase management software. Streamlined purchase orders, vendor management, and cost control for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Purchase Management", href: "/services/erp-modules/purchase-management-kashmir" },
      ]}
      primaryKeyword="Purchase Management System"
      location="Kashmir"
    />
  );
}


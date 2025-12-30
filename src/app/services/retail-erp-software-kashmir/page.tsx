import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Store, Package, CreditCard, Truck, BarChart, Users } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Retail ERP Software Kashmir | Retail Management System Srinagar",
  description: "Best retail ERP software in Kashmir. Complete retail management with POS, inventory, purchase, accounting. EASYIO Technologies - retail software in Srinagar, J&K.",
  keywords: "retail erp software kashmir, retail management system srinagar, retail software J&K, shop management software kashmir, supermarket software srinagar",
  openGraph: {
    title: "Retail ERP Software Kashmir | Retail Management System Srinagar",
    description: "Best retail ERP software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/retail-erp-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/retail-erp-software-kashmir` },
};

const features = [
  { title: "Multi-Store Management", description: "Manage multiple retail outlets centrally.", icon: <Store className="h-6 w-6 text-primary" /> },
  { title: "Inventory Control", description: "Stock management across locations.", icon: <Package className="h-6 w-6 text-primary" /> },
  { title: "POS Integration", description: "Integrated point of sale billing.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Purchase Management", description: "Vendor management and purchase orders.", icon: <Truck className="h-6 w-6 text-primary" /> },
  { title: "Analytics", description: "Sales analytics and business intelligence.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Customer Management", description: "CRM and loyalty program management.", icon: <Users className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete solution for retail chains",
  "Real-time inventory across all stores",
  "Centralized purchase and pricing",
  "Customer loyalty programs",
  "E-commerce integration possible",
  "Staff and payroll management",
  "GST and accounting integration",
  "Scalable for growth",
];

const faqs = [
  { question: "What is retail ERP?", answer: "Retail ERP integrates all retail operations - POS, inventory, purchase, vendors, accounting, and CRM - into one unified system for complete business control." },
  { question: "How much does retail ERP cost in Kashmir?", answer: "Retail ERP in Kashmir ranges from INR 75,000-1,50,000 for single-store to INR 2,00,000-5,00,000 for multi-store retail chains with full features." },
  { question: "Can it manage multiple stores?", answer: "Yes, our retail ERP is designed for multi-store operations with centralized inventory, pricing, and reporting across all locations in Kashmir." },
  { question: "Does it integrate with e-commerce?", answer: "Yes, we can integrate with your online store (Shopify, WooCommerce, or custom) for unified inventory and order management across offline and online channels." },
];

const relatedServices = [
  { title: "POS Software", href: "/services/pos-software-srinagar" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "E-commerce Development", href: "/services/ecommerce-website-development-kashmir" },
  { title: "ERP Software", href: "/services/erp-software-kashmir" },
];

export default function RetailERPSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Retail ERP Software in Kashmir"
      subtitle="Complete Retail Management"
      description="Take control of your retail business with EASYIO Technologies' retail ERP. Multi-store management, inventory, POS, and analytics for retail businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Retail", href: "/services/retail-erp-software-kashmir" },
        { label: "Retail ERP", href: "/services/retail-erp-software-kashmir" },
      ]}
      primaryKeyword="Retail ERP Software"
      location="Kashmir"
    />
  );
}


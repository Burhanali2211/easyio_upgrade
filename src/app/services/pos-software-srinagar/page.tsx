import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { ShoppingCart, CreditCard, QrCode, Package, Printer, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "POS Software Srinagar | Point of Sale System Kashmir - EASYIO",
  description: "Best POS software in Srinagar, Kashmir. Retail billing, inventory, barcode support. EASYIO Technologies - point of sale systems J&K.",
  keywords: "pos software srinagar, point of sale kashmir, retail billing software srinagar, pos system J&K, billing machine software kashmir, shop billing software srinagar",
  openGraph: {
    title: "POS Software Srinagar | Point of Sale System Kashmir",
    description: "Best POS software in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/pos-software-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/pos-software-srinagar` },
};

const features = [
  { title: "Quick Billing", description: "Fast checkout with barcode scanning.", icon: <ShoppingCart className="h-6 w-6 text-primary" /> },
  { title: "Payment Options", description: "Cash, card, UPI, and wallet payments.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Barcode Support", description: "Barcode scanning and label printing.", icon: <QrCode className="h-6 w-6 text-primary" /> },
  { title: "Inventory", description: "Real-time stock tracking and alerts.", icon: <Package className="h-6 w-6 text-primary" /> },
  { title: "Receipt Printing", description: "Thermal receipt and invoice printing.", icon: <Printer className="h-6 w-6 text-primary" /> },
  { title: "Reports", description: "Sales, inventory, and profit reports.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Reduce checkout time by 60%",
  "Real-time inventory visibility",
  "GST-compliant billing",
  "Works on existing hardware",
  "Multi-counter support",
  "Customer database and loyalty",
  "Works offline when needed",
  "Affordable for small shops",
];

const faqs = [
  { question: "What is POS software?", answer: "POS (Point of Sale) software automates retail billing, inventory management, and sales tracking. It's used in retail shops, supermarkets, boutiques, and any business selling products." },
  { question: "How much does POS software cost in Srinagar?", answer: "POS software in Srinagar starts from INR 10,000 for basic billing to INR 30,000-50,000 for advanced POS with inventory and multi-store support." },
  { question: "Do I need special hardware?", answer: "Basic POS works on any Windows PC. For faster checkout, you can add barcode scanner, thermal printer, and cash drawer - we can supply hardware bundles." },
  { question: "Can it work without internet?", answer: "Yes, our POS works completely offline. Data syncs to cloud when internet is available, perfect for shops in Kashmir with connectivity issues." },
];

const relatedServices = [
  { title: "Retail ERP", href: "/services/retail-erp-software-kashmir" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Billing Software", href: "/services/erp-modules/billing-software-srinagar" },
  { title: "Restaurant POS", href: "/services/restaurant-billing-software-srinagar" },
];

export default function POSSoftwareSrinagarPage() {
  return (
    <ServicePageTemplate
      title="POS Software in Srinagar"
      subtitle="Point of Sale & Retail Billing"
      description="Speed up your checkout with EASYIO Technologies' POS software. Fast billing, barcode scanning, inventory tracking, and GST compliance for retail shops in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Retail", href: "/services/retail-erp-software-kashmir" },
        { label: "POS Software", href: "/services/pos-software-srinagar" },
      ]}
      primaryKeyword="POS Software"
      location="Srinagar, Kashmir"
    />
  );
}


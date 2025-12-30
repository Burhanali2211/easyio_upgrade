import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Package, Truck, BarChart3, QrCode, Warehouse, Bell } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Inventory Management Software Kashmir | Stock Management Srinagar",
  description: "Best inventory management software in Kashmir. Real-time stock tracking, multi-warehouse management, barcode integration. EASYIO Technologies - inventory solutions in Srinagar, J&K.",
  keywords: "inventory management software kashmir, stock management srinagar, inventory software J&K, warehouse management kashmir, stock tracking software srinagar, inventory control kashmir",
  openGraph: {
    title: "Inventory Management Software Kashmir | Stock Management Srinagar",
    description: "Best inventory management software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/inventory-management-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/inventory-management-kashmir` },
};

const features = [
  { title: "Real-time Stock Tracking", description: "Live inventory updates with instant stock level visibility across locations.", icon: <Package className="h-6 w-6 text-primary" /> },
  { title: "Multi-Warehouse Support", description: "Manage inventory across multiple warehouses and branches in Kashmir.", icon: <Warehouse className="h-6 w-6 text-primary" /> },
  { title: "Barcode Integration", description: "Barcode and QR code scanning for fast and accurate inventory operations.", icon: <QrCode className="h-6 w-6 text-primary" /> },
  { title: "Auto Reorder Alerts", description: "Automatic low stock alerts and reorder point notifications.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Purchase Management", description: "Streamlined purchase orders, vendor management, and receiving.", icon: <Truck className="h-6 w-6 text-primary" /> },
  { title: "Inventory Reports", description: "Detailed stock reports, valuation, movement analysis, and forecasting.", icon: <BarChart3 className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Reduce stock-outs and overstock situations",
  "Multi-location inventory management for J&K businesses",
  "Barcode and mobile scanning support",
  "Integration with billing and accounting",
  "Real-time inventory valuation (FIFO, LIFO, Average)",
  "Batch and serial number tracking",
  "Expiry date management for perishables",
  "Cloud access from any location in Kashmir",
];

const faqs = [
  { question: "What is inventory management software?", answer: "Inventory management software helps businesses track stock levels, manage warehouses, process orders, and optimize inventory. EASYIO Technologies provides complete inventory solutions for Kashmir businesses." },
  { question: "How much does inventory software cost in Srinagar?", answer: "Inventory management software in Srinagar starts from INR 25,000 for basic systems to INR 1,50,000+ for multi-warehouse enterprise solutions." },
  { question: "Can it integrate with billing software?", answer: "Yes, our inventory software seamlessly integrates with billing, accounting, and POS systems for unified business operations." },
  { question: "Do you support barcode scanners?", answer: "Yes, we support all major barcode and QR code scanners including Bluetooth handheld devices and fixed-mount scanners." },
];

const relatedServices = [
  { title: "Billing Software", href: "/services/erp-modules/billing-software-srinagar" },
  { title: "Warehouse Management", href: "/services/erp-modules/warehouse-management-kashmir" },
  { title: "Purchase Management", href: "/services/erp-modules/purchase-management-kashmir" },
  { title: "POS Software", href: "/services/pos-software-srinagar" },
];

export default function InventoryManagementKashmirPage() {
  return (
    <ServicePageTemplate
      title="Inventory Management Software in Kashmir"
      subtitle="Stock & Warehouse Management"
      description="Take control of your inventory with EASYIO Technologies' powerful inventory management software. Real-time tracking, multi-warehouse support, and barcode integration for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
      ]}
      primaryKeyword="Inventory Management Software"
      location="Kashmir"
    />
  );
}


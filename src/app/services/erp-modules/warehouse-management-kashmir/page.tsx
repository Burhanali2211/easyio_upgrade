import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Warehouse, Package, Truck, QrCode, Map, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Warehouse Management System Kashmir | WMS Software Srinagar",
  description: "Best warehouse management system in Kashmir. Multi-warehouse control, bin location tracking, pick-pack-ship. EASYIO Technologies - WMS solutions in Srinagar, J&K.",
  keywords: "warehouse management system kashmir, wms software srinagar, warehouse software J&K, inventory warehouse kashmir, logistics software srinagar, storage management kashmir",
  openGraph: {
    title: "Warehouse Management System Kashmir | WMS Software Srinagar",
    description: "Best warehouse management system in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/warehouse-management-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/warehouse-management-kashmir` },
};

const features = [
  { title: "Multi-Warehouse Control", description: "Manage multiple warehouses across Kashmir from a single dashboard.", icon: <Warehouse className="h-6 w-6 text-primary" /> },
  { title: "Bin Location Tracking", description: "Precise bin and rack location management for fast picking.", icon: <Map className="h-6 w-6 text-primary" /> },
  { title: "Pick-Pack-Ship", description: "Streamlined order fulfillment with optimized picking routes.", icon: <Package className="h-6 w-6 text-primary" /> },
  { title: "Barcode/RFID Support", description: "Barcode and RFID scanning for accurate warehouse operations.", icon: <QrCode className="h-6 w-6 text-primary" /> },
  { title: "Inbound/Outbound", description: "Complete receiving, put-away, and shipping management.", icon: <Truck className="h-6 w-6 text-primary" /> },
  { title: "Warehouse Analytics", description: "Space utilization, movement analysis, and efficiency metrics.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Reduce warehouse operating costs by 25%+",
  "99.9% inventory accuracy with barcode scanning",
  "Faster order fulfillment with optimized picking",
  "Real-time visibility across all warehouses in J&K",
  "FIFO/LIFO compliance for perishables",
  "Integration with e-commerce and sales channels",
  "Batch and serial number tracking",
  "Mobile warehouse operations for staff",
];

const faqs = [
  { question: "What is a warehouse management system?", answer: "WMS (Warehouse Management System) software optimizes warehouse operations including receiving, storage, picking, packing, and shipping. EASYIO Technologies provides WMS solutions for businesses in Kashmir." },
  { question: "How much does WMS cost in Kashmir?", answer: "Warehouse management systems in Kashmir start from INR 50,000 for single warehouse to INR 3,00,000+ for multi-warehouse enterprise solutions with advanced features." },
  { question: "Can it manage cold storage warehouses?", answer: "Yes, our WMS supports cold storage management with temperature zone tracking, FIFO compliance, and expiry management for food and pharma products in Kashmir." },
  { question: "Does it integrate with delivery partners?", answer: "Yes, we integrate with major logistics partners and provide shipping label generation, tracking, and delivery management." },
];

const relatedServices = [
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Purchase Management", href: "/services/erp-modules/purchase-management-kashmir" },
  { title: "Sales Management", href: "/services/erp-modules/sales-management-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function WarehouseManagementKashmirPage() {
  return (
    <ServicePageTemplate
      title="Warehouse Management System in Kashmir"
      subtitle="WMS & Logistics Software"
      description="Optimize your warehouse operations with EASYIO Technologies' powerful WMS software. Multi-warehouse control, bin location tracking, and efficient pick-pack-ship for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Warehouse Management", href: "/services/erp-modules/warehouse-management-kashmir" },
      ]}
      primaryKeyword="Warehouse Management System"
      location="Kashmir"
    />
  );
}


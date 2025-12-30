import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Pill, Package, CreditCard, AlertTriangle, BarChart, QrCode } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Pharmacy Management Software Kashmir | Medical Store Software Srinagar",
  description: "Best pharmacy management software in Kashmir. Inventory, billing, expiry tracking for medical stores. EASYIO Technologies - pharmacy software in Srinagar, J&K.",
  keywords: "pharmacy management software kashmir, medical store software srinagar, pharmacy software J&K, drug inventory management kashmir, pharmacy billing software srinagar",
  openGraph: {
    title: "Pharmacy Management Software Kashmir | Medical Store Software Srinagar",
    description: "Best pharmacy management software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/pharmacy-management-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/pharmacy-management-software-kashmir` },
};

const features = [
  { title: "Drug Inventory", description: "Complete medicine inventory with batch tracking.", icon: <Pill className="h-6 w-6 text-primary" /> },
  { title: "Stock Management", description: "Stock alerts, reorder points, and suppliers.", icon: <Package className="h-6 w-6 text-primary" /> },
  { title: "Billing", description: "Fast billing with barcode scanning and GST.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Expiry Alerts", description: "Automatic alerts for expiring medicines.", icon: <AlertTriangle className="h-6 w-6 text-primary" /> },
  { title: "Reports", description: "Sales, purchase, and inventory reports.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Barcode Support", description: "Barcode scanning for quick billing.", icon: <QrCode className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Reduce medicine wastage from expiry",
  "Fast billing with barcode scanning",
  "GST-compliant invoicing",
  "Drug interaction warnings",
  "Supplier and purchase management",
  "Multi-store support",
  "Schedule H drug tracking",
  "Integration with hospital systems",
];

const faqs = [
  { question: "What features are in pharmacy software?", answer: "Our pharmacy software includes drug inventory, batch tracking, expiry management, billing, purchase orders, supplier management, barcode support, GST compliance, and detailed reports." },
  { question: "How much does pharmacy software cost in Kashmir?", answer: "Pharmacy management software in Kashmir starts from INR 20,000 for single-store to INR 50,000+ for multi-store chains with advanced features." },
  { question: "Does it track expired medicines?", answer: "Yes, the software automatically tracks expiry dates and sends alerts 30/60/90 days before expiry. It also generates reports of near-expiry stock for return processing." },
  { question: "Can it integrate with hospital software?", answer: "Yes, we can integrate with hospital management systems for prescription-to-dispense workflow and inventory sync." },
];

const relatedServices = [
  { title: "Hospital Management", href: "/services/hospital-management-software-kashmir" },
  { title: "Clinic Management", href: "/services/clinic-management-system-srinagar" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "POS Software", href: "/services/pos-software-srinagar" },
];

export default function PharmacyManagementSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Pharmacy Management Software in Kashmir"
      subtitle="Medical Store & Drug Inventory"
      description="Manage your pharmacy efficiently with EASYIO Technologies' pharmacy software. Drug inventory, expiry tracking, billing, and compliance for pharmacies in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Healthcare", href: "/services/hospital-management-software-kashmir" },
        { label: "Pharmacy Management", href: "/services/pharmacy-management-software-kashmir" },
      ]}
      primaryKeyword="Pharmacy Management Software"
      location="Kashmir"
    />
  );
}


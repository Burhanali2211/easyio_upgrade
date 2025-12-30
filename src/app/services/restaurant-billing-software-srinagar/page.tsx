import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Utensils, CreditCard, ClipboardList, Users, Printer, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Restaurant Billing Software Srinagar | Restaurant POS Kashmir",
  description: "Best restaurant billing software in Srinagar, Kashmir. POS, table management, KOT, inventory. EASYIO Technologies - restaurant software J&K.",
  keywords: "restaurant billing software srinagar, restaurant pos kashmir, food billing software srinagar, cafe pos system kashmir, restaurant management software J&K",
  openGraph: {
    title: "Restaurant Billing Software Srinagar | Restaurant POS Kashmir",
    description: "Best restaurant billing software in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/restaurant-billing-software-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/restaurant-billing-software-srinagar` },
};

const features = [
  { title: "Order Management", description: "Easy order taking with table management.", icon: <ClipboardList className="h-6 w-6 text-primary" /> },
  { title: "KOT System", description: "Kitchen order tickets for smooth operations.", icon: <Utensils className="h-6 w-6 text-primary" /> },
  { title: "Billing", description: "Fast billing with GST and discounts.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Staff Management", description: "Waiter codes and staff performance tracking.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Receipt Printing", description: "Thermal and A4 bill printing support.", icon: <Printer className="h-6 w-6 text-primary" /> },
  { title: "Reports", description: "Sales, item-wise, and daily reports.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Fast order processing",
  "Table-wise order tracking",
  "Kitchen display system option",
  "Multiple outlet support",
  "Inventory and recipe costing",
  "Online ordering integration",
  "Customer loyalty programs",
  "Works offline when needed",
];

const faqs = [
  { question: "What is restaurant POS software?", answer: "Restaurant POS (Point of Sale) software manages order taking, table management, kitchen tickets (KOT), billing, inventory, and reporting for restaurants and cafes." },
  { question: "How much does restaurant software cost in Srinagar?", answer: "Restaurant billing software in Srinagar starts from INR 15,000 for basic POS to INR 50,000+ for full restaurant management with inventory and multiple outlets." },
  { question: "Can waiters take orders on tablets?", answer: "Yes, we provide tablet-based ordering for waiters that sends orders directly to the kitchen display/printer, speeding up service." },
  { question: "Does it support online food ordering?", answer: "Yes, we can integrate with food ordering apps like Zomato, Swiggy, or build your own online ordering system with the restaurant software." },
];

const relatedServices = [
  { title: "Hotel Management", href: "/services/hotel-management-software-kashmir" },
  { title: "POS Software", href: "/services/pos-software-srinagar" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Billing Software", href: "/services/erp-modules/billing-software-srinagar" },
];

export default function RestaurantBillingSoftwareSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Restaurant Billing Software in Srinagar"
      subtitle="Restaurant POS & Management"
      description="Serve customers faster with EASYIO Technologies' restaurant billing software. Order management, KOT, table tracking, and billing for restaurants in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Hospitality", href: "/services/hotel-management-software-kashmir" },
        { label: "Restaurant Billing", href: "/services/restaurant-billing-software-srinagar" },
      ]}
      primaryKeyword="Restaurant Billing Software"
      location="Srinagar, Kashmir"
    />
  );
}


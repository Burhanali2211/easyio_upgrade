import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Truck, MapPin, Clock, Bell, Users, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Delivery App Development Kashmir | Logistics App Srinagar",
  description: "Best delivery app development company in Kashmir. Food delivery, courier, logistics apps. EASYIO Technologies - delivery app developers in Srinagar, J&K.",
  keywords: "delivery app development kashmir, food delivery app srinagar, courier app kashmir, logistics app J&K, last mile delivery app kashmir, on-demand delivery app srinagar",
  openGraph: {
    title: "Delivery App Development Kashmir | Logistics App Srinagar",
    description: "Best delivery app development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/delivery-app-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/delivery-app-development-kashmir` },
};

const features = [
  { title: "Real-time Tracking", description: "Live GPS tracking for deliveries with ETA updates.", icon: <MapPin className="h-6 w-6 text-primary" /> },
  { title: "Driver App", description: "Dedicated app for delivery partners with route optimization.", icon: <Truck className="h-6 w-6 text-primary" /> },
  { title: "Quick Dispatch", description: "Automated order assignment and dispatch system.", icon: <Clock className="h-6 w-6 text-primary" /> },
  { title: "Notifications", description: "Real-time updates for customers and drivers.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Fleet Management", description: "Manage delivery fleet, schedules, and performance.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Analytics", description: "Delivery performance, timing, and efficiency reports.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete delivery ecosystem for Kashmir businesses",
  "Customer app + Driver app + Admin panel",
  "GPS tracking optimized for Kashmir terrain",
  "Multiple delivery type support",
  "Cash and online payment collection",
  "Proof of delivery with photos/signatures",
  "Route optimization for efficient deliveries",
  "Scalable for growing delivery operations",
];

const faqs = [
  { question: "What types of delivery apps do you develop?", answer: "We develop food delivery apps, grocery delivery apps, courier apps, pharmacy delivery apps, last-mile logistics apps, and custom delivery solutions for businesses in Kashmir." },
  { question: "How much does a delivery app cost in Kashmir?", answer: "Delivery app development in Kashmir starts from INR 1,50,000 for basic customer + driver apps, and INR 3,00,000-5,00,000 for complete delivery platforms with advanced features." },
  { question: "Do you provide both customer and driver apps?", answer: "Yes, our delivery solution includes customer-facing app, driver/delivery partner app, and comprehensive admin panel for complete delivery management." },
  { question: "Can it handle cash on delivery?", answer: "Yes, we support COD with driver collection tracking, daily settlement reports, and wallet integration - essential for delivery business in Kashmir." },
];

const relatedServices = [
  { title: "Food Delivery App", href: "/services/ecommerce-app-development-kashmir" },
  { title: "Taxi App Development", href: "/services/taxi-app-development-kashmir" },
  { title: "E-commerce App", href: "/services/ecommerce-app-development-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
];

export default function DeliveryAppDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="Delivery App Development in Kashmir"
      subtitle="Food, Courier & Logistics Apps"
      description="Build a powerful delivery platform with EASYIO Technologies' delivery app development services. Complete solution with customer app, driver app, and admin panel for delivery businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "Delivery App", href: "/services/delivery-app-development-kashmir" },
      ]}
      primaryKeyword="Delivery App Development"
      location="Kashmir"
    />
  );
}


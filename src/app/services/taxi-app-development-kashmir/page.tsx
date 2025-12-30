import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Car, MapPin, CreditCard, Users, Star, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Taxi App Development Kashmir | Ride Sharing App Srinagar",
  description: "Best taxi app development company in Kashmir. Uber-like ride booking apps, cab management. EASYIO Technologies - taxi app developers in Srinagar, J&K.",
  keywords: "taxi app development kashmir, cab booking app srinagar, ride sharing app kashmir, uber like app J&K, car rental app kashmir, taxi booking app srinagar",
  openGraph: {
    title: "Taxi App Development Kashmir | Ride Sharing App Srinagar",
    description: "Best taxi app development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/taxi-app-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/taxi-app-development-kashmir` },
};

const features = [
  { title: "Ride Booking", description: "Easy ride booking with location pickup and drop-off.", icon: <Car className="h-6 w-6 text-primary" /> },
  { title: "Live Tracking", description: "Real-time GPS tracking of rides for safety.", icon: <MapPin className="h-6 w-6 text-primary" /> },
  { title: "Fare Calculation", description: "Automatic fare calculation with transparent pricing.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Driver Management", description: "Complete driver onboarding, verification, and management.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Ratings & Reviews", description: "Two-way rating system for drivers and passengers.", icon: <Star className="h-6 w-6 text-primary" /> },
  { title: "Analytics", description: "Business insights, revenue reports, and performance metrics.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete taxi solution for Kashmir transport businesses",
  "Passenger app + Driver app + Admin panel",
  "Maps optimized for Kashmir geography",
  "Multiple vehicle types support",
  "Cash and wallet payment options",
  "SOS emergency features for safety",
  "Surge pricing and promotions",
  "Local language support for Kashmir",
];

const faqs = [
  { question: "Can you build an app like Uber for Kashmir?", answer: "Yes, we build complete ride-hailing solutions similar to Uber/Ola with passenger app, driver app, and admin panel customized for Kashmir's market and geography." },
  { question: "How much does a taxi app cost in Kashmir?", answer: "Taxi app development in Kashmir starts from INR 2,00,000 for basic functionality and INR 4,00,000-7,00,000 for feature-rich apps with advanced features." },
  { question: "Do you support local maps?", answer: "Yes, we integrate Google Maps with local landmarks and addresses that work well in Kashmir, including areas with limited internet connectivity." },
  { question: "Can drivers accept cash payments?", answer: "Yes, we support both cash and digital payments with proper tracking and settlement systems for driver earnings." },
];

const relatedServices = [
  { title: "Delivery App Development", href: "/services/delivery-app-development-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
  { title: "Fleet Management", href: "/services/erp-modules/warehouse-management-kashmir" },
  { title: "Booking App", href: "/services/booking-app-development-srinagar" },
];

export default function TaxiAppDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="Taxi App Development in Kashmir"
      subtitle="Ride Booking & Fleet Management"
      description="Launch your taxi business with EASYIO Technologies' ride-sharing app development. Complete Uber-like solution with passenger and driver apps for transport businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "Taxi App", href: "/services/taxi-app-development-kashmir" },
      ]}
      primaryKeyword="Taxi App Development"
      location="Kashmir"
    />
  );
}


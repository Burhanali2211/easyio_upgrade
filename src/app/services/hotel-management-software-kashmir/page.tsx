import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Hotel, Calendar, CreditCard, Users, Utensils, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Hotel Management Software Kashmir | Hotel PMS Srinagar - EASYIO",
  description: "Best hotel management software in Kashmir. Reservations, front desk, housekeeping, billing. EASYIO Technologies - hotel software in Srinagar, J&K.",
  keywords: "hotel management software kashmir, hotel pms srinagar, hotel software J&K, resort management software kashmir, hotel booking system srinagar, property management system kashmir",
  openGraph: {
    title: "Hotel Management Software Kashmir | Hotel PMS Srinagar",
    description: "Best hotel management software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/hotel-management-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/hotel-management-software-kashmir` },
};

const features = [
  { title: "Reservations", description: "Online and offline booking management.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Front Desk", description: "Check-in, check-out, and room allocation.", icon: <Hotel className="h-6 w-6 text-primary" /> },
  { title: "Billing", description: "Folio management and multiple payment modes.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Housekeeping", description: "Room status and housekeeping tasks.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Restaurant", description: "F&B POS and room service integration.", icon: <Utensils className="h-6 w-6 text-primary" /> },
  { title: "Reports", description: "Occupancy, revenue, and performance reports.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Perfect for Kashmir's tourism industry",
  "Channel manager integration",
  "OTA connectivity (MakeMyTrip, Goibibo)",
  "Multi-property support for chains",
  "Mobile app for staff",
  "Guest relationship management",
  "Revenue management tools",
  "Works offline for remote locations",
];

const faqs = [
  { question: "What features are in hotel management software?", answer: "Our hotel PMS includes reservations, front desk, housekeeping, billing, restaurant/F&B, inventory, accounting, channel manager, and comprehensive reporting modules." },
  { question: "How much does hotel software cost in Kashmir?", answer: "Hotel management software in Kashmir ranges from INR 50,000-1,00,000 for small hotels to INR 2,00,000+ for large properties with full features." },
  { question: "Can it connect with booking sites?", answer: "Yes, we integrate with channel managers that connect to MakeMyTrip, Goibibo, Booking.com, Airbnb, and other OTAs for real-time inventory sync." },
  { question: "Does it work in areas with poor internet?", answer: "Yes, our system has offline capability essential for Kashmir's remote tourist locations. It syncs when connectivity is restored." },
];

const relatedServices = [
  { title: "Restaurant Billing", href: "/services/restaurant-billing-software-srinagar" },
  { title: "Booking App", href: "/services/booking-app-development-srinagar" },
  { title: "POS Software", href: "/services/pos-software-srinagar" },
  { title: "ERP Software", href: "/services/erp-software-kashmir" },
];

export default function HotelManagementSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Hotel Management Software in Kashmir"
      subtitle="Hotel PMS & Property Management"
      description="Streamline your hotel operations with EASYIO Technologies' hotel management software. Reservations, front desk, housekeeping, and billing for hotels and resorts in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Hospitality", href: "/services/hotel-management-software-kashmir" },
        { label: "Hotel Management", href: "/services/hotel-management-software-kashmir" },
      ]}
      primaryKeyword="Hotel Management Software"
      location="Kashmir"
    />
  );
}


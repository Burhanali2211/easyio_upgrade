import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Calendar, Clock, CreditCard, Bell, Users, Star } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Booking App Development Srinagar | Appointment App Kashmir",
  description: "Best booking app development company in Srinagar, Kashmir. Hotel, salon, doctor, service booking apps. EASYIO Technologies - appointment app developers J&K.",
  keywords: "booking app development srinagar, appointment app kashmir, hotel booking app srinagar, salon booking app kashmir, service booking app J&K, reservation app kashmir",
  openGraph: {
    title: "Booking App Development Srinagar | Appointment App Kashmir",
    description: "Best booking app development in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/booking-app-development-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/booking-app-development-srinagar` },
};

const features = [
  { title: "Smart Calendar", description: "Interactive calendar with availability and slot management.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Real-time Booking", description: "Instant booking confirmation with conflict prevention.", icon: <Clock className="h-6 w-6 text-primary" /> },
  { title: "Online Payments", description: "Secure payment integration with booking deposits.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Notifications", description: "Booking reminders and confirmation via SMS/push.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Multi-Provider", description: "Support for multiple service providers and locations.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Reviews & Ratings", description: "Customer feedback and service ratings system.", icon: <Star className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Custom booking solutions for Kashmir businesses",
  "Reduce no-shows with automated reminders",
  "24/7 booking availability for customers",
  "Admin dashboard for schedule management",
  "Multi-staff and multi-location support",
  "Integration with existing calendar systems",
  "Customer database and history tracking",
  "Revenue analytics and booking reports",
];

const faqs = [
  { question: "What types of booking apps do you develop?", answer: "We develop booking apps for hotels, salons, spas, doctors, clinics, restaurants, tour operators, fitness centers, consultants, and any service-based business in Kashmir." },
  { question: "How much does a booking app cost in Kashmir?", answer: "Booking app development in Kashmir starts from INR 75,000 for basic apps, INR 1,50,000-2,50,000 for feature-rich apps with payments and multi-location support." },
  { question: "Can customers pay online while booking?", answer: "Yes, we integrate payment gateways for advance booking payments, deposits, or full payments with popular payment options used in Kashmir." },
  { question: "Do you provide admin panel for managing bookings?", answer: "Yes, every booking app comes with a comprehensive admin panel for managing schedules, bookings, staff, payments, and customer communications." },
];

const relatedServices = [
  { title: "Hotel Management Software", href: "/services/hotel-management-software-kashmir" },
  { title: "Hospital App Development", href: "/services/hospital-app-development-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
  { title: "E-commerce App", href: "/services/ecommerce-app-development-kashmir" },
];

export default function BookingAppDevelopmentSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Booking App Development in Srinagar"
      subtitle="Appointment & Reservation Apps"
      description="Enable customers to book your services 24/7 with EASYIO Technologies' booking app development services. Custom appointment and reservation apps for hotels, salons, doctors, and service businesses in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "Booking App", href: "/services/booking-app-development-srinagar" },
      ]}
      primaryKeyword="Booking App Development"
      location="Srinagar, Kashmir"
    />
  );
}


import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Home, Users, Phone, CreditCard, FileText, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Real Estate CRM Software Kashmir | Property Management Srinagar",
  description: "Best real estate CRM software in Kashmir. Lead management, property listings, sales tracking for builders. EASYIO Technologies - real estate software in Srinagar, J&K.",
  keywords: "real estate crm kashmir, property management software srinagar, real estate software J&K, builder crm kashmir, property sales software srinagar",
  openGraph: {
    title: "Real Estate CRM Software Kashmir | Property Management Srinagar",
    description: "Best real estate CRM software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/real-estate-crm-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/real-estate-crm-kashmir` },
};

const features = [
  { title: "Property Listings", description: "Manage all properties with details and media.", icon: <Home className="h-6 w-6 text-primary" /> },
  { title: "Lead Management", description: "Capture and track property inquiries.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Follow-up System", description: "Automated reminders and call tracking.", icon: <Phone className="h-6 w-6 text-primary" /> },
  { title: "Booking & Payments", description: "Unit booking and payment schedules.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Documentation", description: "Agreement generation and document storage.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Analytics", description: "Sales performance and lead conversion.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Never miss a property inquiry",
  "360° view of each prospect",
  "Automated follow-up reminders",
  "Site visit scheduling",
  "Payment schedule tracking",
  "Channel partner management",
  "Marketing ROI tracking",
  "Mobile app for sales team",
];

const faqs = [
  { question: "What is real estate CRM?", answer: "Real estate CRM manages property leads, customer interactions, site visits, bookings, payments, and sales team performance for builders and real estate agents." },
  { question: "How much does real estate CRM cost?", answer: "Real estate CRM in Kashmir ranges from INR 30,000-75,000 for small agencies to INR 1,00,000-2,00,000 for large builders with multiple projects." },
  { question: "Can it integrate with property portals?", answer: "Yes, we can integrate with 99acres, MagicBricks, and other property portals to capture leads directly into the CRM." },
  { question: "Is there a mobile app for sales team?", answer: "Yes, sales executives can access leads, schedule visits, update status, and view property details from their mobile phones." },
];

const relatedServices = [
  { title: "Construction ERP", href: "/services/construction-erp-software-kashmir" },
  { title: "Sales Management", href: "/services/erp-modules/sales-management-kashmir" },
  { title: "Website Development", href: "/services/web-development-company-kashmir" },
  { title: "CRM ERP Integration", href: "/services/erp-modules/crm-erp-integration-kashmir" },
];

export default function RealEstateCRMKashmirPage() {
  return (
    <ServicePageTemplate
      title="Real Estate CRM Software in Kashmir"
      subtitle="Property Sales & Lead Management"
      description="Grow your property business with EASYIO Technologies' real estate CRM. Lead management, property listings, sales tracking, and documentation for builders in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Real Estate", href: "/services/real-estate-crm-kashmir" },
        { label: "Real Estate CRM", href: "/services/real-estate-crm-kashmir" },
      ]}
      primaryKeyword="Real Estate CRM"
      location="Kashmir"
    />
  );
}


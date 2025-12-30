import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Stethoscope, Calendar, FileText, CreditCard, Users, Clock } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Clinic Management System Srinagar | Doctor Practice Software Kashmir",
  description: "Best clinic management software in Srinagar, Kashmir. Patient management, appointments, billing for doctors. EASYIO Technologies - clinic software J&K.",
  keywords: "clinic management system srinagar, clinic software kashmir, doctor practice software srinagar, patient management clinic J&K, clinic billing software kashmir",
  openGraph: {
    title: "Clinic Management System Srinagar | Doctor Practice Software Kashmir",
    description: "Best clinic management system in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/clinic-management-system-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/clinic-management-system-srinagar` },
};

const features = [
  { title: "Patient Records", description: "Digital patient files with medical history.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Appointments", description: "Easy scheduling and reminder system.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Prescriptions", description: "Digital prescriptions with drug database.", icon: <Stethoscope className="h-6 w-6 text-primary" /> },
  { title: "Billing", description: "Simple billing and payment tracking.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Visit History", description: "Complete consultation and treatment history.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Queue Management", description: "Token system for patient flow.", icon: <Clock className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Perfect for small clinics and doctors",
  "Easy to use with minimal training",
  "Reduce patient waiting time",
  "Digital prescriptions",
  "Appointment reminders via SMS",
  "Patient history at fingertips",
  "Affordable pricing for clinics",
  "Mobile access for doctors",
];

const faqs = [
  { question: "Is this suitable for a single doctor clinic?", answer: "Yes, our clinic management system is designed for solo practitioners and small clinics. It's simple to use and affordable for individual doctors." },
  { question: "How much does clinic software cost in Srinagar?", answer: "Clinic management software in Srinagar starts from INR 25,000 for basic systems to INR 75,000 for advanced systems. Cloud options from INR 1,500/month." },
  { question: "Can I access patient records on my phone?", answer: "Yes, our system has a mobile app for doctors to view patient records, appointments, and prescriptions on their smartphone." },
  { question: "Does it have prescription templates?", answer: "Yes, we include customizable prescription templates with drug database, common diagnoses, and the ability to create your own templates." },
];

const relatedServices = [
  { title: "Hospital Management", href: "/services/hospital-management-software-kashmir" },
  { title: "Pharmacy Management", href: "/services/pharmacy-management-software-kashmir" },
  { title: "Healthcare App", href: "/services/hospital-app-development-kashmir" },
  { title: "Booking App", href: "/services/booking-app-development-srinagar" },
];

export default function ClinicManagementSystemSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Clinic Management System in Srinagar"
      subtitle="Doctor Practice Software"
      description="Streamline your clinic operations with EASYIO Technologies' clinic management software. Patient records, appointments, prescriptions, and billing for doctors in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Healthcare", href: "/services/hospital-management-software-kashmir" },
        { label: "Clinic Management", href: "/services/clinic-management-system-srinagar" },
      ]}
      primaryKeyword="Clinic Management System"
      location="Srinagar, Kashmir"
    />
  );
}


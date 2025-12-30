import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Hospital, Calendar, FileText, Video, Bell, Shield } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Hospital App Development Kashmir | Healthcare App Srinagar",
  description: "Best hospital app development company in Kashmir. Patient apps, telemedicine, appointment booking. EASYIO Technologies - healthcare app developers in Srinagar, J&K.",
  keywords: "hospital app development kashmir, healthcare app srinagar, patient app kashmir, telemedicine app J&K, doctor appointment app kashmir, medical app srinagar",
  openGraph: {
    title: "Hospital App Development Kashmir | Healthcare App Srinagar",
    description: "Best hospital app development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/hospital-app-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/hospital-app-development-kashmir` },
};

const features = [
  { title: "Doctor Appointments", description: "Easy online appointment booking with available slots.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Telemedicine", description: "Video consultations with doctors from anywhere in Kashmir.", icon: <Video className="h-6 w-6 text-primary" /> },
  { title: "Health Records", description: "Digital storage of prescriptions, reports, and medical history.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Lab Reports", description: "View and download lab test results online.", icon: <Hospital className="h-6 w-6 text-primary" /> },
  { title: "Reminders", description: "Medication reminders and appointment notifications.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Data Security", description: "HIPAA-compliant security for patient data protection.", icon: <Shield className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Improve patient engagement and satisfaction",
  "Reduce appointment no-shows",
  "Telemedicine for remote areas of Kashmir",
  "Integration with Hospital Management System",
  "Online bill payment and insurance",
  "Multi-specialty hospital support",
  "Emergency services integration",
  "Ambulance tracking features",
];

const faqs = [
  { question: "What features should a hospital app have?", answer: "Essential features include appointment booking, doctor search, telemedicine, health records, lab reports, bill payment, medication reminders, and emergency services." },
  { question: "How much does a hospital app cost in Kashmir?", answer: "Hospital app development in Kashmir starts from INR 1,00,000 for basic patient apps and INR 2,50,000-5,00,000 for comprehensive apps with telemedicine and HMS integration." },
  { question: "Is telemedicine suitable for Kashmir?", answer: "Yes, telemedicine is especially valuable for Kashmir given the geographical challenges. Patients in remote areas can consult specialists in Srinagar through video calls." },
  { question: "Can it integrate with existing hospital software?", answer: "Yes, we integrate with existing Hospital Management Systems or provide complete solutions including HMS and patient apps." },
];

const relatedServices = [
  { title: "Hospital Management Software", href: "/services/hospital-management-software-kashmir" },
  { title: "Clinic Management System", href: "/services/clinic-management-system-srinagar" },
  { title: "Pharmacy Management", href: "/services/pharmacy-management-software-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
];

export default function HospitalAppDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="Hospital App Development in Kashmir"
      subtitle="Healthcare & Telemedicine Apps"
      description="Transform patient care with EASYIO Technologies' hospital app development. Complete healthcare apps with appointment booking, telemedicine, and health records for hospitals in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "Hospital App", href: "/services/hospital-app-development-kashmir" },
      ]}
      primaryKeyword="Hospital App Development"
      location="Kashmir"
    />
  );
}


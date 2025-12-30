import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Hospital, Users, FileText, CreditCard, Calendar, Activity } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Hospital Management Software Kashmir | HMS Srinagar - EASYIO",
  description: "Best hospital management software in Kashmir. Patient management, OPD/IPD, billing, EMR. EASYIO Technologies - hospital software developers in Srinagar, J&K.",
  keywords: "hospital management software kashmir, hms srinagar, hospital software J&K, patient management system kashmir, opd ipd software srinagar, medical billing software kashmir",
  openGraph: {
    title: "Hospital Management Software Kashmir | HMS Srinagar",
    description: "Best hospital management software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/hospital-management-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/hospital-management-software-kashmir` },
};

const features = [
  { title: "Patient Management", description: "Patient registration, records, and history.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "OPD/IPD", description: "Outpatient and inpatient management modules.", icon: <Hospital className="h-6 w-6 text-primary" /> },
  { title: "EMR/EHR", description: "Electronic medical/health records system.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Billing", description: "Hospital billing with insurance integration.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Appointments", description: "Online appointment booking and scheduling.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Lab Integration", description: "Lab test orders and result management.", icon: <Activity className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete hospital digitization",
  "Reduce patient wait times",
  "Electronic health records",
  "Insurance claim management",
  "Pharmacy and inventory integration",
  "Multi-branch hospital support",
  "Doctor and nurse mobile apps",
  "Government compliance ready",
];

const faqs = [
  { question: "What modules are in Hospital Management Software?", answer: "Our HMS includes patient registration, appointments, OPD/IPD, EMR, billing, pharmacy, lab, radiology, operation theatre, blood bank, inventory, HR, and reporting modules." },
  { question: "How much does hospital software cost in Kashmir?", answer: "Hospital management software in Kashmir ranges from INR 2,00,000-5,00,000 for small hospitals to INR 10,00,000+ for large multi-specialty hospitals with full customization." },
  { question: "Can it handle insurance claims?", answer: "Yes, we support cashless insurance processing, claim submissions, and integration with TPA systems for major insurance providers." },
  { question: "Is it compliant with health regulations?", answer: "Yes, our HMS follows healthcare data standards and privacy regulations. We can customize for specific compliance requirements." },
];

const relatedServices = [
  { title: "Hospital App Development", href: "/services/hospital-app-development-kashmir" },
  { title: "Clinic Management", href: "/services/clinic-management-system-srinagar" },
  { title: "Pharmacy Management", href: "/services/pharmacy-management-software-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function HospitalManagementSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Hospital Management Software in Kashmir"
      subtitle="Complete Healthcare Administration"
      description="Digitize your hospital operations with EASYIO Technologies' comprehensive HMS. Patient management, OPD/IPD, billing, and EMR for hospitals in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Healthcare", href: "/services/hospital-management-software-kashmir" },
        { label: "Hospital Management", href: "/services/hospital-management-software-kashmir" },
      ]}
      primaryKeyword="Hospital Management Software"
      location="Kashmir"
    />
  );
}


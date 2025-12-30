import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { GraduationCap, Users, CreditCard, Calendar, FileText, Bus } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "School ERP Software Kashmir | School Management System Srinagar",
  description: "Best school ERP software in Kashmir. Complete school management system with fees, attendance, exams, transport. EASYIO Technologies - education ERP in Srinagar, J&K.",
  keywords: "school erp software kashmir, school management system srinagar, school software J&K, education erp kashmir, student management system srinagar, school fee management kashmir",
  openGraph: {
    title: "School ERP Software Kashmir | School Management System Srinagar",
    description: "Best school ERP software in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/school-erp-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/school-erp-software-kashmir` },
};

const features = [
  { title: "Student Information", description: "Complete student profiles with academic history.", icon: <GraduationCap className="h-6 w-6 text-primary" /> },
  { title: "Staff Management", description: "Employee records, payroll, and attendance.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Fee Management", description: "Fee collection, receipts, and due tracking.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Exam Management", description: "Exam scheduling, marks entry, and report cards.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Timetable", description: "Class scheduling and teacher allocation.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Transport", description: "School bus routes and tracking.", icon: <Bus className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete school management solution",
  "Parent and student mobile app",
  "Online fee payment integration",
  "SMS and WhatsApp notifications",
  "Multi-branch support for school chains",
  "Offline functionality for Kashmir",
  "Government compliance ready",
  "Affordable for small schools",
];

const faqs = [
  { question: "What modules are included in School ERP?", answer: "Our School ERP includes student information, admissions, fee management, attendance, exam management, timetable, transport, library, staff management, payroll, and parent communication modules." },
  { question: "How much does school ERP cost in Kashmir?", answer: "School ERP in Kashmir starts from INR 50,000 for small schools, INR 1,00,000-2,00,000 for medium schools, and custom pricing for large school chains. Cloud options from INR 3,000/month." },
  { question: "Can parents pay fees online?", answer: "Yes, we integrate online payment gateways (Razorpay, Paytm) so parents can pay fees online through the parent app or web portal." },
  { question: "Do you provide mobile apps for parents?", answer: "Yes, our School ERP includes a parent mobile app for viewing attendance, grades, fees, homework, and communicating with teachers." },
];

const relatedServices = [
  { title: "School App Development", href: "/services/school-app-development-srinagar" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
  { title: "Fee Management", href: "/services/erp-modules/billing-software-srinagar" },
  { title: "Attendance Management", href: "/services/erp-modules/attendance-management-srinagar" },
];

export default function SchoolERPSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="School ERP Software in Kashmir"
      subtitle="Complete School Management System"
      description="Digitize your school operations with EASYIO Technologies' comprehensive School ERP. Student management, fees, attendance, exams, and more for schools in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Education", href: "/services/school-erp-software-kashmir" },
        { label: "School ERP", href: "/services/school-erp-software-kashmir" },
      ]}
      primaryKeyword="School ERP Software"
      location="Kashmir"
    />
  );
}


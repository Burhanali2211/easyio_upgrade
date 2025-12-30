import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Users, Calendar, FileText, Award, Clock, Shield } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "HRMS Software Srinagar | HR Management System Kashmir - EASYIO",
  description: "Best HRMS software in Srinagar, Kashmir. Complete human resource management system with employee management, leave tracking, performance reviews. EASYIO Technologies J&K.",
  keywords: "hrms software srinagar, hrms software kashmir, hr management system kashmir, employee management software srinagar, hr software J&K, human resource management kashmir",
  openGraph: {
    title: "HRMS Software Srinagar | HR Management System Kashmir",
    description: "Best HRMS software in Srinagar. Complete HR management by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/hrms-software-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/hrms-software-srinagar` },
};

const features = [
  { title: "Employee Management", description: "Centralized employee database with complete profiles, documents, and history tracking.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Leave Management", description: "Automated leave requests, approvals, and balance tracking with holiday calendar.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Performance Reviews", description: "360-degree feedback, goal setting, KPI tracking, and appraisal management.", icon: <Award className="h-6 w-6 text-primary" /> },
  { title: "Document Management", description: "Secure storage for employee documents, contracts, and compliance records.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Time & Attendance", description: "Biometric integration, shift management, and overtime tracking.", icon: <Clock className="h-6 w-6 text-primary" /> },
  { title: "Self-Service Portal", description: "Employee portal for leave requests, payslips, and HR queries.", icon: <Shield className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete HRMS solution tailored for Kashmir businesses",
  "Integration with payroll and attendance systems",
  "Mobile app for employees and managers",
  "Automated compliance and statutory reporting",
  "Cloud-based access from anywhere in J&K",
  "Customizable workflows and approval chains",
  "Multi-branch support for organizations across Kashmir",
  "Detailed analytics and HR dashboards",
];

const faqs = [
  { question: "What is HRMS software?", answer: "HRMS (Human Resource Management System) is software that automates and streamlines HR processes including employee management, leave tracking, performance reviews, and compliance. EASYIO Technologies offers comprehensive HRMS solutions for businesses in Srinagar and Kashmir." },
  { question: "How much does HRMS software cost in Srinagar?", answer: "HRMS software costs in Srinagar range from INR 30,000 for basic systems to INR 2,00,000+ for enterprise solutions. Cloud-based HRMS starts from INR 2,000/month. Contact us for a customized quote." },
  { question: "Can HRMS integrate with biometric attendance?", answer: "Yes, our HRMS integrates with all major biometric attendance devices for automated time tracking and attendance management." },
  { question: "Do you provide HRMS for small businesses in Kashmir?", answer: "Yes, we offer affordable HRMS packages specifically designed for small businesses in Kashmir with essential features and scalability options." },
];

const relatedServices = [
  { title: "Payroll Software", href: "/services/erp-modules/payroll-software-kashmir" },
  { title: "Attendance Management", href: "/services/erp-modules/attendance-management-srinagar" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
  { title: "School ERP", href: "/services/school-erp-software-kashmir" },
];

export default function HRMSSoftwareSrinagarPage() {
  return (
    <ServicePageTemplate
      title="HRMS Software in Srinagar, Kashmir"
      subtitle="Human Resource Management System"
      description="Streamline your HR operations with EASYIO Technologies' comprehensive HRMS software. From employee management to performance reviews, our HR management system is designed for businesses in Srinagar and across Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "HRMS Software", href: "/services/erp-modules/hrms-software-srinagar" },
      ]}
      primaryKeyword="HRMS Software"
      location="Srinagar, Kashmir"
    />
  );
}


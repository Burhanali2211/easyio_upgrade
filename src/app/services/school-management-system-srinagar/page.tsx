import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { GraduationCap, BookOpen, ClipboardList, Bell, Users, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "School Management System Srinagar | Education Software Kashmir",
  description: "Best school management system in Srinagar, Kashmir. Admissions, academics, administration software. EASYIO Technologies - school software developers J&K.",
  keywords: "school management system srinagar, education software kashmir, school software srinagar, academic management J&K, school administration software kashmir",
  openGraph: {
    title: "School Management System Srinagar | Education Software Kashmir",
    description: "Best school management system in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/school-management-system-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/school-management-system-srinagar` },
};

const features = [
  { title: "Admissions", description: "Online admission forms and enrollment management.", icon: <GraduationCap className="h-6 w-6 text-primary" /> },
  { title: "Academics", description: "Curriculum, lesson plans, and learning resources.", icon: <BookOpen className="h-6 w-6 text-primary" /> },
  { title: "Assessments", description: "Tests, exams, and continuous evaluation.", icon: <ClipboardList className="h-6 w-6 text-primary" /> },
  { title: "Notifications", description: "Alerts to parents via SMS, email, and app.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Staff Portal", description: "Teacher login for grades, attendance, reports.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Reports", description: "Academic reports, analytics, and dashboards.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Streamline school administration",
  "Improve parent-teacher communication",
  "Track student progress effectively",
  "Reduce paperwork and manual effort",
  "Easy report card generation",
  "Online homework and assignments",
  "Attendance tracking with alerts",
  "Custom reports for management",
];

const faqs = [
  { question: "What is a school management system?", answer: "A school management system is software that automates school operations including admissions, academics, attendance, fees, exams, and communication between school, parents, and students." },
  { question: "Is it different from School ERP?", answer: "They are similar. School Management System focuses on academic operations while School ERP is more comprehensive including finance, HR, and inventory. We offer both as needed." },
  { question: "Can teachers access from home?", answer: "Yes, our cloud-based system allows teachers to access the portal from anywhere to enter grades, view student information, and communicate with parents." },
  { question: "Do you provide training?", answer: "Yes, we provide comprehensive training for administrators, teachers, and staff. We also offer video tutorials and user manuals." },
];

const relatedServices = [
  { title: "School ERP Software", href: "/services/school-erp-software-kashmir" },
  { title: "School App Development", href: "/services/school-app-development-srinagar" },
  { title: "LMS Development", href: "/services/erp-software-kashmir" },
  { title: "Attendance Management", href: "/services/erp-modules/attendance-management-srinagar" },
];

export default function SchoolManagementSystemSrinagarPage() {
  return (
    <ServicePageTemplate
      title="School Management System in Srinagar"
      subtitle="Education Administration Software"
      description="Modernize your school administration with EASYIO Technologies' school management system. Admissions, academics, assessments, and communication for schools in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Education", href: "/services/school-erp-software-kashmir" },
        { label: "School Management", href: "/services/school-management-system-srinagar" },
      ]}
      primaryKeyword="School Management System"
      location="Srinagar, Kashmir"
    />
  );
}


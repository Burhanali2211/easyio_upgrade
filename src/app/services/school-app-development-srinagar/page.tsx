import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { GraduationCap, Users, Bell, Calendar, FileText, MessageSquare } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "School App Development Srinagar | Education App Kashmir",
  description: "Best school app development company in Srinagar, Kashmir. Parent-teacher apps, student portals, attendance tracking. EASYIO Technologies - education app developers J&K.",
  keywords: "school app development srinagar, education app kashmir, parent teacher app srinagar, student app J&K, school communication app kashmir, school mobile app srinagar",
  openGraph: {
    title: "School App Development Srinagar | Education App Kashmir",
    description: "Best school app development in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/school-app-development-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/school-app-development-srinagar` },
};

const features = [
  { title: "Student Portal", description: "Access to grades, assignments, timetable, and resources.", icon: <GraduationCap className="h-6 w-6 text-primary" /> },
  { title: "Parent Communication", description: "Direct messaging between parents and teachers.", icon: <MessageSquare className="h-6 w-6 text-primary" /> },
  { title: "Attendance Tracking", description: "Real-time attendance notifications for parents.", icon: <Users className="h-6 w-6 text-primary" /> },
  { title: "Notifications", description: "School announcements, events, and emergency alerts.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Timetable & Calendar", description: "Class schedules, exam dates, and school events.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Homework & Assignments", description: "Assignment distribution and submission tracking.", icon: <FileText className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Improve parent-school communication",
  "Real-time updates on student progress",
  "Reduce paper-based communications",
  "Easy fee payment integration",
  "Separate portals for parents, students, teachers",
  "Integration with School ERP",
  "Offline access for Kashmir connectivity",
  "Multi-language support (English, Urdu, Kashmiri)",
];

const faqs = [
  { question: "What features does a school app have?", answer: "Our school apps include student profiles, attendance tracking, grade viewing, homework management, fee payment, parent-teacher communication, announcements, and event calendars." },
  { question: "How much does a school app cost in Srinagar?", answer: "School app development in Srinagar starts from INR 75,000 for basic apps and INR 1,50,000-2,50,000 for comprehensive apps integrated with School ERP." },
  { question: "Can it integrate with existing School ERP?", answer: "Yes, we integrate with existing school management software or provide a complete solution including School ERP and mobile app." },
  { question: "Do you support Urdu/Kashmiri language?", answer: "Yes, we support multiple languages including English, Urdu, Hindi, and can add Kashmiri language support for local schools." },
];

const relatedServices = [
  { title: "School ERP Software", href: "/services/school-erp-software-kashmir" },
  { title: "Education Software", href: "/services/school-management-system-srinagar" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
  { title: "Booking App", href: "/services/booking-app-development-srinagar" },
];

export default function SchoolAppDevelopmentSrinagarPage() {
  return (
    <ServicePageTemplate
      title="School App Development in Srinagar"
      subtitle="Education & Parent Communication Apps"
      description="Connect schools, parents, and students with EASYIO Technologies' school app development. Comprehensive education apps with attendance, grades, communication, and fee payment for schools in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "School App", href: "/services/school-app-development-srinagar" },
      ]}
      primaryKeyword="School App Development"
      location="Srinagar, Kashmir"
    />
  );
}


import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Clock, Fingerprint, MapPin, Calendar, BarChart, Smartphone } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Attendance Management System Srinagar | Time Tracking Kashmir",
  description: "Best attendance management system in Srinagar, Kashmir. Biometric integration, GPS tracking, shift management. EASYIO Technologies - attendance solutions in J&K.",
  keywords: "attendance management system srinagar, attendance software kashmir, biometric attendance srinagar, time tracking software kashmir, employee attendance J&K, online attendance system kashmir",
  openGraph: {
    title: "Attendance Management System Srinagar | Time Tracking Kashmir",
    description: "Best attendance management system in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/attendance-management-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/attendance-management-srinagar` },
};

const features = [
  { title: "Biometric Integration", description: "Support for fingerprint, face recognition, and RFID attendance devices.", icon: <Fingerprint className="h-6 w-6 text-primary" /> },
  { title: "GPS & Geo-fencing", description: "Location-based attendance for field staff and remote workers.", icon: <MapPin className="h-6 w-6 text-primary" /> },
  { title: "Shift Management", description: "Flexible shift scheduling with rotation and swap capabilities.", icon: <Clock className="h-6 w-6 text-primary" /> },
  { title: "Leave Integration", description: "Integrated leave management with automatic balance updates.", icon: <Calendar className="h-6 w-6 text-primary" /> },
  { title: "Mobile Attendance", description: "Mobile app for selfie attendance with location verification.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "Attendance Reports", description: "Detailed attendance reports with overtime and late-coming analysis.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Eliminate proxy attendance with biometric verification",
  "Track field staff with GPS-enabled mobile attendance",
  "Automatic overtime and late-coming calculations",
  "Integration with payroll for accurate salary processing",
  "Real-time attendance monitoring dashboard",
  "Multi-location support for Kashmir organizations",
  "Customizable attendance rules and policies",
  "Cloud-based access for HR teams",
];

const faqs = [
  { question: "What attendance devices do you support?", answer: "We support all major biometric devices including fingerprint scanners, face recognition systems, RFID card readers, and mobile-based attendance from brands like ZKTeco, Realtime, eSSL, and others." },
  { question: "How much does attendance software cost in Srinagar?", answer: "Attendance management software in Srinagar starts from INR 15,000 for basic systems to INR 60,000+ for enterprise solutions with advanced features. Cloud options from INR 500/user/month." },
  { question: "Can field staff mark attendance from their phones?", answer: "Yes, our mobile app allows field staff to mark attendance with selfie verification and GPS location tracking, perfect for sales teams and delivery personnel in Kashmir." },
  { question: "Does it integrate with payroll?", answer: "Yes, attendance data automatically syncs with payroll for accurate salary calculations, overtime computation, and deductions." },
];

const relatedServices = [
  { title: "HRMS Software", href: "/services/erp-modules/hrms-software-srinagar" },
  { title: "Payroll Software", href: "/services/erp-modules/payroll-software-kashmir" },
  { title: "School ERP", href: "/services/school-erp-software-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function AttendanceManagementSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Attendance Management System in Srinagar"
      subtitle="Biometric & Mobile Time Tracking"
      description="Modernize your attendance tracking with EASYIO Technologies' advanced attendance management system. Biometric integration, GPS tracking, and mobile attendance for organizations in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Attendance Management", href: "/services/erp-modules/attendance-management-srinagar" },
      ]}
      primaryKeyword="Attendance Management System"
      location="Srinagar, Kashmir"
    />
  );
}


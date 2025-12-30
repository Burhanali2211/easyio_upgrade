import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Wallet, Calculator, FileText, Clock, Shield, BarChart } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Payroll Software Kashmir | Salary Management Srinagar - EASYIO",
  description: "Best payroll software in Kashmir. Automated salary calculation, tax compliance, payslip generation. EASYIO Technologies - leading payroll management company in Srinagar, J&K.",
  keywords: "payroll software kashmir, payroll software srinagar, salary management software kashmir, payroll system J&K, automated payroll srinagar, employee salary software kashmir",
  openGraph: {
    title: "Payroll Software Kashmir | Salary Management Srinagar",
    description: "Best payroll software in Kashmir with automated salary processing by EASYIO Technologies.",
    url: `${siteUrl}/services/erp-modules/payroll-software-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/erp-modules/payroll-software-kashmir` },
};

const features = [
  { title: "Automated Salary Calculation", description: "Automatic salary processing with attendance integration, deductions, and allowances.", icon: <Calculator className="h-6 w-6 text-primary" /> },
  { title: "Tax Compliance", description: "Built-in TDS calculation, PF, ESI, and professional tax compliance for J&K.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Payslip Generation", description: "Automated digital payslips with email delivery and employee portal access.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Bank Integration", description: "Direct salary transfer to employee bank accounts with multi-bank support.", icon: <Wallet className="h-6 w-6 text-primary" /> },
  { title: "Attendance Integration", description: "Seamless integration with biometric and manual attendance systems.", icon: <Clock className="h-6 w-6 text-primary" /> },
  { title: "Reports & Analytics", description: "Comprehensive payroll reports, audit trails, and financial analytics.", icon: <BarChart className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "100% accurate salary calculations with zero errors",
  "GST and statutory compliance for J&K businesses",
  "Reduce payroll processing time by 80%",
  "Multi-branch payroll management for Kashmir organizations",
  "Secure and confidential salary data handling",
  "Employee self-service for payslip downloads",
  "Flexible payment schedules and structures",
  "Integration with popular accounting software",
];

const faqs = [
  { question: "What is payroll software?", answer: "Payroll software automates salary calculations, tax deductions, payslip generation, and compliance reporting. EASYIO Technologies provides comprehensive payroll solutions for businesses in Kashmir." },
  { question: "How much does payroll software cost in Kashmir?", answer: "Payroll software in Kashmir starts from INR 15,000 for small businesses and goes up to INR 1,00,000+ for enterprise solutions. Cloud-based options start from INR 1,500/month." },
  { question: "Is your payroll software compliant with J&K tax laws?", answer: "Yes, our payroll software is fully compliant with J&K professional tax, TDS, PF, ESI, and all statutory requirements." },
  { question: "Can it handle multiple salary structures?", answer: "Yes, our software supports unlimited salary structures, allowances, deductions, and custom components for different employee categories." },
];

const relatedServices = [
  { title: "HRMS Software", href: "/services/erp-modules/hrms-software-srinagar" },
  { title: "Attendance Management", href: "/services/erp-modules/attendance-management-srinagar" },
  { title: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir" },
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
];

export default function PayrollSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Payroll Software in Kashmir"
      subtitle="Automated Salary Management"
      description="Simplify your payroll processing with EASYIO Technologies' advanced payroll software. Automated salary calculations, tax compliance, and seamless payslip generation for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Modules", href: "/services/erp-software-kashmir" },
        { label: "Payroll Software", href: "/services/erp-modules/payroll-software-kashmir" },
      ]}
      primaryKeyword="Payroll Software"
      location="Kashmir"
    />
  );
}


import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { 
  Database, 
  Users, 
  CreditCard, 
  Package, 
  BarChart3, 
  Settings 
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "ERP Software Kashmir | Best ERP Solutions Srinagar - EASYIO Technologies",
  description: "EASYIO Technologies offers the best ERP software solutions in Kashmir. Custom ERP development, implementation, and support services in Srinagar, J&K. HRMS, payroll, inventory, billing modules available.",
  keywords: [
    "erp software kashmir",
    "erp software srinagar",
    "best erp company kashmir",
    "custom erp development kashmir",
    "erp implementation srinagar",
    "enterprise software kashmir",
    "erp solution provider srinagar",
    "cloud erp kashmir",
    "erp system development kashmir",
    "erp customization company kashmir",
  ].join(", "),
  openGraph: {
    title: "ERP Software Kashmir | Best ERP Solutions Srinagar - EASYIO Technologies",
    description: "Best ERP software solutions in Kashmir. Custom ERP development with HRMS, payroll, inventory, billing modules by EASYIO Technologies Srinagar.",
    url: `${siteUrl}/services/erp-software-kashmir`,
    siteName: "EASYIO Technologies",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ERP Software Kashmir - EASYIO Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software Kashmir | Best ERP Solutions Srinagar",
    description: "Best ERP software solutions in Kashmir by EASYIO Technologies.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/services/erp-software-kashmir`,
  },
};

const features = [
  {
    title: "Custom ERP Development",
    description: "Tailor-made ERP solutions designed specifically for your business processes and requirements in Kashmir.",
    icon: <Settings className="h-6 w-6 text-primary" />,
  },
  {
    title: "HRMS & Payroll Module",
    description: "Complete human resource management with automated payroll, attendance tracking, and employee self-service portal.",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: "Inventory Management",
    description: "Real-time stock tracking, automated reorder points, and multi-warehouse management capabilities.",
    icon: <Package className="h-6 w-6 text-primary" />,
  },
  {
    title: "Billing & Invoicing",
    description: "GST-compliant billing system with automated invoicing, payment tracking, and financial reporting.",
    icon: <CreditCard className="h-6 w-6 text-primary" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time business intelligence with customizable dashboards and detailed analytical reports.",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Database Integration",
    description: "Seamless integration with existing systems and databases for unified business operations.",
    icon: <Database className="h-6 w-6 text-primary" />,
  },
];

const benefits = [
  "Best ERP software company in Kashmir with 100+ successful implementations",
  "Local team in Srinagar for quick support and on-site assistance",
  "Affordable pricing tailored for Kashmir businesses",
  "Cloud and on-premise deployment options available",
  "24/7 technical support and maintenance services",
  "Customizable modules to fit your specific industry needs",
  "Mobile-friendly ERP accessible from anywhere in J&K",
  "Comprehensive training for your staff included",
  "Regular updates and security patches",
  "Integration with popular accounting and banking systems",
];

const faqs = [
  {
    question: "What is ERP software and why do I need it for my business in Kashmir?",
    answer: "ERP (Enterprise Resource Planning) software integrates all your business processes into a single system including accounting, HR, inventory, sales, and more. For businesses in Kashmir, an ERP system helps streamline operations, reduce manual work, improve accuracy, and make data-driven decisions. EASYIO Technologies offers custom ERP solutions tailored for local businesses in Srinagar and across J&K.",
  },
  {
    question: "How much does ERP software cost in Kashmir?",
    answer: "ERP software costs in Kashmir vary based on modules and customization requirements. Basic ERP systems start from INR 1,00,000, standard ERP packages range from INR 2,00,000 to 5,00,000, and enterprise-grade solutions from INR 5,00,000 onwards. We also offer subscription-based cloud ERP starting from INR 5,000/month. Contact EASYIO Technologies for a detailed quote.",
  },
  {
    question: "What ERP modules does EASYIO Technologies offer?",
    answer: "We offer comprehensive ERP modules including HRMS, Payroll Management, Attendance Management, Inventory Management, Billing & Invoicing, Accounting Integration, Purchase Management, Sales Management, Warehouse Management, CRM Integration, Project Management, Asset Management, and Analytics Dashboard.",
  },
  {
    question: "Can you customize ERP for my specific industry in Kashmir?",
    answer: "Absolutely! EASYIO Technologies specializes in industry-specific ERP solutions for Kashmir businesses including School ERP, Hospital Management, Hotel Management, Retail POS, Manufacturing ERP, Construction ERP, and more. We understand local business requirements and customize accordingly.",
  },
  {
    question: "Do you provide cloud-based ERP in Srinagar?",
    answer: "Yes, we offer both cloud-based and on-premise ERP solutions in Srinagar. Cloud ERP provides benefits like lower upfront costs, automatic updates, remote access from anywhere, better security, and scalability. It's ideal for businesses that want to access their data from multiple locations across Kashmir.",
  },
  {
    question: "How long does ERP implementation take?",
    answer: "ERP implementation timeline depends on the complexity and number of modules. Basic ERP implementation takes 4-8 weeks, standard implementation 8-16 weeks, and enterprise implementations 16-32 weeks. EASYIO Technologies follows a phased approach to ensure smooth transition with minimal business disruption.",
  },
  {
    question: "Do you provide training for ERP software?",
    answer: "Yes, comprehensive training is included with all our ERP implementations in Kashmir. We provide on-site training in Srinagar, remote training sessions, user manuals, video tutorials, and ongoing support to ensure your team can effectively use all ERP modules.",
  },
  {
    question: "What support do you offer after ERP implementation?",
    answer: "EASYIO Technologies provides 24/7 technical support for ERP customers in Kashmir. Our support includes bug fixes, system updates, performance optimization, user assistance, and on-site support when needed. We offer monthly maintenance packages starting from INR 5,000/month.",
  },
];

const relatedServices = [
  { title: "HRMS Software", href: "/services/erp-modules/hrms-software-srinagar" },
  { title: "Payroll Software", href: "/services/erp-modules/payroll-software-kashmir" },
  { title: "Inventory Management", href: "/services/erp-modules/inventory-management-kashmir" },
  { title: "Billing Software", href: "/services/erp-modules/billing-software-srinagar" },
  { title: "Accounting Software", href: "/services/erp-modules/accounting-software-kashmir" },
  { title: "Cloud ERP", href: "/services/erp-modules/cloud-erp-kashmir" },
  { title: "School ERP", href: "/services/school-erp-software-kashmir" },
  { title: "Hospital Management", href: "/services/hospital-management-software-kashmir" },
];

export default function ERPSoftwareKashmirPage() {
  return (
    <ServicePageTemplate
      title="Best ERP Software Solutions in Kashmir"
      subtitle="Enterprise Resource Planning"
      description="EASYIO Technologies delivers comprehensive ERP software solutions for businesses in Kashmir and Srinagar. Our custom ERP systems integrate all your business processes - from HR and payroll to inventory and accounting - into one powerful platform designed for growth."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
      ]}
      primaryKeyword="ERP Software"
      location="Kashmir"
      ctaTitle="Transform Your Business with ERP"
      ctaDescription="Get a free consultation and demo of our ERP solutions. Let EASYIO Technologies help you streamline your business operations in Kashmir."
    />
  );
}


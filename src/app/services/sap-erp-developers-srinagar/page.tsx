import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Code, Settings, Users, BookOpen, RefreshCw, Shield } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "SAP ERP Developers Srinagar | SAP Consultants Kashmir - EASYIO",
  description: "SAP ERP developers and consultants in Srinagar, Kashmir. SAP implementation, customization, support services. EASYIO Technologies - SAP experts in J&K.",
  keywords: "sap erp developers srinagar, sap erp kashmir, sap consultant srinagar, sap implementation kashmir, sap customization J&K, sap support kashmir",
  openGraph: {
    title: "SAP ERP Developers Srinagar | SAP Consultants Kashmir",
    description: "SAP ERP developers and consultants in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/sap-erp-developers-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/sap-erp-developers-srinagar` },
};

const features = [
  { title: "SAP Implementation", description: "End-to-end SAP ERP implementation for businesses in Kashmir.", icon: <Settings className="h-6 w-6 text-primary" /> },
  { title: "SAP Customization", description: "Custom ABAP development and module configuration.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "SAP Migration", description: "Migrate to SAP S/4HANA from legacy systems.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "SAP Support", description: "Ongoing SAP support and maintenance services.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "SAP Training", description: "User training and knowledge transfer programs.", icon: <BookOpen className="h-6 w-6 text-primary" /> },
  { title: "SAP Consulting", description: "Strategic consulting for SAP optimization.", icon: <Users className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Certified SAP consultants in Srinagar",
  "Local support team in Kashmir",
  "Cost-effective SAP services",
  "Experience across SAP modules (MM, SD, FI, HR)",
  "SAP S/4HANA expertise",
  "Integration with local business processes",
  "24/7 SAP support available",
  "Proven track record in J&K region",
];

const faqs = [
  { question: "Do you have SAP certified consultants?", answer: "Yes, EASYIO Technologies has SAP certified consultants with expertise in various SAP modules including MM, SD, FI, CO, HR, and technical ABAP development." },
  { question: "What SAP services do you offer in Kashmir?", answer: "We offer SAP implementation, customization, migration, support, training, and consulting services for businesses in Kashmir and Srinagar." },
  { question: "How much does SAP implementation cost?", answer: "SAP implementation costs depend on modules, users, and customization. Contact us for a detailed assessment and quote tailored to your Kashmir business requirements." },
  { question: "Can you migrate from other ERP to SAP?", answer: "Yes, we provide complete migration services from legacy systems or other ERP solutions to SAP S/4HANA with data migration and parallel running support." },
];

const relatedServices = [
  { title: "ERP Software Kashmir", href: "/services/erp-software-kashmir" },
  { title: "Cloud ERP", href: "/services/erp-modules/cloud-erp-kashmir" },
  { title: "Custom Software", href: "/services/custom-web-application-kashmir" },
  { title: "HRMS Software", href: "/services/erp-modules/hrms-software-srinagar" },
];

export default function SAPERPDevelopersSrinagarPage() {
  return (
    <ServicePageTemplate
      title="SAP ERP Developers in Srinagar"
      subtitle="SAP Implementation & Consulting"
      description="Get expert SAP ERP services from EASYIO Technologies in Srinagar. Implementation, customization, migration, and support services from certified SAP consultants for businesses in Kashmir and J&K."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "SAP ERP Developers", href: "/services/sap-erp-developers-srinagar" },
      ]}
      primaryKeyword="SAP ERP Developers"
      location="Srinagar, Kashmir"
    />
  );
}


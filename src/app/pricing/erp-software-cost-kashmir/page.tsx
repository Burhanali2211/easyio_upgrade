import type { Metadata } from "next";
import PricingPageTemplate from "@/components/pricing/PricingPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "ERP Software Cost Kashmir | ERP Pricing Srinagar - EASYIO",
  description: "ERP software cost in Kashmir, Srinagar. Custom ERP, cloud ERP pricing from EASYIO Technologies. HRMS, payroll, inventory, billing module costs. Get detailed ERP quote.",
  keywords: "erp software cost in kashmir, erp software price in srinagar, erp cost J&K, custom erp pricing kashmir, cloud erp cost srinagar",
  openGraph: {
    title: "ERP Software Cost Kashmir | ERP Pricing Srinagar",
    description: "Affordable ERP software pricing in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/pricing/erp-software-cost-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/pricing/erp-software-cost-kashmir` },
};

const pricingTiers = [
  {
    name: "Basic ERP",
    price: "₹1,00,000",
    priceNote: "onwards",
    description: "Essential ERP for small businesses",
    features: [
      "3 core modules",
      "Up to 5 users",
      "Basic customization",
      "Local deployment",
      "3 months support",
      "Basic training",
    ],
  },
  {
    name: "Standard ERP",
    price: "₹3,00,000",
    priceNote: "onwards",
    description: "Comprehensive ERP for growing businesses",
    features: [
      "6+ modules included",
      "Up to 20 users",
      "Custom workflows",
      "Cloud or local deployment",
      "Mobile app access",
      "6 months support",
      "Onsite training",
      "Data migration",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise ERP",
    price: "₹7,00,000",
    priceNote: "onwards",
    description: "Full-scale ERP for large organizations",
    features: [
      "All modules included",
      "Unlimited users",
      "Complete customization",
      "Multi-branch support",
      "Advanced analytics",
      "12 months support",
      "Dedicated support manager",
      "Integration with existing systems",
    ],
  },
  {
    name: "Cloud ERP",
    price: "₹5,000",
    priceNote: "/month",
    description: "Subscription-based cloud ERP",
    features: [
      "Core modules",
      "Pay-per-user pricing",
      "Automatic updates",
      "No server costs",
      "Access from anywhere",
      "Included support",
      "Data backups",
      "Scalable as you grow",
    ],
  },
];

const faqs = [
  { question: "What determines ERP software cost?", answer: "ERP cost depends on number of modules, users, customization level, deployment type (cloud/on-premise), integrations required, and support package. We provide detailed quotes after requirement analysis." },
  { question: "Cloud ERP vs On-Premise - which is better?", answer: "Cloud ERP has lower upfront cost and is ideal for remote access. On-premise gives full control and no recurring fees. We help you choose based on your business needs and infrastructure." },
  { question: "How long does ERP implementation take?", answer: "Basic ERP takes 4-8 weeks, standard ERP 8-16 weeks, and enterprise ERP 16-32 weeks. We follow phased implementation to minimize business disruption." },
  { question: "Is data migration included?", answer: "Basic data migration from Excel/existing systems is included in Standard and Enterprise packages. Complex migrations from legacy systems may have additional charges." },
  { question: "What training is provided?", answer: "All packages include user training. Standard and Enterprise packages include onsite training in Srinagar. We also provide user manuals and video tutorials." },
];

export default function ERPSoftwareCostKashmirPage() {
  return (
    <PricingPageTemplate
      title="ERP Software Cost in Kashmir"
      subtitle="Enterprise Software Pricing"
      description="Transparent ERP software pricing for businesses in Kashmir and Srinagar. From basic ERP to enterprise solutions, EASYIO Technologies offers competitive pricing with comprehensive features."
      pricingTiers={pricingTiers}
      faqs={faqs}
      serviceName="ERP Software"
    />
  );
}


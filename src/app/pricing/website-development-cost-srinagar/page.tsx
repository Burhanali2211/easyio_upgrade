import type { Metadata } from "next";
import PricingPageTemplate from "@/components/pricing/PricingPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Website Development Cost Srinagar | Web Design Pricing Kashmir",
  description: "Website development cost in Srinagar, Kashmir. Affordable website design pricing from EASYIO Technologies. Get detailed pricing for business websites, e-commerce, and custom web apps.",
  keywords: "website development cost in srinagar, website development cost kashmir, web design pricing srinagar, website cost J&K, affordable website kashmir",
  openGraph: {
    title: "Website Development Cost Srinagar | Web Design Pricing Kashmir",
    description: "Affordable website development pricing in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/pricing/website-development-cost-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/pricing/website-development-cost-srinagar` },
};

const pricingTiers = [
  {
    name: "Basic Website",
    price: "₹15,000",
    priceNote: "onwards",
    description: "Perfect for small businesses and startups in Kashmir",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 month free support",
      "Social media links",
    ],
  },
  {
    name: "Business Website",
    price: "₹35,000",
    priceNote: "onwards",
    description: "Comprehensive solution for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom design",
      "CMS (WordPress/Custom)",
      "Advanced SEO",
      "Blog integration",
      "Google Analytics",
      "3 months free support",
      "SSL certificate",
    ],
    highlighted: true,
  },
  {
    name: "Premium Website",
    price: "₹75,000",
    priceNote: "onwards",
    description: "Advanced features for established businesses",
    features: [
      "Unlimited pages",
      "Custom development",
      "Advanced functionality",
      "Multi-language support",
      "Payment integration",
      "Custom animations",
      "6 months free support",
      "Performance optimization",
    ],
  },
];

const faqs = [
  { question: "What factors affect website development cost?", answer: "Website cost depends on design complexity, number of pages, custom features, CMS choice, e-commerce functionality, integrations, and timeline. We provide detailed quotes after understanding your requirements." },
  { question: "Is hosting included in the price?", answer: "Basic hosting setup guidance is included. We recommend and help set up hosting on platforms like Hostinger, AWS, or Vercel. Hosting costs are separate and typically range from ₹2,000-10,000/year." },
  { question: "How long does website development take?", answer: "Basic websites take 1-2 weeks, business websites 2-4 weeks, and complex sites 4-8 weeks. Rush delivery is available at additional cost." },
  { question: "Do you offer payment plans?", answer: "Yes, we offer milestone-based payments: typically 30% advance, 40% on development, and 30% on delivery. Custom payment plans available for larger projects." },
  { question: "What about ongoing maintenance?", answer: "We offer maintenance packages starting from ₹2,000/month including updates, backups, and support. First 1-3 months support is included free based on package." },
];

export default function WebsiteDevelopmentCostSrinagarPage() {
  return (
    <PricingPageTemplate
      title="Website Development Cost in Srinagar"
      subtitle="Transparent Pricing"
      description="Affordable website development pricing for businesses in Srinagar and Kashmir. From basic websites to complex web applications, get transparent pricing from EASYIO Technologies."
      pricingTiers={pricingTiers}
      faqs={faqs}
      serviceName="Website Development"
    />
  );
}


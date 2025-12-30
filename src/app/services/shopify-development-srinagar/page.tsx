import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { ShoppingBag, Palette, Plug, BarChart, Smartphone, Zap } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Shopify Development Srinagar | Shopify Experts Kashmir - EASYIO",
  description: "Best Shopify development company in Srinagar, Kashmir. Shopify store setup, theme customization, app development. EASYIO Technologies - Shopify experts J&K.",
  keywords: "shopify development srinagar, shopify kashmir, shopify store setup srinagar, shopify theme customization kashmir, shopify experts J&K, shopify developer srinagar",
  openGraph: {
    title: "Shopify Development Srinagar | Shopify Experts Kashmir",
    description: "Best Shopify development in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/shopify-development-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/shopify-development-srinagar` },
};

const features = [
  { title: "Store Setup", description: "Complete Shopify store setup and configuration.", icon: <ShoppingBag className="h-6 w-6 text-primary" /> },
  { title: "Theme Customization", description: "Custom theme design or premium theme customization.", icon: <Palette className="h-6 w-6 text-primary" /> },
  { title: "App Integration", description: "Integration with Shopify apps for extended functionality.", icon: <Plug className="h-6 w-6 text-primary" /> },
  { title: "Analytics Setup", description: "Google Analytics, Facebook Pixel, and conversion tracking.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Mobile Optimization", description: "Perfect mobile shopping experience.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "Speed Optimization", description: "Fast loading Shopify stores for better conversions.", icon: <Zap className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Quick store launch with Shopify",
  "Secure and reliable platform",
  "Easy-to-manage admin panel",
  "All payment gateways supported",
  "Extensive app marketplace",
  "Automatic security updates",
  "24/7 Shopify support",
  "Scalable for growth",
];

const faqs = [
  { question: "How much does Shopify development cost in Srinagar?", answer: "Shopify development in Srinagar starts from INR 25,000 for basic setup, INR 50,000-1,00,000 for custom theme development, and INR 1,00,000+ for advanced customization." },
  { question: "What are Shopify's monthly fees?", answer: "Shopify has monthly plans: Basic ($29/month), Shopify ($79/month), and Advanced ($299/month). Plus development costs for customization." },
  { question: "Can you customize Shopify themes?", answer: "Yes, we customize existing Shopify themes or build custom themes using Shopify Liquid templating language." },
  { question: "Do you provide ongoing Shopify support?", answer: "Yes, we offer Shopify maintenance packages including updates, app management, content updates, and technical support." },
];

const relatedServices = [
  { title: "E-commerce Development", href: "/services/ecommerce-website-development-kashmir" },
  { title: "WooCommerce Development", href: "/services/wordpress-development-srinagar" },
  { title: "E-commerce App", href: "/services/ecommerce-app-development-kashmir" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
];

export default function ShopifyDevelopmentSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Shopify Development in Srinagar"
      subtitle="Shopify Store Setup & Customization"
      description="Launch your Shopify store with EASYIO Technologies' expert development services. Complete store setup, theme customization, and app integration for e-commerce businesses in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "E-commerce", href: "/services/ecommerce-website-development-kashmir" },
        { label: "Shopify", href: "/services/shopify-development-srinagar" },
      ]}
      primaryKeyword="Shopify Development"
      location="Srinagar, Kashmir"
    />
  );
}


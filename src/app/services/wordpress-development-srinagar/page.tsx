import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Globe, Palette, Plug, FileText, Shield, Zap } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "WordPress Development Srinagar | WordPress Developers Kashmir",
  description: "Best WordPress development company in Srinagar, Kashmir. Custom themes, WooCommerce, plugin development. EASYIO Technologies - WordPress experts J&K.",
  keywords: "wordpress development srinagar, wordpress kashmir, wordpress developers srinagar, woocommerce development kashmir, wordpress theme kashmir, wordpress website J&K",
  openGraph: {
    title: "WordPress Development Srinagar | WordPress Developers Kashmir",
    description: "Best WordPress development in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/wordpress-development-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/wordpress-development-srinagar` },
};

const features = [
  { title: "Custom WordPress Sites", description: "Bespoke WordPress websites tailored to your brand.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Theme Development", description: "Custom theme design or premium theme customization.", icon: <Palette className="h-6 w-6 text-primary" /> },
  { title: "Plugin Integration", description: "Essential plugins for functionality and SEO.", icon: <Plug className="h-6 w-6 text-primary" /> },
  { title: "WooCommerce", description: "Complete e-commerce with WooCommerce integration.", icon: <FileText className="h-6 w-6 text-primary" /> },
  { title: "Security", description: "Secure WordPress setup with best practices.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Speed Optimization", description: "Fast WordPress sites with caching and optimization.", icon: <Zap className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Easy-to-manage content management",
  "SEO-friendly platform",
  "Vast plugin ecosystem",
  "WooCommerce for e-commerce",
  "Cost-effective solution",
  "Full website ownership",
  "Scalable for any size business",
  "Regular updates and support",
];

const faqs = [
  { question: "How much does WordPress development cost in Srinagar?", answer: "WordPress development in Srinagar starts from INR 15,000 for basic sites, INR 30,000-60,000 for business sites, and INR 50,000-1,50,000 for WooCommerce stores." },
  { question: "Why choose WordPress?", answer: "WordPress powers 43% of websites globally. It's easy to manage, SEO-friendly, cost-effective, and has extensive plugins for any functionality you need." },
  { question: "Is WordPress secure?", answer: "Yes, with proper security plugins, regular updates, and best practices, WordPress is very secure. We implement security measures in all our WordPress projects." },
  { question: "Can I update content myself?", answer: "Absolutely! WordPress has an intuitive admin panel. We provide training so you can easily update pages, posts, and products yourself." },
];

const relatedServices = [
  { title: "E-commerce Development", href: "/services/ecommerce-website-development-kashmir" },
  { title: "Shopify Development", href: "/services/shopify-development-srinagar" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "Website Maintenance", href: "/services/website-maintenance-srinagar" },
];

export default function WordPressDevelopmentSrinagarPage() {
  return (
    <ServicePageTemplate
      title="WordPress Development in Srinagar"
      subtitle="Custom WordPress & WooCommerce Sites"
      description="Build powerful websites with EASYIO Technologies' WordPress development services. Custom themes, WooCommerce stores, and plugin integration for businesses in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "WordPress", href: "/services/wordpress-development-srinagar" },
      ]}
      primaryKeyword="WordPress Development"
      location="Srinagar, Kashmir"
    />
  );
}


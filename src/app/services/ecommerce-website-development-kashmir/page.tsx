import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { ShoppingCart, CreditCard, Truck, Search, BarChart, Shield } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "E-commerce Website Development Kashmir | Online Store Srinagar",
  description: "Best e-commerce website development in Kashmir. Online stores, Shopify, WooCommerce, custom e-commerce. EASYIO Technologies - e-commerce developers in Srinagar, J&K.",
  keywords: "ecommerce website development kashmir, online store srinagar, ecommerce development J&K, shopify website kashmir, woocommerce srinagar, ecommerce website cost kashmir",
  openGraph: {
    title: "E-commerce Website Development Kashmir | Online Store Srinagar",
    description: "Best e-commerce website development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/ecommerce-website-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/ecommerce-website-development-kashmir` },
};

const features = [
  { title: "Product Catalog", description: "Beautiful product listings with categories, filters, and search.", icon: <ShoppingCart className="h-6 w-6 text-primary" /> },
  { title: "Payment Gateway", description: "Razorpay, Paytm, UPI, cards, and COD integration.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Shipping Integration", description: "Automated shipping with Shiprocket, Delhivery, and more.", icon: <Truck className="h-6 w-6 text-primary" /> },
  { title: "SEO Optimized", description: "E-commerce SEO for better Google rankings.", icon: <Search className="h-6 w-6 text-primary" /> },
  { title: "Analytics", description: "Sales analytics, customer insights, and conversion tracking.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Secure Checkout", description: "PCI-DSS compliant secure payment processing.", icon: <Shield className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete e-commerce solution for Kashmir businesses",
  "All popular payment gateways integrated",
  "Cash on Delivery support (popular in J&K)",
  "Mobile-responsive design",
  "GST-compliant invoicing",
  "Inventory management included",
  "Local shipping partner integration",
  "Marketing tools and promotions",
];

const faqs = [
  { question: "How much does an e-commerce website cost in Kashmir?", answer: "E-commerce website costs in Kashmir range from INR 50,000-75,000 for basic stores, INR 75,000-1,50,000 for feature-rich stores, and INR 1,50,000-3,00,000 for custom e-commerce platforms." },
  { question: "Which platform is best for e-commerce - Shopify or WooCommerce?", answer: "Shopify is easier to use with monthly fees, while WooCommerce offers more flexibility with one-time development cost. We recommend based on your specific needs and budget." },
  { question: "Do you support Cash on Delivery?", answer: "Yes, COD is essential for e-commerce in Kashmir. We integrate COD with order verification, OTP confirmation, and delivery partner integration." },
  { question: "Can you migrate my existing store?", answer: "Yes, we migrate e-commerce stores from any platform to Shopify, WooCommerce, or custom solutions with complete data transfer." },
];

const relatedServices = [
  { title: "Shopify Development", href: "/services/shopify-development-srinagar" },
  { title: "WordPress/WooCommerce", href: "/services/wordpress-development-srinagar" },
  { title: "E-commerce App", href: "/services/ecommerce-app-development-kashmir" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
];

export default function EcommerceWebsiteDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="E-commerce Website Development in Kashmir"
      subtitle="Online Stores & Shopping Websites"
      description="Launch your online store with EASYIO Technologies' e-commerce development services. Complete shopping websites with payment integration, shipping, and inventory management for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "E-commerce", href: "/services/ecommerce-website-development-kashmir" },
      ]}
      primaryKeyword="E-commerce Website Development"
      location="Kashmir"
    />
  );
}


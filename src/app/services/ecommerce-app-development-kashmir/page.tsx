import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { ShoppingCart, CreditCard, Truck, Bell, BarChart, Users } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "E-commerce App Development Kashmir | Shopping App Srinagar",
  description: "Best e-commerce app development company in Kashmir. Online shopping apps, m-commerce solutions. EASYIO Technologies - shopping app developers in Srinagar, J&K.",
  keywords: "ecommerce app development kashmir, shopping app srinagar, online store app kashmir, m-commerce app J&K, retail app development srinagar, ecommerce mobile app kashmir",
  openGraph: {
    title: "E-commerce App Development Kashmir | Shopping App Srinagar",
    description: "Best e-commerce app development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/ecommerce-app-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/ecommerce-app-development-kashmir` },
};

const features = [
  { title: "Product Catalog", description: "Beautiful product listings with categories, filters, and search.", icon: <ShoppingCart className="h-6 w-6 text-primary" /> },
  { title: "Payment Integration", description: "Multiple payment options: UPI, cards, COD, wallets.", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  { title: "Order Tracking", description: "Real-time order tracking with delivery notifications.", icon: <Truck className="h-6 w-6 text-primary" /> },
  { title: "Push Notifications", description: "Engage customers with offers, updates, and reminders.", icon: <Bell className="h-6 w-6 text-primary" /> },
  { title: "Analytics Dashboard", description: "Sales analytics, customer insights, and performance metrics.", icon: <BarChart className="h-6 w-6 text-primary" /> },
  { title: "Customer Management", description: "User accounts, wishlists, reviews, and loyalty programs.", icon: <Users className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Complete e-commerce solution for Kashmir businesses",
  "Integration with popular payment gateways",
  "Inventory sync with website and POS",
  "Multi-vendor marketplace support",
  "Local delivery partner integration",
  "Kashmir-focused features (COD popular)",
  "Admin panel for easy management",
  "Analytics and reporting dashboard",
];

const faqs = [
  { question: "How much does an e-commerce app cost in Kashmir?", answer: "E-commerce app development in Kashmir starts from INR 1,00,000 for basic apps, INR 2,00,000-4,00,000 for feature-rich apps, and INR 5,00,000+ for multi-vendor marketplace apps." },
  { question: "Can you integrate with my existing website?", answer: "Yes, we can sync your mobile app with existing WooCommerce, Shopify, or custom e-commerce websites for unified inventory and order management." },
  { question: "Which payment gateways do you integrate?", answer: "We integrate Razorpay, Paytm, PhonePe, Google Pay, CCAvenue, and direct bank transfer options - all popular in Kashmir." },
  { question: "Do you support Cash on Delivery?", answer: "Yes, we support COD with OTP verification, which is very popular for e-commerce in Kashmir and J&K region." },
];

const relatedServices = [
  { title: "E-commerce Website", href: "/services/ecommerce-website-development-kashmir" },
  { title: "Delivery App", href: "/services/delivery-app-development-kashmir" },
  { title: "POS Software", href: "/services/pos-software-srinagar" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
];

export default function EcommerceAppDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="E-commerce App Development in Kashmir"
      subtitle="Mobile Shopping & M-Commerce Apps"
      description="Launch your online store on mobile with EASYIO Technologies' e-commerce app development services. Complete shopping apps with payment integration, order tracking, and analytics for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "E-commerce App", href: "/services/ecommerce-app-development-kashmir" },
      ]}
      primaryKeyword="E-commerce App Development"
      location="Kashmir"
    />
  );
}


import type { Metadata } from "next";
import PricingPageTemplate from "@/components/pricing/PricingPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "E-commerce Website Cost Kashmir | Online Store Pricing Srinagar",
  description: "E-commerce website development cost in Kashmir. Online store, Shopify, WooCommerce pricing from EASYIO Technologies Srinagar. Get quote for your e-commerce project.",
  keywords: "ecommerce website cost kashmir, online store cost srinagar, shopify cost kashmir, woocommerce pricing srinagar, ecommerce development cost J&K",
  openGraph: {
    title: "E-commerce Website Cost Kashmir | Online Store Pricing Srinagar",
    description: "Affordable e-commerce development pricing in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/pricing/ecommerce-website-cost-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/pricing/ecommerce-website-cost-kashmir` },
};

const pricingTiers = [
  {
    name: "Starter Store",
    price: "₹50,000",
    priceNote: "onwards",
    description: "Basic online store for new sellers",
    features: [
      "Up to 50 products",
      "WooCommerce platform",
      "Payment gateway",
      "Mobile responsive",
      "Basic SEO",
      "1 month support",
    ],
  },
  {
    name: "Business Store",
    price: "₹1,00,000",
    priceNote: "onwards",
    description: "Feature-rich store for growing businesses",
    features: [
      "Up to 500 products",
      "Custom design",
      "Multiple payment options",
      "Shipping integration",
      "Inventory management",
      "Marketing tools",
      "3 months support",
      "Analytics dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise Store",
    price: "₹2,50,000",
    priceNote: "onwards",
    description: "Advanced e-commerce platform",
    features: [
      "Unlimited products",
      "Custom development",
      "Multi-vendor support",
      "Advanced inventory",
      "ERP integration",
      "Mobile app addon",
      "6 months support",
      "Dedicated support",
    ],
  },
];

const faqs = [
  { question: "What affects e-commerce website cost?", answer: "Cost depends on platform (Shopify, WooCommerce, custom), number of products, design complexity, payment integrations, shipping setup, and custom features required." },
  { question: "Shopify vs WooCommerce - which is better?", answer: "Shopify is easier with monthly fees (₹2,000-25,000/month). WooCommerce has one-time development cost and lower ongoing expense. We recommend based on your budget and technical capability." },
  { question: "Is payment gateway integration included?", answer: "Yes, we integrate Razorpay, Paytm, or your preferred gateway. Gateway fees are charged directly by payment providers (typically 2% per transaction)." },
  { question: "Do you support Cash on Delivery?", answer: "Yes, COD is essential for Kashmir. We set up COD with OTP verification and integrate with delivery partners for smooth operations." },
  { question: "Can you migrate my existing store?", answer: "Yes, we migrate from any platform including Shopify, Magento, or custom solutions with complete product and customer data transfer." },
];

export default function EcommerceWebsiteCostKashmirPage() {
  return (
    <PricingPageTemplate
      title="E-commerce Website Cost in Kashmir"
      subtitle="Online Store Pricing"
      description="Transparent e-commerce website pricing for businesses in Kashmir and Srinagar. From simple stores to marketplace platforms, EASYIO Technologies offers competitive e-commerce development rates."
      pricingTiers={pricingTiers}
      faqs={faqs}
      serviceName="E-commerce Development"
    />
  );
}


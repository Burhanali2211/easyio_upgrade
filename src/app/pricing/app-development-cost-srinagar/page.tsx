import type { Metadata } from "next";
import PricingPageTemplate from "@/components/pricing/PricingPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "App Development Cost Srinagar | Mobile App Pricing Kashmir",
  description: "Mobile app development cost in Srinagar, Kashmir. Android, iOS, Flutter app pricing from EASYIO Technologies. Get detailed quotes for your mobile app project.",
  keywords: "app development cost srinagar, mobile app development cost kashmir, android app cost srinagar, ios app pricing kashmir, flutter app cost J&K",
  openGraph: {
    title: "App Development Cost Srinagar | Mobile App Pricing Kashmir",
    description: "Affordable mobile app development pricing in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/pricing/app-development-cost-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/pricing/app-development-cost-srinagar` },
};

const pricingTiers = [
  {
    name: "Basic App",
    price: "₹50,000",
    priceNote: "onwards",
    description: "Simple apps with essential features",
    features: [
      "Single platform (Android/iOS)",
      "Up to 5 screens",
      "Basic UI design",
      "Local data storage",
      "Push notifications",
      "1 month free support",
    ],
  },
  {
    name: "Standard App",
    price: "₹1,50,000",
    priceNote: "onwards",
    description: "Feature-rich apps for businesses",
    features: [
      "Cross-platform (Flutter)",
      "Up to 15 screens",
      "Custom UI/UX design",
      "Backend API integration",
      "User authentication",
      "Admin panel",
      "3 months free support",
      "Play Store/App Store submission",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise App",
    price: "₹3,00,000",
    priceNote: "onwards",
    description: "Complex apps with advanced features",
    features: [
      "Both Android & iOS native",
      "Unlimited screens",
      "Complex backend",
      "Payment gateway",
      "Real-time features",
      "Advanced analytics",
      "6 months free support",
      "Dedicated project manager",
    ],
  },
];

const faqs = [
  { question: "What factors affect app development cost?", answer: "App cost depends on platform (Android/iOS/both), features complexity, design requirements, backend needs, third-party integrations, and timeline. Cross-platform development with Flutter can reduce costs by 30-40%." },
  { question: "Android vs iOS - which should I develop first?", answer: "In Kashmir/India, Android has 95%+ market share, so we recommend starting with Android. Cross-platform (Flutter) gives you both platforms at lower cost." },
  { question: "How long does app development take?", answer: "Simple apps take 4-8 weeks, standard apps 8-16 weeks, and complex apps 16-32 weeks. Timeline depends on features, design complexity, and approval processes." },
  { question: "Do you help with app store submission?", answer: "Yes, we handle complete Play Store and App Store submission including screenshots, descriptions, and compliance with store guidelines." },
  { question: "What about ongoing app maintenance?", answer: "We offer maintenance packages from ₹5,000/month including bug fixes, OS updates, security patches, and minor enhancements." },
];

export default function AppDevelopmentCostSrinagarPage() {
  return (
    <PricingPageTemplate
      title="Mobile App Development Cost in Srinagar"
      subtitle="App Development Pricing"
      description="Transparent mobile app development pricing for businesses in Srinagar and Kashmir. Android, iOS, and cross-platform Flutter apps at competitive rates from EASYIO Technologies."
      pricingTiers={pricingTiers}
      faqs={faqs}
      serviceName="App Development"
    />
  );
}


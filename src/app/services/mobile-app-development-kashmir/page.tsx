import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Smartphone, Code, Layers, Zap, Shield, Rocket } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Mobile App Development Kashmir | App Developers Srinagar - EASYIO",
  description: "Best mobile app development company in Kashmir. Android, iOS, Flutter, React Native apps. EASYIO Technologies - top app developers in Srinagar, J&K. Get a free quote!",
  keywords: [
    "mobile app development company kashmir",
    "mobile app developer srinagar",
    "app development kashmir",
    "android app development kashmir",
    "ios app development kashmir",
    "flutter app development kashmir",
    "react native app development srinagar",
    "best app developers kashmir",
    "mobile app development cost kashmir",
    "app development company J&K",
  ].join(", "),
  openGraph: {
    title: "Mobile App Development Kashmir | App Developers Srinagar - EASYIO",
    description: "Best mobile app development company in Kashmir. Android, iOS, Flutter, React Native apps by EASYIO Technologies Srinagar.",
    url: `${siteUrl}/services/mobile-app-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/mobile-app-development-kashmir` },
};

const features = [
  { title: "Native App Development", description: "High-performance native apps for iOS (Swift) and Android (Kotlin) platforms.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "Cross-Platform Apps", description: "Cost-effective Flutter and React Native apps that work on both platforms.", icon: <Layers className="h-6 w-6 text-primary" /> },
  { title: "Custom Development", description: "Tailored mobile solutions designed for your specific business needs in Kashmir.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "UI/UX Design", description: "Beautiful, user-friendly interfaces that engage users and drive conversions.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "App Security", description: "Secure apps with encryption, authentication, and data protection.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "App Launch Support", description: "Complete support for Play Store and App Store submission and optimization.", icon: <Rocket className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Best mobile app development company in Kashmir with 50+ apps delivered",
  "Expert developers in Flutter, React Native, Swift, and Kotlin",
  "Affordable app development pricing for J&K businesses",
  "End-to-end service from concept to launch",
  "Agile development with regular updates",
  "Post-launch maintenance and support",
  "Local team in Srinagar for face-to-face meetings",
  "App Store Optimization (ASO) services included",
];

const faqs = [
  { question: "How much does mobile app development cost in Kashmir?", answer: "Mobile app development costs in Kashmir range from INR 50,000-1,50,000 for simple apps, INR 1,50,000-3,00,000 for medium complexity apps, and INR 3,00,000-10,00,000+ for complex enterprise apps. Cross-platform development with Flutter can reduce costs by 30-40%." },
  { question: "How long does it take to develop a mobile app?", answer: "App development timeline depends on complexity. Simple apps take 4-8 weeks, medium apps 8-16 weeks, and complex apps 16-32 weeks. We provide detailed timelines after understanding your requirements." },
  { question: "Do you develop both Android and iOS apps?", answer: "Yes, we develop native apps for both Android and iOS, as well as cross-platform apps using Flutter and React Native that work on both platforms from a single codebase." },
  { question: "What types of apps do you develop in Kashmir?", answer: "We develop all types of mobile apps including e-commerce apps, booking apps, delivery apps, taxi apps, school apps, healthcare apps, social apps, business apps, and custom enterprise applications." },
  { question: "Do you provide app maintenance after launch?", answer: "Yes, we offer comprehensive app maintenance packages including bug fixes, updates, performance optimization, and feature additions. Monthly packages start from INR 5,000." },
];

const relatedServices = [
  { title: "Android App Development", href: "/services/android-app-development-srinagar" },
  { title: "iOS App Development", href: "/services/ios-app-development-kashmir" },
  { title: "Flutter App Development", href: "/services/flutter-app-development-kashmir" },
  { title: "React Native Development", href: "/services/react-native-app-development-srinagar" },
  { title: "E-commerce App", href: "/services/ecommerce-app-development-kashmir" },
  { title: "App Maintenance", href: "/services/app-maintenance-kashmir" },
];

export default function MobileAppDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="Mobile App Development in Kashmir"
      subtitle="Android, iOS & Cross-Platform Apps"
      description="EASYIO Technologies is the leading mobile app development company in Kashmir. We build high-quality Android, iOS, Flutter, and React Native applications that help businesses in Srinagar and J&K reach their customers on mobile."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
      ]}
      primaryKeyword="Mobile App Development"
      location="Kashmir"
      ctaTitle="Let's Build Your App"
      ctaDescription="Transform your idea into a powerful mobile app. Get a free consultation and quote from EASYIO Technologies."
    />
  );
}


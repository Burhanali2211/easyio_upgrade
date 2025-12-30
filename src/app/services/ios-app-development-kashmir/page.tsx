import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Smartphone, Code, Apple, Shield, Zap, Rocket } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "iOS App Development Kashmir | iPhone App Developers Srinagar",
  description: "Best iOS app development company in Kashmir. Native Swift apps for iPhone and iPad. EASYIO Technologies - iOS developers in Srinagar, J&K. App Store publishing included.",
  keywords: "ios app development kashmir, iphone app development srinagar, ios developers kashmir, swift development srinagar, app store app kashmir, ipad app development J&K",
  openGraph: {
    title: "iOS App Development Kashmir | iPhone App Developers Srinagar",
    description: "Best iOS app development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/ios-app-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/ios-app-development-kashmir` },
};

const features = [
  { title: "Native Swift Development", description: "Modern iOS apps built with Swift for optimal performance.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "iPhone & iPad Apps", description: "Universal apps optimized for all Apple devices.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "App Store Publishing", description: "Complete Apple App Store submission and optimization.", icon: <Apple className="h-6 w-6 text-primary" /> },
  { title: "iOS Security", description: "Secure apps following Apple's security best practices.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Performance", description: "Fast, smooth apps optimized for iOS ecosystem.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Apple Integration", description: "Integration with Apple Pay, Siri, HealthKit, and more.", icon: <Rocket className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Expert Swift and SwiftUI developers in Kashmir",
  "Support for latest iOS versions",
  "iPhone, iPad, and Apple Watch development",
  "App Store submission and ASO",
  "Apple ecosystem integration",
  "Premium user experience design",
  "TestFlight beta testing",
  "Ongoing maintenance and updates",
];

const faqs = [
  { question: "How much does iOS app development cost in Kashmir?", answer: "iOS app development in Kashmir starts from INR 60,000 for simple apps, INR 1,50,000-3,00,000 for medium apps, and INR 3,00,000+ for complex applications." },
  { question: "How long to develop an iOS app?", answer: "Simple iOS apps take 6-10 weeks, medium complexity 10-16 weeks, and complex apps 16-28 weeks depending on features and Apple Review requirements." },
  { question: "Do you have Apple Developer accounts?", answer: "Yes, we have Apple Developer Program membership and can publish apps on your behalf or guide you through setting up your own account." },
  { question: "Can you develop for iPad and Apple Watch?", answer: "Yes, we develop universal apps for iPhone and iPad, as well as companion apps for Apple Watch with appropriate feature sets." },
];

const relatedServices = [
  { title: "Android App Development", href: "/services/android-app-development-srinagar" },
  { title: "Flutter Development", href: "/services/flutter-app-development-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
  { title: "App Maintenance", href: "/services/app-maintenance-kashmir" },
];

export default function IOSAppDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="iOS App Development in Kashmir"
      subtitle="iPhone & iPad Apps with Swift"
      description="Create stunning iOS applications with EASYIO Technologies - the leading iOS app development company in Kashmir. Native Swift development, App Store publishing, and premium user experience for businesses in Srinagar and J&K."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "iOS Development", href: "/services/ios-app-development-kashmir" },
      ]}
      primaryKeyword="iOS App Development"
      location="Kashmir"
    />
  );
}


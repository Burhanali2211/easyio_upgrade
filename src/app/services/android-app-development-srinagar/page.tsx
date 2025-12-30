import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Smartphone, Code, Play, Shield, Zap, Rocket } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Android App Development Srinagar | Android Developers Kashmir",
  description: "Best Android app development company in Srinagar, Kashmir. Native Kotlin apps, Google Play Store publishing. EASYIO Technologies - Android experts in J&K.",
  keywords: "android app development srinagar, android app development kashmir, android developers srinagar, kotlin development kashmir, play store app kashmir, android app company J&K",
  openGraph: {
    title: "Android App Development Srinagar | Android Developers Kashmir",
    description: "Best Android app development in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/android-app-development-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/android-app-development-srinagar` },
};

const features = [
  { title: "Native Kotlin Development", description: "Modern Android apps built with Kotlin for best performance.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "Material Design", description: "Beautiful UI following Google's Material Design guidelines.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "Play Store Publishing", description: "Complete Google Play Store submission and optimization.", icon: <Play className="h-6 w-6 text-primary" /> },
  { title: "App Security", description: "Secure apps with ProGuard, encryption, and secure APIs.", icon: <Shield className="h-6 w-6 text-primary" /> },
  { title: "Performance Optimization", description: "Fast, battery-efficient apps optimized for all Android devices.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Quick Launch", description: "Efficient development process for faster time-to-market.", icon: <Rocket className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Expert Kotlin and Java Android developers in Srinagar",
  "Support for all Android versions (5.0 to latest)",
  "Tablet and foldable device optimization",
  "Integration with Android-specific features",
  "Google Play Store ASO services",
  "Offline functionality support",
  "Push notifications and analytics",
  "Ongoing maintenance and updates",
];

const faqs = [
  { question: "How much does Android app development cost in Srinagar?", answer: "Android app development in Srinagar starts from INR 40,000 for simple apps, INR 1,00,000-2,50,000 for medium apps, and INR 2,50,000+ for complex applications." },
  { question: "How long to develop an Android app?", answer: "Simple Android apps take 4-8 weeks, medium complexity 8-12 weeks, and complex apps 12-24 weeks depending on features and design requirements." },
  { question: "Do you use Kotlin or Java?", answer: "We primarily use Kotlin as recommended by Google for modern Android development, but can work with Java for legacy projects or specific requirements." },
  { question: "Will you publish the app on Play Store?", answer: "Yes, we handle the complete Google Play Store submission process including screenshots, descriptions, ASO optimization, and app review guidelines compliance." },
];

const relatedServices = [
  { title: "iOS App Development", href: "/services/ios-app-development-kashmir" },
  { title: "Flutter Development", href: "/services/flutter-app-development-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
  { title: "App Maintenance", href: "/services/app-maintenance-kashmir" },
];

export default function AndroidAppDevelopmentSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Android App Development in Srinagar"
      subtitle="Native Android & Kotlin Apps"
      description="Build powerful Android applications with EASYIO Technologies - the leading Android app development company in Srinagar. Native Kotlin development, Material Design, and Play Store optimization for businesses in Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "Android Development", href: "/services/android-app-development-srinagar" },
      ]}
      primaryKeyword="Android App Development"
      location="Srinagar, Kashmir"
    />
  );
}


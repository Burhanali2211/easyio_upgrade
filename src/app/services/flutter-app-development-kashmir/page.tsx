import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Layers, Code, Zap, Smartphone, RefreshCw, Rocket } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Flutter App Development Kashmir | Flutter Developers Srinagar",
  description: "Best Flutter app development company in Kashmir. Cross-platform apps for Android & iOS from single codebase. EASYIO Technologies - Flutter experts in Srinagar, J&K.",
  keywords: "flutter app development kashmir, flutter developers srinagar, flutter development kashmir, cross platform app kashmir, dart development srinagar, flutter app company J&K",
  openGraph: {
    title: "Flutter App Development Kashmir | Flutter Developers Srinagar",
    description: "Best Flutter app development in Kashmir by EASYIO Technologies.",
    url: `${siteUrl}/services/flutter-app-development-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/flutter-app-development-kashmir` },
};

const features = [
  { title: "Single Codebase", description: "One codebase for Android, iOS, Web, and Desktop applications.", icon: <Layers className="h-6 w-6 text-primary" /> },
  { title: "Native Performance", description: "Near-native performance with beautiful custom widgets.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Dart Programming", description: "Modern Dart language with hot reload for rapid development.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "Custom UI", description: "Pixel-perfect custom designs with Flutter's widget system.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "Hot Reload", description: "Instant code changes preview for faster development cycles.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "Multi-Platform", description: "Deploy to Android, iOS, Web, Windows, macOS, and Linux.", icon: <Rocket className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Save 40-50% development cost with single codebase",
  "Faster time-to-market for Kashmir businesses",
  "Consistent UI across Android and iOS",
  "Expert Flutter developers in Srinagar",
  "Native-like performance and animations",
  "Easy maintenance and updates",
  "Future-proof technology backed by Google",
  "Web and desktop apps from same code",
];

const faqs = [
  { question: "What is Flutter and why should I use it?", answer: "Flutter is Google's UI toolkit for building natively compiled applications from a single codebase. It's ideal for Kashmir businesses wanting apps on both Android and iOS at lower cost with faster development." },
  { question: "How much does Flutter app development cost in Kashmir?", answer: "Flutter app development in Kashmir starts from INR 50,000 for simple apps, saving 30-40% compared to developing separate native apps. Medium apps range INR 1,00,000-2,00,000." },
  { question: "Is Flutter performance good?", answer: "Yes, Flutter apps achieve near-native performance as they compile to native ARM code. Many top apps like Google Pay, Alibaba, and BMW use Flutter." },
  { question: "Can Flutter apps look native?", answer: "Yes, Flutter provides Material Design for Android and Cupertino widgets for iOS, or you can create completely custom designs that look identical on both platforms." },
];

const relatedServices = [
  { title: "React Native Development", href: "/services/react-native-app-development-srinagar" },
  { title: "Android App Development", href: "/services/android-app-development-srinagar" },
  { title: "iOS App Development", href: "/services/ios-app-development-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
];

export default function FlutterAppDevelopmentKashmirPage() {
  return (
    <ServicePageTemplate
      title="Flutter App Development in Kashmir"
      subtitle="Cross-Platform Apps for Android & iOS"
      description="Build beautiful, high-performance apps for Android and iOS from a single codebase with EASYIO Technologies' Flutter development services. Save time and cost while delivering exceptional user experience for businesses in Kashmir and Srinagar."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "Flutter Development", href: "/services/flutter-app-development-kashmir" },
      ]}
      primaryKeyword="Flutter App Development"
      location="Kashmir"
    />
  );
}


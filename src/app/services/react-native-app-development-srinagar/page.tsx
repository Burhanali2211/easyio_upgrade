import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Layers, Code, Zap, Globe, RefreshCw, Users } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "React Native App Development Srinagar | Cross-Platform Kashmir",
  description: "Best React Native app development company in Srinagar, Kashmir. JavaScript-based cross-platform apps. EASYIO Technologies - React Native experts in J&K.",
  keywords: "react native app development srinagar, react native kashmir, cross platform app srinagar, javascript app development kashmir, expo development srinagar, react native company J&K",
  openGraph: {
    title: "React Native App Development Srinagar | Cross-Platform Kashmir",
    description: "Best React Native app development in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/react-native-app-development-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/react-native-app-development-srinagar` },
};

const features = [
  { title: "JavaScript Development", description: "Build apps using JavaScript/TypeScript with React skills.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "Cross-Platform", description: "Single codebase for Android and iOS applications.", icon: <Layers className="h-6 w-6 text-primary" /> },
  { title: "Native Modules", description: "Access native device features when needed.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Web Integration", description: "Share code with React web applications.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Fast Refresh", description: "Instant feedback during development.", icon: <RefreshCw className="h-6 w-6 text-primary" /> },
  { title: "Large Ecosystem", description: "Access to vast npm packages and community.", icon: <Users className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Leverage existing React/JavaScript skills",
  "Share code with web applications",
  "Large ecosystem of libraries",
  "Expert React Native developers in Kashmir",
  "Used by Facebook, Instagram, Uber",
  "Fast development cycles",
  "Easy integration with existing web stack",
  "Cost-effective cross-platform solution",
];

const faqs = [
  { question: "What is React Native?", answer: "React Native is Meta's framework for building native mobile apps using JavaScript and React. It's ideal for teams with web development experience wanting to build mobile apps." },
  { question: "React Native vs Flutter - which is better?", answer: "Both are excellent choices. React Native is better if you have JavaScript/React expertise or want to share code with web. Flutter offers better performance and custom UI. We can help you choose based on your needs." },
  { question: "How much does React Native development cost?", answer: "React Native development in Srinagar starts from INR 50,000 for simple apps, saving 30-40% compared to native development. We can share code with your React web app for additional savings." },
  { question: "Can React Native access native features?", answer: "Yes, React Native can access all native device features through native modules. We can also write custom native code for specific requirements." },
];

const relatedServices = [
  { title: "Flutter Development", href: "/services/flutter-app-development-kashmir" },
  { title: "React.js Development", href: "/services/react-js-development-srinagar" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
];

export default function ReactNativeAppDevelopmentSrinagarPage() {
  return (
    <ServicePageTemplate
      title="React Native App Development in Srinagar"
      subtitle="JavaScript Cross-Platform Apps"
      description="Build mobile apps using JavaScript with EASYIO Technologies' React Native development services. Leverage your web development skills to create powerful Android and iOS apps for businesses in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile Apps", href: "/services/mobile-app-development-kashmir" },
        { label: "React Native", href: "/services/react-native-app-development-srinagar" },
      ]}
      primaryKeyword="React Native App Development"
      location="Srinagar, Kashmir"
    />
  );
}


import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Smartphone, Monitor, Tablet, Zap, Eye, Layout } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Responsive Website Design Srinagar | Mobile-Friendly Sites Kashmir",
  description: "Best responsive website design in Srinagar, Kashmir. Mobile-friendly websites that work on all devices. EASYIO Technologies - responsive web design J&K.",
  keywords: "responsive website design srinagar, mobile friendly website kashmir, responsive web design J&K, mobile website srinagar, adaptive design kashmir",
  openGraph: {
    title: "Responsive Website Design Srinagar | Mobile-Friendly Sites Kashmir",
    description: "Best responsive website design in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/services/responsive-website-design-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/services/responsive-website-design-srinagar` },
};

const features = [
  { title: "Mobile-First Design", description: "Designs optimized for mobile then scaled up.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "Desktop Experience", description: "Full-featured desktop experience with all content.", icon: <Monitor className="h-6 w-6 text-primary" /> },
  { title: "Tablet Optimization", description: "Perfect layouts for iPads and tablets.", icon: <Tablet className="h-6 w-6 text-primary" /> },
  { title: "Fast Loading", description: "Optimized images and code for quick loading.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Touch-Friendly", description: "Easy navigation with touch gestures.", icon: <Eye className="h-6 w-6 text-primary" /> },
  { title: "Flexible Layouts", description: "CSS Grid and Flexbox for fluid layouts.", icon: <Layout className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "70%+ traffic is mobile - be ready for it",
  "Google ranks mobile-friendly sites higher",
  "Better user experience on all devices",
  "Single website works everywhere",
  "Lower maintenance than separate mobile site",
  "Future-proof for new devices",
  "Improved conversion rates",
  "Professional appearance on any screen",
];

const faqs = [
  { question: "What is responsive web design?", answer: "Responsive web design ensures your website looks perfect on all devices - desktops, laptops, tablets, and smartphones. The layout automatically adjusts to fit any screen size." },
  { question: "Why is mobile-friendly design important?", answer: "Over 70% of web traffic in India comes from mobile devices. Google also ranks mobile-friendly sites higher. A responsive website is essential for business success in Kashmir." },
  { question: "How much does responsive design cost?", answer: "Responsive design is included in all our website packages. We don't charge extra for mobile-friendly design - it's standard practice at EASYIO Technologies." },
  { question: "Can you make my existing site responsive?", answer: "Yes, we can redesign your existing website to be fully responsive, or update the CSS to add responsive capabilities while keeping the same design." },
];

const relatedServices = [
  { title: "Web Development", href: "/services/web-development-company-kashmir" },
  { title: "UI/UX Design", href: "/services/landing-page-design-srinagar" },
  { title: "Website Redesign", href: "/services/website-redesign-kashmir" },
  { title: "Mobile App Development", href: "/services/mobile-app-development-kashmir" },
];

export default function ResponsiveWebsiteDesignSrinagarPage() {
  return (
    <ServicePageTemplate
      title="Responsive Website Design in Srinagar"
      subtitle="Mobile-Friendly Web Design"
      description="Create websites that look perfect on every device with EASYIO Technologies' responsive design services. Mobile-first approach ensuring great user experience on phones, tablets, and desktops in Srinagar and Kashmir."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
        { label: "Responsive Design", href: "/services/responsive-website-design-srinagar" },
      ]}
      primaryKeyword="Responsive Website Design"
      location="Srinagar, Kashmir"
    />
  );
}


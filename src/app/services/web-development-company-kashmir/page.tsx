import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Globe, Code, Smartphone, Search, Zap, Shield } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Web Development Company Kashmir | Website Design Srinagar - EASYIO",
  description: "Best web development company in Kashmir. Custom websites, web applications, e-commerce development. EASYIO Technologies - top website designers in Srinagar, J&K.",
  keywords: [
    "web development company kashmir",
    "web development company srinagar",
    "website development kashmir",
    "website design srinagar",
    "web design company kashmir",
    "best website designers kashmir",
    "website developers srinagar",
    "web development J&K",
    "website development cost kashmir",
    "custom website development srinagar",
  ].join(", "),
  openGraph: {
    title: "Web Development Company Kashmir | Website Design Srinagar - EASYIO",
    description: "Best web development company in Kashmir. Custom websites and web applications by EASYIO Technologies Srinagar.",
    url: `${siteUrl}/services/web-development-company-kashmir`,
  },
  alternates: { canonical: `${siteUrl}/services/web-development-company-kashmir` },
};

const features = [
  { title: "Custom Website Development", description: "Bespoke websites designed for your unique business needs.", icon: <Globe className="h-6 w-6 text-primary" /> },
  { title: "Modern Technologies", description: "Built with React, Next.js, and modern web frameworks.", icon: <Code className="h-6 w-6 text-primary" /> },
  { title: "Responsive Design", description: "Perfect display on desktop, tablet, and mobile devices.", icon: <Smartphone className="h-6 w-6 text-primary" /> },
  { title: "SEO Optimized", description: "Search engine friendly websites that rank on Google.", icon: <Search className="h-6 w-6 text-primary" /> },
  { title: "Fast Performance", description: "Lightning-fast loading with optimized code and assets.", icon: <Zap className="h-6 w-6 text-primary" /> },
  { title: "Secure Websites", description: "SSL certificates, secure coding, and data protection.", icon: <Shield className="h-6 w-6 text-primary" /> },
];

const benefits = [
  "Best web development company in Kashmir with 100+ websites delivered",
  "Expert developers in React, Next.js, and modern technologies",
  "Affordable website development for J&K businesses",
  "SEO-friendly websites that rank on Google",
  "Mobile-first responsive design",
  "Fast turnaround time and on-time delivery",
  "Local team in Srinagar for support",
  "Ongoing maintenance and updates available",
];

const faqs = [
  { question: "How much does website development cost in Kashmir?", answer: "Website development costs in Kashmir range from INR 15,000-30,000 for basic websites, INR 30,000-75,000 for business websites, INR 50,000-1,50,000 for e-commerce websites, and INR 1,00,000+ for custom web applications." },
  { question: "How long does it take to develop a website?", answer: "Timeline varies by complexity: Simple websites take 1-2 weeks, business websites 2-4 weeks, e-commerce websites 4-8 weeks, and custom web applications 8-16 weeks." },
  { question: "Do you provide website hosting?", answer: "Yes, we provide managed hosting services with SSL, backups, and security monitoring. We also help with hosting on platforms like AWS, Vercel, and Hostinger." },
  { question: "Will my website work on mobile phones?", answer: "Absolutely! All our websites are mobile-responsive and optimized for all devices including smartphones, tablets, and desktops." },
  { question: "Do you offer website maintenance?", answer: "Yes, we offer monthly maintenance packages including updates, security patches, backups, and content updates starting from INR 2,000/month." },
];

const relatedServices = [
  { title: "E-commerce Development", href: "/services/ecommerce-website-development-kashmir" },
  { title: "WordPress Development", href: "/services/wordpress-development-srinagar" },
  { title: "React.js Development", href: "/services/react-js-development-srinagar" },
  { title: "Next.js Development", href: "/services/next-js-development-kashmir" },
  { title: "Website Maintenance", href: "/services/website-maintenance-srinagar" },
  { title: "SEO Services", href: "/services/seo-services-srinagar" },
];

export default function WebDevelopmentCompanyKashmirPage() {
  return (
    <ServicePageTemplate
      title="Web Development Company in Kashmir"
      subtitle="Custom Websites & Web Applications"
      description="EASYIO Technologies is the leading web development company in Kashmir. We create stunning, high-performance websites and web applications that help businesses in Srinagar and J&K establish a powerful online presence."
      features={features}
      benefits={benefits}
      faqs={faqs}
      relatedServices={relatedServices}
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development", href: "/services/web-development-company-kashmir" },
      ]}
      primaryKeyword="Web Development"
      location="Kashmir"
      ctaTitle="Let's Build Your Website"
      ctaDescription="Get a professional website that grows your business. Free consultation and quote from EASYIO Technologies."
    />
  );
}


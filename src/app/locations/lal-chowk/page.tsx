import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Lal Chowk | IT Services Lal Chowk Srinagar",
  description: "Best software company in Lal Chowk, Srinagar. Web development, app development, ERP software near Lal Chowk. EASYIO Technologies - IT company serving Lal Chowk businesses.",
  keywords: "software company in lal chowk, it company lal chowk, web development lal chowk, app development lal chowk, erp software lal chowk srinagar",
  openGraph: {
    title: "Software Company in Lal Chowk | IT Services Lal Chowk Srinagar",
    description: "Best software company in Lal Chowk, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/lal-chowk`,
  },
  alternates: { canonical: `${siteUrl}/locations/lal-chowk` },
};

const services = [
  { title: "Web Development", description: "Custom websites for Lal Chowk businesses", href: "/services/web-development-company-kashmir" },
  { title: "Mobile Apps", description: "Android & iOS apps for your business", href: "/services/mobile-app-development-kashmir" },
  { title: "ERP Software", description: "Enterprise solutions for businesses", href: "/services/erp-software-kashmir" },
  { title: "E-commerce", description: "Online stores for Lal Chowk retailers", href: "/services/ecommerce-website-development-kashmir" },
];

export default function LalChowkPage() {
  return (
    <LocalityPageTemplate
      localityName="Lal Chowk"
      localitySlug="lal-chowk"
      pincode="190001"
      nearbyAreas={["Residency Road", "Amira Kadal", "Maharaj Gunj", "Polo View", "Dalgate", "Karan Nagar"]}
      services={services}
      description="EASYIO Technologies proudly serves businesses in Lal Chowk, the commercial heart of Srinagar. Whether you run a retail shop, restaurant, or professional service, we provide complete software solutions including websites, mobile apps, ERP systems, and digital marketing services."
    />
  );
}


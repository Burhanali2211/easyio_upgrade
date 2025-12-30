import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Bemina | IT Services Bemina Srinagar",
  description: "Best software company in Bemina, Srinagar. Web development, app development, ERP software near Bemina. EASYIO Technologies - IT company serving Bemina J&K.",
  keywords: "software company in bemina, it company bemina, web development bemina, erp software developers bemina srinagar",
  openGraph: {
    title: "Software Company in Bemina | IT Services Srinagar",
    description: "Best software company in Bemina, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/bemina`,
  },
  alternates: { canonical: `${siteUrl}/locations/bemina` },
};

const services = [
  { title: "Web Development", description: "Websites for Bemina businesses", href: "/services/web-development-company-kashmir" },
  { title: "Mobile Apps", description: "Android & iOS applications", href: "/services/mobile-app-development-kashmir" },
  { title: "ERP Software", description: "Business management solutions", href: "/services/erp-software-kashmir" },
  { title: "School Software", description: "Education management systems", href: "/services/school-erp-software-kashmir" },
];

export default function BeminaPage() {
  return (
    <LocalityPageTemplate
      localityName="Bemina"
      localitySlug="bemina"
      pincode="190018"
      nearbyAreas={["Batamaloo", "Parimpora", "Qamarwari", "Tengpora", "Chattabal"]}
      services={services}
      description="EASYIO Technologies serves the growing business community of Bemina with comprehensive software solutions. We help local enterprises, educational institutions, and commercial establishments with modern digital tools and applications."
    />
  );
}


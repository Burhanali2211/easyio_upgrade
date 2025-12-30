import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Batamaloo | IT Services Batamaloo Srinagar",
  description: "Best software company in Batamaloo, Srinagar. Web development, app development, ERP software near Batamaloo. EASYIO Technologies - IT company J&K.",
  keywords: "software company in batamaloo, it company batamaloo, web development batamaloo, software developers batamaloo srinagar",
  openGraph: {
    title: "Software Company in Batamaloo | IT Services Srinagar",
    description: "Best software company in Batamaloo, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/batamaloo`,
  },
  alternates: { canonical: `${siteUrl}/locations/batamaloo` },
};

const services = [
  { title: "Web Development", description: "Websites for Batamaloo businesses", href: "/services/web-development-company-kashmir" },
  { title: "Mobile Apps", description: "Android & iOS app development", href: "/services/mobile-app-development-kashmir" },
  { title: "Retail Software", description: "POS and billing for shops", href: "/services/pos-software-srinagar" },
  { title: "Inventory Management", description: "Stock management solutions", href: "/services/erp-modules/inventory-management-kashmir" },
];

export default function BatamalooPage() {
  return (
    <LocalityPageTemplate
      localityName="Batamaloo"
      localitySlug="batamaloo"
      pincode="190009"
      nearbyAreas={["Tengpora", "Chanapora", "Natipora", "Bemina", "Lal Chowk"]}
      services={services}
      description="EASYIO Technologies serves the vibrant business community of Batamaloo with affordable software solutions. From retail shops to small businesses, we help Batamaloo enterprises go digital with websites, mobile apps, and business management software."
    />
  );
}


import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company Near Me Srinagar | IT Services Near Me Kashmir",
  description: "Looking for software company near me in Srinagar? EASYIO Technologies provides web development, app development, ERP software across all Srinagar localities. Best IT company near you in Kashmir.",
  keywords: "software company near me, software company near me in srinagar, it company near me, web developer near me, software developers near me srinagar, it company near me srinagar",
  openGraph: {
    title: "Software Company Near Me Srinagar | IT Services Near Me Kashmir",
    description: "Best software company near you in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/software-company-near-me-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/locations/software-company-near-me-srinagar` },
};

const services = [
  { title: "Web Development", description: "Websites for local businesses", href: "/services/web-development-company-kashmir" },
  { title: "Mobile Apps", description: "Android & iOS applications", href: "/services/mobile-app-development-kashmir" },
  { title: "ERP Software", description: "Business management solutions", href: "/services/erp-software-kashmir" },
  { title: "E-commerce", description: "Online stores for Kashmir", href: "/services/ecommerce-website-development-kashmir" },
];

export default function SoftwareCompanyNearMeSrinagarPage() {
  return (
    <LocalityPageTemplate
      localityName="All of Srinagar"
      localitySlug="software-company-near-me-srinagar"
      pincode="190001-190025"
      nearbyAreas={["Lal Chowk", "Karan Nagar", "Raj Bagh", "Batamaloo", "Nowgam", "Dalgate", "Bemina", "Jawahar Nagar", "Sanat Nagar", "Hyderpora", "Rainawari", "Hazratbal"]}
      services={services}
      description="Looking for a software company near you in Srinagar? EASYIO Technologies serves businesses across all localities in Srinagar and Kashmir. Whether you're in Lal Chowk, Karan Nagar, Raj Bagh, or any other area, we're your local software partner with on-site support."
    />
  );
}


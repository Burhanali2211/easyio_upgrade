import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Web Developer Near Me Srinagar | Website Development Near Me Kashmir",
  description: "Looking for web developer near me in Srinagar? EASYIO Technologies provides professional website development across all Srinagar localities. Best website designers near you in Kashmir.",
  keywords: "web developer near me, website development near me, web developer near me srinagar, website designer near me kashmir, web development near me srinagar",
  openGraph: {
    title: "Web Developer Near Me Srinagar | Website Development Near Me Kashmir",
    description: "Best web developer near you in Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/web-developer-near-me-srinagar`,
  },
  alternates: { canonical: `${siteUrl}/locations/web-developer-near-me-srinagar` },
};

const services = [
  { title: "Custom Websites", description: "Bespoke website development", href: "/services/web-development-company-kashmir" },
  { title: "E-commerce Sites", description: "Online stores and shops", href: "/services/ecommerce-website-development-kashmir" },
  { title: "WordPress Development", description: "WordPress websites", href: "/services/wordpress-development-srinagar" },
  { title: "Website Maintenance", description: "Ongoing support services", href: "/services/website-maintenance-srinagar" },
];

export default function WebDeveloperNearMeSrinagarPage() {
  return (
    <LocalityPageTemplate
      localityName="All of Srinagar"
      localitySlug="web-developer-near-me-srinagar"
      pincode="190001-190025"
      nearbyAreas={["Lal Chowk", "Karan Nagar", "Raj Bagh", "Batamaloo", "Nowgam", "Dalgate", "Bemina", "Jawahar Nagar", "Sanat Nagar"]}
      services={services}
      description="Need a web developer near you in Srinagar? EASYIO Technologies is the leading web development company serving all localities in Srinagar and Kashmir. From responsive websites to e-commerce stores, we deliver professional web solutions with local support."
    />
  );
}


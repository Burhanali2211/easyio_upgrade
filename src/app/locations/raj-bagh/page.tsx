import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Raj Bagh | IT Services Raj Bagh Srinagar",
  description: "Best software company in Raj Bagh, Srinagar. Web development, app development, ERP software near Raj Bagh. EASYIO Technologies - IT company J&K.",
  keywords: "software company in raj bagh, it company raj bagh, web development raj bagh, erp software developers raj bagh srinagar",
  openGraph: {
    title: "Software Company in Raj Bagh | IT Services Srinagar",
    description: "Best software company in Raj Bagh, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/raj-bagh`,
  },
  alternates: { canonical: `${siteUrl}/locations/raj-bagh` },
};

const services = [
  { title: "Web Development", description: "Professional websites for Raj Bagh businesses", href: "/services/web-development-company-kashmir" },
  { title: "Mobile Apps", description: "Custom mobile applications", href: "/services/mobile-app-development-kashmir" },
  { title: "ERP Software", description: "Business management solutions", href: "/services/erp-software-kashmir" },
  { title: "E-commerce", description: "Online stores and marketplaces", href: "/services/ecommerce-website-development-kashmir" },
];

export default function RajBaghPage() {
  return (
    <LocalityPageTemplate
      localityName="Raj Bagh"
      localitySlug="raj-bagh"
      pincode="190008"
      nearbyAreas={["Sonwar", "Dalgate", "Gogji Bagh", "Wazir Bagh", "Jawahar Nagar"]}
      services={services}
      description="EASYIO Technologies provides premium software development services to businesses in Raj Bagh, one of Srinagar's prime residential and commercial areas. Our solutions help local businesses establish strong digital presence and streamline operations."
    />
  );
}


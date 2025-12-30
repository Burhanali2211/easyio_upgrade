import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Nowgam | IT Services Nowgam Srinagar",
  description: "Best software company in Nowgam, Srinagar. Web development, app development, ERP software near Nowgam. EASYIO Technologies - IT company serving Nowgam businesses.",
  keywords: "software company in nowgam, it company nowgam, web development nowgam, software developers nowgam srinagar",
  openGraph: {
    title: "Software Company in Nowgam | IT Services Srinagar",
    description: "Best software company in Nowgam, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/nowgam`,
  },
  alternates: { canonical: `${siteUrl}/locations/nowgam` },
};

const services = [
  { title: "Web Development", description: "Websites for Nowgam businesses", href: "/services/web-development-company-kashmir" },
  { title: "Mobile Apps", description: "Custom mobile applications", href: "/services/mobile-app-development-kashmir" },
  { title: "School ERP", description: "School management software", href: "/services/school-erp-software-kashmir" },
  { title: "E-commerce", description: "Online stores for local businesses", href: "/services/ecommerce-website-development-kashmir" },
];

export default function NowgamPage() {
  return (
    <LocalityPageTemplate
      localityName="Nowgam"
      localitySlug="nowgam"
      pincode="190015"
      nearbyAreas={["Hyderpora", "Chanpora", "Rawalpora", "Bemina", "Parimpora"]}
      services={services}
      description="EASYIO Technologies extends its software services to Nowgam and surrounding areas. We help local businesses, schools, and enterprises digitize their operations with modern software solutions tailored for the growing Nowgam market."
    />
  );
}


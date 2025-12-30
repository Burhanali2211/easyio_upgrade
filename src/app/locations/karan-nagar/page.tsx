import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Karan Nagar | IT Services Karan Nagar Srinagar",
  description: "Best software company in Karan Nagar, Srinagar. Web development, app development, ERP software near Karan Nagar. EASYIO Technologies - IT company J&K.",
  keywords: "software company in karan nagar, it company karan nagar, web development karan nagar, software developers karan nagar srinagar",
  openGraph: {
    title: "Software Company in Karan Nagar | IT Services Srinagar",
    description: "Best software company in Karan Nagar, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/karan-nagar`,
  },
  alternates: { canonical: `${siteUrl}/locations/karan-nagar` },
};

const services = [
  { title: "Web Development", description: "Custom websites for Karan Nagar businesses", href: "/services/web-development-company-kashmir" },
  { title: "Mobile Apps", description: "Android & iOS apps for your business", href: "/services/mobile-app-development-kashmir" },
  { title: "Hospital Software", description: "HMS for clinics near Karan Nagar", href: "/services/hospital-management-software-kashmir" },
  { title: "School ERP", description: "School management for education sector", href: "/services/school-erp-software-kashmir" },
];

export default function KaranNagarPage() {
  return (
    <LocalityPageTemplate
      localityName="Karan Nagar"
      localitySlug="karan-nagar"
      pincode="190010"
      nearbyAreas={["Jawahar Nagar", "Lal Chowk", "Shivpora", "Rainawari", "Amirakadal"]}
      services={services}
      description="EASYIO Technologies serves businesses in Karan Nagar with comprehensive software solutions. From healthcare facilities to educational institutions, we provide specialized software including hospital management, school ERP, and custom web applications."
    />
  );
}


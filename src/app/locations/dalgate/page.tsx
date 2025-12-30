import type { Metadata } from "next";
import LocalityPageTemplate from "@/components/services/LocalityPageTemplate";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";

export const metadata: Metadata = {
  title: "Software Company in Dalgate | IT Services Dalgate Srinagar",
  description: "Best software company in Dalgate, Srinagar. Web development, app development, hotel software near Dalgate. EASYIO Technologies - IT company serving Dalgate tourism businesses.",
  keywords: "software company in dalgate, it company dalgate, web development dalgate, hotel software dalgate srinagar",
  openGraph: {
    title: "Software Company in Dalgate | IT Services Srinagar",
    description: "Best software company in Dalgate, Srinagar by EASYIO Technologies.",
    url: `${siteUrl}/locations/dalgate`,
  },
  alternates: { canonical: `${siteUrl}/locations/dalgate` },
};

const services = [
  { title: "Web Development", description: "Tourism & business websites", href: "/services/web-development-company-kashmir" },
  { title: "Hotel Software", description: "Hotel management systems", href: "/services/hotel-management-software-kashmir" },
  { title: "Booking Apps", description: "Reservation and booking apps", href: "/services/booking-app-development-srinagar" },
  { title: "E-commerce", description: "Online handicraft stores", href: "/services/ecommerce-website-development-kashmir" },
];

export default function DalgatePage() {
  return (
    <LocalityPageTemplate
      localityName="Dalgate"
      localitySlug="dalgate"
      pincode="190001"
      nearbyAreas={["Boulevard", "Dal Lake", "Raj Bagh", "Sonwar", "Lal Chowk"]}
      services={services}
      description="EASYIO Technologies serves the tourism hub of Dalgate with specialized software solutions. From hotel management systems to booking apps and e-commerce platforms for handicrafts, we help Dalgate businesses thrive in the digital age."
    />
  );
}


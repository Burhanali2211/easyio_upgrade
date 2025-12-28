import Script from "next/script";
import { locationData, companyInfo, serviceCategories, faqData, socialProfiles } from "@/lib/seo/seoOptimization";

interface ComprehensiveSEOProps {
  canonicalUrl?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function ComprehensiveSEO({
  canonicalUrl = "https://easyio.tech",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: ComprehensiveSEOProps) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: companyInfo.website,
    logo: `${companyInfo.website}/logo.png`,
    description: companyInfo.description,
    foundingDate: companyInfo.foundingDate,
    numberOfEmployees: companyInfo.employees,
    industry: companyInfo.industry,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: locationData.telephone,
      contactType: "Customer Service",
      email: locationData.email,
      areaServed: locationData.areaServed,
      availableLanguage: ["English", "Hindi", "Urdu", "Kashmiri"],
    },
    sameAs: [
      socialProfiles.facebook,
      socialProfiles.twitter,
      socialProfiles.linkedin,
      socialProfiles.instagram,
      socialProfiles.youtube,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address.streetAddress,
      addressLocality: locationData.address.addressLocality,
      addressRegion: locationData.address.addressRegion,
      postalCode: locationData.address.postalCode,
      addressCountry: locationData.address.addressCountry,
    },
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${companyInfo.website}#localbusiness`,
    name: companyInfo.name,
    image: `${companyInfo.website}/logo.png`,
    description: companyInfo.description,
    url: companyInfo.website,
    telephone: locationData.telephone,
    email: locationData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address.streetAddress,
      addressLocality: locationData.address.addressLocality,
      addressRegion: locationData.address.addressRegion,
      postalCode: locationData.address.postalCode,
      addressCountry: locationData.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.geo.latitude,
      longitude: locationData.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: locationData.areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Client Review",
        },
        datePublished: "2024-01-15",
        reviewBody:
          "EASYIO Technologies delivered exceptional software solutions. Highly recommended!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  // ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: companyInfo.name,
    description: companyInfo.description,
    url: companyInfo.website,
    image: `${companyInfo.website}/logo.png`,
    telephone: locationData.telephone,
    email: locationData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address.streetAddress,
      addressLocality: locationData.address.addressLocality,
      addressRegion: locationData.address.addressRegion,
      postalCode: locationData.address.postalCode,
      addressCountry: locationData.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.geo.latitude,
      longitude: locationData.geo.longitude,
    },
    areaServed: locationData.areaServed,
    serviceType: serviceCategories.map((cat) => cat.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: serviceCategories.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: companyInfo.website,
    description: companyInfo.description,
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${companyInfo.website}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // BreadcrumbList Schema (example)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: companyInfo.website,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Current Page",
        item: canonicalUrl,
      },
    ],
  };

  // Article Schema (if type is article)
  const articleSchema =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: companyInfo.name,
          description: companyInfo.description,
          image: `${companyInfo.website}/og-image.jpg`,
          datePublished: publishedTime,
          dateModified: modifiedTime || publishedTime,
          author: {
            "@type": "Person",
            name: author || companyInfo.name,
          },
          publisher: {
            "@type": "Organization",
            name: companyInfo.name,
            logo: {
              "@type": "ImageObject",
              url: `${companyInfo.website}/logo.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
          articleSection: section,
          keywords: tags.join(", "),
        }
      : null;

  return (
    <>
      {/* Structured Data - JSON-LD */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {articleSchema && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      )}
    </>
  );
}

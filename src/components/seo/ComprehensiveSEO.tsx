import Script from "next/script";
import { locationData, companyInfo, serviceCategories, faqData, socialProfiles } from "@/lib/seo/seoOptimization";

interface ComprehensiveSEOProps {
  canonicalUrl?: string;
  type?: "website" | "article" | "service" | "pricing";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function ComprehensiveSEO({
  canonicalUrl = "https://easyio.tech",
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  serviceName,
  serviceDescription,
  breadcrumbs,
}: ComprehensiveSEOProps) {
  // Organization Schema - Enhanced
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${companyInfo.website}#organization`,
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: companyInfo.website,
    logo: {
      "@type": "ImageObject",
      url: `${companyInfo.website}/logo.png`,
      width: 512,
      height: 512,
    },
    description: companyInfo.description,
    foundingDate: companyInfo.foundingDate,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: companyInfo.employees,
    },
    industry: companyInfo.industry,
    slogan: "Best Software Company in Kashmir",
    knowsAbout: [
      "Web Development",
      "Mobile App Development",
      "ERP Software",
      "Custom Software Development",
      "E-commerce Development",
      "SEO Services",
      "Digital Transformation",
      "School Management Systems",
      "Hospital Management Software",
      "Hotel Management Software",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: locationData.telephone,
        contactType: "customer service",
        email: locationData.email,
        areaServed: locationData.areaServed,
        availableLanguage: ["English", "Hindi", "Urdu", "Kashmiri"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      },
      {
        "@type": "ContactPoint",
        telephone: locationData.telephone,
        contactType: "sales",
        email: locationData.email,
        areaServed: locationData.areaServed,
        availableLanguage: ["English", "Hindi", "Urdu", "Kashmiri"],
      },
      {
        "@type": "ContactPoint",
        telephone: locationData.telephone,
        contactType: "technical support",
        email: locationData.email,
        areaServed: locationData.areaServed,
        availableLanguage: ["English", "Hindi", "Urdu", "Kashmiri"],
      },
    ],
    sameAs: [
      socialProfiles.facebook,
      socialProfiles.twitter,
      socialProfiles.linkedin,
      socialProfiles.instagram,
      socialProfiles.youtube,
    ].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address.streetAddress,
      addressLocality: locationData.address.addressLocality,
      addressRegion: locationData.address.addressRegion,
      postalCode: locationData.address.postalCode,
      addressCountry: locationData.address.addressCountry,
    },
  };

  // LocalBusiness Schema - Enhanced with multiple service areas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SoftwareCompany"],
    "@id": `${companyInfo.website}#localbusiness`,
    name: companyInfo.name,
    alternateName: ["EASYIO Technologies", "EASYIO Tech", "EASYIO Kashmir", "EASYIO Srinagar"],
    image: [
      `${companyInfo.website}/logo.png`,
      `${companyInfo.website}/og-image.jpg`,
    ],
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    areaServed: [
      // Srinagar Localities
      { "@type": "City", name: "Srinagar", containedInPlace: { "@type": "State", name: "Jammu and Kashmir" } },
      { "@type": "Place", name: "Lal Chowk, Srinagar" },
      { "@type": "Place", name: "Karan Nagar, Srinagar" },
      { "@type": "Place", name: "Raj Bagh, Srinagar" },
      { "@type": "Place", name: "Batamaloo, Srinagar" },
      { "@type": "Place", name: "Nowgam, Srinagar" },
      { "@type": "Place", name: "Dalgate, Srinagar" },
      { "@type": "Place", name: "Bemina, Srinagar" },
      { "@type": "Place", name: "Jawahar Nagar, Srinagar" },
      { "@type": "Place", name: "Sanat Nagar, Srinagar" },
      // Broader Regions
      { "@type": "State", name: "Jammu and Kashmir" },
      { "@type": "State", name: "Kashmir" },
      { "@type": "Country", name: "India" },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: ["Cash", "Bank Transfer", "UPI", "Credit Card", "Debit Card"],
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
        author: { "@type": "Person", name: "Mohammad Iqbal" },
        datePublished: "2024-01-15",
        reviewBody: "EASYIO Technologies delivered exceptional ERP software for our school in Srinagar. The team was professional and responsive throughout the project. Highly recommended for any business in Kashmir!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Fayaz Ahmad" },
        datePublished: "2024-02-20",
        reviewBody: "Best web development company in Kashmir! They built our e-commerce website with great attention to detail. The website is fast, SEO-optimized, and looks amazing.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Showkat Ali" },
        datePublished: "2024-03-10",
        reviewBody: "Excellent mobile app development services. EASYIO Technologies created a booking app for our hotel in Srinagar. Very satisfied with their work!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: serviceCategories.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          provider: { "@type": "Organization", name: companyInfo.name },
          areaServed: { "@type": "State", name: "Jammu and Kashmir" },
          serviceType: service.name,
        },
      })),
    },
  };

  // ProfessionalService Schema - Enhanced
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${companyInfo.website}#professionalservice`,
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

  // Individual Service Schemas for each service category
  const serviceSchemas = serviceCategories.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${companyInfo.website}/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: companyInfo.name,
      url: companyInfo.website,
    },
    areaServed: [
      { "@type": "City", name: "Srinagar" },
      { "@type": "State", name: "Kashmir" },
      { "@type": "State", name: "Jammu and Kashmir" },
    ],
    serviceType: service.name,
    termsOfService: `${companyInfo.website}/terms`,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${companyInfo.website}/contact`,
      servicePhone: locationData.telephone,
      serviceSmsNumber: locationData.telephone,
    },
  }));

  // Website Schema - Enhanced
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${companyInfo.website}#website`,
    name: companyInfo.name,
    alternateName: "EASYIO Technologies",
    url: companyInfo.website,
    description: companyInfo.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
      "@id": `${companyInfo.website}#organization`,
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${companyInfo.website}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "ContactAction",
        target: `${companyInfo.website}/contact`,
        name: "Contact Us",
      },
    ],
  };

  // FAQ Schema - Enhanced
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${companyInfo.website}#faq`,
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // BreadcrumbList Schema - Dynamic
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs
      ? breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        }))
      : [
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

  // HowTo Schema for getting a quote
  const howToGetQuoteSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get a Free Software Development Quote in Kashmir",
    description: "Follow these simple steps to get a free quote for your software project from EASYIO Technologies, the best software company in Kashmir.",
    image: `${companyInfo.website}/og-image.jpg`,
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "0",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Visit our Get Quote page",
        text: "Go to our Get Quote page at easyio.tech/get-quote to start the process.",
        url: `${companyInfo.website}/get-quote`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Fill out your project details",
        text: "Provide your name, email, phone number, and describe your software requirements including the type of service needed (web development, app development, ERP, etc.).",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Select your budget and timeline",
        text: "Choose your estimated budget range and preferred project timeline to help us prepare an accurate quote.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Submit and receive quote",
        text: "Submit your request and receive a detailed proposal with cost breakdown within 24 hours. Free consultation call included!",
      },
    ],
  };

  // Offer Schema for pricing pages
  const offerSchema = type === "pricing" ? {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: serviceName || "Software Development Services",
    description: serviceDescription || "Professional software development services in Kashmir including web development, app development, and ERP solutions.",
    seller: {
      "@type": "Organization",
      name: companyInfo.name,
    },
    areaServed: [
      { "@type": "City", name: "Srinagar" },
      { "@type": "State", name: "Kashmir" },
      { "@type": "State", name: "Jammu and Kashmir" },
    ],
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "INR",
      eligibleRegion: { "@type": "Country", name: "India" },
    },
  } : null;

  // Specific Service Schema for service pages
  const specificServiceSchema = type === "service" && serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: companyInfo.name,
      url: companyInfo.website,
      logo: `${companyInfo.website}/logo.png`,
    },
    areaServed: [
      { "@type": "City", name: "Srinagar" },
      { "@type": "State", name: "Kashmir" },
      { "@type": "State", name: "Jammu and Kashmir" },
      { "@type": "Country", name: "India" },
    ],
    serviceType: serviceName,
    serviceOutput: "Custom Software Solution",
    termsOfService: `${companyInfo.website}/terms`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${serviceName} Packages`,
      itemListElement: [
        {
          "@type": "Offer",
          name: "Basic Package",
          description: `Basic ${serviceName} package for small businesses`,
        },
        {
          "@type": "Offer",
          name: "Standard Package",
          description: `Standard ${serviceName} package with additional features`,
        },
        {
          "@type": "Offer",
          name: "Premium Package",
          description: `Premium ${serviceName} package with full customization`,
        },
      ],
    },
  } : null;

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
            name: author || "EASYIO Technologies Team",
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

  // Aggregate Services Schema
  const aggregateServicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Services in Kashmir",
    description: "Complete list of software development services offered by EASYIO Technologies in Kashmir and Srinagar",
    numberOfItems: serviceCategories.length,
    itemListElement: serviceCategories.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: companyInfo.name,
        },
      },
    })),
  };

  return (
    <>
      {/* Core Structured Data - JSON-LD */}
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
      <Script
        id="howto-quote-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToGetQuoteSchema),
        }}
      />
      <Script
        id="aggregate-services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateServicesSchema),
        }}
      />
      
      {/* Individual Service Schemas */}
      {serviceSchemas.map((schema, index) => (
        <Script
          key={`service-schema-${index}`}
          id={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      
      {/* Conditional Schemas */}
      {articleSchema && (
        <Script
          id="article-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      )}
      {specificServiceSchema && (
        <Script
          id="specific-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(specificServiceSchema),
          }}
        />
      )}
      {offerSchema && (
        <Script
          id="offer-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(offerSchema),
          }}
        />
      )}
    </>
  );
}

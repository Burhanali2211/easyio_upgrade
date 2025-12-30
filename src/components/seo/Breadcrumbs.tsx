"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Script from "next/script";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://easyio.tech";
  
  // Prepare breadcrumb items with Home
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    ...items,
  ];

  // Generate JSON-LD structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="breadcrumb-schema-nav"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Visible Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className={`py-3 border-b border-border/50 ${className}`}
      >
        <div className="container">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              const isHome = index === 0;
              
              return (
                <li key={item.href} className="flex items-center">
                  {index > 0 && (
                    <ChevronRight className="h-4 w-4 text-muted-foreground mx-1" />
                  )}
                  
                  {isLast ? (
                    <span className="text-foreground font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {isHome && <Home className="h-3.5 w-3.5" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}


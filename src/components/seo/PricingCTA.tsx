"use client";

import Link from "next/link";
import { Calculator, ArrowRight, FileText } from "lucide-react";

interface PricingCTAProps {
  serviceType?: "web" | "app" | "erp" | "ecommerce" | "general";
  title?: string;
}

const pricingLinks = {
  web: {
    title: "Website Development Pricing",
    href: "/pricing/website-development-cost-srinagar",
    description: "Get transparent pricing for website development in Kashmir",
  },
  app: {
    title: "App Development Pricing",
    href: "/pricing/app-development-cost-srinagar",
    description: "Mobile app development cost breakdown for Srinagar businesses",
  },
  erp: {
    title: "ERP Software Pricing",
    href: "/pricing/erp-software-cost-kashmir",
    description: "ERP software pricing and implementation costs",
  },
  ecommerce: {
    title: "E-commerce Website Pricing",
    href: "/pricing/ecommerce-website-cost-kashmir",
    description: "E-commerce development pricing for online stores",
  },
  general: {
    title: "Software Development Pricing",
    href: "/get-quote",
    description: "Get a custom quote for your software project",
  },
};

export default function PricingCTA({
  serviceType = "general",
  title = "Get Transparent Pricing",
}: PricingCTAProps) {
  const pricing = pricingLinks[serviceType];

  return (
    <section className="py-12 bg-gradient-to-r from-primary/5 via-background to-accent/5 border-y border-border/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            {title}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {pricing.title}
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {pricing.description}. We offer competitive pricing with no hidden costs. 
            Free consultation and detailed proposal included.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={pricing.href}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View Pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/30 font-medium hover:text-primary transition-all"
            >
              <FileText className="h-4 w-4" />
              Get Free Quote
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              ✓ No Hidden Costs
            </span>
            <span className="flex items-center gap-2">
              ✓ Free Consultation
            </span>
            <span className="flex items-center gap-2">
              ✓ 24-Hour Response
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


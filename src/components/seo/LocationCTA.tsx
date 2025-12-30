"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

interface LocationCTAProps {
  currentLocation?: string;
  title?: string;
  showAllLocations?: boolean;
}

const locations = [
  { name: "Lal Chowk", href: "/locations/lal-chowk" },
  { name: "Karan Nagar", href: "/locations/karan-nagar" },
  { name: "Raj Bagh", href: "/locations/raj-bagh" },
  { name: "Batamaloo", href: "/locations/batamaloo" },
  { name: "Nowgam", href: "/locations/nowgam" },
  { name: "Dalgate", href: "/locations/dalgate" },
  { name: "Bemina", href: "/locations/bemina" },
  { name: "Jawahar Nagar", href: "/locations/jawahar-nagar" },
  { name: "Sanat Nagar", href: "/locations/sanat-nagar" },
];

export default function LocationCTA({
  currentLocation,
  title = "Software Company Near You in Srinagar",
  showAllLocations = true,
}: LocationCTAProps) {
  const filteredLocations = currentLocation
    ? locations.filter((loc) => loc.name !== currentLocation)
    : locations;

  return (
    <section className="py-12 bg-accent/20 border-y border-border/50">
      <div className="container">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        
        <p className="text-muted-foreground mb-6 max-w-2xl">
          EASYIO Technologies serves businesses across all localities in Srinagar, Kashmir. 
          Find our software development, web development, and IT services near you.
        </p>

        {showAllLocations && (
          <div className="flex flex-wrap gap-3 mb-6">
            {filteredLocations.slice(0, 6).map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="px-4 py-2 rounded-lg bg-background border border-border hover:border-primary/30 text-sm font-medium hover:text-primary transition-all"
              >
                {location.name}
              </Link>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          <Link
            href="/locations/software-company-near-me-srinagar"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <MapPin className="h-4 w-4" />
            Find Nearest Office
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:border-primary/30 font-medium hover:text-primary transition-all"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}


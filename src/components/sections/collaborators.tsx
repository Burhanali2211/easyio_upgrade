"use client";

import React, { memo, useMemo } from 'react';
import { Building2 } from 'lucide-react';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  logo_url?: string;
}

interface CollaboratorsProps {
  partners?: Partner[];
}

const Collaborators = memo(({ partners = [] }: CollaboratorsProps) => {
  const duplicatedPartners = useMemo(() => [...partners, ...partners], [partners]);

  return (
    <section className="relative w-full bg-background py-10 sm:py-16 overflow-hidden border-y border-border z-10">
      <div className="container mx-auto relative z-10 mb-6 sm:mb-8">
        <div className="text-center lg:text-left">
          <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary mb-2 block">
            Ecosystem Partners
          </span>
          <h2 className="text-lg sm:text-xl font-display font-bold text-foreground">
            Trusted by Industry Leaders
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background dark:from-[#020202] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background dark:from-[#020202] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee-mobile sm:animate-marquee whitespace-nowrap will-change-transform">
          {duplicatedPartners.map((partner, index) => {
            return (
              <div 
                key={`${partner.id}-${index}`}
                className="flex items-center justify-center flex-shrink-0 mx-4 sm:mx-10 opacity-60 hover:opacity-100 transition-opacity"
              >
                {partner.logo_url ? (
                  <Image
                    src={partner.logo_url}
                    alt={partner.name}
                    width={80}
                    height={24}
                    className="h-5 sm:h-6 w-auto object-contain grayscale"
                    style={{ filter: 'grayscale(100%)' }}
                    unoptimized
                  />
                ) : (
                  <Building2 size={20} className="sm:w-6 sm:h-6 opacity-50 grayscale" strokeWidth={1.5} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Collaborators.displayName = 'Collaborators';

export default Collaborators;

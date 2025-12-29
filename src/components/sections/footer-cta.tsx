import React from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * FooterCTA Component
 * 
 * Renders the "Let's Work Together" section featuring two large interactive cards
 * for Sponsorships and Creative Work, followed by social links and copyright.
 */
export default function FooterCTA() {
  return (
    <footer className="w-full bg-[#03030b] border-t border-white/10 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24">
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Let’s Work Together
          </h2>
          <p className="text-[#999999] text-base md:text-lg font-sans leading-relaxed">
            We're open to collaborations and sponsorships, as well as creative work opportunities. 
            With our experience in UX/UI, web and graphic design, we're ready to bring your 
            project to life. Contact us today to get started!
          </p>
        </div>

        {/* CTA Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 mb-20">
          {/* Sponsorship Card */}
          <a 
            href="mailto:contact@designsense.io" 
            className="group relative flex flex-col justify-end min-h-[400px] p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-colors duration-300"
          >
            <div className="absolute top-10 right-10 md:top-12 md:right-12">
              <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15] pb-2 max-w-[280px] md:max-w-xs transition-colors group-hover:text-primary">
              Strategic Alliances & Power Partnerships
            </h4>
          </a>

          {/* Hire Us Card */}
          <a 
            href="/contact" 
            className="group relative flex flex-col justify-end min-h-[400px] p-10 md:p-12 hover:bg-white/[0.02] transition-colors duration-300"
          >
            <div className="absolute top-10 right-10 md:top-12 md:right-12">
              <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[1.15] pb-2 max-w-[280px] md:max-w-xs transition-colors group-hover:text-primary">
              Deploy The Elite For Your Mission
            </h4>
          </a>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
            <a 
              href="https://facebook.com/designsense" 
              className="group flex items-center text-sm font-sans font-medium text-white hover:text-primary transition-colors uppercase tracking-wider"
            >
              Facebook
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </a>
            <a 
              href="https://youtube.com/@DesignSense" 
              className="group flex items-center text-sm font-sans font-medium text-white hover:text-primary transition-colors uppercase tracking-wider"
            >
              Youtube
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </a>
            <a 
              href="https://dribbble.com/DesignSense" 
              className="group flex items-center text-sm font-sans font-medium text-white hover:text-primary transition-colors uppercase tracking-wider"
            >
              Dribbble
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-[#999999] text-sm font-sans">
            Copyright © 2024 DesignSense | All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
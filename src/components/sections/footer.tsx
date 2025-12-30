"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Logo from '@/components/ui/logo';
import { ScrollReveal, StaggerContainer } from "@/components/ScrollReveal";

type FooterLink = 
  | { name: string; href: string }
  | { name: string; href: string; external: boolean; icon: React.ReactElement };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks: Array<{
    title: string;
    links: FooterLink[];
  }> = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services/web-development-company-kashmir" },
        { name: "App Development", href: "/services/mobile-app-development-kashmir" },
        { name: "ERP Solutions", href: "/services/erp-software-kashmir" },
        { name: "School ERP", href: "/services/school-erp-software-kashmir" },
        { name: "Hospital Software", href: "/services/hospital-management-software-kashmir" },
        { name: "E-commerce", href: "/services/ecommerce-website-development-kashmir" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Quantum ERP", href: "/erp" },
        { name: "Neural Engines", href: "/solutions" },
        { name: "SEO Services", href: "/services/seo-services-srinagar" },
        { name: "WordPress", href: "/services/wordpress-development-srinagar" },
        { name: "React/Next.js", href: "/services/next-js-development-kashmir" },
        { name: "All Services", href: "/solutions" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/ourteam" },
        { name: "Our Work", href: "/ourwork" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Get Quote", href: "/get-quote" },
        { name: "Pricing", href: "/pricing/website-development-cost-srinagar" },
        { name: "Innovation Labs", href: "/courses" },
        { name: "The Forge", href: "/programs" },
      ]
    },
  ];

  const serviceLocations = [
    { name: "Lal Chowk", href: "/locations/lal-chowk" },
    { name: "Karan Nagar", href: "/locations/karan-nagar" },
    { name: "Raj Bagh", href: "/locations/raj-bagh" },
    { name: "Bemina", href: "/locations/bemina" },
    { name: "Dalgate", href: "/locations/dalgate" },
    { name: "Sanat Nagar", href: "/locations/sanat-nagar" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={18} className="text-[#0A66C2]" /> },
    { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={18} className="text-[#1DA1F2]" /> },
    { name: "GitHub", href: "https://github.com", icon: <Github size={18} className="text-foreground" /> },
  ];

  return (
    <footer className="relative w-full bg-background border-t border-border pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 z-30">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-6 gap-8 sm:gap-10 mb-12 sm:mb-16" staggerDelay={0.1} direction="up">
          {/* Company Info */}
          <ScrollReveal direction="up" delay={0.1}>
            <div className="col-span-2 flex flex-col gap-4 sm:gap-6">
              <Logo className="scale-90 sm:scale-100 origin-left" />
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
                <strong>Best Software Company in Kashmir</strong> - Engineering high-performance web applications, mobile apps, and ERP solutions for businesses across Srinagar and J&K.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary flex-shrink-0" />
                  <span>Srinagar, Kashmir, J&K 190001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-primary flex-shrink-0" />
                  <a href="tel:+919000000000" className="hover:text-foreground transition-colors">+91-9XX-XXX-XXXX</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-primary flex-shrink-0" />
                  <a href="mailto:info@easyio.tech" className="hover:text-foreground transition-colors">info@easyio.tech</a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/10 transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-primary">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2 sm:gap-2.5">
                {group.links.map((link) => {
                  const isExternal = 'external' in link && link.external;
                  
                  return (
                    <li key={link.name}>
                      {isExternal ? (
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group"
                        >
                          {link.name}
                          <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <Link 
                          href={link.href}
                          className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </StaggerContainer>

        {/* Service Locations - SEO Section */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="py-6 sm:py-8 border-t border-border/50">
            <h4 className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-primary mb-4">
              Serving All Srinagar Localities
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {serviceLocations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Software Company {location.name}
                </Link>
              ))}
              <Link
                href="/locations/software-company-near-me-srinagar"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Software Company Near Me
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* SEO Keywords Section */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="py-6 sm:py-8 border-t border-border/50">
            <p className="text-[10px] sm:text-xs text-muted-foreground/60 leading-relaxed max-w-4xl">
              <strong className="text-muted-foreground">EASYIO Technologies</strong> - Best Software Company in Kashmir | Top IT Company Srinagar | Web Development Kashmir | Mobile App Development Srinagar | ERP Software Kashmir | Custom Software Development J&K | E-commerce Website Development | School Management System | Hospital Software | Hotel Management Software | WordPress Development | React.js & Next.js Development | SEO Services Srinagar
            </p>
          </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <p className="text-[10px] sm:text-xs text-muted-foreground font-mono uppercase tracking-wider">
                © {currentYear} EASYIO Technologies - Best Software Company Kashmir
              </p>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-foreground/20" />
              <div className="flex items-center gap-4 sm:gap-6">
                <Link href="/privacy-policy" className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[8px] sm:text-[10px] font-mono font-bold text-primary uppercase tracking-wider">
                System Status: Optimal
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;

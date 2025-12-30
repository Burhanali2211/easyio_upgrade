"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Building,
  Code,
  Smartphone,
  Database
} from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

interface Service {
  title: string;
  description: string;
  href: string;
}

interface LocalityPageTemplateProps {
  localityName: string;
  localitySlug: string;
  pincode: string;
  nearbyAreas: string[];
  services: Service[];
  description: string;
}

export default function LocalityPageTemplate({
  localityName,
  localitySlug,
  pincode,
  nearbyAreas,
  services,
  description,
}: LocalityPageTemplateProps) {
  const serviceIcons = [Code, Smartphone, Database, Building];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] pt-16 lg:pt-0">
        {/* Breadcrumbs */}
        <div className="container py-4 border-b border-border/50">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{localityName}</span>
          </nav>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[100px] rounded-full" />
          </div>
          
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-primary font-medium">Serving {localityName}, Srinagar - {pincode}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best Software Company in {localityName}, Srinagar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/ourwork"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border font-medium rounded-lg hover:bg-accent transition-colors"
                >
                  View Our Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Services Available */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Software Services in {localityName}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                EASYIO Technologies provides comprehensive software development services to businesses in {localityName} and surrounding areas.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const IconComponent = serviceIcons[index % serviceIcons.length];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={service.href}
                      className="block p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-colors h-full"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Businesses in {localityName} Choose EASYIO Technologies
                </h2>
                <p className="text-muted-foreground mb-8">
                  As the leading software company serving {localityName} and all of Srinagar, we understand local business needs and deliver tailored solutions that drive growth.
                </p>
                <ul className="space-y-4">
                  {[
                    `Local presence in Srinagar for quick support`,
                    `Expert developers with 150+ successful projects`,
                    `Affordable solutions for Kashmir businesses`,
                    `On-site support available in ${localityName}`,
                    `24/7 technical support`,
                    `Understanding of local market requirements`,
                    `Multi-language support (English, Urdu, Kashmiri)`,
                    `Proven track record with Kashmir businesses`,
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border/50"
              >
                <h3 className="text-2xl font-bold mb-6">Nearby Service Areas</h3>
                <p className="text-muted-foreground mb-6">
                  We also serve businesses in these areas near {localityName}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-background/50 rounded-full text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <h4 className="font-semibold mb-2">Service Area Code</h4>
                  <p className="text-2xl font-bold text-primary">{pincode}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Project in {localityName}?
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-lg">
                  Get a free consultation and quote from EASYIO Technologies. We're just a call away from {localityName}, Srinagar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
                  >
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    href="/get-quote"
                    className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/30 font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-primary-foreground/10 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <span>+91-XXXXXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span>info@easyio.tech</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <span>Srinagar, Jammu and Kashmir, India</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/70">
                    Proudly serving {localityName} and all localities across Srinagar, Kashmir.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
}


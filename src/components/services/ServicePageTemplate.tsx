"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight 
} from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

interface FAQ {
  question: string;
  answer: string;
}

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ServicePageTemplateProps {
  // Page content
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  
  // Service details
  features: Feature[];
  benefits: string[];
  
  // FAQ section
  faqs: FAQ[];
  
  // Related services
  relatedServices?: {
    title: string;
    href: string;
  }[];
  
  // Breadcrumb
  breadcrumbs: {
    label: string;
    href: string;
  }[];
  
  // CTA
  ctaTitle?: string;
  ctaDescription?: string;
  
  // Keywords for SEO content
  primaryKeyword: string;
  location: string;
}

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  faqs,
  relatedServices = [],
  breadcrumbs,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Contact EASYIO Technologies today for a free consultation and quote.",
  primaryKeyword,
  location,
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] pt-16 lg:pt-0">
        {/* Breadcrumbs */}
        <div className="container py-4 border-b border-border/50">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-foreground">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
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
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                {subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/ourwork"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border font-medium rounded-lg hover:bg-accent transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive {primaryKeyword} services tailored for businesses in {location}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon || <CheckCircle className="h-6 w-6 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose EASYIO Technologies for {primaryKeyword}?
                </h2>
                <p className="text-muted-foreground mb-8">
                  As the best software company in {location}, we deliver exceptional {primaryKeyword.toLowerCase()} solutions 
                  that help businesses grow and succeed in the digital age.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
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
                <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-4xl font-bold text-primary">150+</p>
                    <p className="text-muted-foreground">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">100+</p>
                    <p className="text-muted-foreground">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">4.9/5</p>
                    <p className="text-muted-foreground">Client Rating</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-primary">24/7</p>
                    <p className="text-muted-foreground">Support Available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about {primaryKeyword.toLowerCase()} services in {location}
              </p>
            </motion.div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background rounded-xl border border-border/50 overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <h3 className="font-semibold pr-4">{faq.question}</h3>
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Related Services
                </h2>
                <p className="text-muted-foreground">
                  Explore more software solutions from EASYIO Technologies
                </p>
              </motion.div>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={service.href}
                      className="block p-4 bg-accent/50 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-accent transition-colors"
                    >
                      <span className="font-medium">{service.title}</span>
                      <ArrowRight className="inline-block ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
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
                  {ctaTitle}
                </h2>
                <p className="text-primary-foreground/80 mb-8 max-w-lg">
                  {ctaDescription}
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
                    Request a Quote
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
                    Serving clients across Kashmir including Lal Chowk, Karan Nagar, Raj Bagh, 
                    Bemina, Dalgate, and all of Jammu & Kashmir.
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


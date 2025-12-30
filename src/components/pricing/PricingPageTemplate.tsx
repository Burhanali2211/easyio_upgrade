"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail,
  ChevronRight,
  Star
} from "lucide-react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";

interface PricingTier {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface PricingPageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  pricingTiers: PricingTier[];
  faqs: FAQ[];
  serviceName: string;
}

export default function PricingPageTemplate({
  title,
  subtitle,
  description,
  pricingTiers,
  faqs,
  serviceName,
}: PricingPageTemplateProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] pt-16 lg:pt-0">
        {/* Breadcrumbs */}
        <div className="container py-4 border-b border-border/50">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{serviceName}</span>
          </nav>
        </div>
        
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
          </div>
          
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
                {subtitle}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {description}
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Pricing Tiers */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className={`grid gap-8 ${pricingTiers.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 rounded-2xl border ${
                    tier.highlighted 
                      ? 'border-primary bg-primary/5' 
                      : 'border-border/50 bg-accent/30'
                  }`}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                        <Star className="h-3 w-3" /> Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    {tier.priceNote && (
                      <span className="text-sm text-muted-foreground ml-1">{tier.priceNote}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/get-quote"
                    className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${
                      tier.highlighted
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-accent hover:bg-accent/80 border border-border'
                    }`}
                  >
                    {tier.ctaText || 'Get Quote'}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Need a custom solution? We offer tailored packages for your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary hover:underline"
              >
                Contact us for custom pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* What's Included */}
        <section className="py-16 md:py-24 bg-accent/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What's Included in Every Package
                </h2>
                <ul className="space-y-4">
                  {[
                    "Free initial consultation",
                    "Detailed project proposal",
                    "Regular progress updates",
                    "Source code ownership",
                    "Post-launch support",
                    "Documentation and training",
                    "Bug fixes during warranty period",
                    "Deployment and go-live support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-background rounded-2xl p-8 border border-border/50"
              >
                <h3 className="text-xl font-bold mb-4">Why Choose EASYIO Technologies?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>150+ successful projects delivered</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Local team in Srinagar for support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Transparent pricing, no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Flexible payment options available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>On-time project delivery</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    All prices are indicative. Final pricing depends on specific requirements.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24">
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
              <p className="text-muted-foreground">
                Common questions about {serviceName.toLowerCase()} pricing
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
                  className="bg-accent/30 rounded-xl border border-border/50 overflow-hidden"
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
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Contact EASYIO Technologies today for a detailed quote tailored to your requirements. Free consultation included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/get-quote"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/30 font-medium rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </main>
    </div>
  );
}


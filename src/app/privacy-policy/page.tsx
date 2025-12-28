import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | EASYIO Technologies",
  description: "Privacy Policy for EASYIO Technologies. Learn how we handle and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="container py-12 sm:py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Shield className="text-primary" size={24} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">DATA TRANSMISSION PROTOCOL</h1>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">Privacy Policy // v1.0.0</p>
              </div>
            </div>

            <div className="space-y-12 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">01. Initialization</h2>
                </div>
                <p>
                  At EASYIO Technologies, we operate on a high-trust, high-transparency protocol. This Privacy Policy outlines our data handling procedures, ensuring your information remains secure within our ecosystem. By interacting with our systems, you acknowledge these protocols.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">02. Data Acquisition</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3 text-foreground">
                      <Lock size={18} className="text-primary" />
                      <h3 className="font-bold uppercase tracking-wider text-xs">Direct Inputs</h3>
                    </div>
                    <p className="text-xs">Information you provide via forms, contact channels, and system requests (Name, Email, Company, Deployment Briefs).</p>
                  </div>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-3 text-foreground">
                      <Eye size={18} className="text-primary" />
                      <h3 className="font-bold uppercase tracking-wider text-xs">System Logs</h3>
                    </div>
                    <p className="text-xs">Metadata generated during interaction with our interface (IP addresses, browser metrics, transmission timestamps).</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">03. Protocol Objectives</h2>
                </div>
                <p>
                  Acquired data is utilized exclusively for system optimization, direct communication, and fulfillment of requested deployments. We do not engage in unauthorized data liquidation or third-party extraction.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">04. Cryptographic Security</h2>
                </div>
                <p>
                  All data transmissions are protected via SSL/TLS encryption. Sensitive information is stored using military-grade hashing algorithms within our secure Supabase mainframe.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">05. Termination Rights</h2>
                </div>
                <p>
                  Users maintain the right to request full data erasure from our archives at any time. Direct your signal to info@easyio.tech for immediate protocol execution.
                </p>
              </section>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Need clarity on our protocols?</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest">Establish a direct connection with our team.</p>
                </div>
              </div>
              <a href="/contact" className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity">
                INITIATE SIGNAL
              </a>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

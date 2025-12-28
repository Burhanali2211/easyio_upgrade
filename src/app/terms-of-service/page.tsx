import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Scale, FileCheck, AlertTriangle, Cpu } from "lucide-react";

export const metadata = {
  title: "Terms of Service | EASYIO Technologies",
  description: "Terms of Service for EASYIO Technologies. Understanding our system usage agreements.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="container py-12 sm:py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Scale className="text-accent" size={24} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">SYSTEM USAGE AGREEMENT</h1>
                <p className="text-muted-foreground text-sm uppercase tracking-widest">Terms of Service // v1.0.0</p>
              </div>
            </div>

            <div className="space-y-12 text-sm sm:text-base leading-relaxed text-muted-foreground">
              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">01. Authorization</h2>
                </div>
                <p>
                  By accessing EASYIO Technologies' digital infrastructure, you agree to comply with our operational protocols. Unauthorized attempts to breach our core architecture or reverse-engineer our proprietary logic engines are strictly prohibited.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">02. Intellectual Property</h2>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <Cpu size={24} className="text-accent shrink-0" />
                  <p className="text-xs">
                    All neural logic, architectural frameworks, and system designs manifested within this portal are the exclusive property of EASYIO Technologies. Global intellectual property laws protect our blueprints and execution patterns.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">03. Deployment Responsibility</h2>
                </div>
                <p>
                  While we strive for 99.9% system uptime and optimal performance, EASYIO Technologies is not liable for externalities resulting from user-side infrastructure failures or unauthorized system modifications.
                </p>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">04. Prohibited Actions</h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <AlertTriangle size={16} className="text-red-500 shrink-0" />
                    <span>Automated extraction (scraping) of system data or curriculum content.</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle size={16} className="text-red-500 shrink-0" />
                    <span>Injection of malicious payloads into our transmission channels.</span>
                  </li>
                  <li className="flex gap-3">
                    <AlertTriangle size={16} className="text-red-500 shrink-0" />
                    <span>Misrepresentation of identity during enterprise brief submissions.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <h2 className="text-lg font-bold uppercase tracking-widest">05. Termination of Signal</h2>
                </div>
                <p>
                  EASYIO Technologies reserves the right to terminate system access for any node found in violation of these protocols. Legal escalation may be pursued for high-severity breaches.
                </p>
              </section>
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-accent/5 border border-accent/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <FileCheck className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold">Protocol Acknowledged?</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest">Continue your journey into the future of tech.</p>
                </div>
              </div>
              <a href="/" className="px-6 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity">
                RETURN TO MAINBOARD
              </a>
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

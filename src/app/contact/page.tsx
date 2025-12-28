"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import {
  ContactHero,
  ContactForm,
  TerminalWidget,
  ContactInfo,
  SuccessMessage,
  useContactForm,
  useTerminal,
} from "@/components/pages/contact";

export default function ContactPage() {
  const {
    formData,
    loading,
    success,
    error,
    handleSubmit,
    updateFormData,
    setType,
    resetSuccess,
  } = useContactForm();
  
  const { terminalLines, executeCommand } = useTerminal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-accent/5 blur-[80px] rounded-full" />
        </div>
        
        <div className="container pt-8 sm:pt-16 lg:pt-24 pb-12 sm:pb-16 lg:pb-20 relative">
          <ContactHero />

          <div className="grid lg:grid-cols-[1fr,420px] gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              {success ? (
                <SuccessMessage onReset={resetSuccess} />
              ) : (
                <ContactForm
                  formData={formData}
                  loading={loading}
                  error={error}
                  onSubmit={handleSubmit}
                  onUpdate={updateFormData}
                  onTypeSelect={setType}
                />
              )}
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <TerminalWidget lines={terminalLines} onCommand={executeCommand} />
              <ContactInfo />
            </div>
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}

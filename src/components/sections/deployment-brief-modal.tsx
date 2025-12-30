"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles, Loader2, CheckCircle2, Building2, User, Mail, Users, Calendar, MessageSquare } from "lucide-react";

interface DeploymentBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DeploymentBriefModal({ isOpen, onClose }: DeploymentBriefModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      company_name: formData.get("company_name"),
      contact_name: formData.get("contact_name"),
      email: formData.get("email"),
      team_size: formData.get("team_size"),
      training_needs: formData.get("training_needs"),
      project_timeline: formData.get("project_timeline"),
      additional_info: formData.get("additional_info"),
    };

    try {
      const response = await fetch("/api/deployment-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[800px] lg:max-w-[900px] bg-card dark:bg-[#0A0A0B] border-border dark:border-white/10 text-foreground dark:text-white p-8 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50" />
          <div className="relative z-10 flex flex-col items-center text-center py-8">
            <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 animate-bounce">
              <CheckCircle2 size={40} className="text-emerald-500" />
            </div>
            <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-foreground dark:text-white">Brief Received.</h2>
            <p className="text-muted-foreground dark:text-white/60 mb-8 leading-relaxed">
              Your deployment request has been logged into our mainframe. Our architects will review the requirements and contact you within 24 standard cycles.
            </p>
            <Button 
              onClick={onClose}
              className="w-full py-6 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all rounded-xl"
            >
              System Return
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] lg:max-w-[1000px] bg-card dark:bg-[#0A0A0B] border-border dark:border-white/10 text-foreground dark:text-white p-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="relative z-10">
          <div className="p-8 border-b border-border dark:border-white/5 bg-muted/50 dark:bg-white/[0.02]">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                  <Sparkles size={20} />
                </div>
                <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em]">Enterprise Protocol</div>
              </div>
              <DialogTitle className="text-3xl font-black uppercase tracking-tighter text-foreground dark:text-white">
                Request Deployment Brief
              </DialogTitle>
              <DialogDescription className="text-muted-foreground dark:text-white/40 text-sm mt-2">
                Initiate the architecture phase for your organization. Provide core metrics for a tailored training environment.
              </DialogDescription>
            </DialogHeader>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono uppercase tracking-wider text-center">
                Error: {error}
              </div>
            )}
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company_name" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground dark:text-white/40 flex items-center gap-2">
                  <Building2 size={12} /> Company Name *
                </Label>
                <Input 
                  id="company_name" 
                  name="company_name" 
                  required 
                  placeholder="ACME CORP"
                  className="bg-muted/50 dark:bg-white/5 border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 h-12 focus:ring-primary/20 transition-all rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact_name" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground dark:text-white/40 flex items-center gap-2">
                  <User size={12} /> Contact Architect *
                </Label>
                <Input 
                  id="contact_name" 
                  name="contact_name" 
                  required 
                  placeholder="JOHN DOE"
                  className="bg-muted/50 dark:bg-white/5 border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 h-12 focus:ring-primary/20 transition-all rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground dark:text-white/40 flex items-center gap-2">
                <Mail size={12} /> Transmission Node (Email) *
              </Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="ARCHITECT@COMPANY.COM"
                className="bg-muted/50 dark:bg-white/5 border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 h-12 focus:ring-primary/20 transition-all rounded-xl"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="team_size" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground dark:text-white/40 flex items-center gap-2">
                  <Users size={12} /> Force Size (Team)
                </Label>
                <Input 
                  id="team_size" 
                  name="team_size" 
                  placeholder="5-10 ENGINEERS"
                  className="bg-muted/50 dark:bg-white/5 border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 h-12 focus:ring-primary/20 transition-all rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project_timeline" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground dark:text-white/40 flex items-center gap-2">
                  <Calendar size={12} /> Target Window (Timeline)
                </Label>
                <Input 
                  id="project_timeline" 
                  name="project_timeline" 
                  placeholder="Q3 2024"
                  className="bg-muted/50 dark:bg-white/5 border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 h-12 focus:ring-primary/20 transition-all rounded-xl"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="training_needs" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground dark:text-white/40 flex items-center gap-2">
                <Sparkles size={12} /> Core Objectives
              </Label>
              <Textarea 
                id="training_needs" 
                name="training_needs" 
                placeholder="DEVOPS, CLOUD NATIVE, AI INTEGRATION..."
                className="bg-muted/50 dark:bg-white/5 border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 min-h-[100px] focus:ring-primary/20 transition-all rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional_info" className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground dark:text-white/40 flex items-center gap-2">
                <MessageSquare size={12} /> Additional Parameters
              </Label>
              <Textarea 
                id="additional_info" 
                name="additional_info" 
                placeholder="ANY SPECIFIC CONSTRAINTS OR REQUIREMENTS..."
                className="bg-muted/50 dark:bg-white/5 border-border dark:border-white/10 text-foreground dark:text-white placeholder:text-muted-foreground dark:placeholder:text-white/20 min-h-[80px] focus:ring-primary/20 transition-all rounded-xl"
              />
            </div>

            <div className="pt-4 border-t border-border dark:border-white/5 bg-muted/30 dark:bg-white/[0.01] -mx-8 -mb-8 p-8">
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full py-8 bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-xs hover:bg-primary/90 disabled:opacity-50 transition-all group rounded-xl relative overflow-hidden"
              >
                {loading ? (
                  <div className="flex items-center gap-3">
                    <Loader2 className="animate-spin" size={16} />
                    <span>Synchronizing...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span>Transmit Brief</span>
                    <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                  </div>
                )}
                {loading && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 overflow-hidden">
                    <div className="h-full bg-primary animate-progress origin-left" />
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

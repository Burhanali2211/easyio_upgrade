"use client";

import React, { useState, useMemo } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle2,
  BarChart3,
  DollarSign,
  Info
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ROICalculatorPage() {
  const [teamSize, setTeamSize] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState(5);
  const [efficiencyGain, setEfficiencyGain] = useState(30);

  const results = useMemo(() => {
    const weeklyHoursSavedPerPerson = (manualHoursPerWeek * efficiencyGain) / 100;
    const totalWeeklyHoursSaved = weeklyHoursSavedPerPerson * teamSize;
    const weeklySavings = totalWeeklyHoursSaved * hourlyRate;
    const yearlySavings = weeklySavings * 52;
    const monthlySavings = yearlySavings / 12;

    return {
      monthly: monthlySavings,
      yearly: yearlySavings,
      hoursSaved: totalWeeklyHoursSaved * 52,
      efficiencyBoost: efficiencyGain
    };
  }, [teamSize, hourlyRate, manualHoursPerWeek, efficiencyGain]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="lg:pl-[288px] relative pt-16 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        {/* Header */}
        <section className="container py-12 sm:py-24 relative">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono text-[10px] uppercase tracking-widest font-bold">
              <Calculator size={14} /> Business ROI Calculator
            </div>
            <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter leading-[1.1] pb-2">
              Calculate Your <br />
              <span className="text-primary text-outline-sm">Efficiency Gain.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estimate the potential annual savings and productivity improvements by switching to an automated ERP or custom enterprise system by EASYIO.
            </p>
          </div>
        </section>

        {/* Calculator Grid */}
        <section className="container pb-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="space-y-8 p-8 rounded-3xl border border-border dark:border-white/10 bg-card/50 backdrop-blur-sm">
              <h2 className="text-xl font-bold uppercase tracking-tight flex items-center gap-2">
                <BarChart3 size={20} className="text-primary" /> Input Parameters
              </h2>
              
              <div className="space-y-6">
                <InputRange 
                  label="Team Size" 
                  icon={<Users size={16} />}
                  value={teamSize} 
                  min={1} 
                  max={200} 
                  unit="People"
                  onChange={setTeamSize} 
                />
                
                <InputRange 
                  label="Avg. Hourly Rate" 
                  icon={<DollarSign size={16} />}
                  value={hourlyRate} 
                  min={10} 
                  max={200} 
                  unit="$/hr"
                  onChange={setHourlyRate} 
                />
                
                <InputRange 
                  label="Manual Tasks / Week" 
                  icon={<Clock size={16} />}
                  value={manualHoursPerWeek} 
                  min={1} 
                  max={40} 
                  unit="Hrs/Person"
                  onChange={setManualHoursPerWeek} 
                />

                <InputRange 
                  label="Expected Efficiency Gain" 
                  icon={<TrendingUp size={16} />}
                  value={efficiencyGain} 
                  min={10} 
                  max={80} 
                  unit="%"
                  onChange={setEfficiencyGain} 
                />
              </div>

              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 flex gap-3 text-xs text-blue-500/80 leading-relaxed">
                <Info size={16} className="shrink-0" />
                <p>These calculations are based on industry averages for digital transformation. Actual results vary by industry and implementation scope.</p>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-foreground text-background relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <TrendingUp size={120} />
                </div>
                
                <div className="relative z-10 space-y-8">
                  <div>
                    <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-background/50 mb-2">Estimated Yearly Savings</p>
                    <div className="text-5xl sm:text-7xl font-black tracking-tighter text-primary">
                      ${results.yearly.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 border-t border-background/10 pt-8">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-background/50 mb-1">Monthly</p>
                      <p className="text-2xl font-bold">${results.monthly.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-background/50 mb-1">Hours Reclaimed</p>
                      <p className="text-2xl font-bold">{results.hoursSaved.toLocaleString()} / yr</p>
                    </div>
                  </div>

                  <Link 
                    href="/contact"
                    className="flex items-center justify-between w-full p-6 rounded-2xl bg-primary text-white font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors"
                  >
                    Claim These Savings <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <ResultMiniCard 
                  label="Efficiency" 
                  value={`+${results.efficiencyBoost}%`} 
                  desc="Operational Speed" 
                />
                <ResultMiniCard 
                  label="Capacity" 
                  value="2.4x" 
                  desc="Scaling Potential" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="container pb-24">
          <div className="p-12 rounded-[3rem] border border-border dark:border-white/10 bg-card">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-12">Why EASYIO Enterprise Solutions?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <BenefitItem 
                title="Eliminate Redundancy"
                desc="Automate repetitive data entry and reporting tasks across all departments."
              />
              <BenefitItem 
                title="Real-time Analytics"
                desc="Make decisions based on live data, not week-old manual spreadsheets."
              />
              <BenefitItem 
                title="Unified Ecosystem"
                desc="Connect your entire business from inventory to accounting in one place."
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

function InputRange({ label, icon, value, min, max, unit, onChange }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          {icon} {label}
        </label>
        <span className="font-mono text-sm text-primary font-bold">{value} {unit}</span>
      </div>
      <input 
        type="range" 
        min={min} 
        max={max} 
        value={value} 
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
      />
    </div>
  );
}

function ResultMiniCard({ label, value, desc }: any) {
  return (
    <div className="p-6 rounded-3xl border border-border dark:border-white/10 bg-card/50 backdrop-blur-sm">
      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-black text-foreground">{value}</p>
      <p className="text-[10px] text-muted-foreground uppercase mt-1">{desc}</p>
    </div>
  );
}

function BenefitItem({ title, desc }: any) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-primary">
        <CheckCircle2 size={18} />
        <h3 className="font-bold uppercase tracking-tight text-sm">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

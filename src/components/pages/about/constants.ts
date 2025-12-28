import { Rocket, Globe, Cpu, Zap, Target, Shield, TrendingUp, Code2 } from "lucide-react";
import { createElement } from "react";
import { Stat, Value } from "./types";

export const stats: Stat[] = [
  { label: "Founded", value: "2024", icon: createElement(Rocket, { size: 16, className: "sm:w-5 sm:h-5" }), color: "primary", description: "Year of inception" },
  { label: "Global Nodes", value: "14K+", icon: createElement(Globe, { size: 16, className: "sm:w-5 sm:h-5" }), color: "accent", description: "Worldwide infrastructure" },
  { label: "Core Engineers", value: "150+", icon: createElement(Cpu, { size: 16, className: "sm:w-5 sm:h-5" }), color: "emerald", description: "Elite talent pool" },
  { label: "Uptime", value: "99.99%", icon: createElement(Zap, { size: 16, className: "sm:w-5 sm:h-5" }), color: "amber", description: "System reliability" },
];

export const values: Value[] = [
  { icon: createElement(Target, { size: 20 }), title: "Precision", desc: "Every line of code engineered for maximum impact" },
  { icon: createElement(Shield, { size: 20 }), title: "Security", desc: "Military-grade protection for critical systems" },
  { icon: createElement(TrendingUp, { size: 20 }), title: "Scale", desc: "Built to handle infinite growth" },
  { icon: createElement(Code2, { size: 20 }), title: "Innovation", desc: "Pushing boundaries of what's possible" },
];

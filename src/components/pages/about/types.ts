import { ReactNode } from "react";

export interface Stat {
  label: string;
  value: string;
  icon: ReactNode;
  color: "primary" | "accent" | "emerald" | "amber";
  description: string;
}

export interface Value {
  icon: ReactNode;
  title: string;
  desc: string;
}

import { 
  LayoutGrid, Briefcase, Users, MessageSquare, BookOpen, Database, 
  Terminal, GraduationCap, Cpu, Mail, UserPlus 
} from "lucide-react";

export const menuItems = [
  { name: "Command Center", href: "/", icon: LayoutGrid, color: "text-white" },
  { name: "The Nucleus", href: "/about", icon: Cpu, color: "text-cyan-400" },
  { name: "Mission Archive", href: "/ourwork", icon: Briefcase, color: "text-emerald-400" },
  { name: "Quantum ERP", href: "/erp", icon: Database, color: "text-blue-400" },
  { name: "Neural Engines", href: "/solutions", icon: Terminal, color: "text-amber-400" },
  { name: "The Forge", href: "/programs", icon: GraduationCap, color: "text-primary" },
  { name: "Alpha Squad", href: "/ourteam", icon: Users, color: "text-violet-400" },
  { name: "Signal Hub", href: "/testimonials", icon: MessageSquare, color: "text-rose-400" },
  { name: "Innovation Labs", href: "/courses", icon: BookOpen, color: "text-sky-400" },
  { name: "Open Channel", href: "/contact", icon: Mail, color: "text-primary" },
  { name: "Join The Ranks", href: "/careers", icon: UserPlus, color: "text-lime-400" },
];

import { 
  LayoutGrid, Briefcase, Users, MessageSquare, BookOpen, Database, 
  Terminal, GraduationCap, Cpu, Mail, UserPlus 
} from "lucide-react";

export const menuItems = [
  { name: "Home", href: "/", icon: LayoutGrid, color: "text-white" },
  { name: "About", href: "/about", icon: Cpu, color: "text-cyan-400" },
  { name: "Projects", href: "/ourwork", icon: Briefcase, color: "text-emerald-400" },
  { name: "ERP", href: "/erp", icon: Database, color: "text-blue-400" },
  { name: "Solutions", href: "/solutions", icon: Terminal, color: "text-amber-400" },
  { name: "Programs", href: "/programs", icon: GraduationCap, color: "text-primary" },
  { name: "Team", href: "/ourteam", icon: Users, color: "text-violet-400" },
  { name: "Testimonials", href: "/testimonials", icon: MessageSquare, color: "text-rose-400" },
  { name: "Courses", href: "/courses", icon: BookOpen, color: "text-sky-400" },
  { name: "Contact", href: "/contact", icon: Mail, color: "text-primary" },
  { name: "Careers", href: "/careers", icon: UserPlus, color: "text-lime-400" },
];

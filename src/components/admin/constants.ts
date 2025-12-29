import {
  Database, Cpu, Globe, Shield, Zap, BrainCircuit, Network, Code2,
  Atom, Microscope, FlaskConical, BarChart3, Settings, Cloud,
  Activity, Server, Terminal, Rocket, Workflow, CircuitBoard,
  CpuIcon, HardDrive, Layers, GitBranch, Boxes, Package, FileCode,
  Wrench, Cog, GraduationCap, Star, Trophy, Briefcase,
  MessageSquareQuote, Users, Beaker, LayoutGrid, LayoutDashboard,
  Handshake, BarChart
} from 'lucide-react';
import { createElement } from 'react';
import { IconOption, ColorOption, TabConfig, Tab } from './types';

export const IconOptions: IconOption[] = [
  { value: 'database', label: 'Database', icon: createElement(Database, { size: 16 }) },
  { value: 'cpu', label: 'Processor', icon: createElement(Cpu, { size: 16 }) },
  { value: 'globe', label: 'Globe', icon: createElement(Globe, { size: 16 }) },
  { value: 'shield', label: 'Shield', icon: createElement(Shield, { size: 16 }) },
  { value: 'zap', label: 'Energy', icon: createElement(Zap, { size: 16 }) },
  { value: 'brain', label: 'Neural', icon: createElement(BrainCircuit, { size: 16 }) },
  { value: 'network', label: 'Network', icon: createElement(Network, { size: 16 }) },
  { value: 'code', label: 'Code', icon: createElement(Code2, { size: 16 }) },
  { value: 'atom', label: 'Quantum', icon: createElement(Atom, { size: 16 }) },
  { value: 'microscope', label: 'Research', icon: createElement(Microscope, { size: 16 }) },
  { value: 'flask', label: 'Lab', icon: createElement(FlaskConical, { size: 16 }) },
  { value: 'bar-chart', label: 'Analytics', icon: createElement(BarChart3, { size: 16 }) },
  { value: 'settings', label: 'Settings', icon: createElement(Settings, { size: 16 }) },
  { value: 'cloud', label: 'Cloud', icon: createElement(Cloud, { size: 16 }) },
  { value: 'activity', label: 'Activity', icon: createElement(Activity, { size: 16 }) },
  { value: 'server', label: 'Server', icon: createElement(Server, { size: 16 }) },
  { value: 'terminal', label: 'Terminal', icon: createElement(Terminal, { size: 16 }) },
  { value: 'rocket', label: 'Rocket', icon: createElement(Rocket, { size: 16 }) },
  { value: 'workflow', label: 'Workflow', icon: createElement(Workflow, { size: 16 }) },
  { value: 'circuit-board', label: 'Circuit Board', icon: createElement(CircuitBoard, { size: 16 }) },
  { value: 'cpu-icon', label: 'CPU', icon: createElement(CpuIcon, { size: 16 }) },
  { value: 'hard-drive', label: 'Storage', icon: createElement(HardDrive, { size: 16 }) },
  { value: 'layers', label: 'Layers', icon: createElement(Layers, { size: 16 }) },
  { value: 'git-branch', label: 'Git Branch', icon: createElement(GitBranch, { size: 16 }) },
  { value: 'boxes', label: 'Boxes', icon: createElement(Boxes, { size: 16 }) },
  { value: 'package', label: 'Package', icon: createElement(Package, { size: 16 }) },
  { value: 'file-code', label: 'File Code', icon: createElement(FileCode, { size: 16 }) },
  { value: 'wrench', label: 'Wrench', icon: createElement(Wrench, { size: 16 }) },
  { value: 'cog', label: 'Cog', icon: createElement(Cog, { size: 16 }) },
  { value: 'graduation-cap', label: 'Academy', icon: createElement(GraduationCap, { size: 16 }) },
  { value: 'star', label: 'Featured', icon: createElement(Star, { size: 16 }) },
  { value: 'trophy', label: 'Achievement', icon: createElement(Trophy, { size: 16 }) },
];

export const ColorOptions: ColorOption[] = [
  { value: 'blue', label: 'Ocean Blue', class: 'bg-blue-500' },
  { value: 'emerald', label: 'Emerald Green', class: 'bg-emerald-500' },
  { value: 'purple', label: 'Deep Purple', class: 'bg-purple-500' },
  { value: 'accent', label: 'System Accent', class: 'bg-accent' },
  { value: 'primary', label: 'Core Primary', class: 'bg-primary' },
  { value: 'orange', label: 'Heat Orange', class: 'bg-orange-500' },
];

export const TabConfigs: TabConfig[] = [
  { id: 'projects', label: 'Projects', icon: createElement(Briefcase, { size: 14 }) },
  { id: 'testimonials', label: 'Testimonials', icon: createElement(MessageSquareQuote, { size: 14 }) },
  { id: 'team_members', label: 'Team', icon: createElement(Users, { size: 14 }) },
  { id: 'lab_experiments', label: 'R&D Labs', icon: createElement(Beaker, { size: 14 }) },
  { id: 'logic_engines', label: 'Engines', icon: createElement(Zap, { size: 14 }) },
  { id: 'erp_features', label: 'ERP', icon: createElement(LayoutGrid, { size: 14 }) },
  { id: 'programs', label: 'Academy', icon: createElement(GraduationCap, { size: 14 }) },
  { id: 'home_solutions', label: 'Solutions', icon: createElement(LayoutDashboard, { size: 14 }) },
  { id: 'innovation_hub', label: 'Ecosystem', icon: createElement(Rocket, { size: 14 }) },
  { id: 'partners', label: 'Partners', icon: createElement(Handshake, { size: 14 }) },
  { id: 'metrics', label: 'Metrics', icon: createElement(BarChart, { size: 14 }) },
  { id: 'messages', label: 'Messages', icon: createElement(MessageSquareQuote, { size: 14 }) },
  { id: 'website_settings', label: 'Settings', icon: createElement(Settings, { size: 14 }) },
];

export const getFormDefaults = (tab: Tab): Record<string, any> => {
  const defaults: Record<Tab, Record<string, any>> = {
    projects: { title: '', category: '', description: '', image: '', icon_type: 'database', tags: [] },
    testimonials: { name: '', role: '', company: '', content: '', image: '' },
    team_members: { name: '', role: '', bio: '', image: '' },
    lab_experiments: { title: '', status: '', description: '', icon_type: 'atom' },
    logic_engines: { title: '', description: '', icon_type: 'brain' },
    erp_features: { title: '', description: '', icon_type: 'database' },
    programs: { title: '', duration: '', level: '', description: '', icon_type: 'graduation-cap' },
    partners: { name: '', logo_url: '' },
    metrics: { label: '', value: '', sub_label: '', icon_type: 'globe', color_theme: 'blue' },
    home_solutions: { title: '', category: '', description: '', icon_type: 'database', accent_color: 'blue', features: [] },
    innovation_hub: { title: '', category: '', description: '', icon_type: 'rocket', stats: '' },
    website_settings: {},
    messages: {},
  };
  return defaults[tab] || {};
};

export type Tab = 'projects' | 'testimonials' | 'team_members' | 'lab_experiments' | 'logic_engines' | 'erp_features' | 'programs' | 'partners' | 'metrics' | 'home_solutions' | 'innovation_hub' | 'website_settings' | 'messages';

export interface HomeSolution {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_type: string;
  accent_color: string;
  features: string[];
}

export interface InnovationHubItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon_type: string;
  stats: string;
}

export interface TabConfig {
  id: Tab;
  label: string;
  icon: React.ReactNode;
}

export interface IconOption {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface ColorOption {
  value: string;
  label: string;
  class: string;
}

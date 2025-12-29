export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon_type: string;
  tags: string[];
  client_name?: string;
  completion_date?: string;
  tech_stack?: string[];
  live_url?: string;
  case_study?: string;
  featured?: boolean;
  created_at?: string;
}

export interface LogicEngine {
  id: string;
  title: string;
  description: string;
  icon_type: string;
  category?: string | null;
  features?: string[] | null;
  priority?: number | null;
  use_case?: string | null;
  complexity_level?: string | null;
  created_at?: string;
  updated_at?: string;
}

export type ComplexityLevel = 'low' | 'medium' | 'high' | 'enterprise';

export type ContactType = 'general' | 'collaboration' | 'enterprise';

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  type: ContactType;
}

export interface ContactTypeOption {
  id: ContactType;
  label: string;
  icon: React.ReactNode;
  desc: string;
}

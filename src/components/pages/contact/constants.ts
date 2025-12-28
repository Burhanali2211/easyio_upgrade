import { MessageSquare, Users, Building2 } from "lucide-react";
import { createElement } from "react";
import { ContactTypeOption } from "./types";

export const contactTypes: ContactTypeOption[] = [
  { id: 'general', label: 'Signal Request', icon: createElement(MessageSquare, { size: 16 }), desc: 'Questions & Support' },
  { id: 'collaboration', label: 'Alliance Protocol', icon: createElement(Users, { size: 16 }), desc: 'Strategic Partnerships' },
  { id: 'enterprise', label: 'Elite Deployment', icon: createElement(Building2, { size: 16 }), desc: 'Custom Architectures' },
];

"use client";

import React, { memo, useMemo } from 'react';
import { 
  Shield, Globe, Cpu, Zap, Cloud, Database,
  Building2, Server, Network, Code2, BrainCircuit,
  Atom, Rocket, Activity, Layers, CircuitBoard,
  HardDrive, Boxes, Package, FileCode, Settings,
  Workflow, GitBranch, Terminal, BarChart3,
  Microscope, FlaskConical, Cog, Wrench
} from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  icon_type?: string;
}

// Icon mapping by icon_type
const IconMap: Record<string, React.ElementType> = {
  cpu: Cpu,
  cloud: Cloud,
  zap: Zap,
  database: Database,
  globe: Globe,
  shield: Shield,
  server: Server,
  network: Network,
  code: Code2,
  brain: BrainCircuit,
  atom: Atom,
  rocket: Rocket,
  activity: Activity,
  layers: Layers,
  'circuit-board': CircuitBoard,
  'hard-drive': HardDrive,
  boxes: Boxes,
  package: Package,
  'file-code': FileCode,
  settings: Settings,
  workflow: Workflow,
  'git-branch': GitBranch,
  terminal: Terminal,
  'bar-chart': BarChart3,
  microscope: Microscope,
  flask: FlaskConical,
  cog: Cog,
  wrench: Wrench,
  building: Building2,
};

// Smart icon mapping based on company name keywords
const getIconForCompany = (companyName: string, iconType?: string): React.ElementType => {
  // If icon_type is provided and exists in map, use it
  if (iconType && IconMap[iconType]) {
    return IconMap[iconType];
  }

  // Otherwise, match by company name
  const name = companyName.toLowerCase();
  
  if (name.includes('microsoft') || name.includes('msft')) return Building2;
  if (name.includes('google') || name.includes('gcp')) return Cloud;
  if (name.includes('amazon') || name.includes('aws')) return Cloud;
  if (name.includes('oracle')) return Database;
  if (name.includes('ibm')) return Server;
  if (name.includes('salesforce')) return Cloud;
  if (name.includes('sap')) return Database;
  if (name.includes('stripe')) return Zap;
  if (name.includes('quantum')) return Atom;
  if (name.includes('neural') || name.includes('network')) return BrainCircuit;
  if (name.includes('cyberdyne') || name.includes('cyber')) return Shield;
  if (name.includes('corp') || name.includes('corporation')) return Building2;
  if (name.includes('cloud')) return Cloud;
  if (name.includes('web services') || name.includes('services')) return Server;
  if (name.includes('data') || name.includes('storage')) return Database;
  if (name.includes('network') || name.includes('connect')) return Network;
  if (name.includes('code') || name.includes('dev') || name.includes('software')) return Code2;
  if (name.includes('ai') || name.includes('intelligence') || name.includes('machine')) return BrainCircuit;
  if (name.includes('quantum') || name.includes('physics')) return Atom;
  if (name.includes('rocket') || name.includes('space')) return Rocket;
  if (name.includes('activity') || name.includes('monitor')) return Activity;
  if (name.includes('layer') || name.includes('stack')) return Layers;
  if (name.includes('circuit') || name.includes('hardware')) return CircuitBoard;
  if (name.includes('drive') || name.includes('storage')) return HardDrive;
  if (name.includes('package') || name.includes('box')) return Package;
  if (name.includes('file') || name.includes('document')) return FileCode;
  if (name.includes('workflow') || name.includes('automation')) return Workflow;
  if (name.includes('git') || name.includes('version')) return GitBranch;
  if (name.includes('terminal') || name.includes('command')) return Terminal;
  if (name.includes('chart') || name.includes('analytics') || name.includes('data')) return BarChart3;
  if (name.includes('research') || name.includes('lab') || name.includes('science')) return Microscope;
  if (name.includes('flask') || name.includes('experiment')) return FlaskConical;
  if (name.includes('settings') || name.includes('config')) return Settings;
  if (name.includes('cog') || name.includes('gear')) return Cog;
  if (name.includes('wrench') || name.includes('tool')) return Wrench;
  
  // Default fallback
  return Building2;
};

interface CollaboratorsProps {
  partners?: Partner[];
}

const Collaborators = memo(({ partners = [] }: CollaboratorsProps) => {
  const duplicatedPartners = useMemo(() => [...partners, ...partners], [partners]);

  return (
    <section className="relative w-full bg-[#020202] py-10 sm:py-16 overflow-hidden border-y border-white/5 z-10">
      <div className="container mx-auto relative z-10 mb-6 sm:mb-8">
        <div className="text-center lg:text-left">
          <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary mb-2 block">
            Ecosystem Partners
          </span>
          <h2 className="text-lg sm:text-xl font-display font-bold text-white">
            Trusted by Industry Leaders
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedPartners.map((partner, index) => {
            const Icon = getIconForCompany(partner.name, partner.icon_type);
            return (
              <div 
                key={`${partner.id}-${index}`}
                className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-white transition-colors group cursor-default mx-6 sm:mx-10"
              >
                <div className="p-1.5 sm:p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <Icon size={20} className="sm:w-6 sm:h-6" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold tracking-tighter uppercase whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Collaborators.displayName = 'Collaborators';

export default Collaborators;

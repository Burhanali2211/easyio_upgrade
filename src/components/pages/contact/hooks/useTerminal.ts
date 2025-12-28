"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function useTerminal() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const router = useRouter();

  const addLine = useCallback((line: string) => {
    setTerminalLines(prev => {
      const newLines = [...prev, line];
      if (newLines.length > 50) return newLines.slice(newLines.length - 50);
      return newLines;
    });
  }, []);

  useEffect(() => {
    const initialLines = [
      '> Initializing secure connection...',
      '> Encryption protocol: AES-256-GCM',
      '> Channel status: OPEN',
      '> Handshake verified ✓',
      '> Welcome to EASYIO Mainframe OS v2.5.0-alpha',
      '> Type "help" to view available system commands.'
    ];
    
    initialLines.forEach((line, i) => {
      setTimeout(() => addLine(line), i * 150);
    });
  }, [addLine]);

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    const args = cmd.split(' ');
    const baseCmd = args[0];
    
    addLine(`$ ${command}`);
    
    switch (baseCmd) {
      case 'help':
        addLine('Available System Commands:');
        addLine('  about      - Enterprise identity and mission profile');
        addLine('  services   - View our technical service protocols');
        addLine('  projects   - List active architecture deployments');
        addLine('  status     - Real-time system health diagnostics');
        addLine('  calculate  - Launch the System ROI Engine');
        addLine('  location   - HQ geocoordinates and regional reach');
        addLine('  init-link  - Initialize contact sequence');
        addLine('  whoami     - Current user session telemetry');
        addLine('  clear      - Flush local terminal buffer');
        addLine('  reboot     - Reset system interface');
        break;
      case 'about':
        addLine('EASYIO CORE: The industrial-grade backbone for digital enterprises.');
        addLine('We specialize in high-concurrency architecture, ERP orchestration,');
        addLine('and distributed logic systems for the modern tech economy.');
        break;
      case 'services':
        addLine('Active Protocols:');
        addLine('  - [ERP] Enterprise Resource Orchestration');
        addLine('  - [APP] High-Performance Web Architecture');
        addLine('  - [SEC] Security Logic & Data Integrity');
        addLine('  - [CLD] Cloud-Native System Migration');
        break;
      case 'projects':
        addLine('Active Architecture Nodes:');
        addLine('  [NODE_01] Srinagar Digital Hub (HQ)');
        addLine('  [NODE_02] Global Logistics Ledger');
        addLine('  [NODE_03] FinTech Core - Low Latency Gateway');
        addLine('Type "goto projects" to view the full arsenal.');
        break;
      case 'status':
        addLine('Mainframe Diagnostics:');
        addLine('  - Core Temperature: Nominal');
        addLine('  - Logic Efficiency: 98.4%');
        addLine('  - Network Pulses: 14,284 nodes active');
        addLine('  - Region: Srinagar, J&K (Zone 1)');
        break;
      case 'calculate':
        addLine('Redirecting to ROI Engine...');
        setTimeout(() => router.push('/solutions/roi-calculator'), 1000);
        break;
      case 'location':
        addLine('Headquarters: Srinagar, Jammu & Kashmir');
        addLine('Coordinates: 34.0837° N, 74.7973° E');
        addLine('Regional Reach: Global via Cloud Edge Nodes');
        break;
      case 'whoami':
        addLine(`Session_ID: ${Math.random().toString(36).substring(7).toUpperCase()}`);
        addLine('Access_Level: External_Audit');
        addLine('Status: Verified_Guest');
        break;
      case 'init-link':
      case 'contact':
        addLine('Contact link established. Transmitting to portal...');
        setTimeout(() => router.push('/contact'), 1000);
        break;
      case 'goto':
        if (args[1] === 'projects' || args[1] === 'work') {
          addLine('Navigating to The Arsenal...');
          setTimeout(() => router.push('/ourwork'), 800);
        } else if (args[1] === 'innovation' || args[1] === 'labs') {
          addLine('Navigating to The Labs...');
          setTimeout(() => router.push('/innovation'), 800);
        } else {
          addLine(`Destination error: ${args[1] || 'unspecified'}`);
        }
        break;
      case 'clear':
        setTerminalLines([]);
        break;
      case 'reboot':
        addLine('System reboot initiated...');
        setTimeout(() => window.location.reload(), 800);
        break;
      case '':
        break;
      default:
        addLine(`ERROR: Command "${baseCmd}" not found in system binaries.`);
        addLine('Type "help" for a list of valid commands.');
    }
  };

  return { terminalLines, executeCommand };
}

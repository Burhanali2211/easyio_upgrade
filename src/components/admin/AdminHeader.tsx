"use client";

import { memo } from 'react';
import { LogOut } from 'lucide-react';

interface AdminHeaderProps {
  email: string;
  onSignOut: () => void;
}

const AdminHeader = memo(({ email, onSignOut }: AdminHeaderProps) => {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-8 mb-8 sm:mb-16">
      <div>
        <div className="flex items-center gap-2 sm:gap-3 text-primary mb-2 sm:mb-3">
          <div className="w-6 sm:w-8 h-px bg-primary/50" />
          <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em]">OmniControl Hub v1.0</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">System Management</h1>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden md:flex flex-col items-end mr-2 sm:mr-4">
          <span className="text-white text-xs font-bold truncate max-w-[180px] pb-0.5">{email}</span>
          <span className="text-primary text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">Master Administrator</span>
        </div>
        <button 
          onClick={onSignOut}
          className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 min-h-[44px] bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-red-400 active:text-red-400 hover:bg-red-400/10 hover:border-red-400/20 transition-all text-[9px] sm:text-[10px] font-bold uppercase tracking-widest touch-manipulation"
        >
          <LogOut size={16} />
          <span className="hidden sm:inline">Kill Session</span>
          <span className="sm:hidden">Logout</span>
        </button>
      </div>
    </header>
  );
});

AdminHeader.displayName = 'AdminHeader';

export default AdminHeader;

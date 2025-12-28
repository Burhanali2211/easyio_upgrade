"use client";

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Loader2 } from 'lucide-react';

interface AuthFormProps {
  email: string;
  password: string;
  isSignUp: boolean;
  loading: boolean;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onToggleMode: () => void;
}

const AuthForm = memo(({
  email,
  password,
  isSignUp,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onToggleMode,
}: AuthFormProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md obsidian-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/10"
      >
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl glass-effect text-primary mb-3 sm:mb-4 bg-primary/5">
            <Shield size={28} className="sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight text-center">Admin Authentication</h1>
          <p className="text-muted-foreground text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-2 text-center">Core System Access Only</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Identity Hash</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="admin@easyio.tech" 
              required
              autoComplete="email"
              inputMode="email"
            />
          </div>
          <div>
            <label className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-2 block">Security Key</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => onPasswordChange(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="••••••••" 
              required
              autoComplete="current-password"
            />
          </div>

          <button 
            disabled={loading}
            className="w-full min-h-[48px] sm:min-h-[44px] py-3.5 sm:py-4 bg-primary text-white font-bold rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] touch-manipulation"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : (
              <>
                {isSignUp ? 'Initialize Profile' : 'Access System'}
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 sm:mt-8 text-center">
          <button 
            onClick={onToggleMode}
            className="text-muted-foreground text-[10px] sm:text-[10px] hover:text-primary active:text-primary transition-colors font-mono uppercase tracking-widest min-h-[44px] px-4 touch-manipulation"
          >
            {isSignUp ? 'Return to authentication' : 'Request system access'}
          </button>
        </div>
      </motion.div>
    </div>
  );
});

AuthForm.displayName = 'AuthForm';

export default AuthForm;

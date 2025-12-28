"use client";

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Trash2, Pencil, Database, Loader2, Plus, LayoutDashboard } from 'lucide-react';
import { Tab } from './types';
import { IconOptions } from './constants';
import { ImageWithFallback } from './ImageWithFallback';

interface DataListProps {
  data: any[];
  loading: boolean;
  activeTab: Tab;
  onEdit: (item: any) => void;
  onDelete: (id: string) => void;
  onAdd: () => void;
}

const DataList = memo(({ data, loading, activeTab, onEdit, onDelete, onAdd }: DataListProps) => {
  const isMessages = activeTab === 'messages';

  return (
    <div className="lg:col-span-8 space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6 px-1 sm:px-2">
        <div className="flex items-center gap-2 text-white/20">
          <LayoutDashboard size={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">
            {isMessages ? `Total Messages: ${data.length}` : `Active Records: ${data.length}`}
          </span>
        </div>
        {!isMessages && (
          <button 
            onClick={onAdd}
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 min-h-[44px] bg-primary/10 text-primary border border-primary/20 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-primary/20 active:bg-primary/30 transition-all touch-manipulation w-full sm:w-auto"
          >
            <Plus size={16} />
            New {activeTab.replace('_', ' ')}
          </button>
        )}
      </div>

      <div className="space-y-3 sm:space-y-4">
        {loading && data.length > 0 && (
          <div className="flex items-center justify-center p-4">
            <Loader2 className="animate-spin text-primary" size={24} />
          </div>
        )}
        <AnimatePresence mode="popLayout">
          {isMessages ? (
            data.map((item: any) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="obsidian-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl glass-effect flex items-center justify-center text-primary bg-primary/5 border border-primary/10 flex-shrink-0">
                        <User size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-bold text-base sm:text-lg tracking-tight truncate">
                          {item.name}
                        </h3>
                        <p className="text-primary text-[10px] sm:text-xs font-mono truncate">{item.email}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.company && (
                        <span className="text-primary font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-bold bg-primary/5 px-2 py-0.5 rounded-full inline-block">
                          {item.company}
                        </span>
                      )}
                      <span className="text-white/60 font-mono text-[8px] sm:text-[9px] uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded-full inline-block">
                        {item.type || 'general'}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="p-2.5 sm:p-2 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors text-white/20 bg-white/5 rounded-xl hover:bg-red-500/10 touch-manipulation flex-shrink-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="bg-black/20 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/5">
                  <p className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {item.message}
                  </p>
                </div>
                <div className="mt-2 sm:mt-3 text-white/40 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest">
                  {new Date(item.created_at).toLocaleString()}
                </div>
              </motion.div>
            ))
          ) : (
            data.map((item: any) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="obsidian-card p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 group border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-6 min-w-0 flex-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden glass-effect flex items-center justify-center text-primary bg-primary/5 border border-primary/10 relative flex-shrink-0">
                    {(item.image || item.avatar) && (item.image || item.avatar).trim() !== '' ? (
                      <ImageWithFallback 
                        src={item.image || item.avatar} 
                        alt=""
                        fallback={IconOptions.find(opt => opt.value === item.icon_type)?.icon || <Database size={20} />}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      IconOptions.find(opt => opt.value === item.icon_type)?.icon || <Database size={20} className="sm:w-6 sm:h-6" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-primary font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-bold bg-primary/5 px-2 py-0.5 rounded-full inline-block">
                      {item.category || item.status || item.role || 'CORE HUB'}
                    </span>
                    <h3 className="text-white font-bold text-base sm:text-lg mt-1 tracking-tight truncate">
                      {item.title || item.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity self-end sm:self-auto">
                  <button 
                    onClick={() => onEdit(item)}
                    className="p-2.5 sm:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-primary active:text-primary transition-colors text-white/20 bg-white/5 rounded-xl hover:bg-white/10 touch-manipulation"
                  >
                    <Pencil size={18} />
                  </button>
                  <button 
                    onClick={() => onDelete(item.id)}
                    className="p-2.5 sm:p-3 min-w-[44px] min-h-[44px] flex items-center justify-center hover:text-red-500 active:text-red-500 transition-colors text-white/20 bg-white/5 rounded-xl hover:bg-red-500/10 touch-manipulation"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
        {!loading && data.length === 0 && (
          <div className="text-center py-12 sm:py-20 obsidian-card rounded-2xl sm:rounded-3xl border border-white/5">
            <p className="text-white/20 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest px-4">No data detected in this sector</p>
          </div>
        )}
      </div>
    </div>
  );
});

DataList.displayName = 'DataList';

export default DataList;

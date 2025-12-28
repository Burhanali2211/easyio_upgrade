"use client";

import { memo } from 'react';
import { Tab } from './types';
import { TabConfigs } from './constants';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TabNavigation = memo(({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="mb-6 sm:mb-12 -mx-4 sm:mx-0 px-4 sm:px-0">
      <div className="flex gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide bg-white/5 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl w-full sm:w-fit border border-white/5">
        {TabConfigs.map((tab) => (
          <button 
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 min-h-[44px] min-w-fit rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest transition-all whitespace-nowrap touch-manipulation ${
              activeTab === tab.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'text-white/40 hover:text-white active:text-white hover:bg-white/5'
            }`}
          >
            <span className="w-4 h-4 sm:w-auto sm:h-auto">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
});

TabNavigation.displayName = 'TabNavigation';

export default TabNavigation;

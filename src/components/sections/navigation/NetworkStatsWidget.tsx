"use client";

import Link from "next/link";
import { NetworkStats } from "./types";

interface NetworkStatsWidgetProps {
  networkStats: NetworkStats;
}

export default function NetworkStatsWidget({ networkStats }: NetworkStatsWidgetProps) {
  return (
    <Link 
      href="/ourteam" 
      className="block p-5 rounded-[1.5rem] bg-muted border border-border hover:bg-muted/80 hover:border-primary/20 transition-all cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-[9px] text-muted-foreground uppercase tracking-[0.2em] font-mono font-bold">Network</p>
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>
      <p className="text-[11px] font-bold text-foreground uppercase tracking-tight mb-4 leading-none">Global Nodes Active</p>
      <div className="flex -space-x-2">
        {networkStats.isLoading ? (
          <>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-muted animate-pulse" />
            ))}
            <div className="w-6 h-6 rounded-full border-2 border-background bg-primary/50 animate-pulse" />
          </>
        ) : (
          <>
            {networkStats.recentAvatars.map((avatar, idx) => {
              const isNumber = typeof avatar === 'number';
              const seed = isNumber ? avatar : (avatar?.seed || idx + 1);
              const image = !isNumber && avatar?.image ? avatar.image : null;
              const name = !isNumber && avatar?.name ? avatar.name : undefined;
              const avatarId = !isNumber && avatar?.id ? avatar.id : idx;
              
              return (
                <div 
                  key={avatarId} 
                  className="w-6 h-6 rounded-full border-2 border-background bg-muted overflow-hidden group-hover:scale-110 transition-transform"
                  title={name}
                >
                  {image && image.trim() ? (
                    <img 
                      src={image} 
                      alt={name || ''} 
                      loading="lazy" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
                      }}
                    />
                  ) : (
                    <img 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} 
                      alt={name || ''} 
                      loading="lazy" 
                      className="w-full h-full object-cover" 
                    />
                  )}
                </div>
              );
            })}
            <div 
              className="w-6 h-6 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[8px] font-bold text-primary-foreground group-hover:scale-110 transition-transform"
              title={`${networkStats.totalNodes.toLocaleString()} total active nodes`}
            >
              {networkStats.totalNodes >= 1000 
                ? `+${Math.round(networkStats.totalNodes / 1000)}k`
                : `+${networkStats.totalNodes}`
              }
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

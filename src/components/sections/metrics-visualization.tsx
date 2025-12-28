"use client";

import React, { memo, useEffect, useState } from "react";
import { Activity, Globe, Server, Shield } from "lucide-react";

interface Metric {
  id: string;
  label: string;
  value: string;
  sub_label: string;
  icon_type: string;
  color_theme: string;
}

const IconMap: Record<string, React.ElementType> = {
  globe: Globe,
  server: Server,
  shield: Shield,
  activity: Activity,
};

interface MetricsProps {
  metrics?: Metric[];
}

// Seeded random function for consistent heights
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const MetricsVisualization = memo(({ metrics = [] }: MetricsProps) => {
  const [heights, setHeights] = useState<Record<string, number[]>>({});
  const [isClient, setIsClient] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<Record<string, string>>({});

  useEffect(() => {
    setIsClient(true);
    // Generate consistent heights based on metric id
    const newHeights: Record<string, number[]> = {};
    metrics.forEach((metric) => {
      const seed = metric.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      newHeights[metric.id] = Array.from({ length: 12 }, (_, i) => {
        return 20 + seededRandom(seed + i) * 80;
      });
    });
    setHeights(newHeights);

    // Animate values on mount
    metrics.forEach((metric) => {
      const numericValue = metric.value.match(/\d+/)?.[0];
      if (numericValue) {
        const target = parseInt(numericValue);
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedValues(prev => ({
            ...prev,
            [metric.id]: metric.value.replace(numericValue, Math.floor(current).toString())
          }));
        }, 25);
      } else {
        setAnimatedValues(prev => ({
          ...prev,
          [metric.id]: metric.value
        }));
      }
    });
  }, [metrics]);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-[#020202] z-10">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric, index) => {
            const Icon = IconMap[metric.icon_type] || Globe;
            const barHeights = heights[metric.id] || Array(12).fill(50);
            const displayValue = animatedValues[metric.id] || metric.value;

            return (
              <div
                key={metric.id}
                style={{ animationDelay: `${index * 100}ms` }}
                className="group obsidian-card p-5 sm:p-6 rounded-2xl border border-white/5 relative overflow-hidden animate-fadeIn hover:border-white/10 transition-all duration-200"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-1">
                      {displayValue}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                      {metric.sub_label}
                    </div>
                  </div>

                  {/* Bar chart - subtle and clean */}
                  {isClient && (
                    <div className="flex items-end gap-[2px] h-8 sm:h-10 w-full overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
                      {barHeights.map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-white/20 rounded-t-[1px] transition-all duration-300 group-hover:bg-white/30"
                          style={{ 
                            height: `${height}%`,
                            transitionDelay: `${i * 20}ms`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[80px] rounded-full opacity-30 pointer-events-none" />
    </section>
  );
});

MetricsVisualization.displayName = 'MetricsVisualization';

export default MetricsVisualization;

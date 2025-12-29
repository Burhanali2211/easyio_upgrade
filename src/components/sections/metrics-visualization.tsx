"use client";

import React, { memo, useEffect, useState, useRef } from "react";
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
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<Record<string, number>>({});
  const targetValuesRef = useRef<Record<string, number>>({});

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

    // Initialize target values and start times for animation
    const targets: Record<string, number> = {};
    const startTimes: Record<string, number> = {};
    const initialValues: Record<string, string> = {};

    metrics.forEach((metric) => {
      const numericValue = metric.value.match(/\d+/)?.[0];
      if (numericValue) {
        targets[metric.id] = parseInt(numericValue);
        startTimes[metric.id] = performance.now();
        initialValues[metric.id] = metric.value.replace(numericValue, "0");
      } else {
        initialValues[metric.id] = metric.value;
      }
    });

    targetValuesRef.current = targets;
    startTimeRef.current = startTimes;
    setAnimatedValues(initialValues);

    // Animate using requestAnimationFrame
    const animate = (currentTime: number) => {
      const updates: Record<string, string> = {};
      let hasUpdates = false;

      metrics.forEach((metric) => {
        const target = targetValuesRef.current[metric.id];
        if (target !== undefined) {
          const startTime = startTimeRef.current[metric.id];
          const elapsed = currentTime - startTime;
          const duration = 1000; // 1 second animation
          const progress = Math.min(elapsed / duration, 1);
          
          // Ease out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(target * easeProgress);
          
          const numericValue = metric.value.match(/\d+/)?.[0];
          if (numericValue) {
            updates[metric.id] = metric.value.replace(numericValue, current.toString());
            hasUpdates = true;
          }
        }
      });

      if (hasUpdates) {
        setAnimatedValues(prev => ({ ...prev, ...updates }));
      }

      // Continue animation if not complete
      const isComplete = metrics.every((metric) => {
        const target = targetValuesRef.current[metric.id];
        if (target === undefined) return true;
        const startTime = startTimeRef.current[metric.id];
        const elapsed = currentTime - startTime;
        return elapsed >= 1000;
      });

      if (!isComplete) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [metrics]);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-background dark:bg-[#020202] z-10">
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
                className="group obsidian-card p-5 sm:p-6 rounded-2xl border border-border dark:border-white/5 relative overflow-hidden animate-fadeIn hover:border-primary/20 dark:hover:border-white/10 transition-all duration-200"
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-muted dark:bg-white/5 border border-border dark:border-white/10">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-foreground tracking-tight mb-1">
                      {displayValue}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                      {metric.sub_label}
                    </div>
                  </div>

                  {/* Bar chart - subtle and clean with CSS animation */}
                  {isClient && (
                    <div className="flex items-end gap-[2px] h-8 sm:h-10 w-full overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity">
                      {barHeights.map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-foreground/20 dark:bg-white/20 rounded-t-[1px] transition-all duration-300 group-hover:bg-foreground/30 dark:group-hover:bg-white/30"
                          style={{ 
                            height: `${height}%`,
                            transitionDelay: `${i * 20}ms`,
                            transform: 'translateZ(0)',
                            willChange: 'height, opacity'
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

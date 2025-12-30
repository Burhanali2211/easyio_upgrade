"use client";

import React, { memo, useEffect, useState, useRef } from "react";
import { Activity, Globe, Server, Shield } from "lucide-react";
import { StaggerContainer } from "@/components/ScrollReveal";

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

// Color schemes for different cards - theme-aware with actual colors
const colorSchemes = [
  {
    primary: "from-blue-500/80 to-blue-600/80",
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    border: "border-blue-500/30 dark:border-blue-400/40",
    borderHover: "hover:border-blue-500/50 dark:hover:border-blue-400/60",
    text: "text-blue-600 dark:text-blue-400",
    svgColor: "#3b82f6",
    svgColorDark: "#60a5fa",
    svgGradient: ["#3b82f6", "#2563eb"],
  },
  {
    primary: "from-emerald-500/80 to-emerald-600/80",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    border: "border-emerald-500/30 dark:border-emerald-400/40",
    borderHover: "hover:border-emerald-500/50 dark:hover:border-emerald-400/60",
    text: "text-emerald-600 dark:text-emerald-400",
    svgColor: "#10b981",
    svgColorDark: "#34d399",
    svgGradient: ["#10b981", "#059669"],
  },
  {
    primary: "from-purple-500/80 to-purple-600/80",
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
    border: "border-purple-500/30 dark:border-purple-400/40",
    borderHover: "hover:border-purple-500/50 dark:hover:border-purple-400/60",
    text: "text-purple-600 dark:text-purple-400",
    svgColor: "#a855f7",
    svgColorDark: "#c084fc",
    svgGradient: ["#a855f7", "#9333ea"],
  },
  {
    primary: "from-orange-500/80 to-orange-600/80",
    bg: "bg-orange-500/10 dark:bg-orange-500/20",
    border: "border-orange-500/30 dark:border-orange-400/40",
    borderHover: "hover:border-orange-500/50 dark:hover:border-orange-400/60",
    text: "text-orange-600 dark:text-orange-400",
    svgColor: "#f97316",
    svgColorDark: "#fb923c",
    svgGradient: ["#f97316", "#ea580c"],
  },
];

// Seeded random function for consistent data
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const MetricsVisualization = memo(({ metrics = [] }: MetricsProps) => {
  const [barHeights, setBarHeights] = useState<Record<string, number[]>>({});
  const [lineData, setLineData] = useState<Record<string, number[]>>({});
  const [donutData, setDonutData] = useState<Record<string, number[]>>({});
  const [progressValues, setProgressValues] = useState<Record<string, number>>({});
  const [isClient, setIsClient] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<Record<string, string>>({});
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<Record<string, number>>({});
  const targetValuesRef = useRef<Record<string, number>>({});

  useEffect(() => {
    setIsClient(true);
    
    // Generate consistent data based on metric id
    const newBarHeights: Record<string, number[]> = {};
    const newLineData: Record<string, number[]> = {};
    const newDonutData: Record<string, number[]> = {};
    const newProgressValues: Record<string, number> = {};
    
    metrics.forEach((metric) => {
      const seed = metric.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      
      // Bar chart data (12 bars)
      newBarHeights[metric.id] = Array.from({ length: 12 }, (_, i) => {
        return 20 + seededRandom(seed + i) * 80;
      });
      
      // Line chart data (20 points)
      newLineData[metric.id] = Array.from({ length: 20 }, (_, i) => {
        return 30 + seededRandom(seed + i + 100) * 70;
      });
      
      // Donut chart data (4 segments)
      newDonutData[metric.id] = Array.from({ length: 4 }, (_, i) => {
        return 15 + seededRandom(seed + i + 200) * 35;
      });
      
      // Progress value (0-100)
      newProgressValues[metric.id] = 20 + seededRandom(seed + 300) * 80;
    });
    
    setBarHeights(newBarHeights);
    setLineData(newLineData);
    setDonutData(newDonutData);
    setProgressValues(newProgressValues);

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
          const duration = 1000;
          const progress = Math.min(elapsed / duration, 1);
          
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

  // Get visualization type based on index
  const getVisualizationType = (index: number): string => {
    const types = ['bar', 'line', 'area', 'bar', 'progress', 'line'];
    return types[index % types.length];
  };

  // Render Bar Chart
  const renderBarChart = (metricId: string, colorScheme: typeof colorSchemes[0], index: number) => {
    const heights = barHeights[metricId] || Array(12).fill(50);
    return (
      <div className="h-8 sm:h-10 w-full overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity" style={{ 
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: `${index * 100 + 300}ms`
      }}>
        <svg viewBox="0 0 100 20" className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`barGradient-${metricId}`} x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor={colorScheme.svgGradient[1]} stopOpacity="0.9" />
              <stop offset="50%" stopColor={colorScheme.svgGradient[0]} stopOpacity="0.85" />
              <stop offset="100%" stopColor={colorScheme.svgColorDark} stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {heights.map((height, i) => {
            const barWidth = 100 / heights.length;
            const barX = (i * barWidth) + (barWidth * 0.1);
            const barW = barWidth * 0.8;
            const normalizedHeight = (height / 100) * 20;
            const barY = 20 - normalizedHeight;
            return (
              <rect
                key={i}
                x={barX}
                y={barY}
                width={barW}
                height={normalizedHeight}
                rx="0.3"
                fill={`url(#barGradient-${metricId})`}
                style={{
                  opacity: 0,
                  animation: 'fadeIn 0.3s ease-out forwards',
                  animationDelay: `${index * 100 + 400 + i * 30}ms`
                }}
              />
            );
          })}
        </svg>
      </div>
    );
  };

  // Render Line Chart
  const renderLineChart = (metricId: string, colorScheme: typeof colorSchemes[0], index: number) => {
    const points = lineData[metricId] || Array(20).fill(50);
    const maxValue = Math.max(...points);
    const pathData = points.map((val, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - (val / maxValue) * 80;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
    const pathLength = 300;
    
    return (
      <div className="h-8 sm:h-10 w-full overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity" style={{ 
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: `${index * 100 + 300}ms`
      }}>
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`lineGradient-${metricId}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colorScheme.svgGradient[0]} stopOpacity="0.6" />
              <stop offset="100%" stopColor={colorScheme.svgGradient[0]} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d={`${pathData} L 100 100 L 0 100 Z`}
            fill={`url(#lineGradient-${metricId})`}
            style={{
              animation: 'fadeIn 0.6s ease-out forwards',
              animationDelay: `${index * 100 + 500}ms`,
              opacity: 0
            }}
          />
          <path
            d={pathData}
            fill="none"
            stroke={colorScheme.svgGradient[0]}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength}
            style={{
              animation: 'drawLine 1.2s ease-out forwards',
              animationDelay: `${index * 100 + 400}ms`
            }}
          />
        </svg>
      </div>
    );
  };

  // Render Area Chart
  const renderAreaChart = (metricId: string, colorScheme: typeof colorSchemes[0], index: number) => {
    const points = lineData[metricId] || Array(15).fill(50);
    const maxValue = Math.max(...points);
    const areaPath = points.map((val, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 100 - (val / maxValue) * 85;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ') + ' L 100 100 L 0 100 Z';
    
    return (
      <div className="h-8 sm:h-10 w-full overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity" style={{ 
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: `${index * 100 + 300}ms`
      }}>
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`areaGradient-${metricId}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colorScheme.svgGradient[0]} stopOpacity="0.7" />
              <stop offset="50%" stopColor={colorScheme.svgGradient[0]} stopOpacity="0.4" />
              <stop offset="100%" stopColor={colorScheme.svgGradient[0]} stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d={areaPath}
            fill={`url(#areaGradient-${metricId})`}
            style={{
              animation: 'fadeIn 0.8s ease-out forwards',
              animationDelay: `${index * 100 + 500}ms`,
              opacity: 0
            }}
          />
        </svg>
      </div>
    );
  };

  // Render Wave Chart
  const renderWaveChart = (metricId: string, colorScheme: typeof colorSchemes[0], index: number) => {
    const points = lineData[metricId] || Array(24).fill(50);
    const maxValue = Math.max(...points);
    const minValue = Math.min(...points);
    const range = maxValue - minValue || 1;
    
    // Create smooth wave path with proper continuity
    const pathPoints = points.map((val, i) => {
      const x = (i / (points.length - 1)) * 100;
      const normalizedVal = (val - minValue) / range;
      const y = 100 - (normalizedVal * 75 + 12.5); // 12.5% padding top and bottom
      return { x, y, val };
    });
    
    // Build path ensuring continuity
    const wavePath = pathPoints.map((point, i) => {
      if (i === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `L ${point.x} ${point.y}`;
    }).join(' ');
    
    // Calculate path length for animation
    const wavePathLength = points.length * 4;
    
    return (
      <div className="h-8 sm:h-10 w-full overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity" style={{ 
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: `${index * 100 + 300}ms`
      }}>
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          {/* Wave line */}
          <path
            d={wavePath}
            fill="none"
            stroke={colorScheme.svgGradient[0]}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={wavePathLength}
            strokeDashoffset={wavePathLength}
            style={{
              animation: 'drawLine 1.5s ease-out forwards',
              animationDelay: `${index * 100 + 400}ms`
            }}
          />
          {/* Data point dots */}
          {pathPoints.map((point, i) => {
            // Show dots at regular intervals or at all points
            if (i % 3 === 0 || i === pathPoints.length - 1) {
              return (
                <circle
                  key={i}
                  cx={point.x}
                  cy={point.y}
                  r="0"
                  fill={colorScheme.svgGradient[0]}
                  stroke={colorScheme.svgGradient[1]}
                  strokeWidth="1"
                  opacity="0.9"
                  style={{
                    animation: 'popIn 0.4s ease-out forwards',
                    animationDelay: `${index * 100 + 600 + (i / 3) * 80}ms`
                  }}
                />
              );
            }
            return null;
          })}
        </svg>
      </div>
    );
  };

  // Render Progress Bar
  const renderProgressBar = (metricId: string, colorScheme: typeof colorSchemes[0], index: number) => {
    const progress = progressValues[metricId] || 50;
    return (
      <div className="h-8 sm:h-10 w-full overflow-hidden opacity-60 group-hover:opacity-90 transition-opacity" style={{ 
        animation: 'fadeInUp 0.8s ease-out forwards',
        animationDelay: `${index * 100 + 300}ms`
      }}>
        <div className="relative h-full w-full rounded-full bg-muted dark:bg-white/10 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${colorScheme.primary} rounded-full`}
            style={{ 
              width: '0%',
              animation: 'growProgress 1s ease-out forwards',
              animationDelay: `${index * 100 + 500}ms`,
              '--target-width': `${progress}%`
            } as React.CSSProperties & { '--target-width': string }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-[8px] font-bold ${colorScheme.text} opacity-90`} style={{
              animation: 'fadeIn 0.6s ease-out forwards',
              animationDelay: `${index * 100 + 800}ms`,
              opacity: 0
            }}>
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Main render function
  const renderVisualization = (type: string, metricId: string, colorScheme: typeof colorSchemes[0], index: number) => {
    switch (type) {
      case 'bar':
        return renderBarChart(metricId, colorScheme, index);
      case 'line':
        return renderLineChart(metricId, colorScheme, index);
      case 'area':
        return renderAreaChart(metricId, colorScheme, index);
      case 'wave':
        return renderWaveChart(metricId, colorScheme, index);
      case 'progress':
        return renderProgressBar(metricId, colorScheme, index);
      default:
        return renderLineChart(metricId, colorScheme, index);
    }
  };

  return (
    <section className="pt-16 sm:pt-24 pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden bg-background z-10">
      <div className="container relative z-10">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.1} direction="scale">
          {metrics.map((metric, index) => {
            const Icon = IconMap[metric.icon_type] || Globe;
            const displayValue = animatedValues[metric.id] || metric.value;
            const colorScheme = colorSchemes[index % colorSchemes.length];
            const visualizationType = getVisualizationType(index);

            return (
              <div
                key={metric.id}
                className={`group obsidian-card p-5 sm:p-6 rounded-2xl border ${colorScheme.border} ${colorScheme.borderHover} relative overflow-hidden transition-all duration-200 ${colorScheme.bg}`}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${colorScheme.bg} border ${colorScheme.border}`}>
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colorScheme.text}`} />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      {metric.label}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className={`text-2xl sm:text-3xl lg:text-4xl font-display font-bold ${colorScheme.text} tracking-tight mb-1`}>
                      {displayValue}
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-wider font-mono">
                      {metric.sub_label}
                    </div>
                  </div>

                  {/* Visualization */}
                  {isClient && renderVisualization(visualizationType, metric.id, colorScheme, index)}
                </div>
              </div>
            );
          })}
        </StaggerContainer>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[80px] rounded-full opacity-30 pointer-events-none" />
    </section>
  );
});

MetricsVisualization.displayName = 'MetricsVisualization';

export default MetricsVisualization;


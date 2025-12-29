"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import createGlobe from "cobe";

const Globe = memo(({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<any>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  const phiRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate optimal settings based on device capability
  const getOptimalSettings = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const hardwareConcurrency = typeof navigator !== 'undefined' ? (navigator.hardwareConcurrency || 4) : 4;
    const devicePixelRatio = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2) : 1;
    
    // Reduce mapSamples based on device capability
    let mapSamples = 4000; // Base for mobile
    if (!isMobile) {
      if (hardwareConcurrency >= 8) {
        mapSamples = 10000;
      } else if (hardwareConcurrency >= 4) {
        mapSamples = 7000;
      } else {
        mapSamples = 5000;
      }
    }

    return { mapSamples, devicePixelRatio };
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    let width = 0;
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        if (globeRef.current) {
          globeRef.current.width = width * getOptimalSettings().devicePixelRatio;
          globeRef.current.height = width * getOptimalSettings().devicePixelRatio;
        }
      }
    };
    
    window.addEventListener('resize', onResize, { passive: true });
    onResize();

    const markers = [
      { location: [37.7595, -122.4367], size: 0.05 },
      { location: [40.7128, -74.006], size: 0.08 },
      { location: [51.5074, -0.1278], size: 0.06 },
      { location: [35.6762, 139.6503], size: 0.07 },
      { location: [22.3193, 114.1694], size: 0.05 },
      { location: [-33.8688, 151.2093], size: 0.06 },
      { location: [34.0837, 74.7973], size: 0.12 }, // Srinagar/Kashmir (HQ)
      { location: [28.6139, 77.2090], size: 0.05 }, // Delhi
      { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai
      { location: [12.9716, 77.5946], size: 0.06 }, // Bangalore
      { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
      { location: [48.8566, 2.3522], size: 0.05 },  // Paris
      { location: [52.5200, 13.4050], size: 0.05 }, // Berlin
      { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
    ];

    const settings = getOptimalSettings();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: settings.devicePixelRatio,
      width: width * settings.devicePixelRatio,
      height: width * settings.devicePixelRatio,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: settings.mapSamples,
      mapBrightness: 6,
      baseColor: [0.02, 0.02, 0.05],
      markerColor: [0.23, 0.51, 0.96],
      glowColor: [0.1, 0.1, 0.3],
      markers: markers as any,
      onRender: (state) => {
        if (!isVisibleRef.current) return;
        
        state.phi = phiRef.current;
        phiRef.current += 0.003;
        state.width = width * settings.devicePixelRatio;
        state.height = width * settings.devicePixelRatio;

        // Dynamic pulse effect for markers
        if (state.markers) {
          const time = Date.now() / 1000;
          state.markers.forEach((marker: any, i: number) => {
            const baseSize = markers[i]?.size || 0.05;
            if (i === 6) {
              marker.size = baseSize + Math.sin(time * 4) * 0.04;
            } else {
              marker.size = baseSize + Math.sin(time * 2 + i) * 0.02;
            }
          });
        }
      },
    });

    globeRef.current = globe;

    // Mark as loaded after a short delay to ensure globe is rendering
    const loadTimeout = setTimeout(() => {
      setIsLoaded(true);
      // Use requestAnimationFrame for smooth transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setShowGlobe(true);
        });
      });
    }, 300);

    // Handle visibility change to pause/resume
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Fade in after initialization
    const fadeTimeout = setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1';
      }
    }, 100);

    return () => {
      clearTimeout(loadTimeout);
      clearTimeout(fadeTimeout);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      globe.destroy();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };

  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full" style={{ aspectRatio: "1" }}>
      {/* Black Circle Placeholder - 2D globe look with 3D appearance */}
      <div
        className="absolute inset-0 rounded-full transition-opacity duration-1000 ease-out"
        style={{
          opacity: showGlobe ? 0 : 1,
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,0.95) 100%)',
          boxShadow: `
            inset -25px -25px 80px rgba(0,0,0,0.9),
            inset 25px 25px 80px rgba(255,255,255,0.08),
            0 0 0 1px rgba(255,255,255,0.05)
          `,
          transform: 'translateZ(0)',
          willChange: 'opacity',
          pointerEvents: 'none',
          border: '1px solid rgba(255,255,255,0.03)',
        }}
      />
      
      {/* 3D Globe Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "100%",
          aspectRatio: "1",
          opacity: showGlobe ? 1 : 0,
          transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: showGlobe ? 'auto' : 'opacity',
          transform: 'translateZ(0)',
        }}
        className={className}
      />
    </div>
  );
});

Globe.displayName = 'Globe';

export default Globe;

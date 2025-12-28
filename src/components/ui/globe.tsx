"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import createGlobe from "cobe";

const Globe = memo(({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    const markers = [
      { location: [37.7595, -122.4367], size: 0.05 },
      { location: [40.7128, -74.006], size: 0.08 },
      { location: [51.5074, -0.1278], size: 0.06 },
      { location: [35.6762, 139.6503], size: 0.07 },
      { location: [22.3193, 114.1694], size: 0.05 },
      { location: [-33.8688, 151.2093], size: 0.06 },
      { location: [34.0837, 74.7973], size: 0.12 }, // Srinagar/Kashmir (HQ) - Made slightly larger
      { location: [28.6139, 77.2090], size: 0.05 }, // Delhi
      { location: [19.0760, 72.8777], size: 0.05 }, // Mumbai
      { location: [12.9716, 77.5946], size: 0.06 }, // Bangalore
      { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
      { location: [48.8566, 2.3522], size: 0.05 },  // Paris
      { location: [52.5200, 13.4050], size: 0.05 }, // Berlin
      { location: [1.3521, 103.8198], size: 0.06 }, // Singapore
    ];

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: window.innerWidth < 768 ? 6000 : 12000,
      mapBrightness: 6,
      baseColor: [0.02, 0.02, 0.05],
      markerColor: [0.23, 0.51, 0.96],
      glowColor: [0.1, 0.1, 0.3],
      markers: markers as any,
        onRender: (state) => {
          state.phi = phi;
          phi += 0.003;
          state.width = width * 2;
          state.height = width * 2;
  
          // Dynamic pulse effect for markers
          if (state.markers) {
            const time = Date.now() / 1000;
            state.markers.forEach((marker: any, i: number) => {
              const baseSize = markers[i]?.size || 0.05;
              // HQ (Kashmir) pulses faster and stronger
              if (i === 6) {
                marker.size = baseSize + Math.sin(time * 4) * 0.04;
              } else {
                marker.size = baseSize + Math.sin(time * 2 + i) * 0.02;
              }
            });
          }
        },
    });

    setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = '1'));

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        aspectRatio: "1",
        opacity: 0,
        transition: 'opacity 1s ease',
      }}
      className={className}
    />
  );
});

Globe.displayName = 'Globe';

export default Globe;

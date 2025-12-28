"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import createGlobe from "cobe";

const Globe = memo(({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

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
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.08 },
        { location: [51.5074, -0.1278], size: 0.06 },
        { location: [35.6762, 139.6503], size: 0.07 },
        { location: [22.3193, 114.1694], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.06 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
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

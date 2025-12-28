"use client";

import React, { useEffect, useState, useCallback, memo } from "react";

const CustomCursor = memo(() => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth < 1024;
    
    if (isTouchDevice || isSmallScreen) {
      setIsVisible(false);
      return;
    }
    
    setIsVisible(true);
    
    let rafId: number;
    const moveCursor = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        !!target.closest("a") ||
        !!target.closest("button")
      );
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 bg-white/10 border border-white/20 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovered ? 2.5 : 1})`,
          backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
        }}
      />
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-[#6017ff] rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      />
    </>
  );
});

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;

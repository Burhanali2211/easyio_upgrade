"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback = null,
  rootMargin = "100px",
  threshold = 0.01,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasRendered || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          setHasRendered(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin, threshold, hasRendered]);

  return (
    <div ref={ref}>
      {shouldRender ? children : fallback}
    </div>
  );
};


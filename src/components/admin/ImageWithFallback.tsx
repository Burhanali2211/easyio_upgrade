"use client";

import { memo, useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
}

export const ImageWithFallback = memo(({ src, alt, fallback, className }: ImageWithFallbackProps) => {
  const [hasError, setHasError] = useState(false);
  
  if (hasError || !src) {
    return <>{fallback}</>;
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setHasError(true)}
    />
  );
});

ImageWithFallback.displayName = 'ImageWithFallback';

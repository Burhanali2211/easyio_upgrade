"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Route error:", error);
    }
  }, [error]);

  // Check if it's a non-critical error
  const isNonCritical = 
    error.message?.includes("ResizeObserver") ||
    error.message?.includes("ChunkLoadError") ||
    error.message?.includes("Failed to fetch dynamically imported module");

  // Auto-recover from non-critical errors
  useEffect(() => {
    if (isNonCritical && typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isNonCritical]);

  if (isNonCritical) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-destructive">
            Something went wrong!
          </h1>
          <p className="text-muted-foreground">
            An unexpected error occurred on this page.
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.location.href = '/';
              }
            }}
            variant="outline"
          >
            Go to Home
          </Button>
        </div>
        {process.env.NODE_ENV === "development" && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
              Error details
            </summary>
            <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
              {error.message}
              {error.stack && (
                <div className="mt-2 text-muted-foreground">
                  {error.stack}
                </div>
              )}
              {error.digest && (
                <div className="mt-2 text-muted-foreground">
                  Digest: {error.digest}
                </div>
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}


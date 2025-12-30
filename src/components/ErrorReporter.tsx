"use client";

import { useEffect, useRef } from "react";

type ReporterProps = {
  /*  ⎯⎯ props are only provided on the global-error page ⎯⎯ */
  error?: Error & { digest?: string };
  reset?: () => void;
};

// List of errors that should be ignored (non-critical)
const IGNORED_ERRORS = [
  'ResizeObserver loop limit exceeded',
  'ResizeObserver loop completed with undelivered notifications',
  'Non-Error promise rejection captured',
  'ChunkLoadError',
  'Loading chunk',
  'Failed to fetch dynamically imported module',
];

function shouldIgnoreError(error: Error | string): boolean {
  const errorMessage = typeof error === 'string' ? error : error.message || '';
  return IGNORED_ERRORS.some(ignored => errorMessage.includes(ignored));
}

export default function ErrorReporter({ error, reset }: ReporterProps) {
  /* ─ instrumentation shared by every route ─ */
  const lastOverlayMsg = useRef("");
  const pollRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    const inIframe = window.parent !== window;
    if (!inIframe) return;

    const send = (payload: unknown) => {
      try {
        window.parent.postMessage(payload, "*");
      } catch (e) {
        // Silently fail if postMessage fails
      }
    };

    const onError = (e: ErrorEvent) => {
      // Ignore non-critical errors
      if (shouldIgnoreError(e.message || e.error?.message || '')) {
        return;
      }
      
      send({
        type: "ERROR_CAPTURED",
        error: {
          message: e.message,
          stack: e.error?.stack,
          filename: e.filename,
          lineno: e.lineno,
          colno: e.colno,
          source: "window.onerror",
        },
        timestamp: Date.now(),
      });
    };

    const onReject = (e: PromiseRejectionEvent) => {
      // Ignore non-critical promise rejections
      if (shouldIgnoreError(e.reason?.message || String(e.reason))) {
        return;
      }
      
      send({
        type: "ERROR_CAPTURED",
        error: {
          message: e.reason?.message ?? String(e.reason),
          stack: e.reason?.stack,
          source: "unhandledrejection",
        },
        timestamp: Date.now(),
      });
    };

    const pollOverlay = () => {
      const overlay = document.querySelector("[data-nextjs-dialog-overlay]");
      const node =
        overlay?.querySelector(
          "h1, h2, .error-message, [data-nextjs-dialog-body]"
        ) ?? null;
      const txt = node?.textContent ?? node?.innerHTML ?? "";
      if (txt && txt !== lastOverlayMsg.current) {
        lastOverlayMsg.current = txt;
        send({
          type: "ERROR_CAPTURED",
          error: { message: txt, source: "nextjs-dev-overlay" },
          timestamp: Date.now(),
        });
      }
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onReject);
    pollRef.current = setInterval(pollOverlay, 1000);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onReject);
      pollRef.current && clearInterval(pollRef.current);
    };
  }, []);

  /* ─ extra postMessage when on the global-error route ─ */
  useEffect(() => {
    if (!error) return;
    window.parent.postMessage(
      {
        type: "global-error-reset",
        error: {
          message: error.message,
          stack: error.stack,
          digest: error.digest,
          name: error.name,
        },
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
      },
      "*"
    );
  }, [error]);

  // Handle ignored errors with redirect
  useEffect(() => {
    if (error && shouldIgnoreError(error) && typeof window !== 'undefined') {
      // Auto-recover from non-critical errors by redirecting to home
      const timer = setTimeout(() => {
        window.location.href = '/';
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [error]);

  /* ─ ordinary pages render nothing ─ */
  if (!error) return null;

  // Check if error should be ignored - don't show error page
  if (error && shouldIgnoreError(error)) {
    return null;
  }

  /* ─ global-error UI ─ */
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-destructive">
              Something went wrong!
            </h1>
            <p className="text-muted-foreground">
              An unexpected error occurred. Please try again.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 justify-center">
              {reset && (
                <button
                  onClick={() => {
                    try {
                      reset();
                    } catch (e) {
                      // If reset fails, try navigating to home
                      if (typeof window !== 'undefined') {
                        window.location.href = '/';
                      }
                    }
                  }}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Try again
                </button>
              )}
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.location.href = '/';
                  }
                }}
                className="px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                Go to Home
              </button>
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
      </body>
    </html>
  );
}

"use client";

import React, { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function LogbookError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // ponytail: boundary console error log
    console.error("Logbook boundary error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-md w-full border border-gray-100 bg-gray-50/30 rounded-2xl p-6 md:p-8 text-center space-y-6 shadow-sm">
        <div className="mx-auto w-12 h-12 bg-rose-50 border border-rose-100 rounded-full flex items-center justify-center">
          <AlertCircle className="w-6 h-6 text-rose-600" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Something went wrong</h2>
          <p className="text-sm text-gray-500 leading-relaxed font-medium">
            Failed to connect to the logbook data service. Please verify your Notion configuration and try again.
          </p>
        </div>
        <button onClick={reset} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-850 text-white text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-xs" type="button">
          <RotateCcw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}

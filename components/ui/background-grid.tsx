"use client";

import React from "react"

export function BackgroundGrid({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(0 90% 55% / 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial fade */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

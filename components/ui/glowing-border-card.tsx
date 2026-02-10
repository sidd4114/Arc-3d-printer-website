"use client";

import React from "react"

import { useRef, useState, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function GlowingBorderCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    },
    [mouseX, mouseY]
  );

  const border = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, hsl(0 90% 55% / 0.5), transparent 80%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group relative rounded-xl p-px"
    >
      {/* Glowing border */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: border, opacity: hovering ? 1 : 0 }}
      />
      {/* Actual card */}
      <div
        className={`relative rounded-xl border border-border bg-card/80 backdrop-blur-sm ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

"use client";

import React from "react"

import { useRef, useState, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function Spotlight({
  children,
  className = "",
  spotlightColor = "rgba(220, 38, 38, 0.15)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = divRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    },
    [mouseX, mouseY]
  );

  const background = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background,
          opacity: isFocused ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

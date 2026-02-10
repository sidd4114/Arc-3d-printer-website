"use client";

import React from "react"

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

export function useParallax(
  speed: number = 0.5,
  offset: ["start end", "end start"] = ["start end", "end start"]
): { ref: React.RefObject<HTMLDivElement | null>; y: MotionValue<number> } {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
  return { ref, y };
}

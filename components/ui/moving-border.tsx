"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 3000,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl bg-transparent p-px",
        containerClassName
      )}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <MovingBorderOrb duration={duration} />
      </div>
      <div
        className={cn(
          "relative flex h-full w-full rounded-xl border border-border bg-card/90 backdrop-blur-xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

function MovingBorderOrb({ duration = 3000 }: { duration?: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      if (!containerRef.current) return;

      const elapsed = timestamp - startTimeRef.current;
      const progress = (elapsed % duration) / duration;
      const rect = containerRef.current.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const perimeter = 2 * (w + h);
      const dist = progress * perimeter;

      let x = 0;
      let y = 0;

      if (dist < w) {
        x = dist;
        y = 0;
      } else if (dist < w + h) {
        x = w;
        y = dist - w;
      } else if (dist < 2 * w + h) {
        x = w - (dist - w - h);
        y = h;
      } else {
        x = 0;
        y = h - (dist - 2 * w - h);
      }

      setPosition({ x, y });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <motion.div
        className="absolute h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 blur-sm"
        style={{
          left: position.x,
          top: position.y,
          background: "radial-gradient(circle, hsl(0 90% 55%) 40%, transparent 60%)",
        }}
      />
    </div>
  );
}

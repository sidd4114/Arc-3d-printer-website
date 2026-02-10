"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { quote: string; name: string; title: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      for (const item of scrollerContent) {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      }
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  function getDirection() {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  }

  function getSpeed() {
    if (containerRef.current) {
      const dur = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", dur);
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-xl border border-border bg-card/60 backdrop-blur-sm px-8 py-6"
          >
            <blockquote>
              <p className="relative z-20 text-sm leading-relaxed text-muted-foreground">
                {item.quote}
              </p>
              <div className="relative z-20 mt-6 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">
                    {item.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground leading-none">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.title}
                  </p>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

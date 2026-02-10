"use client";

import { useEffect, useState } from "react";

export function Meteors({ number = 20 }: { number?: number }) {
  const [meteors, setMeteors] = useState<
    Array<{ id: number; left: string; delay: string; duration: string }>
  >([]);

  useEffect(() => {
    const items = Array.from({ length: number }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
    }));
    setMeteors(items);
  }, [number]);

  return (
    <>
      {meteors.map((m) => (
        <span
          key={m.id}
          className="pointer-events-none absolute top-0 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-red-500 shadow-[0_0_0_1px_#ffffff10]"
          style={{
            left: m.left,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        >
          <span className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-red-500 to-transparent" />
        </span>
      ))}
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import React from "react";

export function LampEffect({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
    >
      {/* Lamp structure */}
      <div className="relative z-0 flex w-full flex-1 items-center justify-center isolate">
        {/* Left cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 70deg at center top, #dc2626, transparent, transparent)",
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem]"
        >
          <div className="absolute w-full left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "conic-gradient(from 290deg at center top, transparent, transparent, #dc2626)",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem]"
        >
          <div className="absolute w-40 h-full right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Top blur glow */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Red glow orb */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-red-500 opacity-50 blur-3xl"
        />

        {/* Red bar highlight */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-red-500"
        />

        {/* Base fade */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background" />
      </div>

      {/* Content */}
      <div className="relative z-50 -mt-32">{children}</div>
    </div>
  );
}

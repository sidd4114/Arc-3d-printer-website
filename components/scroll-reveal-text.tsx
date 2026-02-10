"use client";

import { motion } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <div className={`py-32 sm:py-40 md:py-48 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.p
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className="inline-block mr-2 sm:mr-3 md:mr-4"
            >
              <span className="bg-gradient-to-br from-white via-white/95 to-gray-400 bg-clip-text text-transparent">
                {word}
              </span>
            </motion.span>
          ))}
        </motion.p>
      </div>
    </div>
  );
}

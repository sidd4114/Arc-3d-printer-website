"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export function TextGenerateEffect({
  words,
  className = "",
}: {
  words: string;
  className?: string;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1, filter: "blur(0px)" },
      { duration: 0.4, delay: stagger(0.06) }
    );
  }, [animate]);

  return (
    <motion.div ref={scope} className={className}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="inline-block opacity-0"
          style={{ filter: "blur(8px)" }}
        >
          {word}
          {idx < wordsArray.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.div>
  );
}

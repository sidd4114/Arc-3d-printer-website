"use client";

import { motion } from "framer-motion";
import {
  Upload,
  Palette,
  Calculator,
  CreditCard,
  Package,
} from "lucide-react";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { useParallax } from "@/hooks/use-parallax";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload STL / OBJ",
    description:
      "Share your 3D model file with us via our order form or in person at the ARC lab.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Choose Material & Infill",
    description:
      "Select from PLA, PLA+, PETG, or ABS. Pick your infill density and color preference.",
  },
  {
    icon: Calculator,
    step: "03",
    title: "Get Price Estimate",
    description:
      "We calculate pricing based on material usage, print time, and complexity. No hidden fees.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Place Order",
    description:
      "Confirm your order and pay. We begin printing immediately upon confirmation.",
  },
  {
    icon: Package,
    step: "05",
    title: "Collect from ARC Lab",
    description:
      "Pick up your finished print from the ARC lab at FCRIT. Quality-checked and ready to use.",
  },
];

export function WorkflowSection() {
  const { ref, y } = useParallax(0.15);

  return (
    <section id="workflow" className="relative py-32 px-6 overflow-hidden" ref={ref}>
      <BackgroundGrid className="absolute inset-0" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[10%] top-[15%] h-2 w-2 rounded-full bg-primary/40 animate-float" />
        <div className="absolute right-[20%] top-[40%] h-3 w-3 rounded-full bg-primary/20 animate-float-slow" />
        <div className="absolute left-[8%] top-[60%] h-1.5 w-1.5 rounded-full bg-red-400/30 animate-float" />
        <div className="absolute left-[15%] top-[25%] h-4 w-4 rounded-sm bg-primary/5 rotate-45 animate-float-slow" />
      </div>

      <motion.div style={{ y }} className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Order <span className="text-primary">Workflow</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Five simple steps from digital model to physical print. Fast,
            transparent, and hassle-free.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Connecting line with animated glow */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
          <motion.div
            className="absolute left-[31px] top-0 w-0.5 bg-primary hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ opacity: 0.6 }}
          />

          <div className="flex flex-col gap-8 sm:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 10 }}
                className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 cursor-default"
              >
                {/* Icon node */}
                <motion.div 
                  className="relative z-10 flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/10 group-hover:shadow-[0_0_25px_-5px_hsl(0_90%_55%_/_0.4)]"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  {/* Ping on hover */}
                  <span className="absolute inset-0 rounded-xl border border-primary/0 transition-all duration-500 group-hover:border-primary/30 group-hover:animate-ping" />
                </motion.div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="font-mono text-xs text-primary/60">
                      {step.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

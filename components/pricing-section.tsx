"use client";

import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";
import { GlowingBorderCard } from "@/components/ui/glowing-border-card";
import { BorderBeam } from "@/components/ui/border-beam";

const principles = [
  {
    title: "Transparent Pricing",
    description:
      "Every quote is itemized -- material cost, print time, and finishing. You see exactly what you pay for with zero hidden charges.",
    features: [
      "₹3.5 per gram material pricing",
      "Print time factored in",
      "No setup or hidden fees",
      "Free re-prints for defects",
    ],
    highlighted: false,
  },
  {
    title: "Student-Friendly Rates",
    description:
      "Special discounted rates for FCRIT students and academic projects. We believe cost should never block innovation.",
    features: [
      "FCRIT student discounts",
      "Academic project rates",
      "Competition team pricing",
      "Payment flexibility",
    ],
    highlighted: true,
  },
  {
    title: "Bulk Discounts",
    description:
      "Ordering multiple parts or running a large project? We offer tiered pricing that scales with your order size.",
    features: [
      "5+ parts: 10% off",
      "20+ parts: 20% off",
      "Recurring orders: custom rates",
      "Event/exhibition bulk pricing",
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fair & <span className="text-primary">Transparent</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            We keep our pricing simple and student-friendly. Quality prints
            without the premium markup.
          </p>
          <div className="mx-auto mt-6 max-w-2xl">
            <motion.div 
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 sm:px-6 py-3 cursor-default"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px -10px hsl(0 90% 55% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Flame className="h-5 w-5 text-primary" />
              </motion.div>
              <span className="text-base sm:text-lg font-semibold text-foreground">
                Just ₹3.5 per gram
              </span>
              <span className="hidden sm:inline text-sm text-muted-foreground">— incredibly affordable</span>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GlowingBorderCard
                className={`p-6 sm:p-8 h-full relative overflow-hidden cursor-pointer hover:shadow-[0_0_30px_-10px_hsl(0_90%_55%_/_0.3)] transition-all ${principle.highlighted ? "border-primary/40" : ""}`}
              >
                {/* Border beam on highlighted card */}
                {principle.highlighted && (
                  <>
                    <BorderBeam size={200} duration={12} delay={2} />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
                    <div className="absolute top-4 right-4">
                      <Flame className="h-5 w-5 text-primary animate-pulse-glow" />
                    </div>
                  </>
                )}

                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {principle.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-foreground"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowingBorderCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

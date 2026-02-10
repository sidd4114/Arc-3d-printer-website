"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "ARC printed our entire robot chassis for the national competition. The quality and turnaround were phenomenal.",
    name: "Rohan M.",
    title: "Robotics Team Lead, FCRIT",
  },
  {
    quote:
      "Got my final-year project model printed in under 24 hours. The surface finish was better than I expected from PLA.",
    name: "Priya S.",
    title: "Mechanical Engineering, FCRIT",
  },
  {
    quote:
      "The team helped us iterate through 5 design revisions for our drone parts. Incredibly supportive and skilled.",
    name: "Aditya K.",
    title: "Drone Club President",
  },
  {
    quote:
      "We ordered 30+ custom sensor housings for a research project. Bulk pricing was great and every piece was identical.",
    name: "Dr. Nair",
    title: "Faculty, Electronics Dept",
  },
  {
    quote:
      "ARC is the go-to for any 3D printing need on campus. Fast, affordable, and the prints are always clean.",
    name: "Sneha R.",
    title: "Computer Engineering, FCRIT",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What People <span className="text-primary">Say</span>
          </h2>
        </motion.div>

        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </section>
  );
}

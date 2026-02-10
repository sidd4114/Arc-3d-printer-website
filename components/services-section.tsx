"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Clock,
  Settings,
  GraduationCap,
  Wrench,
} from "lucide-react";
import { MovingBorder } from "@/components/ui/moving-border";
import Image from "next/image";

const services = [
  {
    icon: Layers,
    title: "PLA Printing",
    description:
      "High-quality PLA filament prints with excellent surface finish. Perfect for display models, prototypes, and artistic designs.",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80",
  },
  {
    icon: Clock,
    title: "Rapid Prototyping",
    description:
      "Fast turnaround on functional prototypes. Validate your designs quickly before committing to production.",
    tag: "Fast Delivery",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80",
  },
  {
    icon: Settings,
    title: "Mechanical Parts",
    description:
      "Custom gears, brackets, housings, and structural components printed with precision for real-world applications.",
    tag: "Precision",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80",
  },
  {
    icon: GraduationCap,
    title: "Academic Projects",
    description:
      "Helping students bring their final-year projects, research models, and competition entries to life.",
    tag: "Students",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
  {
    icon: Wrench,
    title: "Custom Robotics Parts",
    description:
      "Bespoke components for robot chassis, sensor mounts, actuator housings, and custom end-effectors.",
    tag: "Specialty",
    image: "https://images.unsplash.com/photo-1563207153-f403bf289096?w=800&q=80",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
      {/* Section separator */}
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
            Our Services
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            3D Printing <span className="text-primary">Solutions</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-foreground leading-relaxed">
            From concept to creation, we offer a comprehensive range of additive
            manufacturing services tailored to your needs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              {/* Glass card with glow effect */}
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-900/90 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(0_90%_55%_/_0.5)]">
                {/* Animated glow border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary via-red-600 to-primary animate-[spin_6s_linear_infinite] blur-sm" />
                  <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-900" />
                </div>

                {/* Content wrapper */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent" />
                    <motion.div 
                      className="absolute inset-0 bg-primary/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1">
                    <div className="flex w-full items-center justify-between">
                      <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary backdrop-blur-sm border border-primary/20"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="h-6 w-6" />
                      </motion.div>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold text-primary uppercase tracking-wider backdrop-blur-sm">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold text-white/90">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

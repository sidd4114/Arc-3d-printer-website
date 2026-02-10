"use client";

import { motion } from "framer-motion";
import { Cpu, Cog, Zap, Users } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { useParallax } from "@/hooks/use-parallax";
import { BorderBeam } from "@/components/ui/border-beam";

const highlights = [
  {
    icon: Cpu,
    title: "Engineering Excellence",
    description:
      "Pushing the boundaries of design and fabrication with cutting-edge 3D printing technology.",
  },
  {
    icon: Users,
    title: "Student-Driven Innovation",
    description:
      "A passionate team of engineers and makers building the future one layer at a time.",
  },
  {
    icon: Cog,
    title: "Robotics & Automation",
    description:
      "From robotic arms to autonomous systems, we design, prototype, and iterate rapidly.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "Turn ideas into physical reality within hours. Fast, precise, and reliable fabrication.",
  },
];

export function AboutSection() {
  const { ref: parallaxRef, y } = useParallax(0.3);

  return (
    <section id="about" className="relative py-32 px-6" ref={parallaxRef}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Content with parallax */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">
              About ARC
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Where Engineering{" "}
              <span className="text-primary">Meets Imagination</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              Agnel Robotics Club (ARC) at Fr. C. Rodrigues Institute of
              Technology is a hub of innovation. We specialize in robotics,
              automation, and additive manufacturing -- offering precision 3D
              printing services to students, faculty, and external clients.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With state-of-the-art FDM printers, a dedicated workspace, and a
              team that lives and breathes engineering, ARC transforms digital
              models into tangible prototypes with unmatched precision.
            </p>

            {/* Animated decorative line */}
            <motion.div
              className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-red-900"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          {/* Right Grid - Glass cards with glow effect */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                {/* Glass card with glow effect */}
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-900/90 backdrop-blur-xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(0_90%_55%_/_0.5)] cursor-pointer">
                  {/* Animated glow border effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary via-red-600 to-primary animate-[spin_6s_linear_infinite] blur-sm" />
                    <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-900" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div 
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary backdrop-blur-sm border border-primary/20"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mt-4 text-base font-semibold text-white/90">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

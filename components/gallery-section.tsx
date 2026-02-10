"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Box, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import { useRef } from "react";

const models = [
  {
    title: "Karambit Knife",
    material: "PLA+",
    time: "6h 20m",
    image: "/karambit.webp",
  },
  {
    title: "Rubber Band Gun",
    material: "PLA",
    time: "5h 45m",
    image: "/rubberbandgun.webp",
  },
  {
    title: "Toothless Dragon",
    material: "PLA+",
    time: "8h 30m",
    image: "/toothless.jpeg",
  },
  {
    title: "Bone Dragon",
    material: "PLA",
    time: "12h 15m",
    image: "/bone-dragon-photo.webp",
  },
];

function ParallaxCard({ model, index }: { model: typeof models[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -10, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <Spotlight
        className="overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(0_90%_55%_/_0.3)] group cursor-pointer"
        spotlightColor="rgba(220, 38, 38, 0.12)"
      >
        {/* Image with parallax */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <motion.div style={{ y: imgY }} className="absolute -inset-8">
            <Image
              src={model.image || "/placeholder.svg"}
              alt={model.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Info */}
        <div className="p-6">
          <h3 className="text-base font-semibold text-foreground">
            {model.title}
          </h3>
          <div className="mt-3 flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Box className="h-3.5 w-3.5 text-primary" />
              {model.material}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" />
              {model.time}
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-4 w-full border-primary/20 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 gap-2 bg-transparent active:scale-95 transition-all"
            asChild
          >
            <a href="#workflow">
              Order Similar
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.div>
            </a>
          </Button>
        </div>
      </Spotlight>
    </motion.div>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-32 px-6">
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
            Portfolio
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Sample <span className="text-primary">3D Prints</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A selection of our recent prints showcasing the range and quality of
            our fabrication capabilities.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {models.map((model, index) => (
            <ParallaxCard key={model.title} model={model} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

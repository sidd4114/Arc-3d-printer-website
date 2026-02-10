"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap, Layers, Box } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.08),transparent_70%)]" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Additional glow orbs */}
      <div className="absolute top-[15%] left-[20%] w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-[25%] right-[20%] w-80 h-80 bg-primary/15 rounded-full blur-[120px]" />

      {/* Animated 3D printing layers effect */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: `${15 + i * 10}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Precision 3D Printing</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
        >
          <span className="inline-block bg-gradient-to-br from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
            ARC
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light"
        >
          Agnel Robotics Club
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12"
        >
          Transform ideas into reality with precision 3D printing technology.
          From prototypes to final products, we bring your vision to life.
        </motion.p>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border backdrop-blur-sm">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Multiple Materials</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border backdrop-blur-sm">
            <Box className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">Fast Turnaround</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border backdrop-blur-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground">High Precision</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#workflow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-[0_0_30px_-5px_hsl(0_90%_55%_/_0.5)] hover:shadow-[0_0_40px_-5px_hsl(0_90%_55%_/_0.7)] transition-all"
          >
            Order Now
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-background/50 border-2 border-border text-foreground rounded-full font-semibold backdrop-blur-sm hover:bg-background/80 transition-all"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

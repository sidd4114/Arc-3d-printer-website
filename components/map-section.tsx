"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

export function MapSection() {
  return (
    <section id="location" className="relative py-32 px-6">
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
            Visit Us
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find <span className="text-primary">ARC Lab</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Located inside the Father Agnel Technical Education Complex at
            FCRIT, Vashi.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Spotlight
              className="h-full rounded-xl border border-border bg-card/50 p-6 sm:p-8 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(0_90%_55%_/_0.3)] transition-all cursor-default"
              spotlightColor="rgba(220, 38, 38, 0.12)"
            >
              <motion.div 
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="h-6 w-6" />
              </motion.div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Agnel Robotics Club (ARC)
              </h3>
              <address className="mt-3 text-sm text-muted-foreground leading-relaxed not-italic">
                Fr. C. Rodrigues Institute of Technology (FCRIT)
                <br />
                Sector 9A, Vashi
                <br />
                Navi Mumbai, Maharashtra 400703
                <br />
                <span className="text-foreground/70">
                  Inside Father Agnel Technical Education Complex
                </span>
                <br />
                Near Noor Masjid
              </address>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground">Team Leader</p>
                <p className="text-sm text-muted-foreground mt-1">Arpit Pawar</p>
                <a href="tel:+918355964113" className="text-sm text-primary hover:underline">+91 83559 64113</a>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="mt-6 w-full sm:w-fit border-primary/20 text-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 gap-2 bg-transparent active:scale-95 transition-all"
                  asChild
                >
                  <a
                    href="https://maps.google.com/?q=Fr.+C.+Rodrigues+Institute+of+Technology+Vashi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </motion.div>
            </Spotlight>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 overflow-hidden rounded-xl border border-border relative group"
          >
            {/* Red glow on hover */}
            <div className="pointer-events-none absolute -inset-1 rounded-xl bg-primary/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <iframe
              title="ARC Lab Location - FCRIT, Vashi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3262226559146!2d73.00120247497855!3d19.06364398212951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c1277adc6285%3A0x5f88e7a4dabc43e7!2sFr.%20Conceicao%20Rodrigues%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

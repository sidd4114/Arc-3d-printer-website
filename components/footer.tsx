"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Github } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/arc_fcrit?igsh=bXB0anVla3o1MWd1", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/agnel-robotics-club/posts/?feedView=all", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:fcrit.arc@gmail.com", label: "Email" },
];

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#location" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      {/* Top glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & Brand */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-3">
              <div className="relative h-20 w-20">
                <Image
                  src="/arclogo.png"
                  alt="ARC Logo"
                  fill
                  className="object-contain scale-125"
                />
              </div>
              <span className="text-lg font-semibold text-foreground tracking-tight">
                Agnel Robotics Club
              </span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
              Precision 3D printing and rapid prototyping services at FCRIT,
              Vashi.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footerLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-[0_0_15px_-5px_hsl(0_90%_55%_/_0.3)]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            Designed & Built by Agnel Robotics Club
          </p>
          <p className="text-xs text-muted-foreground/50">
            Fr. C. Rodrigues Institute of Technology, Vashi, Navi Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Workflow", href: "#workflow" },
  { label: "Location", href: "#location" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Fixed Position */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        onClick={() => setMenuOpen(true)}
        className={`fixed top-8 right-8 z-50 group ${menuOpen ? 'opacity-0 pointer-events-none' : ''}`}
        aria-label="Open menu"
      >
        <div className={`relative w-14 h-14 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-xl border border-border shadow-lg' 
            : 'bg-black/20 backdrop-blur-sm border border-white/20'
        }`}>
          {/* Animated hamburger lines */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
            <motion.div 
              className={`w-6 h-0.5 rounded-full transition-colors ${
                scrolled ? 'bg-foreground' : 'bg-white'
              }`}
              whileHover={{ width: 28 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div 
              className={`w-6 h-0.5 rounded-full transition-colors ${
                scrolled ? 'bg-foreground' : 'bg-white'
              }`}
              whileHover={{ width: 20 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div 
              className={`w-6 h-0.5 rounded-full transition-colors ${
                scrolled ? 'bg-foreground' : 'bg-white'
              }`}
              whileHover={{ width: 28 }}
              transition={{ duration: 0.2 }}
            />
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '48px 48px'
              }} />
            </div>

            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 z-10 group"
              aria-label="Close menu"
            >
              <div className="relative w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <X className="w-6 h-6 text-primary" />
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.button>

            {/* Menu Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8">
              {/* Logo/Brand */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-10"
              >
                <div className="flex items-center justify-center group cursor-pointer" onClick={handleLinkClick}>
                  <motion.div 
                    className="relative h-40 w-40"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/arclogo.png"
                      alt="ARC Logo"
                      fill
                      className="object-contain scale-125"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col items-center gap-4 mb-10">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="group relative"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-foreground/40 hover:text-foreground transition-colors duration-300">
                      {link.label}
                    </span>
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.a
                href="#workflow"
                onClick={handleLinkClick}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 + navLinks.length * 0.08 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-base font-semibold shadow-[0_0_25px_-5px_hsl(0_90%_55%_/_0.5)] hover:shadow-[0_0_35px_-5px_hsl(0_90%_55%_/_0.7)] transition-all"
              >
                Order Now
              </motion.a>

              {/* Decorative elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground uppercase tracking-widest"
              >
                3D Printing Excellence
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

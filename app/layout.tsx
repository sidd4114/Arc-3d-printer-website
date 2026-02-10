import React from "react"
import type { Metadata, Viewport } from "next";
import { Open_Sans, Orbitron, Playfair_Display } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "ARC | Agnel Robotics Club - Precision 3D Printing",
  description:
    "Precision 3D printing services by Agnel Robotics Club at FCRIT. From prototypes to final prints — engineered by ARC.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${openSans.variable} ${orbitron.variable} ${playfairDisplay.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

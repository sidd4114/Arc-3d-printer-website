import { Navbar } from "@/components/navbar";
import { ParticlesBackground } from "@/components/particles-background";
import { HeroSection } from "@/components/hero-section";
import { ScrollRevealText } from "@/components/scroll-reveal-text";
import { AboutSection } from "@/components/about-section";
import { PricingSection } from "@/components/pricing-section";
import { ServicesSection } from "@/components/services-section";
import { GallerySection } from "@/components/gallery-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WorkflowSection } from "@/components/workflow-section";
import { OrderFormSection } from "@/components/order-form-section";
import { MapSection } from "@/components/map-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <div className="relative z-50 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 backdrop-blur-md border-b border-red-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold text-lg shadow-lg">
              ✓
            </div>
            <p className="text-base md:text-lg font-semibold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Bring Your Own Filament - No Extra Cost for Printing!
            </p>
            <div className="hidden sm:block px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
              Free
            </div>
          </div>
        </div>
      </div>
      <main className="relative min-h-screen">
        <HeroSection />
        <div className="relative z-20 bg-background">
        <ScrollRevealText 
        text="Transform your ideas into reality with precision 3D printing technology that brings your vision to life"
        className="bg-gradient-to-b from-background via-background/50 to-background"
      />
      <AboutSection />
      <PricingSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <WorkflowSection />
      <OrderFormSection />
      <MapSection />
      <Footer />
      </div>
    </main>
    </>
  );
}

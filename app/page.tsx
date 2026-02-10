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

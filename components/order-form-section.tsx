"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Sparkles, ChevronDown, ChevronUp, User, Mail, Phone, Package, Hash, Link as LinkIcon, MessageSquare, Send, CheckCircle2, Scale } from "lucide-react";

export function OrderFormSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    phone: "",
    printDescription: "",
    purpose: "",
    weight: "",
    pricingConfirmed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.pricingConfirmed) {
      alert("Please confirm the pricing terms before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit to Google Forms
      const formId = "1FAIpQLSdyg_L50P6apmogoMzjhdcPQrXpS5eExWIeCyBWe4YcBTaMMQ";
      
      // Create form data with actual entry IDs
      const googleFormData = new FormData();
      googleFormData.append("entry.828873057", formData.name);
      googleFormData.append("entry.677062739", formData.rollNumber);
      googleFormData.append("entry.662724498", formData.email);
      googleFormData.append("entry.1532373835", formData.phone);
      googleFormData.append("entry.1949357080", formData.printDescription);
      googleFormData.append("entry.943321107", formData.purpose);
      if (formData.weight) {
        googleFormData.append("entry.277403812", formData.weight);
      }
      googleFormData.append("entry.2144040954", "I understand that the price is ₹3.5 per gram and the final cost may vary after slicing.");
      
      // Submit to Google Forms
      await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors", // Google Forms requires no-cors mode
      });
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        rollNumber: "",
        email: "",
        phone: "",
        printDescription: "",
        purpose: "",
        weight: "",
        pricingConfirmed: false,
      });
      
      setTimeout(() => {
        setSubmitStatus("idle");
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="order" className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-background via-background/50 to-background">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-[10%] bottom-[20%] h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">ARC 3D Printing Service</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
            Place Your <span className="text-primary">Order</span>
          </h2>
          
          <div className="text-muted-foreground text-base max-w-3xl mx-auto space-y-4 mb-10">
            <p>
              Agnel Robotics Club (ARC) now offers 3D printing services for students and project-related requirements.
            </p>
            <p className="text-sm">
              The cost is <span className="font-semibold text-primary">₹3.5 per gram</span> of filament used. Final pricing will be confirmed after reviewing the design and estimating the print weight.
            </p>
            <p className="text-sm text-muted-foreground/80">
              ARC reserves the right to approve or reject requests based on print feasibility and safety considerations.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Arpit: +91 83559 64113</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>Nikhil: +91 88284 89709</span>
              </div>
            </div>

            {/* Toggle Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold shadow-[0_0_30px_-5px_hsl(0_90%_55%_/_0.5)] hover:shadow-[0_0_40px_-5px_hsl(0_90%_55%_/_0.7)] transition-all text-lg"
            >
              <FileText className="w-5 h-5" />
              <span>{isOpen ? "Close Form" : "Open Order Form"}</span>
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Collapsible Form Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              
              {/* Form wrapper */}
              <div className="relative bg-background border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Top bar decoration */}
                <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                
                {/* Custom Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <User className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Personal Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="rollNumber" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Hash className="w-4 h-4 text-primary" />
                          Roll Number
                        </label>
                        <input
                          type="text"
                          id="rollNumber"
                          name="rollNumber"
                          value={formData.rollNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="1234567"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          Email ID *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Print Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <Package className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Print Details</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="printDescription" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-primary" />
                          What do you want to print? *
                        </label>
                        <textarea
                          id="printDescription"
                          name="printDescription"
                          required
                          rows={4}
                          value={formData.printDescription}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                          placeholder="Please describe your model and provide a link to the STL file if possible"
                        />
                        <p className="text-xs text-muted-foreground flex items-start gap-2 mt-2">
                          <LinkIcon className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>Include a link to your STL file (Google Drive, Dropbox, etc.)</span>
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="purpose" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          Purpose of the print
                        </label>
                        <select
                          id="purpose"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">Select purpose</option>
                          <option value="Personal Use">Personal Use</option>
                          <option value="College / Academic Work">College / Academic Work</option>
                          <option value="Project / Prototype">Project / Prototype</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="weight" className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Scale className="w-4 h-4 text-primary" />
                          Approximate weight in grams (Optional)
                        </label>
                        <input
                          type="number"
                          id="weight"
                          name="weight"
                          min="0"
                          step="0.1"
                          value={formData.weight}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                          placeholder="Estimated weight (optional)"
                        />
                        <p className="text-xs text-muted-foreground">
                          If you know the approximate weight of your model
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Confirmation */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-3 border-b border-border/50">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">Pricing Confirmation</h3>
                    </div>
                    
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="pricingConfirmed"
                          checked={formData.pricingConfirmed}
                          onChange={handleInputChange}
                          className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary/20"
                          required
                        />
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          I understand that the price is <span className="font-semibold">₹3.5 per gram</span> and the final cost may vary after slicing.
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400 text-center"
                      >
                        ✓ Order submitted successfully! ARC will contact you after reviewing your request.
                      </motion.div>
                    )}
                    
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-center"
                      >
                        ✗ Something went wrong. Please try again or contact us directly.
                      </motion.div>
                    )}
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold shadow-[0_0_30px_-5px_hsl(0_90%_55%_/_0.5)] hover:shadow-[0_0_40px_-5px_hsl(0_90%_55%_/_0.7)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Submit Order</span>
                        </>
                      )}
                    </motion.button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      By submitting, you agree to ARC's terms and conditions
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          <p>Need help? Contact us at{" "}
            <a href="mailto:fcrit.arc@gmail.com" className="text-primary hover:underline">
              fcrit.arc@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

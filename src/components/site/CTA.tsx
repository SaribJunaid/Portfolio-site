import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Section } from "./Section";

export function CTA() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl glass p-8 md:p-14 text-center"
      >
        <div className="absolute inset-0 bg-hero opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        <div className="relative">
          <span className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-widest text-primary">
            Book a Call
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-gradient leading-[1.1] max-w-3xl mx-auto">
            Ready to save time & convert more leads?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Let's build smarter systems for your business — from lead capture to appointment
            booking and full automation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://calendly.com/saribjunaid5/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              <Calendar className="h-4 w-4" /> Book a Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 mx-auto max-w-4xl rounded-2xl overflow-hidden border border-border bg-background">
            <iframe
              title="Calendly — Sarib Junaid"
              src="https://calendly.com/saribjunaid5/30min?hide_gdpr_banner=1&background_color=151821&text_color=f5f7fb&primary_color=4ea2ff"
              className="w-full h-[720px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

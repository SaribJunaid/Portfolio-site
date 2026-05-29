import { motion } from "framer-motion";
import sarib from "@/assets/sarib.jpg";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 to-transparent blur-2xl" />
            <div className="relative glass rounded-3xl p-2">
              <img
                src={sarib}
                alt="Sarib Junaid, AI Automation Specialist"
                loading="lazy"
                className="w-full h-[460px] object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-4 py-3 text-xs">
              <div className="font-semibold">Sarib Junaid</div>
              <div className="text-muted-foreground">AI Automation Specialist</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7"
        >
          <span className="inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] uppercase tracking-widest text-primary">
            About
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient leading-[1.1]">
            Building systems that let businesses focus on growth
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm Sarib Junaid, an AI Automation Specialist focused on helping businesses eliminate
              repetitive work, improve lead handling, and streamline operations using AI-powered systems.
            </p>
            <p>
              My journey started with solving operational inefficiencies through automation and quickly
              evolved into building complete business systems that combine AI, CRM workflows, lead
              nurturing, and appointment automation.
            </p>
            <p>
              Today, I work with tools like GoHighLevel, n8n, OpenAI, ElevenLabs, APIs, and automation
              platforms to create systems that work 24/7 — helping businesses save time, improve response
              speed, and convert more opportunities.
            </p>
          </div>
          <p className="mt-6 text-foreground font-medium">
            Build systems that work while you focus on growth.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

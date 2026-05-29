import { motion } from "framer-motion";
import { ArrowRight, Calendar, PlayCircle, Sparkles } from "lucide-react";
import { FlowDiagram } from "./FlowDiagram";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI Automation Specialist · GHL · n8n · AI Systems
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-gradient"
            >
              Save Time, Convert More Leads & Book More Appointments with AI Automation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              I help businesses automate lead capture, CRM workflows, follow-ups, qualification,
              and appointment booking using GoHighLevel, n8n, and AI-powered systems — so
              opportunities never slip through the cracks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://calendly.com/saribjunaid5/30min"
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
              >
                <Calendar className="h-4 w-4" /> Book a Strategy Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-5 py-3 text-sm font-medium hover:bg-surface transition-colors"
              >
                <PlayCircle className="h-4 w-4" /> Explore Case Studies
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xs text-muted-foreground"
            >
              Helping businesses automate operations, improve response time, and reduce manual workload.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <FlowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const tools = [
  "GoHighLevel", "n8n", "OpenAI", "ElevenLabs", "Zapier", "Make",
  "Airtable", "Shopify", "APIs", "Python", "Gemini", "Perplexity",
];

export function Tools() {
  return (
    <Section id="tools" className="pt-10 md:pt-12">
      <SectionHeader eyebrow="Stack" title="Tools & Platforms I Work With" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3"
      >
        {tools.map((t) => (
          <div
            key={t}
            className="glass glass-hover rounded-xl px-4 py-4 text-center text-sm text-muted-foreground hover:text-foreground"
          >
            {t}
          </div>
        ))}
      </motion.div>
    </Section>
  );
}

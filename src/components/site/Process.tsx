import { motion } from "framer-motion";
import { Compass, PencilRuler, Cpu, TrendingUp } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const steps = [
  { n: "01", icon: Compass, title: "Discover", text: "Understand your workflow, bottlenecks, and goals." },
  { n: "02", icon: PencilRuler, title: "Design", text: "Map the best automation strategy for your business." },
  { n: "03", icon: Cpu, title: "Build & Integrate", text: "Develop systems using GHL, AI, APIs, and automation workflows." },
  { n: "04", icon: TrendingUp, title: "Optimize", text: "Refine workflows to improve efficiency and conversion." },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="Process"
        title="A clear process that keeps automation simple"
      />
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 relative"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary">{s.n}</span>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

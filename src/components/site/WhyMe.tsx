import { motion } from "framer-motion";
import { Target, Zap, Layers, Award, Infinity as InfinityIcon } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  { icon: Target, title: "Business-Focused Automation", text: "Not just technical workflows — systems designed around business outcomes." },
  { icon: Zap, title: "Fast Communication", text: "Clear updates and reliable collaboration." },
  { icon: Layers, title: "Scalable Systems", text: "Automation designed for growth." },
  { icon: Award, title: "Real-World Experience", text: "Hands-on experience building production-ready workflows." },
  { icon: InfinityIcon, title: "Long-Term Thinking", text: "Systems designed to improve efficiency over time." },
];

export function WhyMe() {
  return (
    <Section id="why">
      <SectionHeader eyebrow="Why Me" title="Why businesses choose to work with me" />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass glass-hover rounded-2xl p-5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 border border-primary/30 text-primary">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

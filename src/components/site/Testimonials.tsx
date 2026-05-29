import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  {
    quote:
      "Sarib rebuilt our entire lead handling system in GoHighLevel. Response times went from hours to seconds and we book more calls every week.",
    name: "Operations Lead",
    role: "Insurance Agency",
  },
  {
    quote:
      "The AI voice receptionist captures every after-hours inquiry. It's like adding a 24/7 team member without the overhead.",
    name: "Founder",
    role: "Service Business",
  },
  {
    quote:
      "Our Shopify content engine now publishes consistently without us touching it. Clean, scalable, and surprisingly thoughtful.",
    name: "E-commerce Owner",
    role: "DTC Brand",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader eyebrow="Testimonials" title="What clients say" />
      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {items.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="glass glass-hover rounded-2xl p-6 relative"
          >
            <Quote className="absolute top-5 right-5 h-5 w-5 text-primary/60" />
            <div className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 text-xs">
              <div className="font-medium">{t.name}</div>
              <div className="text-muted-foreground">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}

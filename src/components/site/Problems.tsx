import { motion } from "framer-motion";
import { AlertTriangle, Clock, CalendarX, Database } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  {
    icon: AlertTriangle,
    title: "Losing Leads?",
    text: "Slow follow-ups and missed responses cost revenue. I build instant-response systems that engage leads automatically.",
  },
  {
    icon: Clock,
    title: "Too Much Manual Work?",
    text: "Automate repetitive tasks like CRM updates, lead routing, reminders, and communication.",
  },
  {
    icon: CalendarX,
    title: "Low Appointment Booking?",
    text: "AI-powered nurturing and automated scheduling systems help turn inquiries into booked calls.",
  },
  {
    icon: Database,
    title: "CRM Chaos?",
    text: "Organized pipelines, smart tagging, automation, and clear lead tracking that keeps your business running efficiently.",
  },
];

export function Problems() {
  return (
    <Section id="problems">
      <SectionHeader
        eyebrow="Problems I Solve"
        title="Your business shouldn't stop growing because operations are manual"
        subtitle="I build automation systems that eliminate repetitive work, improve lead handling, and turn missed opportunities into booked appointments."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 border border-primary/30 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

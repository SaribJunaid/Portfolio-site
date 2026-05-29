import { motion } from "framer-motion";
import { Workflow, Bot, PhoneCall, GitBranch, MessageSquare, Wrench, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const services = [
  {
    icon: Workflow,
    title: "GoHighLevel CRM Setup & Automation",
    text: "Custom pipelines, automations, funnels, tagging systems, and nurturing workflows built to streamline lead management.",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Lead Qualification",
    text: "Intelligent AI chat systems that answer questions, qualify leads, and collect information automatically.",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    text: "Inbound and outbound voice AI for appointment booking, receptionist workflows, lead follow-up, and warm calling.",
  },
  {
    icon: GitBranch,
    title: "n8n Workflow Automation",
    text: "Connect tools, automate operations, and remove repetitive processes with powerful low-code workflows.",
  },
  {
    icon: MessageSquare,
    title: "Lead Follow-Up & Appointment Systems",
    text: "Automated SMS, Email, WhatsApp, reminders, and scheduling systems to maximize conversion.",
  },
  {
    icon: Wrench,
    title: "Automation Diagnosis & Optimization",
    text: "Fix duplicate workflows, broken follow-ups, delayed messages, and inefficient automations.",
  },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Services"
        title="Designed to save time & increase conversions"
        subtitle="End-to-end automation tailored to how your business actually runs."
      />
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group glass glass-hover rounded-2xl p-6 relative overflow-hidden"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="mt-5 text-lg font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "./Section";

type CS = {
  tag: string;
  title: string;
  challenge: string;
  solution: string[];
  tech: string[];
  result: string;
  featured?: boolean;
};

const cases: CS[] = [
  {
    tag: "Shopify · AI Content",
    title: "Shopify AI Automated Blog Posting System",
    challenge: "Manually researching, writing, and publishing consistent blog content was time-consuming and difficult to scale.",
    solution: [
      "Generates blog topic ideas",
      "Stores them in Airtable for approval",
      "AI research → content creation",
      "Refines writing quality + generates images",
      "Adds SEO tags and saves to Shopify drafts",
    ],
    tech: ["Shopify", "Airtable", "Perplexity", "Gemini", "n8n"],
    result: "Reduced content production workload while creating a scalable, organized publishing workflow.",
    featured: true,
  },
  {
    tag: "Paid Ads · Automation",
    title: "Facebook Ads Automation & Optimization System",
    challenge: "Creating creatives, managing campaigns, and monitoring performance manually consumed time and slowed optimization.",
    solution: [
      "AI-generated ad ideas + captions",
      "Auto-created ad creatives",
      "Approval-based publishing pipeline",
      "Post-launch performance analysis",
      "Auto-pause + regenerate underperformers",
    ],
    tech: ["n8n", "ChatGPT", "Airtable", "Meta Ads"],
    result: "Cut manual campaign management while enabling faster testing and continuous optimization.",
    featured: true,
  },
  {
    tag: "Voice AI",
    title: "24/7 Inbound Voice AI Receptionist",
    challenge: "Missed inbound calls and delayed responses were leading to lost appointment opportunities.",
    solution: [
      "Answers inbound calls",
      "Handles customer questions",
      "Books appointments automatically",
      "Available 24/7",
    ],
    tech: ["ElevenLabs", "Voice AI", "Appointment Automation"],
    result: "Inquiries handled instantly — even outside business hours.",
  },
  {
    tag: "Insurance · GHL",
    title: "Complete Insurance Company GHL Automation System",
    challenge: "Lacked an organized lead handling, recruitment, and communication system.",
    solution: [
      "Website + phone + A2P setup",
      "Lead-specific landing pages",
      "AI chatbot + inbound/outbound voice agents",
      "Recruitment AI qualification",
      "90-day nurturing + reminders + opt-out handling",
    ],
    tech: ["GoHighLevel", "Thinkrr AI", "Voice AI", "Funnels"],
    result: "Centralized system streamlining lead management, recruitment, and appointment handling.",
    featured: true,
  },
  {
    tag: "Web · Brand",
    title: "Website Revamp for Coach Brand",
    challenge: "Outdated site failed to communicate authority or attract clients.",
    solution: ["Premium, modern, conversion-focused redesign"],
    tech: ["Design", "Copy", "Web"],
    result: "Stronger online presence and improved brand perception.",
  },
  {
    tag: "Diagnostics",
    title: "Broken Automation Diagnosis & Workflow Fix",
    challenge: "Duplicated appointment reminders and repeated follow-up messages frustrating clients.",
    solution: ["Diagnosed workflow conflicts", "Rebuilt automation logic"],
    tech: ["GHL", "n8n", "Audit"],
    result: "Restored smooth automation performance.",
  },
  {
    tag: "Reputation",
    title: "Automated Reputation Management System",
    challenge: "Inconsistent review and feedback collection.",
    solution: ["Automated review requests", "Customer rating prompts"],
    tech: ["GHL", "SMS", "Email"],
    result: "Consistent review collection and improved visibility.",
  },
  {
    tag: "Distribution",
    title: "Smart Lead Distribution System for Dealers",
    challenge: "Manual assignment caused inefficiencies and inconsistent distribution.",
    solution: ["Dynamic routing of leads to available agents"],
    tech: ["n8n", "CRM", "APIs"],
    result: "Improved handling efficiency and balanced workload.",
  },
];

function Card({ c, large }: { c: CS; large?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`glass glass-hover rounded-3xl p-6 md:p-8 relative overflow-hidden ${large ? "lg:col-span-2" : ""}`}
    >
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="flex items-center justify-between gap-4">
        <span className="text-[11px] uppercase tracking-widest text-primary">{c.tag}</span>
        <span className="text-[11px] text-muted-foreground">Case Study</span>
      </div>
      <h3 className="mt-3 text-xl md:text-2xl font-semibold leading-tight">{c.title}</h3>

      <div className={`mt-6 grid gap-6 ${large ? "md:grid-cols-2" : ""}`}>
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Challenge</p>
          <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.challenge}</p>

          <p className="mt-5 text-[11px] uppercase tracking-widest text-muted-foreground">Result</p>
          <p className="mt-1.5 text-sm text-foreground leading-relaxed">{c.result}</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Solution</p>
          <ul className="mt-2 space-y-1.5">
            {c.solution.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-none" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {c.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <SectionHeader
        eyebrow="Case Studies"
        title="Real automation systems built for real business problems"
        subtitle="How I help businesses save time, improve workflows, and convert more leads with AI and automation."
      />
      <div className="mt-12 grid lg:grid-cols-2 gap-5">
        {cases.map((c) => (
          <Card key={c.title} c={c} large={c.featured} />
        ))}
      </div>
    </Section>
  );
}

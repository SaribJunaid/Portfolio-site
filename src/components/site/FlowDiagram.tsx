import { motion } from "framer-motion";
import { Bot, Calendar, Database, MessageSquare, UserPlus } from "lucide-react";

const nodes = [
  { icon: UserPlus, label: "Lead Capture", sub: "Forms · Ads · Web" },
  { icon: Bot, label: "AI Qualification", sub: "GPT · Voice AI" },
  { icon: Database, label: "CRM Sync", sub: "GoHighLevel" },
  { icon: MessageSquare, label: "Auto Follow-Up", sub: "SMS · Email · WA" },
  { icon: Calendar, label: "Appointment Booked", sub: "Calendar · Reminders" },
];

export function FlowDiagram() {
  return (
    <div className="relative glass rounded-3xl p-5 md:p-7">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Live Automation Flow
        </span>
      </div>

      <div className="relative space-y-3">
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <motion.div
              key={n.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className="relative flex items-center gap-4 rounded-2xl border border-border bg-surface/60 px-4 py-3.5"
            >
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30">
                <Icon className="h-5 w-5 text-primary" />
                <motion.span
                  className="absolute inset-0 rounded-xl"
                  animate={{ boxShadow: ["0 0 0 0 var(--glow)", "0 0 0 8px transparent"] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium">{n.label}</div>
                <div className="text-xs text-muted-foreground">{n.sub}</div>
              </div>
              <span className="text-[10px] font-mono text-primary/80">
                {String(i + 1).padStart(2, "0")}
              </span>

              {i < nodes.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[34px] -bottom-3 h-3 w-px bg-gradient-to-b from-primary/60 to-transparent"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 text-center">
        {[
          { k: "24/7", v: "AI uptime" },
          { k: "↑ 3×", v: "response speed" },
          { k: "↓ 70%", v: "manual work" },
        ].map((s) => (
          <div key={s.v} className="rounded-xl border border-border bg-surface/40 py-3">
            <div className="text-base font-semibold text-foreground">{s.k}</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

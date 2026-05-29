import { Github, Linkedin, Briefcase, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <div>
              <div className="font-display font-semibold">Sarib Junaid</div>
              <div className="text-xs text-muted-foreground">AI Automation Specialist</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Building smarter systems with AI, automation, and scalable workflows.
          </p>
        </div>

        <div className="md:justify-self-center">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Quick Links</div>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              ["Services", "#services"],
              ["Case Studies", "#case-studies"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:justify-self-end">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Connect</div>
          <div className="mt-3 flex gap-2">
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Briefcase, href: "#", label: "Upwork" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/60 hover:bg-surface text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-5 text-xs text-muted-foreground flex justify-between flex-wrap gap-2">
          <span>© {new Date().getFullYear()} Sarib Junaid. All rights reserved.</span>
          <span>Built for businesses that want to scale.</span>
        </div>
      </div>
    </footer>
  );
}

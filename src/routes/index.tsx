import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Tools } from "@/components/site/Tools";
import { Problems } from "@/components/site/Problems";
import { Services } from "@/components/site/Services";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Process } from "@/components/site/Process";
import { About } from "@/components/site/About";
import { WhyMe } from "@/components/site/WhyMe";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarib Junaid — AI Automation Specialist | GHL, n8n & AI Systems" },
      {
        name: "description",
        content:
          "Sarib Junaid builds AI automation systems with GoHighLevel, n8n, and AI agents — automating lead capture, CRM workflows, follow-ups, and appointment booking for business growth.",
      },
      { property: "og:title", content: "Sarib Junaid — AI Automation Specialist" },
      {
        property: "og:description",
        content:
          "Save time and convert more leads with premium AI automation systems built on GHL, n8n, and AI.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <Navbar />
      <main>
        <Hero />
        <Tools />
        <Problems />
        <Services />
        <CaseStudies />
        <Process />
        <About />
        <WhyMe />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

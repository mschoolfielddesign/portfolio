import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/sections";
import PortfolioImage from "@/components/PortfolioImage";
import { SystemsGlyph, WaveField } from "@/components/illustrations";
import { CASE_STUDIES } from "@/data/case-studies";
import { useScrollProgress } from "@/hooks/use-reveal";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

const LINKEDIN_URL = "https://www.linkedin.com/in/mschoolfield/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matt Schoolfield | Senior Product Designer" },
      {
        name: "description",
        content:
          "Senior Product Designer specializing in healthcare technology and AI-powered platforms. Case studies in clinical trial software, design systems, and enterprise platform design.",
      },
      { property: "og:title", content: "Matt Schoolfield | Senior Product Designer" },
      {
        property: "og:description",
        content:
          "Portfolio of a product designer working at the intersection of AI, design systems, and complex software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const CASES = CASE_STUDIES;


const CAPABILITIES = [
  {
    t: "Systems thinking",
    d: "Token architectures, component contracts, and IA built to stay consistent across 13+ clinical trial applications.",
  },
  {
    t: "Technical fluency",
    d: "I ship in the repo with React, Tailwind, and design tokens, so specs stop being a translation layer.",
  },
  {
    t: "AI-native design",
    d: "Latency, uncertainty, and correction as first-class material. Evals and error states designed, not bolted on.",
  },
  {
    t: "Research with teeth",
    d: "Small, frequent studies wired to instrumentation, so opinions get resolved by evidence in days.",
  },
];

function Home() {
  const progress = useScrollProgress();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-signal"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            Matt Schoolfield
            <span className="ml-2 text-signal">/</span>
            <span className="ml-2 text-muted-foreground">Product Designer</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {[
              ["Work", "#work"],
              ["Approach", "#approach"],
              ["About", "#about"],
            ].map(([l, h]) => (
              <a
                key={l}
                href={h}
                className="mono-label transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-signal/40 px-4 py-1.5 text-xs font-semibold text-signal transition-colors hover:bg-signal/10"
            >
              Available for work
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative px-6 pt-40 pb-28 md:pt-52 md:pb-40">
        <div className="grid-field pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[460px] w-[860px] max-w-[130vw] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-signal)" }}
        />
        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <span className="mono-label">Portfolio · 2026</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl">
              Designing software that
              <span className="text-signal-gradient"> thinks in systems</span>, and
              interfaces that make AI trustworthy.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I'm a product designer working where healthcare, design systems, and
              production code meet. Currently designing clinical trial solutions that
              accelerate life-saving treatments at Medable.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View case studies
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
            >
              Start a conversation
            </a>
          </Reveal>

          <Reveal delay={320} className="mt-20 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {[
              ["1M+", "patients impacted"],
              ["70+", "countries reached"],
              ["400+", "clinical trials supported"],
            ].map(([n, l]) => (
              <div key={l} className="bg-surface px-6 py-7">
                <div className="font-display text-3xl text-foreground">{n}</div>
                <div className="mono-label mt-2">{l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="01"
            label="The latest"
            title="What I've been working on."
            blurb="Two in-depth case studies covering agentic AI platform design and a clinical trial design system modernization."
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {CASES.map((c, i) => (
              <Reveal
                as="article"
                key={c.id}
                delay={(i % 2) * 90}
                className="panel group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-signal/40"
              >
                <Link
                  to="/work/$slug"
                  params={{ slug: c.slug }}
                  className="relative block"
                >
                  <PortfolioImage
                    src={c.heroImage.src}
                    alt={c.heroImage.alt}
                    width={c.heroImage.width}
                    height={c.heroImage.height}
                    className="rounded-none border-b border-border"
                  />
                  <div className="p-8">

                  <div className="flex items-center gap-3">
                    <span className="mono-label text-signal">{c.id}</span>
                    <span className="mono-label">{c.kicker}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-tight md:text-3xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-signal">
                    {c.name} case study
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  </div>
                </Link>

              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="relative px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center opacity-30">
          <WaveField className="h-56 w-[1200px] text-signal-soft" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            index="02"
            label="Approach"
            title="Craft, structured like engineering."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.t} delay={i * 70} className="bg-surface p-8">
                <div className="flex items-baseline gap-3">
                  <span className="mono-label text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl">{c.t}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              index="03"
              label="About"
              title="Designing at the intersection of health, AI, and human need"
              blurb="Senior Product Designer at Medable, building clinical trial platforms used by top-10 pharma companies and 1M+ patients across 70 countries. My career spans healthcare, restaurant tech, and enterprise AI, which shapes how I approach high-stakes design where experience directly impacts outcomes, and sometimes lives."
            />
            <Reveal delay={80} className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I work embedded with engineering, prototype in Figma and Cursor, and treat the
              design system as product infrastructure, not a component library. That technical
              fluency matters most where AI, compliance, and complex workflows have to ship
              together.
            </Reveal>
            <Reveal delay={120} className="mt-8 flex flex-wrap gap-2">
              {[
                "Figma",
                "React",
                "Tailwind",
                "Design tokens",
                "Healthcare AI",
                "Clinical trials",
                "Prototyping",
              ].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </Reveal>
          </div>
          <Reveal delay={100} className="flex justify-center">
            <div className="animate-drift">
              <SystemsGlyph className="h-64 w-64 text-signal md:h-80 md:w-80" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-28">
        <Reveal className="panel mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16">
          <span className="mono-label">Hawaii, USA • Remote</span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl leading-tight md:text-5xl">
            Hiring for the hardest surface in your product?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
            Send the messy brief. I'll come back with a systems read and two directions.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ObfuscatedEmailLink
              aria-label="Send email to Matt Schoolfield"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" />
              Get in touch
            </ObfuscatedEmailLink>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-signal/50 hover:text-signal"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <span className="font-mono">© 2026 Matt Schoolfield</span>
          <span className="font-mono">Designed and built in the browser</span>
        </div>
      </footer>
    </div>
  );
}

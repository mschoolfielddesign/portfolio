import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Mail, Minus } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/portfolio/sections";
import PortfolioImage from "@/components/PortfolioImage";
import { getCaseStudy } from "@/data/case-studies";
import { useScrollProgress } from "@/hooks/use-reveal";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.headline} | Case study | Matt Schoolfield`;
    return {
      meta: [
        { title },
        { name: "description", content: study.summary.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: study.summary.slice(0, 155) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const progress = useScrollProgress();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-signal"
        style={{ transform: `scaleX(${progress})` }}
      />

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="font-display text-sm font-semibold tracking-tight">
            Matt Schoolfield
            <span className="ml-2 text-signal">/</span>
            <span className="ml-2 text-muted-foreground">Product Designer</span>
          </Link>
          <Link
            to="/"
            hash="work"
            className="mono-label inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3.5" />
            All work
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-36 pb-16 md:pt-44">
        <div className="grid-field pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_70%)]" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--gradient-signal)" }}
        />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="mono-label text-signal">{study.id}</span>
              <span className="h-px w-10 bg-border" />
              <span className="mono-label">{study.kicker}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-3xl text-[2.4rem] leading-[1.04] sm:text-5xl md:text-6xl">
              {study.headline}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {study.summary}
            </p>
          </Reveal>
          <Reveal delay={220} className="mt-8 flex flex-wrap gap-2">
            {study.pills.map((p) => (
              <span
                key={p}
                className="rounded-full border border-signal/30 bg-signal/5 px-3 py-1 font-mono text-[11px] text-signal"
              >
                {p}
              </span>
            ))}
          </Reveal>

          <Reveal delay={280} className="panel mt-14 overflow-hidden rounded-3xl p-3 md:p-4">
            <PortfolioImage
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              width={study.heroImage.width}
              height={study.heroImage.height}
              loading="eager"
              className="rounded-2xl"
            />
          </Reveal>

          <Reveal delay={120} className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {study.meta.map((m) => (
              <div key={m.k} className="bg-surface px-6 py-5">
                <div className="mono-label text-signal">{m.k}</div>
                <div className="mt-2 text-sm leading-relaxed text-foreground/90">{m.v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Challenge */}
      {study.challenge ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              index="01"
              label="The challenge"
              title={study.challenge.title ?? "Debt that had to be fixed systematically."}
              blurb={study.challenge.blurb}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal className="panel rounded-2xl p-8">
                <div className="mono-label">Before</div>
                <ul className="mt-5 space-y-3">
                  {study.challenge.before.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Minus className="mt-1 size-3.5 shrink-0 text-ember" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={90} className="panel rounded-2xl border-signal/30 p-8">
                <div className="mono-label text-signal">After</div>
                <ul className="mt-5 space-y-3">
                  {study.challenge.after.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <Check className="mt-1 size-3.5 shrink-0 text-signal" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ) : null}

      {/* Stats */}
      <section className="px-6 py-10">
        <Reveal className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {study.stats.map((s) => (
            <div key={s.l} className="bg-surface px-6 py-7">
              <div className="font-display text-3xl text-signal">{s.n}</div>
              <div className="mono-label mt-2 leading-relaxed">{s.l}</div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Feature */}
      {study.feature ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              index="02"
              label="Headline work"
              title={study.feature.heading}
              blurb={study.feature.blurb}
            />
            {study.feature.image ? (
              <Reveal delay={60} className="panel mt-12 overflow-hidden rounded-2xl p-3 md:p-4">
                <PortfolioImage
                  src={study.feature.image.src}
                  alt={study.feature.image.alt}
                  width={study.feature.image.width}
                  height={study.feature.image.height}
                  className="rounded-xl"
                />
              </Reveal>
            ) : null}
            {study.feature.items ? (
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {study.feature.items.map((it, i) => (
                  <Reveal key={it.t} delay={i * 70} className="panel rounded-2xl p-7">
                    <h3 className="font-display text-lg leading-snug">{it.t}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                  </Reveal>
                ))}
              </div>
            ) : null}
            {study.feature.quote ? (
              <Reveal delay={120} className="panel mt-10 rounded-2xl border-l-2 border-l-signal p-8 md:p-10">
                <blockquote className="text-lg leading-relaxed text-foreground/90 md:text-xl">
                  "{study.feature.quote.text}"
                </blockquote>
                <cite className="mono-label mt-5 block not-italic text-muted-foreground">
                  {study.feature.quote.attribution}
                </cite>
              </Reveal>
            ) : null}
            {study.feature.table ? (
              <Reveal delay={90} className="panel mt-12 overflow-hidden rounded-2xl">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        {study.feature.table.columns.map((c) => (
                          <th key={c} className="mono-label px-6 py-4 font-normal">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {study.feature.table.rows.map((row) => (
                        <tr key={row[0]} className="border-b border-border/60 last:border-0">
                          {row.map((cell, i) => (
                            <td
                              key={cell}
                              className={
                                i === 0
                                  ? "px-6 py-4 font-mono text-signal"
                                  : i === 2 || i === 3
                                    ? "px-6 py-4 font-mono text-xs text-muted-foreground"
                                    : "px-6 py-4 text-foreground/85"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Improvements */}
      {study.improvements ? (
        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading index="03" label="Detail" title={study.improvements.heading} />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {study.improvements.items.map((it, i) => (
                <Reveal key={it.t} delay={(i % 2) * 70} className="bg-surface p-8">
                  <div className="flex items-baseline gap-3">
                    <span className="mono-label text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl">{it.t}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                  {it.bullets ? (
                    <ul className="mt-5 space-y-2">
                      {it.bullets.map((b) => (
                        <li key={b} className="flex gap-2 font-mono text-[12px] text-foreground/75">
                          <span className="text-signal">→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Contributions */}
      {study.contributions ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              index="04"
              label="My work"
              title={study.contributions.heading}
              blurb={study.contributions.blurb}
            />
            <div className="mt-12 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {study.contributions.items.map((it, i) => (
                <Reveal key={it.t} delay={i * 50} className="bg-surface px-8 py-6">
                  <div className="flex gap-4">
                    <Check className="mt-0.5 size-4 shrink-0 text-signal" />
                    <div>
                      <h3 className="font-display text-lg">{it.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Process */}
      {study.process ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading index="04" label="Process" title={study.process.heading} />
            <ol className="mt-12 space-y-4">
              {study.process.steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.t}
                  delay={i * 60}
                  className="panel relative rounded-2xl p-8 transition-colors hover:border-signal/40"
                >
                  <div className="flex gap-6">
                    <div className="mt-1 hidden size-10 shrink-0 items-center justify-center rounded-full border border-signal/40 font-display text-signal sm:flex">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-xl">{s.t}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        {s.d}
                      </p>
                      {s.bullets ? (
                        <ul className="mt-4 space-y-2">
                          {s.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-2 text-sm leading-relaxed text-foreground/75"
                            >
                              <span className="text-signal">·</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {/* Highlights */}
      {study.highlights ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading index="05" label="Highlights" title={study.highlights.heading} />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {study.highlights.items.map((h, i) => (
                <Reveal
                  key={h.t}
                  delay={(i % 3) * 70}
                  className="panel rounded-2xl p-7 transition-transform duration-500 hover:-translate-y-1"
                >
                  <h3 className="font-display text-lg leading-snug">{h.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Impact */}
      {study.impact ? (
        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              index="06"
              label="Results"
              title={study.impact.heading}
              blurb={study.impact.blurb}
            />
            <Reveal className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {study.impact.stats.map((s) => (
                <div key={s.l} className="bg-surface px-6 py-8 text-center">
                  <div className="font-display text-4xl text-signal">{s.n}</div>
                  <div className="mono-label mt-3 leading-relaxed">{s.l}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* Next */}
      {study.next ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading
              index="07"
              label="Roadmap"
              title={study.next.heading}
              blurb={study.next.blurb}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {study.next.items.map((it, i) => (
                <Reveal key={it.t} delay={i * 70} className="panel rounded-2xl p-7">
                  <h3 className="font-display text-lg leading-snug">{it.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Lessons */}
      {study.lessons ? (
        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionHeading index="06" label="Reflection" title={study.lessons.heading} />
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {study.lessons.items.map((l, i) => (
                <Reveal key={l.t} delay={(i % 2) * 70} className="bg-surface p-8">
                  <h3 className="font-display text-lg">{l.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal className="panel rounded-3xl px-8 py-14 text-center md:px-16">
            <span className="mono-label">Want to discuss this work?</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl leading-tight md:text-4xl">
              Happy to walk through the architecture, the gates, or the trade-offs.
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <ObfuscatedEmailLink
                aria-label="Send email to Matt Schoolfield"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" />
                Get in touch
              </ObfuscatedEmailLink>
              <Link
                to="/"
                hash="work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-2"
              >
                <ArrowLeft className="size-4" />
                Back to all case studies
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <span className="font-mono">© 2026 Matt Schoolfield</span>
          <span className="font-mono">Designed and built in the browser</span>
        </div>
      </footer>
    </div>
  );
}

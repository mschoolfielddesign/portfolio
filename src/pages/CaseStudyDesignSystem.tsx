import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  X,
  Palette,
  Type,
  Shapes,
  Puzzle,
  Settings,
  Bot,
} from "lucide-react";
import medableDesignSystem from "@/assets/medable-design-system.png";
import medableDarkModeComparison from "@/assets/medable-dark-mode-comparison.png";
import PortfolioImage from "@/components/PortfolioImage";

const overview = [
  { label: "Role", value: "Senior Product Designer, Design Systems Lead" },
  { label: "Timeline", value: "2025 to 2026 (Active)" },
  { label: "Platform", value: "Storybook · React · Tailwind · Figma" },
  { label: "Scope", value: "Component library, token architecture, CI tooling, Storybook DX" },
  { label: "Tools", value: "Cursor · Figma Variables · axe-core · jest-image-snapshot" },
];

const beforeItems = [
  "Dark mode was broken: invisible text, washed-out surfaces, disappearing controls",
  "Typography inconsistencies between Storybook and consuming apps",
  "Icons at inconsistent weights and sizes across components",
  "Hardcoded color values scattered across 11 components",
  "No visual regression testing. Drift caught only by eye",
];

const afterItems = [
  "Production-quality dark mode across the full component set",
  "Self-hosted Inter Variable with pixel-for-pixel Storybook parity",
  "Heroicons-standard 1.5px strokes, correctly sized at every breakpoint",
  "Semantic token layer as a single source of truth from Figma to CSS",
  "572 pixel-diff baselines in CI across light and dark",
  "Durable third-party addon patch",
];

const challengeStats = [
  { number: "572", label: "Visual regression baselines across light and dark" },
  { number: "13+", label: "Platform applications consuming Nucleus" },
  { number: "11", label: "Components migrated from hardcoded values to tokens" },
  { number: "5", label: "Elevation levels defined, from sunken wells to overlays" },
];

const elevationRows = [
  { level: "−1", name: "Sunken", token: "bg-surface-sunken", shadow: "shadow-inner", usedFor: "Segmented-control track, progress trough" },
  { level: "0", name: "Flush", token: "bg-background", shadow: "shadow-none", usedFor: "The page itself" },
  { level: "1", name: "Raised", token: "bg-surface", shadow: "shadow", usedFor: "Cards, table rows, inputs" },
  { level: "2", name: "Floating", token: "bg-surface", shadow: "shadow-lg", usedFor: "Dropdowns, popovers, tooltips, date/time pickers" },
  { level: "3", name: "Overlay", token: "bg-surface", shadow: "shadow-2xl", usedFor: "Modal windows and dialogs above a scrim" },
];

const pillars = [
  {
    icon: Palette,
    title: "Semantic Token Architecture",
    description:
      "Figma variable exports piped through a codegen script into CSS custom properties. One toggle flips the entire system between light and dark.",
    points: [
      "Figma Variables to semantic_tokens.ts to CSS",
      "Neutral scale as RGB channels for Tailwind opacity modifiers",
      "Token drift guard wired into CI",
    ],
  },
  {
    icon: Type,
    title: "Typography System",
    description:
      "Standardized on Inter Variable, chosen for open-source licensing and strong handling of dense numeric data in clinical contexts.",
    points: [
      "Self-hosted via @fontsource-variable/inter",
      "H1/H2 display weights and letter spacing corrected",
      "Tabular, lining numerals in data tables",
    ],
  },
  {
    icon: Shapes,
    title: "Iconography Standards",
    description: "Unified icon weight, size, and color behavior across the component set in both themes.",
    points: [
      "Solid icons on all buttons",
      "Heroicons-standard 1.5px strokes via non-scaling-stroke",
      "Fixed icon-default dark value that was never flipped",
    ],
  },
  {
    icon: Puzzle,
    title: "Component Polish",
    description: "Systematic contrast, spacing, border, focus-state, and hover-state fixes applied across the full library.",
    points: [
      "Forms, overlays, tables, modals, nav, badges, chat panel",
      "New: Pagination, Drawer/Sheet, Progress components",
      "Motion tokens for consistent animation timing",
    ],
  },
  {
    icon: Settings,
    title: "Tooling and DX",
    description: "Automated quality gates catch regressions before they ship, replacing slow manual screenshot review.",
    points: [
      "572 pixel-diff baselines, light and dark",
      "axe-core WCAG 2.1 AA gate per story, per theme",
      "Durable third-party addon patch via patch-package",
    ],
  },
  {
    icon: Bot,
    title: "AI-Assisted Development",
    description:
      "Used Cursor throughout the modernization pass to ship production component code faster, bridging design intent and implementation.",
    points: [
      "Generated and refined Tailwind component variants",
      "Accelerated dark mode token migration across 11 components",
      "Shared Nucleus patterns with the team via Slack walkthroughs",
    ],
    accent: true,
  },
];

const process = [
  {
    title: "Audit and Triage",
    description:
      "Full component audit across light and dark, documenting every broken state, inconsistent token, and hardcoded value. Findings were organized into a prioritized tier system to sequence the work without blocking the team.",
    points: [
      "Catalogued all dark mode failures by component and severity",
      "Identified 11 components using #18202F directly, folded into bg-surface",
    ],
  },
  {
    title: "Token Architecture",
    description:
      "Designed the semantic token layer before touching a single component. The Figma Variables export became the single source of truth, piped into CSS custom properties that flip between :root and .dark.",
    points: [
      "Designed the 5-level elevation model in Figma, then implemented in code",
      "Token drift guard built to prevent Figma and CSS from diverging",
    ],
  },
  {
    title: "Component Migration",
    description:
      "Migrated components tier by tier: dark mode foundation first, then typography, iconography, and component-level polish. Used Cursor to accelerate repetitive token substitutions across the codebase.",
    points: [
      "Modal, cards, tables, side nav, forms, overlays, and chat panel",
      "New: Pagination, Drawer/Sheet, Progress, and motion tokens",
    ],
  },
  {
    title: "Quality Gates",
    description:
      "Built automated visual and accessibility gates so the team ships with confidence instead of relying on manual review. Pre-existing a11y debt was documented in a burn-down allow-list rather than blocking CI immediately.",
    points: [
      "572 pixel-diff baselines captured across every story in light and dark",
      "axe-core WCAG 2.1 AA runs per story, per theme",
    ],
  },
  {
    title: "Documentation and Team Enablement",
    description:
      "Published improvements as living documentation inside Storybook: Foundations pages, a Contributing checklist, and a Storybook Improvements report driven from a shared markdown file.",
    points: [
      "Foundations: Design Tokens, Theming, Iconography, Spacing/Type/Motion",
      "Slack video walkthroughs covering Nucleus layout patterns for the team",
    ],
  },
];

const tooling = [
  {
    title: "Visual Regression",
    description:
      "jest-image-snapshot pixel-diffs every story in light and dark. 572 committed baselines. CI fails on any unintended visual change.",
  },
  {
    title: "Accessibility Gate",
    description:
      "axe-core runs WCAG 2.1 A+AA over every story in both themes. A11Y=gate blocks new violations. Pre-existing debt lives in a documented allow-list to burn down over time.",
  },
  {
    title: "Token Drift Guard",
    description:
      "verify:design-tokens fails if semantic_tokens.ts or styles.css drift from their sources. Wired into CI. Figma stays the single source of truth.",
  },
  {
    title: "Durable Addon Patch",
    description:
      "storybook-addon-pseudo-states was stripping Tailwind dark:hover: rules. Patched via patch-package so the fix survives every npm install.",
  },
  {
    title: "AI-Accelerated Dev",
    description:
      "Cursor was used throughout: generating Tailwind component variants, accelerating token migrations, and shipping production code faster. Bridges the designer-engineer gap in practice.",
  },
];

const componentHighlights = [
  {
    title: "Chat Panel Redesign",
    description:
      "Replaced the kebab menu with a + actions menu, added a voice microphone control and a gradient send button with default, disabled, and responding states. User and AI messages now have distinct styling that holds in both themes.",
  },
  {
    title: "Responsive Header",
    description:
      "Nav items now collapse into a hamburger only when they actually overflow, rather than shrinking. In compact mode, the workspace switcher nests in the avatar dropdown and all controls stay pinned and visible.",
  },
  {
    title: "Modal Footer Stepper",
    description:
      "Added an optional progress stepper to modal footers. Completed steps are solid purple, the current step shows a purple dot with a light-purple halo, and upcoming steps are gray. Supports multi-step clinical workflows.",
  },
  {
    title: "Three New Components",
    description:
      "Shipped a Headless UI Drawer/Sheet with focus trap and four widths, a Pagination navigator with ellipsis truncation and full ARIA support, and a Progress bar with determinate/indeterminate modes and semantic variants.",
  },
];

const impactStats = [
  { number: "572", label: "Visual baselines protecting against drift" },
  { number: "0", label: "New a11y violations allowed to ship" },
  { number: "5", label: "Elevation levels in a consistent depth system" },
  { number: "3", label: "Net-new components shipped" },
];

const lessons = [
  {
    title: "Token Architecture Before Components",
    description:
      "Fixing dark mode component by component without a token layer is whack-a-mole. Designing the semantic layer first meant every subsequent component fix was a one-line change, not a deep dive.",
  },
  {
    title: "AI Tools Belong in the Workflow",
    description:
      "Using Cursor to ship production component code wasn't a shortcut. It was a force multiplier. Repetitive token migrations that would have taken hours took minutes.",
  },
  {
    title: "Automate the Review You'd Do Manually",
    description:
      "The team was already catching visual drift in code review, just inconsistently. A 572-baseline pixel-diff CI gate replaced a slow, unreliable manual process with a fast, automatic one.",
  },
  {
    title: "Documentation Is a Component",
    description:
      "The Foundations pages inside Storybook have already reduced \"how should I do this?\" questions on Slack. Treating docs with the same care as UI components pays compounding returns.",
  },
  {
    title: "A11y Debt Needs a Burn-Down Plan",
    description:
      "Blocking CI on every existing violation at once would have halted the team. The allow-list approach acknowledges existing debt and gates against new debt, keeping velocity and accountability in balance.",
  },
  {
    title: "Dark Mode Is a Design Decision",
    description:
      "The elevation model was the key insight. In light mode, shadows carry depth. In dark mode, surfaces must carry it instead. Once that was codified as a system, every component fix became obvious rather than arbitrary.",
  },
];

const CaseStudyDesignSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 md:px-12 py-4">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <section className="bg-hero text-white py-20 md:py-28 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-white/10 text-white/80 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border border-white/10">
              Design Systems · Healthcare · Dark Mode · Tooling
            </span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Nucleus Design System</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              A system-wide modernization of Medable's clinical trial component library, delivering full dark mode,
              semantic token architecture, automated quality gates, and design-to-code parity across a regulated
              product suite.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {[
                "✓ Production Shipped",
                "572 Visual Baselines",
                "WCAG 2.1 AA Gated",
                "13+ Platform Applications",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-block bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-secondary/10 backdrop-blur rounded-xl p-6 md:p-8 border border-white/10">
              <PortfolioImage
                src={medableDesignSystem}
                alt="Nucleus Storybook showing the Full Size Modal Window component"
                width={1024}
                height={803}
                loading="eager"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-8 bg-secondary/30 rounded-xl">
            {overview.map((item) => (
              <div key={item.label}>
                <h3 className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{item.label}</h3>
                <p className="text-foreground text-sm md:text-base leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-12">
            Nucleus powers clinical trial interfaces across 13+ Medable applications. Form views, summary panels, and
            data-dense dashboards where accuracy and clarity are non-negotiable. The library had significant visual and
            technical debt that needed to be addressed systematically.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 md:p-8 rounded-xl border border-destructive/30">
              <h3 className="text-lg font-semibold text-foreground mb-4">Before</h3>
              <ul className="space-y-3">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-6 md:p-8 rounded-xl border border-accent/40">
              <h3 className="text-lg font-semibold text-foreground mb-4">After</h3>
              <ul className="space-y-3">
                {afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {challengeStats.map((stat) => (
              <div key={stat.label} className="bg-card p-6 rounded-xl border-l-4 border-accent shadow-sm">
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Headline Work: Full Dark Mode
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-10">
            Dark mode went from broken to production-quality across every component. The solution required a semantic
            token architecture, not just toggling colors, built around a codified surface elevation model.
          </p>

          <figure className="max-w-4xl mb-12">
            <div className="p-5 md:p-8 bg-secondary/30 rounded-xl border border-border">
              <PortfolioImage
                src={medableDarkModeComparison}
                alt="Side-by-side Storybook comparison of the Full Size Modal Window in light mode and dark mode"
                width={1024}
                height={432}
                className="rounded-lg ring-1 ring-border/50"
              />
            </div>
            <figcaption className="mt-4 text-sm text-muted-foreground text-center">
              Full Size Modal Window, light and dark mode side-by-side in Storybook
            </figcaption>
          </figure>

          <h3 className="text-xl font-semibold text-foreground mb-3">The Elevation System</h3>
          <p className="text-muted-foreground max-w-4xl leading-relaxed mb-8">
            In light mode, shadows carry depth. In dark mode, shadows disappear, so surfaces must carry depth instead.
            This insight led to a canonical elevation model: every component has a defined level, surface token, and
            shadow pairing.
          </p>

          <div className="overflow-x-auto rounded-xl border border-border mb-4">
            <table className="w-full text-sm">
              <thead className="bg-accent text-accent-foreground">
                <tr>
                  {["Level", "Name", "Surface Token", "Shadow", "Used For"].map((header) => (
                    <th key={header} className="px-4 py-3 text-left font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {elevationRows.map((row, index) => (
                  <tr key={row.level} className={index % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                    <td className="px-4 py-3 font-bold text-accent">{row.level}</td>
                    <td className="px-4 py-3 text-foreground">{row.name}</td>
                    <td className="px-4 py-3">
                      <code className="text-xs bg-secondary px-2 py-1 rounded text-accent">{row.token}</code>
                    </td>
                    <td className="px-4 py-3">
                      <code className="text-xs bg-secondary px-2 py-1 rounded text-accent">{row.shadow}</code>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.usedFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-12">Six Areas of Improvement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`bg-card p-6 rounded-xl shadow-sm border-t-4 ${pillar.accent ? "border-green-500/70" : "border-accent"}`}
              >
                <pillar.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent shrink-0">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-12">Design Process</h2>
          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-8"
              >
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent text-accent-foreground font-bold flex items-center justify-center text-lg md:text-xl shadow-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Tooling and Quality Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-12">
            The modernization established an infrastructure that protects the system's quality automatically, without
            relying on manual review cycles.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tooling.map((tool) => (
              <div key={tool.title} className="bg-card p-6 rounded-xl shadow-sm border-t-4 border-green-500/70">
                <h3 className="text-lg font-semibold text-foreground mb-3">{tool.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-12">Component Highlights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {componentHighlights.map((item) => (
              <div key={item.title} className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block border-t border-border py-16 md:py-20 bg-hero text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">Impact</h2>
          <p className="text-lg text-white/90 mb-12">A more reliable, accessible, and team-trusted design system</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-sm text-white/80 leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-10">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {lessons.map((lesson) => (
              <div key={lesson.title} className="bg-card p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-accent">
                <h3 className="text-lg font-semibold text-accent mb-2">{lesson.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{lesson.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <div>
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-3">Want to Discuss This Work?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Happy to walk through the token architecture, quality gate setup, or how Cursor fit into the workflow.
              </p>
            </div>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all"
            >
              Get in Touch
            </Link>
            <div>
              <Link
                to="/#work"
                className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all case studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDesignSystem;

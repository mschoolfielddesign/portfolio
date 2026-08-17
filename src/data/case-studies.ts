/** Case study content. `art` maps to an illustration fallback when no hero image is shown. */

import medableAgentStudio from "@/assets/medable-agent-studio.png";
import medableCraAgent from "@/assets/medable-cra-agent.png";
import medableDesignSystem from "@/assets/medable-design-system.png";
import medableDarkModeComparison from "@/assets/medable-dark-mode-comparison.png";

export type ArtKey = "flow" | "tokens" | "orbit" | "wave";

export type Group = { t: string; d: string; bullets?: string[] };

export type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  id: string;
  name: string;
  kicker: string;
  /** Card title on the index page. */
  title: string;
  body: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  art: ArtKey;
  heroImage: CaseImage;

  /** Detail page */
  headline: string;
  summary: string;
  pills: string[];
  meta: { k: string; v: string }[];
  challenge?: {
    title?: string;
    blurb: string;
    before: string[];
    after: string[];
  };
  stats: { n: string; l: string }[];
  feature?: {
    heading: string;
    blurb: string;
    image?: CaseImage;
    items?: Group[];
    table?: { columns: string[]; rows: string[][] };
    quote?: { text: string; attribution: string };
  };
  improvements?: { heading: string; items: Group[] };
  contributions?: { heading: string; blurb?: string; items: Group[] };
  process?: { heading: string; steps: Group[] };
  highlights?: { heading: string; items: Group[] };
  impact?: { heading: string; blurb?: string; stats: { n: string; l: string }[] };
  next?: { heading: string; blurb?: string; items: Group[] };
  lessons?: { heading: string; items: Group[] };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "medable-agent-studio",
    id: "01",
    name: "Agent Studio",
    kicker: "Agentic AI · Healthcare",
    title: "Medable Agent Studio",
    body: "Designed Agent Studio, a no-code agentic AI platform that unifies 13+ clinical systems, removes CRA bottlenecks, and ships compliant agents in weeks instead of years.",
    tags: ["0→1", "Agent UX", "Healthcare AI"],
    metric: "50%",
    metricLabel: "faster trial startup",
    art: "flow",
    heroImage: {
      src: medableAgentStudio,
      alt: "Agent Studio platform dashboard showing agent builder and monitoring views",
      width: 1024,
      height: 635,
    },

    headline: "Medable Agent Studio",
    summary:
      "Designing the industry's first agentic AI platform for clinical development: a no-code environment where sponsors and CROs build, deploy, and scale intelligent agents that automate manual work while maintaining strict regulatory compliance.",
    pills: [
      "Production shipped",
      "No-code agent builder",
      "13+ systems unified",
      "GxP & HIPAA compliant",
    ],
    meta: [
      { k: "Platform", v: "Web application (no-code AI)" },
      { k: "Scope", v: "Agent builder, monitoring, compliance patterns, template library" },
      { k: "Team", v: "Design, Engineering and AI" },
    ],
    challenge: {
      title: "Clinical trials have outgrown manual workflows.",
      blurb:
        "Trials are increasingly complex, but development still relies on manual, sequential processes and fragmented data. White space inefficiency compounds across 13+ platforms, strict compliance requirements that take years to implement, and a 95% failure rate for AI pilots in regulated industries.",
      before: [
        "95% of AI pilots fail to reach production in regulated industries",
        "CRAs manually navigate 13+ disconnected clinical systems daily",
        "Typical compliant AI builds take two years before anything ships",
        "33% of CRA time lost to administrative stitching and reporting",
        "Sequential manual processes create white space inefficiency across trials",
      ],
      after: [
        "No-code agentic AI platform purpose-built for clinical development",
        "Unified data integration across 13+ clinical and enterprise systems",
        "Production-grade agents deployed in weeks, not years",
        "Built-in GxP, ICH, HIPAA, GDPR, and CDISC compliance from day one",
        "Configurable autonomy with human-in-the-loop checkpoints",
      ],
    },
    stats: [
      { n: "95%", l: "of AI pilots fail to reach production" },
      { n: "13+", l: "systems CRAs must manually navigate" },
      { n: "2 yrs", l: "typical time to build compliant AI" },
      { n: "33%", l: "of CRA time spent on admin tasks" },
    ],
    improvements: {
      heading: "Platform capabilities",
      items: [
        {
          t: "No-code agent builder",
          d: "Deploy ready-to-go agents or create bespoke solutions without writing a single line of code.",
        },
        {
          t: "Unified data integration",
          d: "Seamlessly connect across 13+ clinical and enterprise systems to eliminate manual data stitching.",
        },
        {
          t: "Built-in compliance",
          d: "Purpose-built with GxP, ICH, HIPAA, GDPR, and CDISC compliance baked in from day one.",
        },
        {
          t: "Flexible autonomy",
          d: "Define how much control agents have with configurable guardrails and human-in-the-loop checkpoints.",
        },
        {
          t: "Real-time insights",
          d: "Agents surface critical insights and risks automatically, enabling faster decisions.",
        },
        {
          t: "Rapid deployment",
          d: "Launch production-grade agents in weeks, not years. No two-year build cycles.",
        },
      ],
    },
    feature: {
      heading: "Featured agent: CRA Agent",
      blurb:
        "One of the first agents launched on Agent Studio. The CRA Agent removes bottlenecks in clinical research monitoring by unifying data across multiple systems and surfacing insights automatically.",
      image: {
        src: medableCraAgent,
        alt: "CRA Agent dashboard showing unified enrollment metrics and EDC insights for a clinical trial site",
        width: 1024,
        height: 679,
      },
      items: [
        {
          t: "Unified data view",
          d: "Automatically aggregates data from EDC, IRT, CTMS, eCOA, and other systems into a single interface. CRAs no longer spend hours logging into 13+ platforms.",
        },
        {
          t: "Proactive risk detection",
          d: "Identifies enrollment delays, protocol deviations, and data quality issues in real-time. Surfaces critical insights before they become major problems.",
        },
        {
          t: "Automated report generation",
          d: "Generates site visit reports, monitoring summaries, and compliance documentation automatically. Reduces CRA administrative burden by 33%.",
        },
      ],
      quote: {
        text: "The CRA Agent eliminates the white space in my day. Instead of jumping between systems and manually compiling reports, I can focus on what matters: supporting sites and ensuring patient safety.",
        attribution: "Clinical Research Associate, Top 10 Pharma Sponsor",
      },
    },
    impact: {
      heading: "Impact and results",
      blurb:
        "Agent Studio is transforming how clinical development teams work, delivering measurable improvements in efficiency, speed, and outcomes.",
      stats: [
        { n: "50%", l: "reduction in trial startup time" },
        { n: "33%", l: "less time on admin tasks" },
        { n: "13+", l: "systems unified in one platform" },
      ],
    },
  },
  {
    slug: "nucleus-design-system",
    id: "02",
    name: "Nucleus",
    kicker: "Design system · Healthcare",
    title: "Nucleus Design System",
    body: "A system-wide modernization of a clinical trial component library: full dark mode, semantic token architecture, automated quality gates, and design-to-code parity across a regulated product suite.",
    tags: ["Tokens", "Dark mode", "CI tooling"],
    metric: "572",
    metricLabel: "visual baselines in CI",
    art: "tokens",
    heroImage: {
      src: medableDesignSystem,
      alt: "Nucleus design system component library in Storybook showing clinical trial UI patterns",
      width: 1024,
      height: 803,
    },

    headline: "Nucleus Design System",
    summary:
      "A system-wide modernization of Medable's clinical trial component library, delivering full dark mode, semantic token architecture, automated quality gates, and design-to-code parity across a regulated product suite.",
    pills: [
      "Production shipped",
      "572 visual baselines",
      "WCAG 2.1 AA gated",
      "13+ platform applications",
    ],
    meta: [
      { k: "Scope", v: "Component library, token architecture, CI tooling, Storybook DX" },
      { k: "Tools", v: "Cursor · Figma Variables · axe-core · jest-image-snapshot" },
      { k: "Platform", v: "Storybook · React · Tailwind · Figma" },
    ],
    challenge: {
      title: "Debt that had to be fixed systematically.",
      blurb:
        "Nucleus powers clinical trial interfaces across 13+ applications: form views, summary panels, and data-dense dashboards where accuracy and clarity are non-negotiable. The library carried visual and technical debt that needed to be addressed systematically.",
      before: [
        "Dark mode was broken: invisible text, washed-out surfaces, disappearing controls",
        "Typography inconsistencies between Storybook and consuming apps",
        "Icons at inconsistent weights and sizes across components",
        "Hardcoded color values scattered across 11 components",
        "No visual regression testing; drift caught only by eye",
      ],
      after: [
        "Production-quality dark mode across the full component set",
        "Self-hosted Inter Variable with pixel-for-pixel Storybook parity",
        "Heroicons-standard 1.5px strokes, correctly sized at every breakpoint",
        "Semantic token layer as a single source of truth from Figma to CSS",
        "572 pixel-diff baselines in CI across light and dark",
      ],
    },
    stats: [
      { n: "572", l: "visual regression baselines, light and dark" },
      { n: "13+", l: "platform applications consuming Nucleus" },
      { n: "11", l: "components migrated off hardcoded values" },
      { n: "5", l: "elevation levels, from sunken wells to overlays" },
    ],
    feature: {
      heading: "Headline work: full dark mode",
      blurb:
        "Dark mode went from broken to production-quality across every component. The solution required a semantic token architecture, not just toggling colors, built around a codified surface elevation model. In light mode, shadows carry depth; in dark mode, shadows disappear, so surfaces must carry it instead.",
      image: {
        src: medableDarkModeComparison,
        alt: "Side-by-side comparison of Nucleus components in light mode and dark mode",
        width: 1024,
        height: 432,
      },
      table: {
        columns: ["Level", "Name", "Surface token", "Shadow", "Used for"],
        rows: [
          ["−1", "Sunken", "bg-surface-sunken", "shadow-inner", "Segmented-control track, progress trough"],
          ["0", "Flush", "bg-background", "shadow-none", "The page itself"],
          ["1", "Raised", "bg-surface", "shadow", "Cards, table rows, inputs"],
          ["2", "Floating", "bg-surface", "shadow-lg", "Dropdowns, popovers, tooltips, pickers"],
          ["3", "Overlay", "bg-surface", "shadow-2xl", "Modal windows and dialogs above a scrim"],
        ],
      },
    },
    improvements: {
      heading: "Six areas of improvement",
      items: [
        {
          t: "Semantic token architecture",
          d: "Figma variable exports piped through a codegen script into CSS custom properties. One toggle flips the entire system between light and dark.",
          bullets: [
            "Figma Variables → semantic_tokens.ts → CSS",
            "Neutral scale as RGB channels for Tailwind opacity modifiers",
            "Token drift guard wired into CI",
          ],
        },
        {
          t: "Typography system",
          d: "Standardized on Inter Variable, chosen for open-source licensing and strong handling of dense numeric data in clinical contexts.",
          bullets: [
            "Self-hosted via @fontsource-variable/inter",
            "H1/H2 display weights and letter spacing corrected",
            "Tabular, lining numerals in data tables",
          ],
        },
        {
          t: "Iconography standards",
          d: "Unified icon weight, size, and color behaviour across the component set in both themes.",
          bullets: [
            "Solid icons on all buttons",
            "Heroicons-standard 1.5px strokes via non-scaling-stroke",
            "Fixed icon-default dark value that was never flipped",
          ],
        },
        {
          t: "Component polish",
          d: "Systematic contrast, spacing, border, focus-state, and hover-state fixes applied across the full library.",
          bullets: [
            "Forms, overlays, tables, modals, nav, badges, chat panel",
            "New: Pagination, Drawer/Sheet, Progress components",
            "Motion tokens for consistent animation timing",
          ],
        },
        {
          t: "Tooling and DX",
          d: "Automated quality gates catch regressions before they ship, replacing slow manual screenshot review.",
          bullets: [
            "572 pixel-diff baselines, light and dark",
            "axe-core WCAG 2.1 AA gate per story, per theme",
          ],
        },
        {
          t: "AI-assisted development",
          d: "Used Cursor throughout the modernization pass to ship production component code faster, bridging design intent and implementation.",
          bullets: [
            "Generated and refined Tailwind component variants",
            "Accelerated dark mode token migration across 11 components",
            "Shared Nucleus patterns with the team via Slack walkthroughs",
          ],
        },
      ],
    },
    process: {
      heading: "Design process",
      steps: [
        {
          t: "Audit and triage",
          d: "Full component audit across light and dark, documenting every broken state, inconsistent token, and hardcoded value. Findings were organized into a prioritized tier system to sequence the work without blocking the team.",
          bullets: [
            "Catalogued all dark mode failures by component and severity",
            "Identified 11 components using a hardcoded hex directly, folded into bg-surface",
          ],
        },
        {
          t: "Token architecture",
          d: "Designed the semantic token layer before touching a single component. The Figma Variables export became the single source of truth, piped into CSS custom properties that flip between :root and .dark.",
          bullets: [
            "Designed the 5-level elevation model in Figma, then implemented in code",
            "Token drift guard built to prevent Figma and CSS from diverging",
          ],
        },
        {
          t: "Component migration",
          d: "Migrated components tier by tier: dark mode foundation first, then typography, iconography, and component-level polish. Used Cursor to accelerate repetitive token substitutions across the codebase.",
          bullets: [
            "Modal, cards, tables, side nav, forms, overlays, and chat panel",
            "New: Pagination, Drawer/Sheet, Progress, and motion tokens",
          ],
        },
        {
          t: "Quality gates",
          d: "Built automated visual and accessibility gates so the team ships with confidence instead of relying on manual review. Pre-existing a11y debt was documented in a burn-down allow-list rather than blocking CI immediately.",
          bullets: [
            "572 pixel-diff baselines captured across every story in light and dark",
            "axe-core WCAG 2.1 AA runs per story, per theme",
          ],
        },
        {
          t: "Documentation and team enablement",
          d: "Published improvements as living documentation inside Storybook: Foundations pages, a Contributing checklist, and a Storybook Improvements report driven from a shared markdown file.",
          bullets: [
            "Foundations: design tokens, theming, iconography, spacing/type/motion",
            "Slack video walkthroughs covering Nucleus layout patterns for the team",
          ],
        },
      ],
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

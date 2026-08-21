/** Case study content. `art` maps to an illustration fallback when no hero image is shown. */

import medableAgentStudio from "@/assets/medable-agent-studio.png";
import medableAgentStudioScreens from "@/assets/medable-agent-studio-screens.png";
import medableCraAgentChat from "@/assets/medable-cra-agent-chat.png";
import medableCraAgentDashboard from "@/assets/medable-cra-agent-dashboard.png";
import medableDesignSystem from "@/assets/medable-design-system.png";
import medableSignIn from "@/assets/medable-sign-in.png";
import medableNucleusLightMode from "@/assets/medable-nucleus-light-mode.png";
import medableNucleusDarkMode from "@/assets/medable-nucleus-dark-mode.png";
import toastOoHero from "@/assets/toast-oo-hero.png";
import toastOoDesktopExploration from "@/assets/toast-oo-desktop-exploration.png";
import toastOoWireframe from "@/assets/toast-oo-wireframe.png";
import toastOoMods from "@/assets/toast-oo-mods.png";
import toastOoModsLegacy from "@/assets/toast-oo-mods-legacy.png";
import toastOoCart from "@/assets/toast-oo-cart.png";
import toastOoCheckout from "@/assets/toast-oo-checkout.png";
import toastDsHero from "@/assets/toast-ds-hero.png";
import toastDsSurvey from "@/assets/toast-ds-survey.png";
import toastDsQuotes from "@/assets/toast-ds-quotes.png";
import toastDsLibraries from "@/assets/toast-ds-libraries.png";
import toastDsButtons from "@/assets/toast-ds-buttons.png";
import toastDsSpacing from "@/assets/toast-ds-spacing.png";
import toastDsMarketing from "@/assets/toast-ds-marketing.png";
import toastDsTpc from "@/assets/toast-ds-tpc.png";

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
  heroSecondaryImage?: CaseImage;

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
    images?: CaseImage[];
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
    heroSecondaryImage: {
      src: medableAgentStudioScreens,
      alt: "Agent Studio interface views including chat, agent library, and visual workflow builder",
      width: 1024,
      height: 721,
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
      images: [
        {
          src: medableCraAgentChat,
          alt: "Clinical Monitoring Agent chat interface with conversation history and monitoring prompt suggestions",
          width: 1024,
          height: 574,
        },
        {
          src: medableCraAgentDashboard,
          alt: "CRA Agent site dashboard with enrollment tracking, audit readiness, and AI-assisted monitoring insights",
          width: 1024,
          height: 576,
        },
      ],
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
      images: [
        {
          src: medableNucleusLightMode,
          alt: "Medable platform in light mode showing chat, agents library, and workflow canvas views",
          width: 1024,
          height: 715,
        },
        {
          src: medableNucleusDarkMode,
          alt: "Medable platform in dark mode showing chat, agents library, and workflow canvas views",
          width: 1024,
          height: 721,
        },
        {
          src: medableSignIn,
          alt: "Medable sign in screen using Nucleus design system components in dark mode",
          width: 1024,
          height: 635,
        },
      ],
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
  {
    slug: "toast-online-ordering",
    id: "03",
    name: "Online Ordering",
    kicker: "UX/UI · Restaurant tech",
    title: "Toast Online Ordering",
    body: "Redesigned Toast's white-label ordering MVP for mobile-first guest checkout, clearer modifiers, and a React component foundation that lifted GMV 10% at launch.",
    tags: ["UX/UI", "Mobile-first", "MVP"],
    metric: "10%",
    metricLabel: "GMV increase at launch",
    art: "wave",
    heroImage: {
      src: toastOoHero,
      alt: "Toast Online Ordering responsive restaurant menu experience",
      width: 1024,
      height: 640,
    },

    headline: "Toast Online Ordering",
    summary:
      "Toast's Online Ordering is a white-label pickup and delivery experience that lets restaurants keep revenue without third-party fees. Customers were avoiding it because of dated UI, clunky modifiers, and poor mobile performance. As Toast moved from Angular to React, we rebuilt the guest experience around a cohesive design language.",
    pills: ["MVP shipped", "Mobile-first", "React migration", "Guest checkout"],
    meta: [
      { k: "Role", v: "UX/UI design" },
      { k: "Scope", v: "Restaurant page, modifiers, cart, guest checkout" },
      { k: "Tools", v: "Sketch · Principle · InVision · Zeplin" },
    ],
    challenge: {
      title: "A revenue product with an experience gap.",
      blurb:
        "Online Ordering represents a significant revenue stream for restaurants, but the legacy product felt dated, was hard to customize, and was not optimized for mobile. Our team conducted interviews and quantitative research to define an MVP roadmap focused on four critical flows.",
      before: [
        "Landing page blocked guests from browsing menus before choosing pickup or delivery",
        "Modifiers lacked hierarchy; required options were inconsistent",
        "Two-column modifier layout failed on mobile",
        "Cart access and item editing were unclear on small screens",
        "Checkout forms did not use the emerging React component library",
      ],
      after: [
        "Menu-first landing with delivery method selection integrated into the page",
        "Mobile-first modifier patterns with clear required-item treatment",
        "Dedicated item photo area using existing menu photography",
        "Redesigned cart with easier item access and editing on mobile",
        "Guest checkout built on the new React component library with improved confirmation hierarchy",
      ],
    },
    stats: [
      { n: "4", l: "MVP focus areas sequenced for release" },
      { n: "10%", l: "overall GMV increase after launch" },
      { n: "Mobile", l: "usage lift driven by responsive redesign" },
      { n: "React", l: "component library adopted across checkout" },
    ],
    process: {
      heading: "Four MVP focus areas",
      steps: [
        {
          t: "Restaurant page layout and exploration",
          d: "The legacy landing page prevented guests from browsing menu items before selecting pickup or delivery. We explored concepts that immersed guests in the menu while keeping order method selection visible, including spotlight photography, cart placement, and menu hierarchy.",
          bullets: [
            "Multiple desktop layout explorations before wireframes",
            "Information architecture aligned with frontend pattern audit",
          ],
        },
        {
          t: "Item details: making modifiers the star",
          d: "Modifier screens were the highest-friction moment in ordering. Quantitative data and interviews surfaced hierarchy, required-state, and mobile layout as the core problems.",
          bullets: [
            "Lack of hierarchy and embedded expand/collapse modifiers",
            "No dedicated space for item photography",
            "Inconsistent required modifier treatment",
          ],
        },
        {
          t: "Improving the cart",
          d: "Cart work focused on how line items appeared, how guests edited modifiers after adding items, and how the cart surfaced on mobile throughout the flow.",
        },
        {
          t: "Optimizing guest checkout",
          d: "Checkout added input validation, standardized form controls from the React library, and a clearer confirmation page with pickup timing and location instructions.",
        },
      ],
    },
    feature: {
      heading: "Modifier redesign",
      blurb:
        "The updated modifier experience prioritized mobile layout, clearer required selectors, and item photography from Toast's existing database. Legacy two-column patterns were replaced with scannable single-column flows.",
      images: [
        {
          src: toastOoDesktopExploration,
          alt: "Desktop layout explorations for Toast Online Ordering restaurant page",
          width: 1024,
          height: 640,
        },
        {
          src: toastOoWireframe,
          alt: "Wireframes for Toast Online Ordering restaurant landing page",
          width: 1024,
          height: 640,
        },
        {
          src: toastOoMods,
          alt: "Redesigned modifier screen with photo, header, and mobile-first selectors",
          width: 1024,
          height: 640,
        },
        {
          src: toastOoModsLegacy,
          alt: "Legacy Toast Online Ordering modifier screen with two-column layout",
          width: 1024,
          height: 640,
        },
        {
          src: toastOoCart,
          alt: "Redesigned Toast Online Ordering cart experience",
          width: 1024,
          height: 640,
        },
        {
          src: toastOoCheckout,
          alt: "Guest checkout flow with React form components and order confirmation",
          width: 1024,
          height: 640,
        },
      ],
      quote: {
        text: "I've been using Toast online ordering for a couple years and it's one of the best decisions I've ever made. Our customers love it, and we just had an epic lunch rush because of how easy it is for us and our customers.",
        attribution: "Mari Harries, Owner of River City Eatery",
      },
    },
    impact: {
      heading: "Impact at launch",
      blurb:
        "Restaurants responded to the cleaner design, faster mobile experience, and simpler checkout. The MVP gave Toast a foundation to iterate quickly, including gift card integration during the Covid-19 takeout surge.",
      stats: [
        { n: "10%", l: "overall GMV increase" },
        { n: "↑", l: "mobile order volume post-launch" },
        { n: "MVP", l: "shipped on React component foundation" },
      ],
    },
  },
  {
    slug: "toast-design-system",
    id: "04",
    name: "Design System",
    kicker: "Design system · Restaurant tech",
    title: "Toast Design System",
    body: "Built Toast's cross-platform design system as the product moved from Bootstrap and Angular to React: Sketch libraries, Storybook, Tailwind-aligned specs, and a collaboration toolkit that drove adoption.",
    tags: ["Design systems", "Storybook", "Tailwind CSS"],
    metric: "1 qtr",
    metricLabel: "initial system delivery",
    art: "tokens",
    heroImage: {
      src: toastDsHero,
      alt: "Toast design system login screen built from the component library",
      width: 1024,
      height: 640,
    },

    headline: "Toast Design System",
    summary:
      "As Toast's web product moved from Bootstrap and Angular to React SPAs, the design team needed a system that could scale with engineering and keep new components in the pattern library. We set a one-quarter timeline for the initial effort and built adoption through research, structured libraries, and tight design-dev collaboration.",
    pills: ["Sketch libraries", "Storybook", "Tailwind CSS", "Zeplin specs"],
    meta: [
      { k: "Role", v: "UI design" },
      { k: "Scope", v: "Pattern library, foundations, Storybook, collaboration tooling" },
      { k: "Tools", v: "Sketch · Principle · Tailwind CSS · Storybook · Zeplin" },
    ],
    challenge: {
      title: "Scale without drift between design and code.",
      blurb:
        "Toast's existing Sketch library was inconsistent with what shipped. Designers could not find components, mobile patterns were missing, and dev teams were rebuilding the same UI with different specs. A survey of the product design team shaped the structure and adoption plan.",
      before: [
        "Designers could not find components they needed in the Sketch library",
        "Mobile-specific patterns were missing or outdated",
        "Discrepancies between Sketch components and coded UI",
        "Components were hard to edit and customize",
        "No shared process for requesting or tracking new components",
      ],
      after: [
        "Separate Web, iOS, and Android libraries plus shared Foundations",
        "Sketch for Teams workflow with aligned foundational tokens",
        "Storybook library with Tailwind-based specs in Zeplin",
        "Bi-weekly syncs, Slack channel, and UI office hours for the system",
        "Component request doc and KPI tracking for adoption",
      ],
    },
    stats: [
      { n: "3", l: "platform-specific Sketch libraries" },
      { n: "1", l: "shared Foundations file for tokens and icons" },
      { n: "4", l: "collaboration rituals for system ownership" },
      { n: "1 qtr", l: "target timeline for initial library delivery" },
    ],
    feature: {
      heading: "Research-driven structure",
      blurb:
        "A product design survey answered whether the team used the Sketch library, which components were most used, why designers avoided the library, and what would increase adoption. Buttons, icons, form elements, colors, and font styles topped usage; findability and dev parity were the main blockers.",
      images: [
        {
          src: toastDsSurvey,
          alt: "Survey results on Sketch library usage across the Toast product design team",
          width: 1024,
          height: 640,
        },
        {
          src: toastDsQuotes,
          alt: "Designer quotes on why the existing Sketch library was not meeting their needs",
          width: 1024,
          height: 640,
        },
        {
          src: toastDsLibraries,
          alt: "Toast design system library structure with Web, iOS, Android, and Foundations files",
          width: 1024,
          height: 640,
        },
        {
          src: toastDsButtons,
          alt: "Toast design system button component specifications",
          width: 1024,
          height: 640,
        },
        {
          src: toastDsSpacing,
          alt: "Toast design system spacing scale and layout guidelines",
          width: 1024,
          height: 640,
        },
        {
          src: toastDsMarketing,
          alt: "Toast marketing header pattern built from the design system",
          width: 1024,
          height: 640,
        },
        {
          src: toastDsTpc,
          alt: "Toast product configuration screen using design system components",
          width: 1024,
          height: 640,
        },
      ],
    },
    improvements: {
      heading: "Collaboration toolset",
      items: [
        {
          t: "Component request and development doc",
          d: "Central doc for proposing, scoping, and tracking new components through design and engineering.",
        },
        {
          t: "Bi-weekly stakeholder sync",
          d: "Regular review for all teams consuming the library to surface gaps, conflicts, and upcoming needs.",
        },
        {
          t: "Design System Slack channel",
          d: "Always-on channel for questions, announcements, and quick alignment on system decisions.",
        },
        {
          t: "Weekly UI office hours",
          d: "Open session for in-depth discussion of patterns, edge cases, and implementation details.",
        },
      ],
    },
    process: {
      heading: "Design process",
      steps: [
        {
          t: "Formulating a structure",
          d: "Research informed a library architecture that started fresh with widely used, well-built components and separated foundational tokens from platform-specific patterns.",
          bullets: [
            "New library file with components used widely and built correctly",
            "Foundational colors, fonts, grid, and layout in a dedicated Foundations file",
            "Separate icon library; close partnership with dev on coded parity",
          ],
        },
        {
          t: "Optimizing the Sketch libraries",
          d: "Three platform files (Web, iOS, Android) plus a platform-agnostic Foundations file, shared via Sketch for Teams so design stayed synchronized.",
        },
        {
          t: "Storybook and Zeplin for developer collaboration",
          d: "Frontend specs and CSS properties in Zeplin used Tailwind utility naming aligned to brand colors, typography, and spacing. Properties fed into Storybook so devs could build SPAs from the same source.",
        },
      ],
    },
    impact: {
      heading: "Results and learnings",
      blurb:
        "The Design System delivered a more scalable, cohesive visual experience across Toast web products. Ownership rituals and collaboration tooling kept the library current as new features shipped.",
      stats: [
        { n: "↑", l: "usage and adoption within Product Design" },
        { n: "↑", l: "communication on library issues and requests" },
        { n: "↓", l: "redundancy in the codebase" },
      ],
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

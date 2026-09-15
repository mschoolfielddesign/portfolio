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
import caregiverDelegateSignInFlow from "@/assets/caregiver-delegate-sign-in-flow.png";
import caregiverDelegateSignInFlowFull from "@/assets/caregiver-delegate-sign-in-flow-full.png";
import caregiverCreateParticipantAddCaregiver from "@/assets/caregiver-create-participant-add-caregiver.png";
import caregiverCreateParticipantForm from "@/assets/caregiver-create-participant-form.png";
import caregiverNewParticipantCodes from "@/assets/caregiver-new-participant-codes.png";
import caregiverParticipantDetailsCaregivers from "@/assets/caregiver-participant-details-caregivers.png";
import singleAppHero from "@/assets/single-app-hero.png";

export type ArtKey = "flow" | "tokens" | "orbit" | "wave";

export type Group = { t: string; d: string; bullets?: string[] };

export type CaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Higher-resolution asset for the zoom dialog (inline preview uses `src`). */
  fullSrc?: string;
  fullWidth?: number;
  fullHeight?: number;
  /** Opens a full-size dialog when the image is clicked. */
  expandable?: boolean;
  /** Opaque white canvas for light UI screenshots with transparency. */
  lightCanvas?: boolean;
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
  constraints?: { heading?: string; items: Group[] };
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
  improvements?: { heading: string; blurb?: string; items: Group[] };
  contributions?: { heading: string; blurb?: string; items: Group[] };
  process?: { heading: string; steps: Group[] };
  highlights?: { heading: string; blurb?: string; items: Group[] };
  impact?: { heading: string; blurb?: string; stats: { n: string; l: string }[] };
  next?: { heading: string; blurb?: string; items: Group[] };
  lessons?: { heading: string; items: Group[] };
  /** When true, process renders after Detail instead of before Headline work. */
  processAfterImprovements?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "medable-agent-studio",
    id: "01",
    name: "Agent Studio",
    kicker: "Agentic AI · Healthcare",
    title: "Medable Agent Studio",
    body: "Contributed to Agent Studio, Medable's no-code agentic AI platform for clinical development, including end-to-end design for the CRA Agent and eTMF Agent.",
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
      alt: "Agent Studio in dark mode showing chat, agents library, and visual workflow builder",
      width: 3784,
      height: 2724,
      fullSrc: medableAgentStudioScreens,
      fullWidth: 3784,
      fullHeight: 2724,
      expandable: true,
    },

    headline: "Medable Agent Studio",
    summary:
      "Contributed design across Medable Agent Studio, the industry's first no-code agentic AI platform for clinical development. Led design for two of its earliest agents, the CRA Agent and the eTMF Agent, applying the platform's trust and compliance components, and extended Nucleus to support agentic patterns along the way.",
    pills: [
      "Production shipped",
      "No-code agent builder",
      "13+ systems unified",
      "GxP & HIPAA compliant",
    ],
    meta: [
      { k: "Platform", v: "Web application (no-code AI)" },
      {
        k: "Scope",
        v: "CRA Agent, eTMF Agent, Nucleus agentic components (agent dialogs, confidence indicators, smart suggestions)",
      },
      { k: "Team", v: "Design (multiple designers), Engineering, AI" },
    ],
    challenge: {
      title: "Clinical trials have outgrown manual workflows.",
      blurb:
        "Trials are increasingly complex, but development still relies on manual, sequential processes and fragmented data. White space inefficiency compounds across 13+ platforms, strict compliance requirements that historically took years to implement, and a 95% failure rate for AI pilots in regulated industries.",
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
    constraints: {
      heading: "Constraints that shaped the work",
      items: [
        {
          t: "Trust, not just capability",
          d: "In a regulated clinical context, an agent that's powerful but unpredictable is worse than no agent at all. Every design decision had to answer how a human verifies an action before it runs.",
        },
        {
          t: "A shared trust framework, applied across different risk profiles",
          d: "The platform's guardrails, confidence indicators, and human-in-the-loop checkpoints were built to be reused across agents, which meant proving they held up against genuinely different workflows. CRA monitoring and eTMF document handling put different pressure on the same components.",
        },
        {
          t: "No prior internal pattern",
          d: "Nucleus had components for deterministic clinical workflows, not for latency, uncertainty, and correction. Extending it to support agentic UI (confidence indicators, agent dialogs, smart suggestions) was part of the work, not a given.",
        },
      ],
    },
    stats: [
      { n: "95%", l: "of AI pilots fail to reach production" },
      { n: "13+", l: "systems CRAs must manually navigate" },
      { n: "2 yrs", l: "typical time to build compliant AI" },
      { n: "33%", l: "of CRA time spent on admin tasks" },
    ],
    process: {
      heading: "Design process",
      steps: [
        {
          t: "Grounding in where trust breaks down",
          d: "Worked with ClinOps and compliance stakeholders, alongside the broader design team, to map exactly where human trust in an automated system breaks, against the specific reasons the 95% of AI pilots fail to reach production in regulated settings.",
          bullets: [
            "Most failed pilots skip human-in-the-loop checkpoints until late in development, then retrofit them under compliance pressure",
            "Set a shared design principle with the team up front: every agent action needed a legible, reviewable trail before it shipped, not after",
          ],
        },
        {
          t: "Designing autonomy as a spectrum, not a toggle",
          d: "Rather than a binary agent-or-human model, the platform's trust components were designed around configurable autonomy, with human-in-the-loop checkpoints as first-class configuration, not a fallback.",
          bullets: [
            "Applied this model to CRA Agent and eTMF Agent: risk-flagging needed a different checkpoint posture than document classification",
            "Designed guardrail configuration alongside each agent's core workflow so compliance posture is set at build time",
          ],
        },
        {
          t: "Designing CRA Agent and eTMF Agent within that framework",
          d: "CRA interviews pointed to 13+ disconnected systems as the biggest daily cost, which shaped CRA Agent's unified data view and proactive risk detection. eTMF Agent centered on classification accuracy where a wrong automated call has direct compliance consequences.",
          bullets: [
            "Designed both agents end to end: workflow, UI, and confidence/checkpoint patterns specific to each",
            "Fed agent dialogs, confidence indicators, and smart suggestions back into Nucleus for reuse by other agents",
          ],
        },
        {
          t: "Shipping in the repo",
          d: "Worked directly in Cursor alongside engineering to move from design intent to production component code faster, particularly for agent monitoring, confidence-indicator, and chat interface patterns without an existing Nucleus precedent.",
        },
      ],
    },
    improvements: {
      heading: "Platform capabilities",
      blurb:
        "Platform-wide capabilities below reflect the full Agent Studio design and engineering team. CRA Agent and eTMF Agent, detailed in Headline work, are where I owned design end to end.",
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
      heading: "CRA Agent",
      blurb:
        "One of the first agents launched on Agent Studio, and one of the two I was personally responsible for designing end to end. The CRA Agent removes bottlenecks in clinical research monitoring by unifying data across multiple systems and surfacing insights automatically.",
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
          d: "Identifies enrollment delays, protocol deviations, and data quality issues in real-time, with confidence indicators showing how much to trust a given flag before acting on it.",
        },
        {
          t: "Automated report generation",
          d: "Generates site visit reports, monitoring summaries, and compliance documentation automatically, with human-in-the-loop review built into the flow. Reduces CRA administrative burden by 33%.",
        },
      ],
    },
    highlights: {
      heading: "eTMF Agent",
      blurb:
        "The second agent I designed end to end, applying the same trust components to a document-classification workflow where accuracy and auditability matter more than speed.",
      items: [
        {
          t: "Automated document classification",
          d: "Classifies incoming trial master file documents against the required filing structure, reducing manual sorting.",
        },
        {
          t: "Confidence-scored filing decisions",
          d: "Every classification carries a visible confidence signal; low-confidence cases route to human review instead of being filed automatically.",
        },
        {
          t: "Audit-ready by design",
          d: "Every agent action is legible and traceable, built to hold up under the same compliance scrutiny as a manual filing process.",
        },
      ],
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
    lessons: {
      heading: "Reflection",
      items: [
        {
          t: "Two trust profiles, one system",
          d: "Designing two agents with different trust profiles against the same shared component system is what taught me where the trust model needed to flex. A CRA flagging risk and an eTMF agent classifying documents do not call for the same kind of human double-check, and the confidence-indicator pattern only got good once I had designed it against both. I would loop eTMF compliance stakeholders in even earlier next time, since audit-trail requirements reshaped the classification UI after patterns from CRA Agent did not fully transfer.",
        },
      ],
    },
  },
  {
    slug: "nucleus-design-system",
    id: "02",
    processAfterImprovements: true,
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
    constraints: {
      heading: "Constraints that shaped the work",
      items: [
        {
          t: "13+ live applications, zero downtime tolerance",
          d: "Every consuming app had to keep shipping while the token layer under it changed. The work had to stay additive and backward-compatible at every stage, not a rip-and-replace.",
        },
        {
          t: "Regulated product, so looks fixed was not good enough",
          d: "In a GxP-adjacent context, a visual regression that slips through is not just a bug; it is a potential compliance and data-legibility issue. That is what justified 572 pixel-diff baselines instead of manual review alone.",
        },
        {
          t: "Pre-existing accessibility debt could not block the team",
          d: "A large volume of a11y issues predated this work. Gating CI on 100% clean axe-core results immediately would have stopped all component shipping, so debt was triaged into a burn-down list instead of an all-or-nothing gate.",
        },
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
          width: 3784,
          height: 2724,
          fullSrc: medableNucleusLightMode,
          fullWidth: 3784,
          fullHeight: 2724,
          expandable: true,
        },
        {
          src: medableNucleusDarkMode,
          alt: "Medable platform in dark mode showing chat, agents library, and workflow canvas views",
          width: 3784,
          height: 2724,
          fullSrc: medableNucleusDarkMode,
          fullWidth: 3784,
          fullHeight: 2724,
          expandable: true,
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
    impact: {
      heading: "Results",
      blurb:
        "Automated quality gates and token unification changed how the team ships components across the regulated product suite.",
      stats: [
        { n: "572", l: "baselines shipped and passing in CI, light and dark" },
        { n: "13+", l: "applications on a single token source instead of scattered hardcoded values" },
        { n: "Automated", l: "regression catching replaces manual screenshot review" },
      ],
    },
    lessons: {
      heading: "Reflection",
      items: [
        {
          t: "Triaging accessibility debt",
          d: "The decision to triage pre-existing accessibility debt into a burn-down list, instead of gating CI on a clean slate, is what let this ship without stalling the team. I would socialize the elevation model with engineering earlier next time; it was the right foundation, but landing it before component migration started would have avoided some rework.",
        },
      ],
    },
  },
  {
    slug: "medable-caregiver-access",
    id: "03",
    name: "Caregiver Access",
    kicker: "0→1 workflow · Healthcare",
    title: "Caregiver Access",
    body: "Led a 0→1 workflow across sponsor, site, and patient experiences that introduced caregiver participation in trials, unlocking ~$100M in potential new sponsor revenue.",
    tags: ["0→1", "Healthcare", "Cross-experience"],
    metric: "~$100M",
    metricLabel: "revenue potential unlocked",
    art: "flow",
    heroImage: {
      src: caregiverNewParticipantCodes,
      alt: "New participant record with study and invite codes for participant and caregiver",
      width: 1440,
      height: 902,
    },
    heroSecondaryImage: {
      src: caregiverDelegateSignInFlow,
      alt: "Patient mobile flow from study and invite codes through account creation and caregiver consent",
      width: 2048,
      height: 858,
      fullSrc: caregiverDelegateSignInFlowFull,
      fullWidth: 7028,
      fullHeight: 2944,
      expandable: true,
    },

    headline: "Caregiver Access",
    summary:
      "Led a 0→1 workflow spanning sponsor, site, and patient experiences that introduced caregiver participation in clinical trials, a role that did not exist in the product before, unlocking nearly $100M in potential new revenue from study sponsors.",
    pills: [
      "Production shipped",
      "New role in the data model",
      "3 experiences unified",
      "~$100M revenue potential unlocked",
    ],
    meta: [
      {
        k: "Platform",
        v: "Sponsor configuration · Site management · Patient experience (iOS, Android, web)",
      },
      {
        k: "Scope",
        v: "Caregiver data model, consent chain, invite and permissions workflow, cross-experience identity",
      },
      { k: "Team", v: "Design, Engineering, Product, Clinical Operations" },
    ],
    challenge: {
      title: "Trials were designed around a single participant. Many patients need a second person in the room.",
      blurb:
        "The platform had no concept of a caregiver. For pediatric, elderly, and cognitively impaired populations, someone else often manages medication schedules, reports symptoms, and completes eCOA on the patient's behalf. There was no way to represent that relationship in software.",
      before: [
        "No caregiver role existed anywhere in the data model across sponsor, site, or patient experiences",
        "Sponsors built one-off manual workarounds per study or excluded caregiver-dependent populations from eligibility",
        "Site staff had no supported way to invite, verify, or manage a caregiver's access to study data",
        "No internal precedent and no clean external pattern to borrow from; genuinely ambiguous problem space",
      ],
      after: [
        "Configurable caregiver role sponsors can enable per study in the sponsor experience",
        "Site staff can invite, link, and manage caregiver access in the site experience",
        "Patient experience supports caregiver-linked accounts with their own consent and permission boundaries",
        "Studies can include caregiver-dependent populations that were previously blocked entirely",
      ],
    },
    constraints: {
      heading: "Constraints that shaped the work",
      items: [
        {
          t: "Consent chain complexity",
          d: "Caregiver consent and patient assent are not the same legal instrument. The flow had to hold up under GxP and HIPAA identity-segregation requirements.",
        },
        {
          t: "No unified identity layer",
          d: "Sponsor, site, and patient experiences did not share one model of who this person is and what they can see. The design had to work across three codebases with different data ownership boundaries.",
        },
      ],
    },
    stats: [
      { n: "0→1", l: "new caregiver role in the product" },
      { n: "3", l: "experiences unified in one workflow" },
      { n: "~$100M", l: "potential new sponsor revenue unlocked" },
    ],
    process: {
      heading: "Design process",
      steps: [
        {
          t: "Discovery with ClinOps and sponsors",
          d: "Generative interviews with ClinOps teams and sponsor stakeholders on how caregiver-dependent studies were handled off-platform, in spreadsheets and manual site processes.",
          bullets: [
            "Mapped therapeutic areas that most needed caregiver support: pediatrics, neurology, oncology with cognitive burden",
            "Catalogued manual workarounds sponsors used to route around the missing capability",
            "Identified caregiver consent vs patient assent as the crux of the design problem",
          ],
        },
        {
          t: "Mapping the identity and consent model",
          d: "Before screen design, defined who a caregiver is relative to a participant: what they can see, act on, and how access is granted, verified, and revoked.",
          bullets: [
            "Decision tree for caregiver-only, caregiver-plus-patient, and transition-of-consent scenarios",
            "Validated against GxP and HIPAA identity-segregation requirements with compliance stakeholders",
          ],
        },
        {
          t: "Cross-experience workflow design",
          d: "Designed invite-and-link as one continuous journey: sponsors enable capability in the sponsor experience, site staff issue invites in the site experience, and caregivers complete linking and consent in the patient experience.",
          bullets: [
            "Sequenced rollout so each team built against a stable contract",
            "Defined data ownership per experience given no shared identity layer at the start",
          ],
        },
        {
          t: "Validation and iteration",
          d: "Tested invite and consent flows with site coordinators and iterated on permission clarity so caregivers and patients each had a legible view of who could see what.",
        },
      ],
    },
    feature: {
      heading: "The caregiver invite and consent flow",
      blurb:
        "A site coordinator issues a caregiver invite tied to a specific participant. The caregiver completes identity verification and consent on their own device. Both patient and caregiver end up with a clear, permissioned view of what the caregiver can do on the patient's behalf.",
      images: [
        {
          src: caregiverCreateParticipantAddCaregiver,
          alt: "Create participant form with option to add a caregiver for site-managed invitation",
          width: 1024,
          height: 641,
        },
        {
          src: caregiverCreateParticipantForm,
          alt: "Create participant flow with caregiver email captured before invite",
          width: 1024,
          height: 641,
        },
        {
          src: caregiverNewParticipantCodes,
          alt: "New participant record with study and invite codes for participant and caregiver",
          width: 1440,
          height: 902,
        },
        {
          src: caregiverParticipantDetailsCaregivers,
          alt: "Participant record Caregivers tab with linked caregiver, invite codes, and site management actions",
          width: 1446,
          height: 896,
        },
      ],
      items: [
        {
          t: "Sponsor configuration",
          d: "Sponsors turn caregiver participation on per study and define permission boundaries: what a caregiver can view, complete, or submit on a participant's behalf.",
        },
        {
          t: "Site-managed invitation",
          d: "Site coordinators invite a caregiver against a specific participant record, with the same rigor as any other study role assignment.",
        },
        {
          t: "Caregiver-linked patient experience",
          d: "The caregiver completes their own consent and identity verification, then gets a permissioned view scoped to exactly what the sponsor configured.",
        },
      ],
    },
    impact: {
      heading: "Impact",
      blurb:
        "Caregiver Access made caregiver-dependent populations eligible for trials that previously had to exclude them, with a net-new capability across the platform.",
      stats: [
        { n: "~$100M", l: "potential new revenue for study sponsors" },
        { n: "0→1", l: "role that did not exist in the product before" },
        { n: "3", l: "experiences unified into one caregiver workflow" },
      ],
    },
    lessons: {
      heading: "Reflection",
      items: [
        {
          t: "Identity before UI",
          d: "The hardest part was not the screens; it was the identity model underneath. Getting the consent chain right before design scaled up prevented rework across sponsor, site, and patient experiences.",
        },
        {
          t: "Pull compliance in earlier",
          d: "The legal distinction between consent and assent reshaped the invite flow after the first pass. I would bring compliance into the decision-tree exercise even earlier next time.",
        },
      ],
    },
  },
  {
    slug: "medable-single-app",
    id: "04",
    name: "Single App",
    kicker: "0→1 redesign · Healthcare",
    title: "Single App",
    body: "Led a 0→1 redesign of participant onboarding, consolidating study-specific app versions into one application across iOS, Android, and web and cutting per-study engineering maintenance.",
    tags: ["0→1", "Healthcare", "Cross-platform"],
    metric: "N→1",
    metricLabel: "apps consolidated",
    art: "orbit",
    heroImage: {
      src: singleAppHero,
      alt: "Unified Medable patient app welcome screen with Enter study code",
      width: 1024,
      height: 608,
    },

    headline: "Single App",
    summary:
      "Led a 0→1 redesign of participant onboarding, consolidating study-specific app versions into a single application and designing the end-to-end experience across iOS, Android, and web, cutting the engineering maintenance and testing burden that came with shipping a new app per study.",
    pills: [
      "Production shipped",
      "N apps → 1",
      "iOS, Android, and web",
      "Reduced engineering maintenance and QA load",
    ],
    meta: [
      { k: "Platform", v: "Patient app (iOS, Android, web) · Medable for Sites" },
      {
        k: "Scope",
        v: "Onboarding architecture, study and invite code access model, cross-platform React consolidation",
      },
      { k: "Team", v: "Design, Engineering, Product" },
    ],
    challenge: {
      title: "Every study shipped its own app. That doesn't scale.",
      blurb:
        "Before this redesign, participant access was tied to org- and study-specific app builds. A patient enrolling in one trial downloaded a different app than a patient in another. Every study meant a new build, a new App Store submission, and a new surface for engineering to test and maintain indefinitely.",
      before: [
        "Org-specific app versions multiplied with every new study, each requiring its own build, review, and release cycle",
        "Engineering carried the ongoing burden of testing and maintaining every version in parallel, even for studies that had wrapped",
        "Patients had to find and download the correct app for their specific trial, an avoidable point of confusion and drop-off before onboarding started",
        "Site staff had no consistent way to guide participants to the right access point across a growing catalog of app variants",
      ],
      after: [
        "One Medable application in the App Store, for every study",
        "Participants access their trial with a study code and an invite code issued through Medable for Sites, with no study-specific download required",
        "A single onboarding flow designed once and shared across the site app and the patient app",
        "Engineering no longer builds, versions, or tests a new app per study",
      ],
    },
    constraints: {
      heading: "Constraints that shaped the work",
      items: [
        {
          t: "In-flight trials could not break",
          d: "The consolidation had to ship without disrupting participants already enrolled in studies running on the old per-study app model.",
        },
        {
          t: "App Store review",
          d: "Moving from many single-purpose apps to one multi-tenant app changes what the app is from a review standpoint, and the onboarding flow had to hold up under that scrutiny.",
        },
        {
          t: "Security of the code-based access model",
          d: "Study and invite codes needed to be secure enough to gate access to sensitive trial and health data without becoming a usability barrier for participants who are often not technical.",
        },
      ],
    },
    stats: [
      { n: "N→1", l: "org-specific app versions consolidated" },
      { n: "3", l: "platforms with one consistent onboarding flow" },
      { n: "Reduced", l: "ongoing engineering maintenance and QA per study" },
    ],
    process: {
      heading: "Design process",
      steps: [
        {
          t: "Audit of the existing app landscape",
          d: "Catalogued every org-specific app version in market, mapping which onboarding steps were duplicated identically across all of them versus which varied by sponsor or study.",
          bullets: [
            "Most onboarding logic was identical across app variants, with sponsor branding as the only meaningfully different layer",
            "Confirmed with engineering that parallel maintenance and QA scaled linearly with each new study",
          ],
        },
        {
          t: "Designing the access model",
          d: "Replaced download the app built for your study with download the one app, then prove you belong to your study, using study and invite codes issued through Medable for Sites.",
          bullets: [
            "Worked through how codes are generated, distributed, validated, and expired without adding friction",
            "Mapped the handoff between site coordinator actions in Medable for Sites and the participant patient app experience",
          ],
        },
        {
          t: "Cross-platform onboarding redesign",
          d: "Designed the end-to-end onboarding experience once, then adapted it consistently across iOS, Android, and web, aligned with the shift to a single React codebase.",
          bullets: [
            "Standardized the onboarding sequence so it behaves identically regardless of platform",
            "Worked with engineering on implementation feasibility given the shared React codebase effort",
          ],
        },
        {
          t: "Validation",
          d: "Tested the new code-based onboarding with participants unfamiliar with the old model to confirm the two-code entry point did not introduce new confusion in place of app-selection confusion.",
        },
      ],
    },
    feature: {
      heading: "Study code + invite code as the new front door",
      blurb:
        "Instead of finding and downloading a study-specific app, a participant downloads the one Medable app and enters a study code and invite code issued by their site, collapsing what used to be an app-discovery problem into a simple, secure access step.",
      images: [
        {
          src: caregiverNewParticipantCodes,
          alt: "Medable for Sites screen where a coordinator shares study and invite codes with a participant",
          width: 1440,
          height: 902,
        },
        {
          src: caregiverDelegateSignInFlow,
          alt: "End-to-end mobile flow from codes through account creation in the unified patient app",
          width: 2048,
          height: 858,
          fullSrc: caregiverDelegateSignInFlowFull,
          fullWidth: 7028,
          fullHeight: 2944,
          expandable: true,
        },
      ],
      items: [
        {
          t: "Site-issued access",
          d: "Site coordinators generate and share study and invite codes directly through Medable for Sites, keeping enrollment control where it belongs.",
        },
        {
          t: "One onboarding flow, every platform",
          d: "The same onboarding sequence, rebuilt once against the shared React codebase, so iOS, Android, and web no longer drift apart in behavior or maintenance cost.",
        },
      ],
    },
    impact: {
      heading: "Impact",
      blurb:
        "Consolidating to a single application shifted ongoing cost from N parallel codebases to one shared onboarding architecture.",
      stats: [
        { n: "N→1", l: "org-specific app versions consolidated into one Medable application" },
        { n: "3", l: "platforms with onboarding redesigned as one consistent flow" },
        { n: "Reduced", l: "engineering maintenance and QA, no new app build per study" },
      ],
    },
    lessons: {
      heading: "Reflection",
      items: [
        {
          t: "Reframing the problem",
          d: "The design challenge was not the screens; it was reframing the problem from which app do I need to how do I prove I belong here. That reframe is what let engineering collapse N codebases into one. I would want harder data earlier on how much drop-off the old app-discovery step caused, to make the case for prioritizing this sooner.",
        },
      ],
    },
  },
  {
    slug: "toast-online-ordering",
    id: "05",
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
          lightCanvas: true,
        },
        {
          src: toastOoModsLegacy,
          alt: "Legacy Toast Online Ordering modifier screen with two-column layout",
          width: 1024,
          height: 640,
          lightCanvas: true,
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
    id: "06",
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

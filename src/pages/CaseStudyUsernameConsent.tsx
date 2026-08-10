import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  X,
  Shield,
  Settings,
  Layers,
  Users,
  Globe,
  RefreshCw,
  Target,
  Scale,
  Rocket,
  Quote,
} from "lucide-react";
import medableUsernameConsent from "@/assets/medable-username-consent.png";
import PortfolioImage from "@/components/PortfolioImage";

const overview = [
  { label: "Role", value: "Senior Product Designer (MVP Lead)" },
  { label: "Timeline", value: "2023 - 2024 (6 months)" },
  { label: "Team", value: "Design, Engineering, Compliance, PM" },
  { label: "Impact", value: "$18M revenue return, no duplicate ORGs" },
];

const problems = [
  { title: "Duplicate Infrastructure", desc: "Sponsors had to set up, manage, and pay for two entirely separate organizations for the same study, doubling setup time, configuration effort, and costs." },
  { title: "Lost Revenue", desc: "The complexity of managing dual ORGs created friction in the sales process and limited Medable's ability to win competitive deals." },
  { title: "Study Builder Confusion", desc: "Study designers had to duplicate configurations across both ORGs and manually ensure consistency, leading to errors and delays." },
  { title: "Fragmented Participant Experience", desc: "Different consent and registration flows created confusion for participants and study coordinators." },
  { title: "Compliance Risk", desc: "Managing PII and No-PII data across separate systems increased the risk of HIPAA and GDPR violations." },
  { title: "Technical Debt", desc: "The dual-ORG architecture created ongoing maintenance burden and prevented platform evolution." },
];

const beforeAfter = {
  before: ["2 separate organizations required", "Duplicate study configurations", "2x setup time and costs", "Fragmented participant data", "High compliance risk"],
  after: ["1 unified organization", "Single study configuration", "50% reduction in setup time", "Unified participant experience", "Streamlined compliance"],
};

const solutionComponents = [
  { icon: Settings, title: "Flexible Identity Configuration", description: "Study builders choose whether participants register with email, username, or both, all within one organization." },
  { icon: Shield, title: "Smart Data Segregation", description: "PII and No-PII data remain properly separated and encrypted even within a unified ORG, maintaining compliance." },
  { icon: Users, title: "Unified Consent Workflow", description: "A single, cohesive participant registration and consent experience that adapts to study configuration." },
  { icon: RefreshCw, title: "Backward Compatibility", description: "Existing dual-ORG studies keep functioning while new studies benefit from the unified approach." },
  { icon: Globe, title: "Cross-Platform Consistency", description: "Updated UX across 13+ Medable applications, including Study Builder, Participant Portal, Admin Console, and more." },
  { icon: Layers, title: "Reusable Design Patterns", description: "Design system components for identity selection, validation states, and consent messaging." },
];

const process = [
  { title: "Discovery & System Mapping", desc: "Understood the technical architecture, business constraints, and user pain points across every affected touchpoint.", points: ["Interviewed study builders, compliance officers, and platform engineers", "Mapped participant registration flows across 13+ applications", "Documented data flow and privacy requirements (HIPAA, GDPR, 21 CFR Part 11)", "Identified technical constraints and backward compatibility requirements"] },
  { title: "Stakeholder Alignment", desc: "Defined MVP scope and success criteria for a complex, platform-wide change.", points: ["Facilitated workshops with Product, Engineering, Compliance, and Sales", "Prioritized which platform areas to update in MVP vs. future phases", "Defined success metrics: revenue impact, setup time, error rates", "Established compliance validation requirements with the regulatory team"] },
  { title: "Workflow Design & Prototyping", desc: "Designed the end-to-end registration and consent experience across email and username flows.", points: ["Created user flows for configuration, onboarding, and data management", "Designed the configuration UI for enabling username consent", "Prototyped participant-facing registration screens", "Built high-fidelity prototypes for usability testing"] },
  { title: "Cross-Platform Design System", desc: "Extended Medable's design system for consistent implementation across all affected applications.", points: ["Created reusable identity selection and consent components", "Documented interaction patterns for username/email toggles", "Designed validation states, error messages, and help text", "Built accessible patterns for screen readers and keyboard navigation"] },
  { title: "Engineering Collaboration & QA", desc: "Partnered with engineering through implementation to protect design fidelity.", points: ["Ran daily design reviews with frontend and backend engineers", "Validated data privacy implementation with the security team", "Performed extensive QA across all platform touchpoints", "Refined edge cases and error handling"] },
  { title: "Launch & Iteration", desc: "Coordinated a phased rollout, monitored adoption, and iterated on feedback.", points: ["Launched to pilot sponsors first, then general availability", "Created onboarding documentation and training materials", "Tracked adoption, setup time savings, and support tickets", "Gathered feedback from study builders and participants"] },
];

const challenges = [
  { icon: RefreshCw, title: "Backward Compatibility", problem: "Thousands of existing studies used the dual-ORG architecture and had to keep functioning normally.", solution: "Created a migration path with clear visual indicators of each study's ORG model, plus optional upgrade workflows." },
  { icon: Shield, title: "Data Privacy by Design", problem: "PII and No-PII data must stay completely segregated to meet HIPAA and GDPR requirements.", solution: "Designed clear visual separations and role-based access controls that enforced data boundaries at the design layer." },
  { icon: Target, title: "Complex Mental Models", problem: "Study builders needed to understand when to use email vs. username consent, a brand new concept.", solution: "Created contextual help, decision trees, and guided configuration flows explaining the tradeoffs." },
  { icon: Globe, title: "13+ Platform Touchpoints", problem: "The change affected Study Builder, Participant Portal, Admin Console, Reporting, API docs, and more.", solution: "Built a comprehensive design audit and implementation checklist ensuring consistency everywhere." },
  { icon: Scale, title: "Regulatory Validation", problem: "Consent workflow changes require extensive validation for 21 CFR Part 11 and ICH-GCP.", solution: "Partnered with Compliance throughout, documenting audit trails and validation evidence." },
  { icon: Rocket, title: "Phased Rollout Complexity", problem: "Features shipped in phases without leaving half-implemented experiences.", solution: "Designed progressive disclosure patterns that gracefully handled feature flags and phased releases." },
];

const results = [
  { number: "50%", label: "Reduction in study setup time" },
  { number: "100%", label: "Elimination of duplicate ORG requirement" },
  { number: "85%", label: "Reduction in configuration errors" },
  { number: "13+", label: "Platform applications updated" },
];

const businessImpact = [
  { number: "$18M", label: "Revenue ROI, won competitive deals previously lost to dual-ORG complexity" },
  { number: "2 weeks", label: "Setup time saved per study, down from 4 weeks for dual ORGs" },
  { number: "95%", label: "New studies adopted the unified ORG model within 6 months" },
  { number: "Zero", label: "Compliance violations or data privacy incidents post-launch" },
];

const benefits = [
  { title: "For Sponsors", desc: "50% reduction in setup time and costs, simplified study management, single source of truth for participant data." },
  { title: "For Study Builders", desc: "Intuitive configuration interface, no duplicated settings across ORGs, fewer configuration errors." },
  { title: "For Participants", desc: "Consistent registration regardless of identity type, clearer consent, better privacy controls." },
  { title: "For Compliance Teams", desc: "Automated data segregation, built-in audit trails, reduced compliance risk." },
  { title: "For Medable Sales", desc: "Removed a major objection in the sales process and unlocked $18M in new revenue." },
];

const CaseStudyUsernameConsent = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero */}
      <section className="bg-hero text-white py-20 md:py-28 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-white/10 text-white/80 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              Healthcare Compliance • UX Design • Enterprise MVP
            </span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">Username Consent MVP</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Redesigning participant identity workflows across Medable's clinical trial platform, eliminating
              organizational duplication and unlocking $18M in revenue
            </p>
            <div className="mt-8 inline-block bg-white/10 border border-white/20 rounded-full px-6 py-3 text-sm font-semibold tracking-wide">
              $18M USD Revenue ROI
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-secondary/10 backdrop-blur rounded-xl p-6 md:p-8 border border-white/10">
              <PortfolioImage
                src={medableUsernameConsent}
                alt="Create participant form showing email registration and set up account without email consent options"
                width={1024}
                height={641}
                loading="eager"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {overview.map((item, index) => (
              <div key={index}>
                <h3 className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{item.label}</h3>
                <p className="text-foreground text-base md:text-lg">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">The Problem</h2>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-12">
              Medable's clinical trial platform required sponsors to create two separate organizations (ORGs) for every
              study: one for participants using email addresses (PII) and another for participants using usernames
              (No-PII). This architectural limitation created massive operational inefficiencies and lost revenue
              opportunities.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {problems.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm">
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-14">
              <div className="bg-card p-6 md:p-8 rounded-xl border border-destructive/30">
                <h3 className="text-lg font-semibold text-foreground mb-4">Before: Dual ORG architecture</h3>
                <ul className="space-y-3">
                  {beforeAfter.before.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-6 md:p-8 rounded-xl border border-accent/40">
                <h3 className="text-lg font-semibold text-foreground mb-4">After: Unified ORG architecture</h3>
                <ul className="space-y-3">
                  {beforeAfter.after.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {[
                { number: "2x", label: "Setup time eliminated" },
                { number: "100%", label: "of studies required dual ORGs" },
                { number: "13+", label: "platform areas impacted" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-12">
              I designed an MVP workflow that enables studies to support both email-based and username-based participant
              registration in a single organization. This unified approach eliminated the need for duplicate ORGs while
              maintaining strict compliance with data privacy regulations.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionComponents.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                >
                  <feature.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-12">Design Process</h2>
          <div className="space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card p-6 md:p-8 rounded-xl shadow-sm flex gap-6"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.desc}</p>
                  <ul className="space-y-2">
                    {step.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-12">Key Design Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((c, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border"
              >
                <c.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.problem}</p>
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold text-accent">Solution: </span>
                  {c.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-12">Impact & Results</h2>

          <div className="bg-card rounded-xl p-8 md:p-12 text-center mb-12 shadow-sm">
            <div className="font-heading text-5xl md:text-7xl font-bold text-accent mb-3">$18M</div>
            <p className="text-muted-foreground text-lg">Return on investment in the first year</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {results.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {businessImpact.map((item, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-sm">
                <div className="font-heading text-3xl font-bold text-accent mb-2">{item.number}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          <blockquote className="bg-card p-8 md:p-10 rounded-xl shadow-sm border-l-4 border-accent mb-12">
            <Quote className="w-8 h-8 text-accent mb-4" />
            <p className="text-lg text-foreground leading-relaxed mb-4 italic">
              "Username Consent eliminated a massive pain point in our study setup process. We went from managing two
              separate organizations to one unified workflow. This saved us weeks of setup time and significantly
              reduced our operational costs."
            </p>
            <footer className="text-sm text-muted-foreground">
              Clinical Operations Manager, Top 10 Pharmaceutical Sponsor
            </footer>
          </blockquote>

          <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">Key User Benefits</h3>
          <ul className="space-y-4">
            {benefits.map((b, index) => (
              <li key={index} className="flex items-start gap-4">
                <Check className="w-5 h-5 text-accent mt-1 shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">{b.title}: </span>
                  {b.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lessons */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-10">Lessons Learned</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Enterprise architecture matters", desc: "Seemingly simple UX changes can have massive architectural implications. Understanding the technical constraints and database structure was essential. I spent significant time with engineers mapping data flows before touching Figma." },
              { title: "Compliance is a design partner", desc: "Bringing Compliance in early turned regulatory validation from a blocker into a design input, and produced the audit evidence we needed at launch." },
              { title: "Scope discipline unlocks shipping", desc: "Deciding which of the 13+ platform areas belonged in the MVP and which could wait was what made a platform-wide change deliverable in six months." },
              { title: "Design systems scale change", desc: "Reusable identity and consent components let many teams implement the same experience consistently without re-litigating every detail." },
            ].map((l, i) => (
              <div key={i} className="bg-card p-6 md:p-8 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-foreground mb-2">{l.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyUsernameConsent;

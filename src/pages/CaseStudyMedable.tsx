import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, Database, Shield, Settings, BarChart3, Rocket, Check, AlertTriangle, Users, Smartphone, Globe, TrendingUp, Search, Zap, FileText, Quote } from "lucide-react";
import medableAgentStudio from "@/assets/medable-agent-studio.png";
import medableCraAgent from "@/assets/medable-cra-agent.png";
import PortfolioImage from "@/components/PortfolioImage";

const CaseStudyMedable = () => {
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

      {/* Hero Section */}
      <section className="bg-hero text-white py-20 md:py-28 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 text-white/80 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
              Healthcare AI • Product Design
            </span>
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Medable Agent Studio
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Designing the industry's first agentic AI platform for clinical development, removing bottlenecks and accelerating life-saving treatments
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-secondary/10 backdrop-blur rounded-xl p-6 md:p-8 border border-white/10">
              <PortfolioImage
                src={medableAgentStudio}
                alt="Agent Studio Platform Dashboard"
                width={1024}
                height={635}
                loading="eager"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { label: "Role", value: "Senior Product Designer" },
              { label: "Timeline", value: "2024 - 2025 (Ongoing)" },
              { label: "Team", value: "Design, Engineering, AI/ML, PM" },
              { label: "Platform", value: "Web Application (No-code AI)" },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                  {item.label}
                </h3>
                <p className="text-foreground text-base md:text-lg">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-12">
              Clinical trials have reached the limits of human-only development. As trials become increasingly complex, manual processes are no longer sufficient to address the growing burden of human disease, leading to longer development timelines and significant delays for patients. White space inefficiency, unproductive time caused by manual, sequential processes and fragmented data systems, is compounded by system fragmentation across 13+ platforms, strict compliance requirements that take years to implement, and an alarming 95% failure rate for AI pilots in regulated industries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "95%", label: "of AI pilots fail to reach production" },
                { number: "13+", label: "systems CRAs must manually navigate" },
                { number: "2 years", label: "typical time to build compliant AI" },
                { number: "33%", label: "of CRA time spent on admin tasks" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              The Solution
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-12">
              Agent Studio is the industry's first no-code agentic AI platform purpose-built for clinical development. It enables sponsors and CROs to design, deploy, and scale intelligent agents that automate manual work, remove bottlenecks, and accelerate trial outcomes, all while maintaining strict regulatory compliance.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Bot, title: "No-Code Agent Builder", description: "Deploy ready-to-go agents or create bespoke solutions without writing a single line of code." },
                { icon: Database, title: "Unified Data Integration", description: "Seamlessly connect across 13+ clinical and enterprise systems to eliminate manual data stitching." },
                { icon: Shield, title: "Built-in Compliance", description: "Purpose-built with GxP, ICH, HIPAA, GDPR, and CDISC compliance baked in from day one." },
                { icon: Settings, title: "Flexible Autonomy", description: "Define how much control agents have with configurable guardrails and human-in-the-loop checkpoints." },
                { icon: BarChart3, title: "Real-Time Insights", description: "Agents surface critical insights and risks automatically, enabling faster decisions." },
                { icon: Rocket, title: "Rapid Deployment", description: "Launch production-grade agents in weeks, not years. No 2-year build cycles." },
              ].map((feature, index) => (
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

      {/* My Contributions */}
      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              My Design Contributions
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-10">
              I collaborated with our design team, Engineering and Product Management to shape the end-to-end experience of Agent Studio.
            </p>

            <ul className="space-y-4">
              {[
                { title: "Agent Builder Interface Design", desc: "Designed the no-code agent configuration experience through intuitive visual workflows." },
                { title: "System Integration Mapping", desc: "Created clear mental models for how data flows between 13+ clinical systems." },
                { title: "Human-in-the-Loop Patterns", desc: "Established design patterns for configurable agent autonomy with compliance requirements." },
                { title: "Agent Monitoring Dashboard", desc: "Designed real-time monitoring interfaces showing agent activity and performance metrics." },
                { title: "Compliance-First Design System", desc: "Developed UI patterns enforcing GxP, HIPAA, and 21 CFR Part 11 compliance by design." },
                { title: "Agent Template Library", desc: "Designed the browsing and discovery experience for pre-built agent templates." },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-4 py-4 border-b border-border last:border-0"
                >
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-foreground">{item.title}:</strong>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-12">
              Design Process
            </h2>

            <div className="space-y-12">
              {[
                { step: 1, title: "Research & Discovery", desc: "Conducted extensive research with CRAs, study builders, and clinical operations teams to understand pain points with manual processes." },
                { step: 2, title: "Concept Exploration", desc: "Explored multiple approaches for representing AI agent capabilities to non-technical users through visual metaphors and workflow builders." },
                { step: 3, title: "Prototyping & Testing", desc: "Built high-fidelity prototypes of the agent builder and monitoring interfaces with usability testing." },
                { step: 4, title: "Design System Development", desc: "Created reusable components and patterns ensuring consistency while meeting strict compliance requirements." },
                { step: 5, title: "Launch & Iteration", desc: "Collaborated with engineering on implementation and continuously refined based on real-world usage patterns." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 md:gap-10"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl md:text-3xl font-bold flex-shrink-0 shadow-lg">
                    {item.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-10">
              Key Design Decisions
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Visual Agent Configuration Over Code", desc: "Designed a visual workflow builder using familiar UI patterns, democratizing AI agent creation for clinical operations teams." },
                { title: "Progressive Disclosure of Complexity", desc: "Layered interface that starts simple but reveals advanced controls when needed for power users." },
                { title: "Transparent AI Decision-Making", desc: "Clear visualizations showing why agents took specific actions to build trust and satisfy audit requirements." },
                { title: "Configurable Autonomy Levels", desc: "Flexible system where users set how much independence each agent has, from fully autonomous to requiring approval." },
              ].map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-primary font-semibold text-lg mb-3">{decision.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{decision.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Agent: CRA Agent */}
      <section className="section-block--default">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              Featured Agent
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              CRA Agent
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed mb-10">
              One of the first agents launched on Agent Studio, the CRA Agent removes bottlenecks in clinical research monitoring by unifying data across multiple systems and surfacing insights automatically.
            </p>

            <div className="mb-10 rounded-xl border border-border bg-secondary/30 p-5 md:p-6">
              <PortfolioImage
                src={medableCraAgent}
                alt="CRA Agent dashboard showing unified enrollment metrics and EDC insights for a clinical trial site"
                width={1024}
                height={679}
                className="rounded-lg ring-1 ring-border/50"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: Search, title: "Unified Data View", desc: "Automatically aggregates data from EDC, IRT, CTMS, eCOA, and other systems into a single interface. CRAs no longer spend hours logging into 13+ platforms." },
                { icon: Zap, title: "Proactive Risk Detection", desc: "Identifies enrollment delays, protocol deviations, and data quality issues in real-time. Surfaces critical insights before they become major problems." },
                { icon: FileText, title: "Automated Report Generation", desc: "Generates site visit reports, monitoring summaries, and compliance documentation automatically. Reduces CRA administrative burden by 33%." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl shadow-sm"
                >
                  <feature.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-6 md:p-8 border-l-4 border-l-accent"
            >
              <Quote className="w-8 h-8 text-accent mb-4" />
              <p className="text-lg md:text-xl italic text-foreground leading-relaxed mb-4">
                "The CRA Agent eliminates the white space in my day. Instead of jumping between systems and manually compiling reports, I can focus on what matters: supporting sites and ensuring patient safety."
              </p>
              <cite className="text-sm text-muted-foreground not-italic">
                Clinical Research Associate, Top 10 Pharma Sponsor
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-block border-t border-border py-16 md:py-20 bg-hero text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">
              Impact & Results
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
              Agent Studio is transforming how clinical development teams work, delivering measurable improvements in efficiency, speed, and outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50%", label: "Reduction in trial startup time" },
                { number: "33%", label: "Less time on admin tasks" },
                { number: "13+", label: "Systems unified in one platform" },
              ].map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">{impact.number}</div>
                  <p className="text-sm md:text-base text-white/80 leading-relaxed">{impact.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Next */}
      <section className="section-block--muted">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              What's Next
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Agent Studio is just the beginning. We're continuing to evolve the platform based on user feedback and expanding into new areas of clinical development.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Multi-Agent Collaboration", desc: "Multiple agents working together on complex workflows." },
                { icon: Smartphone, title: "Mobile Agent Management", desc: "Agent monitoring and approval workflows on mobile devices." },
                { icon: Globe, title: "Global Compliance Expansion", desc: "Extending regulatory compliance to additional regions." },
                { icon: TrendingUp, title: "Predictive Analytics", desc: "Leveraging agent data to predict trial outcomes." },
              ].map((future, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <future.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{future.title}</h3>
                  <p className="text-muted-foreground text-sm">{future.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-block--default text-center">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Want to Learn More?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              I'd love to discuss this project in more detail, including design decisions, challenges we faced, and lessons learned along the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <Link
                to="/#work"
                className="inline-block px-8 py-4 bg-background border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View More Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyMedable;
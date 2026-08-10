import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Shield, Brain, Wrench, Code, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Palette,
    title: "Design Leadership",
    skills: [
      "Product Design Strategy",
      "Design Systems at Scale",
      "Cross-Functional Collaboration",
      "Stakeholder Management",
      "User Research & Testing",
      "Design Operations",
    ],
  },
  {
    icon: Shield,
    title: "Healthcare & Compliance",
    skills: [
      "Clinical Trial Platforms",
      "Patient-Centered Design",
      "HIPAA Compliance",
      "FDA Regulatory Requirements",
      "eCOA/ePRO Design",
      "Healthcare Accessibility",
    ],
  },
  {
    icon: Brain,
    title: "AI & Complex Systems",
    skills: [
      "AI Interface Design",
      "Data Visualization",
      "Enterprise SaaS Platforms",
      "Complex Workflow Design",
      "Information Architecture",
      "Human-in-the-Loop Patterns",
    ],
  },
  {
    icon: Wrench,
    title: "Design & Prototyping",
    skills: [
      "Figma",
      "Cursor",
      "V0, Builder.io, Claude",
      "Interaction Design",
      "Responsive Design",
      "WCAG Accessibility",
    ],
  },
  {
    icon: Code,
    title: "Development Collaboration",
    skills: [
      "React Components",
      "HTML/CSS/Tailwind",
      "Design Systems in Code",
      "Storybook",
      "Developer Handoff",
      "Agile Development",
    ],
  },
  {
    icon: Sparkles,
    title: "Additional Strengths",
    skills: [
      "Remote Team Leadership",
      "Multi-Stakeholder Products",
      "B2B Enterprise UX",
      "Design Documentation",
      "Rapid Iteration & Testing",
      "Product Analytics",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-block--page-muted" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block font-body text-sm font-semibold tracking-widest text-primary uppercase mb-4"
            >
              Capabilities
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-foreground"
            >
              Skills & Expertise
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-body text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

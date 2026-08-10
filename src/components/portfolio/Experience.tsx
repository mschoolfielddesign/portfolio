import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Medable",
    role: "Senior Product Designer",
    period: "2022 to Present",
    description:
      "Designing clinical trial platforms and patient experiences for a healthcare technology company serving top pharmaceutical companies. Contributing to platforms that have supported 400+ clinical trials across 70 countries, impacting over 1 million patients. Working on AI-powered features that reduce trial startup times by 50% while maintaining strict regulatory compliance (FDA, HIPAA).",
    current: true,
  },
  {
    company: "Hypergiant",
    role: "Senior Product Designer",
    period: "2020 to 2022",
    description:
      "Designed user interfaces for enterprise AI software solutions, focusing on making complex machine learning systems accessible and intuitive. Created data visualization and workflow designs for AI-powered automation platforms, working closely with data scientists and engineers to translate technical capabilities into user-friendly experiences.",
    current: false,
  },
  {
    company: "Toast",
    role: "Visual Designer → Senior Designer",
    period: "2016 to 2020",
    description:
      "Led visual and UI design for Toast's online ordering MVP and design system. Created scalable design components in React and established design patterns used across multiple product lines. Collaborated with engineering teams to build a comprehensive design system that improved consistency and development velocity across the organization.",
    current: false,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-block--page" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block font-body text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-16"
          >
            Career Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  className="relative pl-8 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full border-4 ${
                        exp.current
                          ? "bg-accent border-accent/30 shadow-glow"
                          : "bg-primary border-primary/30"
                      }`}
                    />
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                    )}
                  </div>

                  <div className="bg-card rounded-xl p-6 md:p-8 shadow-elegant border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="font-body text-primary font-medium">
                          {exp.role}
                        </p>
                      </div>
                      <span className="font-body text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-body text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

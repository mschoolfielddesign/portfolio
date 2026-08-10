import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const specializations = [
  "Healthcare Technology & Clinical Trials",
  "AI Interface Design",
  "Enterprise B2B SaaS Platforms",
  "Design Systems at Scale",
  "Regulatory Compliance Design (HIPAA, FDA)",
  "Patient-Centered Design",
  "Complex Workflow & Data Visualization",
  "Cross-Functional Leadership",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-block--page-muted" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left column - About text */}
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block font-body text-sm font-semibold tracking-widest text-primary uppercase"
              >
                About
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-tight"
              >
                Designing at the intersection of
                <span className="text-gradient"> health, AI, and human need</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-5 font-body text-muted-foreground text-lg leading-relaxed"
              >
                <p>
                  Senior Product Designer at Medable, building clinical trial platforms used by top-10 pharma companies and 1M+ patients across 70 countries.
                </p>
                <p>
                  My career spans healthcare, restaurant tech, and enterprise AI. That breadth shapes how I approach high-stakes design, where experience directly impacts outcomes, and sometimes lives.
                </p>
                <p>
                  I bring genuine technical fluency to the work, collaborating with engineers in React, Tailwind, and modern design systems to make sure vision becomes reality.
                </p>
              </motion.div>
            </div>

            {/* Right column - Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border/50"
            >
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                Design Specializations
              </h3>
              <ul className="space-y-4">
                {specializations.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 font-body text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

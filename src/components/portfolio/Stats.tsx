import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "1M+", label: "Patients Impacted" },
  { value: "70+", label: "Countries Reached" },
  { value: "400+", label: "Clinical Trials Supported" },
  { value: "$18M", label: "ROI from Consent MVP" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-block border-t border-border py-20 bg-hero" ref={ref}>
      <div className="container px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm text-foreground/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

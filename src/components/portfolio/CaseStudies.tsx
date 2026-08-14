import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import medableAgentStudio from "@/assets/medable-agent-studio.png";
import medableDesignSystem from "@/assets/medable-design-system.png";
import PortfolioImage from "@/components/PortfolioImage";

interface CaseStudy {
  image?: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  title: string;
  description: string;
  link?: string;
}

const caseStudies: CaseStudy[] = [
  {
    image: medableAgentStudio,
    imageWidth: 1024,
    imageHeight: 635,
    imageAlt: "Medable Agent Studio workflow canvas",
    title: "Medable Agent Studio",
    description:
      "Designing the industry's first no-code agentic AI platform, enabling teams to deploy compliant AI agents without engineering support.",
    link: "/case-study/medable-agent-studio",
  },
  {
    image: medableDesignSystem,
    imageWidth: 1024,
    imageHeight: 803,
    imageAlt: "Nucleus Storybook showing the Full Size Modal Window component",
    title: "Nucleus Design System",
    description:
      "A system-wide modernization of Medable's clinical trial component library, delivering full dark mode, semantic token architecture, automated quality gates, and design-to-code parity.",
    link: "/case-study/nucleus-design-system",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="section-block--page">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            The Latest
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            What I've Been Working On
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-10 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => {
            const content = (
              <>
                <div className="p-5 md:p-8 bg-secondary/20">
                  <div className="rounded-lg overflow-hidden ring-1 ring-border/50">
                    {study.image ? (
                      <PortfolioImage
                        src={study.image}
                        alt={study.imageAlt}
                        width={study.imageWidth}
                        height={study.imageHeight}
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="aspect-video w-full flex items-center justify-center text-muted-foreground/50">
                        <span className="text-sm">Screenshot coming soon</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 md:pb-8 pt-2 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {study.title}
                    </h3>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border group-hover:border-accent group-hover:bg-accent transition-all duration-300 flex-shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent-foreground transition-colors duration-300" />
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">{study.description}</p>
                </div>
              </>
            );

            return (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-500 cursor-pointer"
              >
                {study.link ? (
                  <Link to={study.link} className="block">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

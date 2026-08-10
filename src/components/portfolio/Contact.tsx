import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-block--page-muted" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block font-body text-sm font-semibold tracking-widest text-primary uppercase mb-4"
          >
            Get in Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
          >
            Let's Create Something
            <span className="text-gradient"> Meaningful</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            I'm always interested in discussing healthcare technology, AI interface design, or opportunities to create meaningful impact through design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <ObfuscatedEmailLink
              aria-label="Send email to Matt Schoolfield"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              Send Me an Email
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </ObfuscatedEmailLink>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground font-body font-medium rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-6 justify-center items-center text-muted-foreground"
          >
            <a
              href="https://www.linkedin.com/in/mschoolfield/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <div className="inline-flex items-center gap-2 font-body text-sm">
              <MapPin className="w-4 h-4" />
              Hawaii, USA • Remote
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

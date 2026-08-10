import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero flex items-center justify-center relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-foreground/10 text-foreground/80 px-4 py-2 rounded-full mb-8 border border-foreground/10"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium font-body tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 leading-[0.95]">
            Matt Schoolfield
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-4 font-light leading-relaxed"
          >
            Senior Product Designer specializing in
            <span className="text-accent font-medium"> healthcare technology </span>
            and
            <span className="text-accent font-medium"> AI-powered platforms</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-base text-foreground/50 max-w-xl mx-auto mb-10"
          >
            Currently designing clinical trial solutions that accelerate
            life-saving treatments at Medable
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Let's Connect
            </a>
            <a
              href="#work"
              className="px-8 py-4 border border-foreground/20 text-foreground font-body font-medium rounded-lg hover:bg-foreground/10 transition-all duration-300"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mt-12 text-foreground/50"
          >
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm">Hawaii, USA • Remote</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

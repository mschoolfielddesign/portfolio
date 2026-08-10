import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Matt Schoolfield. Designed with care in Hawaii.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

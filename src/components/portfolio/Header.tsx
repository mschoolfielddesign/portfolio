import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60"
    >
      <nav className="container px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-xl text-foreground font-semibold tracking-tight">
          MS
        </a>
        
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            About
          </a>
          <a
            href="#work"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Work
          </a>
          <a
            href="#experience"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Experience
          </a>
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
            <a
              href="https://www.linkedin.com/in/mschoolfield/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

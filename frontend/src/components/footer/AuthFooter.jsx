import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const AuthFooter = () => {
  return (
    <footer className="mt-8 text-center">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Facebook"
          rel="noopener noreferrer"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Twitter"
          rel="noopener noreferrer"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram"
          rel="noopener noreferrer"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
      <p className="text-sm text-muted-foreground">
        Copyright © 2025 Secure Spend.
      </p>
      <div className="flex justify-center space-x-4 mt-2 text-xs text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition-colors" rel="noopener noreferrer">
          Terms of Service
        </a>
        <span>•</span>
        <a href="#" className="hover:text-primary transition-colors" rel="noopener noreferrer">
          Support
        </a>
      </div>
    </footer>
  );
}

export default AuthFooter;
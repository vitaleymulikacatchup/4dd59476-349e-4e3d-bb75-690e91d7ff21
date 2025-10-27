import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-polymarket-dark border-t border-card-border mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left side - Links */}
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <span>Advertise Own CSS Inc. © 2023</span>
            <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-text-primary transition-colors">Learn</a>
            <a href="#" className="hover:text-text-primary transition-colors">Careers</a>
            <a href="#" className="hover:text-text-primary transition-colors">Press</a>
          </div>

          {/* Right side - Social Icons */}
          <div className="flex items-center gap-4">
            <MessageCircle className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
            <Github className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
            <MessageCircle className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
            <MessageCircle className="w-5 h-5 text-text-muted hover:text-text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
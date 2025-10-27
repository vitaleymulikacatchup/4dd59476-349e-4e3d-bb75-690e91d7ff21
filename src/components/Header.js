import React from 'react';
import { Search, Menu, Info } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-polymarket-dark border-b border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-polymarket-blue rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-text-primary font-semibold text-lg">Polymarket</span>
            <div className="flex items-center gap-1 ml-2">
              <img src="/images/us-flag.png" alt="US" className="w-4 h-3" />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Search polymarket"
                className="w-full bg-card-bg border border-card-border rounded-lg pl-10 pr-4 py-2 text-text-primary placeholder-text-muted focus:outline-none focus:border-polymarket-blue"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted text-sm">/</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-polymarket-blue cursor-pointer">
              <Info className="w-4 h-4" />
              <span className="text-sm">How it works</span>
            </div>
            <button className="text-text-secondary hover:text-text-primary transition-colors">
              Log In
            </button>
            <button className="bg-polymarket-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Sign Up
            </button>
            <button className="text-text-secondary hover:text-text-primary">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
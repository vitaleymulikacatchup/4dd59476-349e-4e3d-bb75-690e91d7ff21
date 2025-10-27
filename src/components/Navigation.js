import React from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { name: 'Trending', icon: TrendingUp, active: true },
    { name: 'Breaking', active: false },
    { name: 'New', active: false },
    { name: 'Politics', active: false },
    { name: 'Sports', active: false },
    { name: 'Finance', active: false },
    { name: 'Crypto', active: false },
    { name: 'Geopolitics', active: false },
    { name: 'Earnings', active: false },
    { name: 'Tech', active: false },
    { name: 'Culture', active: false },
    { name: 'World', active: false },
    { name: 'Economy', active: false },
    { name: 'Elections', active: false },
    { name: 'Mentions', active: false },
    { name: 'More', icon: ChevronDown, active: false }
  ];

  return (
    <nav className="bg-polymarket-dark border-b border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 py-3 overflow-x-auto scrollbar-hide">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`nav-item flex items-center gap-1 whitespace-nowrap ${
                  item.active ? 'active' : ''
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span className="text-sm">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
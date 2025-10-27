import React from 'react';
import { Search, Calendar } from 'lucide-react';

const SearchFilters = () => {
  const quickFilters = [
    'All', 'Trump', 'Gov Shutdown', 'Argentina Election', 'Venezuela',
    'Global Elections', 'World Series', 'NYC Mayor', 'Gaza', 'Earnings'
  ];

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-card-bg border border-card-border rounded-lg pl-10 pr-4 py-2 text-text-primary placeholder-text-muted focus:outline-none focus:border-polymarket-blue"
        />
        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
      </div>

      {/* Quick Filters */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
        {quickFilters.map((filter, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
              filter === 'All'
                ? 'bg-polymarket-blue text-white'
                : 'bg-card-bg text-text-secondary hover:text-text-primary border border-card-border'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchFilters;
import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';

const MarketCard = ({ market }) => {
  const getPercentageClass = (percentage, type) => {
    if (type === 'yes' && percentage > 50) return 'percentage-green';
    if (type === 'no' && percentage > 50) return 'percentage-red';
    return percentage > 50 ? 'percentage-green' : 'percentage-red';
  };

  return (
    <div className="market-card">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          {market.image && (
            <img 
              src={market.image} 
              alt="Market" 
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          {market.country && (
            <img 
              src={`/images/${market.country}-flag.png`} 
              alt={market.country} 
              className="w-4 h-3"
            />
          )}
        </div>
        <div className="flex items-center gap-2">
          {market.live && (
            <div className="live-badge">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              LIVE
            </div>
          )}
          <MessageCircle className="w-4 h-4 text-text-muted" />
          <ExternalLink className="w-4 h-4 text-text-muted" />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-text-primary font-medium text-sm mb-4 line-clamp-2">
        {market.question}
      </h3>

      {/* Options */}
      <div className="space-y-2 mb-4">
        {market.options.map((option, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-text-secondary text-sm truncate">
                {option.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`percentage-badge ${
                getPercentageClass(option.percentage, option.type)
              }`}>
                {option.percentage}%
              </span>
              <div className="flex gap-1">
                <span className="text-xs text-polymarket-green">Yes</span>
                <span className="text-xs text-polymarket-red">No</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>{market.volume}</span>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-3 h-3" />
          <ExternalLink className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
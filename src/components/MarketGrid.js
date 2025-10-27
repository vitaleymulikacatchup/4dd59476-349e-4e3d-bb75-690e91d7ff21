import React from 'react';
import MarketCard from './MarketCard';
import SearchFilters from './SearchFilters';

const MarketGrid = () => {
  const markets = [
    {
      id: 1,
      question: "When will the Government shutdown end?",
      options: [
        { name: "October 31-November...", percentage: 10, type: "yes" },
        { name: "November 4-7", percentage: 16, type: "no" }
      ],
      volume: "$3k Vol.",
      image: "/images/government.jpg"
    },
    {
      id: 2,
      question: "New York City Mayoral Election",
      options: [
        { name: "Zohran Mamdani", percentage: 85, type: "yes" },
        { name: "Andrew Cuomo", percentage: 4, type: "no" }
      ],
      volume: "$303m Vol.",
      image: "/images/nyc.jpg"
    },
    {
      id: 3,
      question: "HR > Venezuela military engagement by...?",
      options: [
        { name: "October 27", percentage: 1, type: "yes" },
        { name: "October 31", percentage: 7, type: "no" }
      ],
      volume: "$4m Vol.",
      image: "/images/venezuela.jpg"
    },
    {
      id: 4,
      question: "World Series Champion 2025",
      options: [
        { name: "Los Angeles Dodgers", percentage: 69, type: "yes" },
        { name: "Toronto Blue Jays", percentage: 32, type: "no" }
      ],
      volume: "$75m Vol.",
      image: "/images/baseball.jpg"
    },
    {
      id: 5,
      question: "Fabian Marozsan",
      country: "netherlands",
      options: [
        { name: "Fabian", percentage: 27, type: "yes" },
        { name: "Arthur Rinderknech", percentage: 73, type: "no" }
      ],
      volume: "$110k Vol.",
      live: true,
      image: "/images/tennis.jpg"
    },
    {
      id: 6,
      question: "Commanders",
      options: [
        { name: "Commanders", percentage: 54, type: "yes" },
        { name: "Chiefs", percentage: 47, type: "no" }
      ],
      volume: "$888k Vol.",
      image: "/images/nfl.jpg"
    },
    {
      id: 7,
      question: "Which party wins most seats in Argentina Deputies Election?",
      options: [
        { name: "LLA (La Libertad...", percentage: 100, type: "yes" },
        { name: "UP (Unión por la Patria)", percentage: -1, type: "no" }
      ],
      volume: "$7m Vol.",
      image: "/images/argentina.jpg"
    },
    {
      id: 8,
      question: "TikTok sale announced by...?",
      options: [
        { name: "October 31", percentage: 17, type: "yes" },
        { name: "December 31", percentage: 63, type: "no" }
      ],
      volume: "$3m Vol.",
      image: "/images/tiktok.jpg"
    }
  ];

  return (
    <div>
      <SearchFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
        {markets.map((market) => (
          <MarketCard key={market.id} market={market} />
        ))}
      </div>
    </div>
  );
};

export default MarketGrid;
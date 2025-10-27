import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MarketGrid from './components/MarketGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-polymarket-darker">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-6">
        <MarketGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
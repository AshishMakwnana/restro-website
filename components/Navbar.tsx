
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
          <span className={`font-display text-xl font-bold ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
            Sawariya <span className="text-orange-600">Sandwich</span>
          </span>
        </a>
        <div className={`hidden md:flex gap-8 font-medium ${isScrolled ? 'text-stone-600' : 'text-white/90'}`}>
          <a href="#home" className="hover:text-orange-600 transition-colors">Home</a>
          <a href="#menu" className="hover:text-orange-600 transition-colors">Menu</a>
          <a href="#ai-recommend" className="hover:text-orange-600 transition-colors">AI Suggest</a>
          <a href="#location" className="hover:text-orange-600 transition-colors">Location</a>
        </div>
        <a 
          href="#menu" 
          className="bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

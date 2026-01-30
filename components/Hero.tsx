
import React from 'react';
import { RESTAURANT_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1528733918455-5a59687cedf0?auto=format&fit=crop&q=80&w=1920" 
          alt="Gourmet Sandwich" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in-up">
          Fresh, Cheesy & <br />
          <span className="text-orange-500">Truly Indian.</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light max-w-2xl mx-auto">
          {RESTAURANT_DETAILS.tagline}. Handcrafted with love and our secret spices in the heart of Ujjain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-xl shadow-orange-600/40"
          >
            Explore Menu
          </a>
          <a 
            href="#location" 
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
          >
            Find Us
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

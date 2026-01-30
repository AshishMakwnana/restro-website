
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuCard from './components/MenuCard';
import RecommendationSection from './components/RecommendationSection';
import { MENU_ITEMS, CATEGORIES, RESTAURANT_DETAILS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Menu Section */}
      <section id="menu" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display mb-4">Our Signature Menu</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'All' ? 'bg-orange-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              All Items
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === cat ? 'bg-orange-600 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <RecommendationSection />

      {/* Location & Map Section */}
      <section id="location" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Find Us</span>
              <h2 className="text-4xl md:text-5xl font-display mb-8">Visit Shree Sawariya Sandwich</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Our Location</h4>
                    <p className="text-stone-600 leading-relaxed">{RESTAURANT_DETAILS.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Open Hours</h4>
                    <p className="text-stone-600">{RESTAURANT_DETAILS.workingHours} (Daily)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800 mb-1">Contact</h4>
                    <p className="text-stone-600">{RESTAURANT_DETAILS.phone}</p>
                    <p className="text-stone-600">{RESTAURANT_DETAILS.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src={RESTAURANT_DETAILS.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">S</div>
                <span className="font-display text-2xl font-bold">Sawariya <span className="text-orange-600">Sandwich</span></span>
              </div>
              <p className="text-stone-400 max-w-sm mb-8">
                Bringing the authentic taste of street-style sandwiches with a premium twist. Quality ingredients and incredible flavors since 2015.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-600 transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-stone-400 group-hover:bg-white"></div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-4 text-stone-400">
                <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-orange-500 transition-colors">Our Menu</a></li>
                <li><a href="#ai-recommend" className="hover:text-orange-500 transition-colors">AI Suggestion</a></li>
                <li><a href="#location" className="hover:text-orange-500 transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Newsletter</h4>
              <p className="text-stone-400 text-sm mb-4">Get special offers and menu updates.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-orange-500" />
                <button className="bg-orange-600 px-4 py-2 rounded-lg font-bold hover:bg-orange-700 transition-all">Go</button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 text-center text-stone-500 text-sm">
            <p>© {new Date().getFullYear()} {RESTAURANT_DETAILS.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

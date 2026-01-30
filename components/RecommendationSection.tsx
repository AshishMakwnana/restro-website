
import React, { useState } from 'react';
import { getMenuRecommendation } from '../services/geminiService';
import { MENU_ITEMS } from '../constants';
import { RecommendationResponse } from '../types';

const RecommendationSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await getMenuRecommendation(query, MENU_ITEMS);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-recommend" className="py-24 bg-stone-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">AI Powered</span>
          <h2 className="text-4xl md:text-5xl font-display mb-6">Can't Decide What to Eat?</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Tell our AI Chef what you're in the mood for (e.g., "something spicy with lots of cheese" or "a light snack") and we'll pick the perfect meal for you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2 mb-10">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: I want a spicy sandwich with paneer..." 
              className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:border-orange-500 transition-all backdrop-blur-sm"
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-stone-700 px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-orange-600/20"
            >
              {loading ? 'Asking Chef...' : 'Ask Chef'}
            </button>
          </form>

          {result && (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 animate-fade-in backdrop-blur-md">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-orange-500 font-bold mb-2 uppercase text-xs tracking-wider">Chef's Pick</h4>
                  <p className="text-xl text-stone-200 italic leading-relaxed">"{result.recommendation}"</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {result.suggestedItems.map((item, idx) => (
                  <span key={idx} className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-600/50 transition-colors cursor-pointer">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[150px]"></div>
    </section>
  );
};

export default RecommendationSection;

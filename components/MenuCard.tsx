
import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isPopular && (
            <span className="bg-amber-500 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Popular</span>
          )}
          {item.isSpicy && (
            <span className="bg-red-600 text-white text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded">Spicy 🔥</span>
          )}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-stone-800 leading-tight group-hover:text-orange-600 transition-colors">{item.name}</h3>
          <span className="text-orange-600 font-bold text-lg">₹{item.price}</span>
        </div>
        <p className="text-stone-500 text-sm mb-4 flex-grow">{item.description}</p>
        <button className="w-full py-2 bg-stone-50 text-stone-700 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all">
          Add to Plate
        </button>
      </div>
    </div>
  );
};

export default MenuCard;

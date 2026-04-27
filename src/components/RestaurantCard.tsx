/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Clock, ChefHat } from 'lucide-react';
import { motion } from 'motion/react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

export default function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 cursor-pointer group"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {restaurant.offers.map((offer, idx) => (
            <span key={idx} className="bg-brand text-white text-[10px] font-black px-3 py-1.5 rounded-xl uppercase tracking-wider shadow-lg">
              {offer}
            </span>
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
          <div className="flex items-center gap-1 text-white">
            <Star className="fill-yellow-400 text-yellow-400" size={16} />
            <span className="text-sm font-black">{restaurant.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-brand transition-colors">
            {restaurant.name}
          </h3>
          <div className={`w-3 h-3 rounded-full border-2 border-white ${restaurant.isVeg ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-brand'}`} />
        </div>
        
        <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mb-4">
          <div className="flex items-center gap-1.5">
            <Clock size={16} className="text-brand" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ChefHat size={16} />
            <span>{restaurant.cuisine[0]}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
          <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{restaurant.priceRange}</span>
          <span className="text-brand text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
            View Menu →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

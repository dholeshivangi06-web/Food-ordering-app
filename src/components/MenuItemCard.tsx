/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <div className="flex gap-4 p-6 hover:bg-slate-50 rounded-[1.5rem] transition-all group border border-transparent hover:border-slate-100">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-3 h-3 rounded-full border-2 border-white ${item.isVeg ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.2)]' : 'bg-brand'}`} />
          <h4 className="text-xl font-bold text-slate-800">{item.name}</h4>
        </div>
        <span className="text-brand font-black text-lg mb-2 block tracking-tight">₹{item.price.toFixed(0)}</span>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 leading-relaxed font-medium">
          {item.description}
        </p>
      </div>
      
      <div className="relative flex-shrink-0 w-36 h-36">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover rounded-[1.5rem] shadow-md group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onAddToCart(item)}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-brand border border-slate-100 shadow-xl px-8 py-2 rounded-xl font-black text-xs hover:bg-brand hover:text-white transition-all uppercase tracking-widest whitespace-nowrap"
        >
          Add
        </motion.button>
      </div>
    </div>
  );
}

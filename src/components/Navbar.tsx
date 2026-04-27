/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Search, ShoppingBag, MapPin, User, LogIn } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  return (
    <nav className="sticky top-6 z-50 bg-white mx-6 md:mx-12 mt-6 rounded-3xl shadow-sm border border-slate-100 py-3 px-6 flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span className="text-2xl font-black text-brand tracking-tighter italic">FOODIEZ</span>
      </motion.div>

      <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl mx-8">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:text-brand cursor-pointer transition-colors">
          <MapPin size={16} className="text-brand" />
          <span>New York, NY</span>
        </div>
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search for restaurants, cuisines or dishes"
            className="w-full pl-11 pr-4 py-2.5 bg-slate-100 border-none rounded-2xl text-sm focus:ring-2 focus:ring-brand/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden sm:flex items-center justify-center p-2.5 bg-slate-100 text-slate-600 rounded-full hover:bg-brand/10 hover:text-brand transition-all">
          <User size={20} />
        </button>
        <button 
          onClick={onOpenCart}
          className="relative px-5 py-2.5 bg-brand text-white rounded-2xl font-bold hover:shadow-lg transition-all active:scale-95"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} />
            <span className="text-sm">Cart</span>
          </div>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-white text-brand text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}

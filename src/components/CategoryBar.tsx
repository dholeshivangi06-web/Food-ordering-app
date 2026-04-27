/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';

const BACKGROUNDS = [
  'bg-orange-50 border-orange-100 text-orange-900',
  'bg-blue-50 border-blue-100 text-blue-900',
  'bg-emerald-50 border-emerald-100 text-emerald-900',
  'bg-purple-50 border-purple-100 text-purple-900',
  'bg-rose-50 border-rose-100 text-rose-900',
  'bg-amber-50 border-amber-100 text-amber-900',
];

export default function CategoryBar() {
  return (
    <div className="py-12 overflow-hidden">
      <div className="px-6 md:px-12 mb-8">
        <h2 className="text-2xl font-black text-slate-800 tracking-tight italic">Top Categories</h2>
      </div>
      <div className="flex gap-6 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className={`flex-shrink-0 w-32 h-40 rounded-[2rem] p-4 flex flex-col items-center justify-center gap-4 cursor-pointer group border transition-all duration-300 hover:shadow-lg ${BACKGROUNDS[index % BACKGROUNDS.length]}`}
          >
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm group-hover:scale-110 transition-transform">
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-inherit">
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <div className="relative h-[480px] w-full overflow-hidden mb-8 bg-gradient-to-br from-brand to-brand-dark rounded-[2rem] border-4 border-white shadow-xl">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1543007630-9710e40ff56d?auto=format&fit=crop&q=80&w=2000" 
          alt="Restaurant Hero"
          className="w-full h-full object-cover mix-blend-overlay opacity-40 shrink-0"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20">
              Special Offer
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-6 leading-[1.1] tracking-tighter italic">
              Grab 50% Off<br />
              <span className="text-white/80">on Italian Week.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-6 max-w-xl font-medium leading-relaxed">
              Experience authentic flavors delivered directly to your doorstep. 
              Valid on all orders above ₹499.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
          >
            <button className="bg-white text-brand px-10 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 shadow-lg shadow-black/10">
              Order Now
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute -right-12 -bottom-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}

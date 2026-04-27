/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, SlidersHorizontal, ChevronRight, ArrowLeft, Plus } from 'lucide-react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import RestaurantCard from './components/RestaurantCard';
import MenuItemCard from './components/MenuItemCard';
import CartDrawer from './components/CartDrawer';
import Hero from './components/Hero';
import { RESTAURANTS, MENU_ITEMS } from './constants';
import { CartItem, MenuItem, Restaurant } from './types';

export default function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => 
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return newQty === 0 ? null : { ...item, quantity: newQty };
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar cartCount={cart.reduce((s, i) => s + i.quantity, 0)} onOpenCart={() => setCartOpen(true)} />
      
      <main className="pb-20">
        <AnimatePresence mode="wait">
          {!selectedRestaurant ? (
            <motion.div
              key="explore"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-7xl mx-auto px-6 md:px-12 mt-8"
            >
              <div className="grid grid-cols-12 gap-8">
                {/* Main Bento Hero: 8 cols */}
                <div className="col-span-12 lg:col-span-8">
                  <Hero />
                </div>

                {/* Sidebar Bento Cards: 4 cols */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                  <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col gap-6">
                    <h3 className="font-bold text-xl flex items-center justify-between text-slate-800">
                      Quick Reorder 
                      <span className="text-xs font-black text-brand hover:underline cursor-pointer uppercase tracking-widest">History</span>
                    </h3>
                    <div className="bg-slate-50 p-5 rounded-2xl flex items-center gap-4 border border-slate-100 hover:border-brand/20 transition-colors cursor-pointer group">
                      <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform">🍕</div>
                      <div>
                        <p className="font-black text-slate-800">Pepperoni Feast</p>
                        <p className="text-xs text-slate-500 font-medium">Artisan Pizza Co. • 15 min ago</p>
                      </div>
                      <button className="ml-auto bg-brand text-white p-2.5 rounded-xl hover:shadow-lg transition-all active:scale-90">
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#1A1A1A] rounded-[2rem] p-8 text-white border border-slate-800 shadow-xl relative overflow-hidden group">
                    <div className="flex justify-between items-start relative z-10">
                      <div className="bg-emerald-500 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest">ACTIVE</div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Foodiez Wallet</div>
                    </div>
                    <div className="mt-6 relative z-10">
                      <p className="text-4xl font-mono tracking-tighter">₹8,450</p>
                      <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-widest">+₹150 cashback pending</p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-3 relative z-10">
                      <button className="bg-white/10 py-3 rounded-xl text-xs font-black border border-white/5 hover:bg-white/20 transition-all uppercase tracking-widest">Add Funds</button>
                      <button className="bg-brand py-3 rounded-xl text-xs font-black hover:bg-brand-dark transition-all uppercase tracking-widest">View Deals</button>
                    </div>
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand/10 rounded-full blur-2xl group-hover:bg-brand/20 transition-all"></div>
                  </div>
                </div>

                {/* Categories: 12 cols */}
                <div className="col-span-12">
                   <CategoryBar />
                </div>

                {/* Restaurant List: 12 cols */}
                <div className="col-span-12">
                  <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <h2 className="text-4xl font-black text-slate-800 tracking-tighter italic">Trending Nearby</h2>
                      <p className="text-slate-500 mt-2 font-medium">Curated selection of the highest rated cuisines in your area</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-6 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all flex items-center gap-3 font-black text-xs uppercase tracking-widest text-slate-600 shadow-sm">
                        <SlidersHorizontal size={14} className="text-brand" />
                        Filters
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {RESTAURANTS.map((res) => (
                      <RestaurantCard 
                        key={res.id} 
                        restaurant={res} 
                        onClick={() => setSelectedRestaurant(res)} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto px-6 py-8"
            >
              <button 
                onClick={() => setSelectedRestaurant(null)}
                className="flex items-center gap-2 text-gray-500 hover:text-orange-600 font-bold mb-8 transition-colors group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Back to Restaurants</span>
              </button>

              <div className="relative h-64 rounded-[2rem] overflow-hidden mb-8 shadow-xl shadow-gray-200">
                <img 
                  src={selectedRestaurant.image} 
                  alt={selectedRestaurant.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">40% OFF</span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md">FREE DELIVERY</span>
                  </div>
                  <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">{selectedRestaurant.name}</h1>
                  <p className="text-gray-300 font-medium">
                    {selectedRestaurant.cuisine.join(', ')} • {selectedRestaurant.deliveryTime}
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    Recommended
                    <div className="h-0.5 flex-1 bg-gray-100" />
                  </h3>
                  <div className="grid gap-6">
                    {MENU_ITEMS.map((item) => (
                      <MenuItemCard 
                        key={item.id} 
                        item={item} 
                        onAddToCart={handleAddToCart} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <CartDrawer 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClearCart={() => setCart([])}
      />

      <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                <ShoppingBagIcon className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">Foodiez</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Premium food delivery service. Quality ingredients, local favorites, and super-fast delivery.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-orange-600 cursor-pointer">About Us</li>
              <li className="hover:text-orange-600 cursor-pointer">Foodiez Corporate</li>
              <li className="hover:text-orange-600 cursor-pointer">Careers</li>
              <li className="hover:text-orange-600 cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Support</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-orange-600 cursor-pointer">Help Center</li>
              <li className="hover:text-orange-600 cursor-pointer">Safety Center</li>
              <li className="hover:text-orange-600 cursor-pointer">Community guidelines</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Get the app</h4>
            <div className="space-y-3">
              <div className="bg-gray-900 text-white p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">📱</div>
                <div>
                  <p className="text-[10px] opacity-70 uppercase">Get it on</p>
                  <p className="text-xs font-bold">App Store</p>
                </div>
              </div>
              <div className="bg-gray-900 text-white p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors">
                <div className="w-6 h-6 flex items-center justify-center">🤖</div>
                <div>
                  <p className="text-[10px] opacity-70 uppercase">Get it on</p>
                  <p className="text-xs font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { ShoppingBag as ShoppingBagIcon } from 'lucide-react';


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus, Minus, X, Trash2, CreditCard, Wallet, Smartphone, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onClearCart: () => void;
}

type CheckoutStep = 'CART' | 'PAYMENT' | 'SUCCESS';

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove, onClearCart }: CartDrawerProps) {
  const [step, setStep] = useState<CheckoutStep>('CART');
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep('CART');
        setPaymentMethod(null);
      }, 300);
    }
  }, [isOpen]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    setStep('PAYMENT');
  };

  const handlePayment = () => {
    if (paymentMethod) {
      setStep('SUCCESS');
      setTimeout(() => {
        onClearCart();
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {step === 'PAYMENT' && (
                  <button onClick={() => setStep('CART')} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-slate-400">
                    <ArrowLeft size={20} />
                  </button>
                )}
                <div>
                  <h2 className="text-2xl font-black text-slate-800 tracking-tight italic">
                    {step === 'CART' ? 'Your Cart' : step === 'PAYMENT' ? 'Payment' : 'Order Placed!'}
                  </h2>
                  {step !== 'SUCCESS' && (
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                      {items.length} items from Foodiez
                    </p>
                  )}
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-slate-400">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {step === 'CART' && (
                  <motion.div
                    key="cart-items"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 space-y-6"
                  >
                    {items.length === 0 ? (
                      <div className="h-[60vh] flex flex-col items-center justify-center text-center opacity-40">
                        <ShoppingBag size={64} className="mb-4 text-brand" />
                        <p className="text-xl font-black uppercase tracking-tighter italic">Your cart is empty</p>
                        <p className="text-sm font-medium mt-2">Add some delicious meals to get started!</p>
                      </div>
                    ) : (
                      items.map((item) => (
                        <div key={item.id} className="flex gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-colors group border border-transparent">
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-slate-100">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-slate-800 text-sm italic tracking-tight">{item.name}</h4>
                              <button onClick={() => onRemove(item.id)} className="text-slate-300 hover:text-brand transition-colors">
                                <Trash2 size={16} />
                              </button>
                            </div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest line-clamp-1 mb-2">Individual Portion</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-black text-brand italic">₹{(item.price * item.quantity).toFixed(0)}</span>
                              <div className="flex items-center gap-3 bg-slate-100 rounded-lg px-3 py-1">
                                <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-slate-400 hover:text-brand transition-colors">
                                  <Minus size={14} />
                                </button>
                                <span className="text-xs font-black min-w-[12px] text-center text-slate-700">{item.quantity}</span>
                                <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-slate-400 hover:text-brand transition-colors">
                                  <Plus size={14} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </motion.div>
                )}

                {step === 'PAYMENT' && (
                  <motion.div
                    key="payment-step"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 space-y-6"
                  >
                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8">
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Order Amount</p>
                        <p className="text-3xl font-black italic text-slate-800">₹{total.toFixed(0)}</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-black text-brand uppercase tracking-[0.2em] mb-4">Select Payment Method</h4>
                        
                        <div 
                          onClick={() => setPaymentMethod('UPI')}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${paymentMethod === 'UPI' ? 'border-brand bg-brand/5' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                        >
                            <div className={`p-3 rounded-xl ${paymentMethod === 'UPI' ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <Smartphone size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800">UPI Payments</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">GPay, PhonePe, Paytm</p>
                            </div>
                            {paymentMethod === 'UPI' && <CheckCircle2 className="text-brand" size={20} />}
                        </div>

                        <div 
                          onClick={() => setPaymentMethod('CARD')}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${paymentMethod === 'CARD' ? 'border-brand bg-brand/5' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                        >
                            <div className={`p-3 rounded-xl ${paymentMethod === 'CARD' ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <CreditCard size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800">Credit / Debit Card</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Visa, Mastercard, RuPay</p>
                            </div>
                            {paymentMethod === 'CARD' && <CheckCircle2 className="text-brand" size={20} />}
                        </div>

                        <div 
                          onClick={() => setPaymentMethod('CASH')}
                          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${paymentMethod === 'CASH' ? 'border-brand bg-brand/5' : 'border-slate-100 hover:border-slate-200 bg-white'}`}
                        >
                            <div className={`p-3 rounded-xl ${paymentMethod === 'CASH' ? 'bg-brand text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <Wallet size={20} />
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800">Cash on Delivery</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pay when food arrives</p>
                            </div>
                            {paymentMethod === 'CASH' && <CheckCircle2 className="text-brand" size={20} />}
                        </div>
                    </div>
                  </motion.div>
                )}

                {step === 'SUCCESS' && (
                  <motion.div
                    key="success-step"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center p-12 text-center"
                  >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                        className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-emerald-200"
                    >
                        <CheckCircle2 size={48} className="text-white" />
                    </motion.div>
                    <h2 className="text-3xl font-black italic tracking-tighter text-slate-800 mb-4">Order Placed Successfully!</h2>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8">
                        Your delicious meal is being prepared by the chefs. 
                        Tracking link will be shared via SMS.
                    </p>
                    <button 
                        onClick={onClose}
                        className="bg-brand text-white px-10 py-4 rounded-2xl font-black shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all active:scale-95 text-sm uppercase tracking-widest"
                    >
                        Great, Thanks!
                    </button>
                    <div className="mt-8 text-[10px] font-black text-brand/30 uppercase tracking-[0.5em] italic">Foodiez Premium</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step !== 'SUCCESS' && items.length > 0 && (
              <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] text-slate-400 font-black uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400 font-black uppercase tracking-widest">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black italic text-slate-800 pt-3 border-t border-slate-200">
                    <span>Total</span>
                    <span>₹{total.toFixed(0)}</span>
                  </div>
                </div>
                
                {step === 'CART' ? (
                    <button 
                        onClick={handleCheckout}
                        className="w-full bg-brand text-white py-5 rounded-[1.5rem] font-black shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all active:scale-[0.98] uppercase tracking-widest italic text-sm"
                    >
                        Checkout Now
                    </button>
                ) : (
                    <button 
                        onClick={handlePayment}
                        disabled={!paymentMethod}
                        className={`w-full py-5 rounded-[1.5rem] font-black transition-all active:scale-[0.98] uppercase tracking-widest italic text-sm ${paymentMethod ? 'bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    >
                        Confirm & Pay
                    </button>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

import { ShoppingBag as ShoppingBagIcon } from 'lucide-react';
function ShoppingBag({ size, className }: { size: number, className: string }) {
  return <ShoppingBagIcon size={size} className={className} />;
}

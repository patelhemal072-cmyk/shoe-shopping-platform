import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';

const Cart = () => {
  const navigate = useNavigate();
  // Mock cart items for demonstration based on our PRD requirement
  const cartItems = [
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <div className="bg-black text-white min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Items List */}
          <div className="flex-grow">
             <div className="flex justify-between items-end mb-12">
                <h1 className="text-5xl font-black uppercase italic tracking-tighter">Your <span className="text-premium-red">Bag</span></h1>
                <p className="text-white/40 font-bold uppercase text-[10px] tracking-widest">{cartItems.length} items added</p>
             </div>

             <div className="space-y-6">
                {cartItems.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row gap-8 p-8 bg-white/5 border border-white/5 rounded-[32px] items-center"
                  >
                    <div className="w-40 h-40 rounded-2xl overflow-hidden bg-black shrink-0">
                       <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    
                    <div className="flex-grow space-y-2">
                       <span className="text-[10px] font-black uppercase text-premium-red tracking-widest">{item.category}</span>
                       <h3 className="text-2xl font-black uppercase italic">{item.name}</h3>
                       <p className="text-white/40 text-xs font-bold">SIZE: 10 | COLOR: TAN</p>
                       
                       <div className="flex items-center gap-6 pt-4">
                          <div className="flex items-center gap-4 bg-black/40 rounded-full px-4 py-2 border border-white/5">
                             <button className="text-white/40 hover:text-white"><Minus size={16} /></button>
                             <span className="font-black text-sm">{item.quantity}</span>
                             <button className="text-white/40 hover:text-white"><Plus size={16} /></button>
                          </div>
                          <button className="text-white/20 hover:text-premium-red transition-colors">
                             <Trash2 size={20} />
                          </button>
                       </div>
                    </div>

                    <div className="text-right">
                       <p className="text-2xl font-black italic text-premium-red">₹{item.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Summary Sidebar */}
          <div className="w-full lg:w-[400px]">
             <div className="bg-white p-10 rounded-[40px] text-black">
                <h2 className="text-3xl font-black uppercase italic mb-10 tracking-tighter">Summary</h2>
                
                <div className="space-y-6 mb-10 border-b border-black/5 pb-10">
                   <div className="flex justify-between font-bold uppercase tracking-widest text-[10px]">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between font-bold uppercase tracking-widest text-[10px]">
                      <span>GST (18%)</span>
                      <span>₹{tax.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between font-bold uppercase tracking-widest text-[10px]">
                      <span>Shipping</span>
                      <span className="text-green-600">FREE</span>
                   </div>
                </div>

                <div className="flex justify-between items-end mb-12">
                   <span className="font-black uppercase italic text-lg">Total</span>
                   <span className="text-4xl font-black italic text-premium-red">₹{total.toLocaleString()}</span>
                </div>

                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 hover:scale-[1.02] transition-all mb-6 shadow-2xl"
                >
                   Checkout <ArrowRight size={20} />
                </button>
                
                <div className="flex items-center gap-3 justify-center text-black/40 font-bold uppercase text-[9px] tracking-widest">
                   <ShieldCheck size={16} className="text-green-600" /> Secure SSL Encrypted 
                </div>
             </div>

             <div className="mt-8 p-8 border border-white/5 rounded-3xl text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Have a code?</p>
                <div className="flex gap-2">
                   <input type="text" placeholder="COUPON" className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 text-xs font-black uppercase outline-none focus:border-premium-red" />
                   <button className="bg-white text-black px-6 py-3 rounded-xl font-black text-xs">APPLY</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

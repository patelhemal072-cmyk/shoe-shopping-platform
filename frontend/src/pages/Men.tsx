import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Men = () => {
  const navigate = useNavigate();
  const menProducts = products.filter(p => p.category === 'Sneakers' || p.category === 'Sports' || p.category === 'Formal');

  return (
    <div className="bg-black text-white min-h-screen pt-40 pb-20">
      {/* Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
         <div className="relative h-[60vh] rounded-[40px] overflow-hidden flex items-center">
            <img 
               src="/assets/men-hero.jpg" 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
               alt="Men Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            <div className="relative z-10 p-12 lg:p-20 max-w-2xl">
               <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">New Season</span>
               <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                  FOR THE <br/> <span className="text-premium-red">TITANS.</span>
               </h1>
               <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                  Engineered for power. Styled for the spotlight. Explore our range of high-performance sneakers and formal essentials.
               </p>
               <button 
                  onClick={() => navigate('/shop')}
                  className="bg-premium-red text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
               >
                  Explore Gear
               </button>
            </div>
         </div>
      </section>

      {/* Featured Quote */}
      <section className="max-w-4xl mx-auto text-center mb-32 px-6">
         <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none opacity-20 mb-4 select-none">"Strength In Every Step"</h2>
         <p className="text-gray-500 uppercase tracking-[0.3em] font-bold text-xs">Performance Heritage since 1995</p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {menProducts.map(p => (
               <motion.div 
                 key={p.id}
                 whileHover={{ y: -10 }}
                 className="group bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden"
               >
                  <div className="relative h-80 overflow-hidden">
                     <img src={p.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                        <button className="p-4 bg-premium-red text-white rounded-full">
                           <ShoppingCart size={24} />
                        </button>
                     </div>
                  </div>
                  <div className="p-8 pb-10">
                     <div className="flex justify-between items-start mb-4">
                        <h3 className="font-black uppercase text-xl italic tracking-tighter">{p.name}</h3>
                        <span className="text-premium-red font-black text-xl italic">₹{p.price}</span>
                     </div>
                     <div className="flex items-center justify-between">
                        <span className="label-mono opacity-40">{p.category}</span>
                        <div className="flex items-center gap-1 text-premium-red">
                           <Star size={14} fill="currentColor" />
                           <span className="text-xs font-black text-white">{p.rating}</span>
                        </div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* NEW: Editorial Style Guide */}
      <section className="bg-[#0a0a0a] py-32 mt-32 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
               <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4">Manual</span>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">The Style <span className="text-premium-red">Blueprint.</span></h2>
               <p className="text-white/40 max-w-xl text-[11px] font-black uppercase tracking-widest leading-relaxed">
                  A guide to mastering the modern aesthetic through curated footwear pairings.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { title: 'The Boardroom', desc: 'Pair our Royal Oxford with charcoal wool trousers for absolute authority.', icon: '01', img: '/assets/product1.png' },
                 { title: 'Off-Duty Urban', desc: 'Minimalist sneakers + raw denim. The uniform of the modern creator.', icon: '02', img: '/assets/product2.png' },
                 { title: 'Apex Athlete', desc: 'Engineered performance for high-intensity training. No compromises.', icon: '03', img: '/assets/product3.png' }
               ].map(card => (
                 <div key={card.icon} className="relative group overflow-hidden rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-premium-red/30 transition-all">
                    <div className="h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                       <img src={card.img} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-10 relative">
                       <span className="text-6xl font-black text-white/5 absolute top-4 right-10 leading-none">{card.icon}</span>
                       <h3 className="text-2xl font-black uppercase italic mb-6">{card.title}</h3>
                       <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                       <div className="mt-8 w-12 h-1 bg-premium-red/20 group-hover:w-full transition-all duration-700" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* NEW: Engineering Data (Technical Detail) */}
      <section className="max-w-7xl mx-auto px-6 py-40">
         <div className="grid lg:grid-cols-2 gap-20">
            <div className="order-2 lg:order-1">
               <div className="space-y-12">
                  <div className="flex items-start gap-8">
                     <div className="w-16 h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                        <span className="text-premium-red font-black text-xl italic">1</span>
                     </div>
                     <div>
                        <h4 className="text-xl font-black uppercase italic mb-3">Torsion Control</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">Carbon-fiber infused midsole prevents lateral roll during explosive movements.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-8">
                     <div className="w-16 h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                        <span className="text-premium-red font-black text-xl italic">2</span>
                     </div>
                     <div>
                        <h4 className="text-xl font-black uppercase italic mb-3">Heat Management</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">Silver-ion antimicrobial lining ensures 360-degree breathability for 12+ hour wear.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-8">
                     <div className="w-16 h-16 shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                        <span className="text-premium-red font-black text-xl italic">3</span>
                     </div>
                     <div>
                        <h4 className="text-xl font-black uppercase italic mb-3">Impact Dispersion</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">Nitrogen-injected foam pods absorb 40% more force than traditional EVA soles.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="order-1 lg:order-2">
               <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Performance Lab</span>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">Built To <br/> <span className="text-premium-red">Outlast.</span></h2>
               <div className="aspect-video rounded-[40px] overflow-hidden border border-white/5 relative">
                  <img src="/assets/product3.png" className="w-full h-full object-cover grayscale brightness-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 animate-pulse">
                        <ArrowRight className="text-white" size={32} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NEW: Exclusive Early Access Banner */}
      <section className="mb-40 px-6">
         <div className="max-w-7xl mx-auto red-shading p-20 rounded-[50px] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay opacity-50" />
            <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none text-white">Join The Elite <br/> Drop List</h2>
               <p className="text-white/80 font-medium uppercase tracking-widest text-[11px]">Get 24H early access to limited collaborations.</p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
               <div className="flex gap-2">
                  <input type="email" placeholder="ENTER EMAIL" className="bg-white/10 border border-white/20 px-8 py-5 rounded-sm outline-none text-white font-black text-xs w-full lg:w-80" />
                  <button className="bg-white text-black px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all">Join</button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Men;

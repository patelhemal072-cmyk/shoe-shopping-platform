import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ShoppingCart, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Women = () => {
  const navigate = useNavigate();
  const womenProducts = products.filter(p => p.category === 'Women' || p.category === 'Sneakers');

  return (
    <div className="bg-black text-white min-h-screen pt-40 pb-20">
      {/* Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
         <div className="relative h-[60vh] rounded-[40px] overflow-hidden flex items-center">
            <img 
               src="/assets/women-hero.jpg" 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
               alt="Women Collection"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-transparent lg:block hidden" />
            <div className="relative z-10 p-12 lg:p-20 ml-auto max-w-2xl text-right">
               <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Elegance Redefined</span>
               <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                  FOR THE <br/> <span className="text-premium-red">UNSTOPPABLE.</span>
               </h1>
               <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                  Grace in motion. Power in every stride. Our women's collection blends high-fashion aesthetics with uncompromising comfort.
               </p>
               <button 
                  onClick={() => navigate('/shop')}
                  className="bg-premium-red text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-sm hover:scale-105 transition-all"
               >
                  Shop Editorial
               </button>
            </div>
         </div>
      </section>

      {/* Featured Grid */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
         {womenProducts.map(p => (
            <motion.div 
              key={p.id}
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer"
            >
               <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-white/5 mb-6">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 right-6">
                     <button className="p-3 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-premium-red transition-colors">
                        <Heart size={20} />
                     </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                     <button className="w-full py-4 bg-premium-red text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                        <ShoppingCart size={18} /> Add to Bag
                     </button>
                  </div>
               </div>
               <div className="px-4">
                  <div className="flex justify-between items-center mb-2">
                     <h3 className="font-black uppercase text-lg italic tracking-tight">{p.name}</h3>
                     <span className="text-premium-red font-black text-lg">₹{p.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="label-mono text-[10px] opacity-40">{p.category}</span>
                     <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill={i < Math.floor(p.rating) ? "#FF1F1F" : "none"} className="text-premium-red" />)}
                     </div>
                  </div>
               </div>
            </motion.div>
         ))}
      </section>

      {/* Narrative Section */}
      <section className="bg-[#0a0a0a] py-40 mt-32 border-y border-white/5 overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <img src="/assets/product4.png" className="rounded-[40px] grayscale" />
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-premium-red/20 blur-[60px] rounded-full animate-pulse" />
            </div>
            <div>
               <span className="label-mono text-premium-red mb-4 block">The Vision</span>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic italic tracking-tighter mb-8 leading-none">Comfort Is <br/> The New <span className="text-premium-red">Luxury.</span></h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  We design for the modern woman who refuses to choose between style and stability. Our "GraceFlow" sole technology ensures you stay comfortable from the morning meeting to the midnight gala.
               </p>
               <div className="space-y-4">
                  {['Orthopedic Support', 'Zero-Heel Tension', 'Breathable Mesh Knit'].map(item => (
                     <div key={item} className="flex items-center gap-4 py-3 border-b border-white/5">
                        <div className="w-2 h-2 bg-premium-red rounded-full" />
                        <span className="font-bold uppercase tracking-widest text-sm">{item}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
      {/* NEW: The Muse Lookbook */}
      <section className="bg-black py-40 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
               <div className="max-w-xl">
                  <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Editorial</span>
                  <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">The Muse <br/> <span className="text-premium-red">Lookbook.</span></h2>
               </div>
               <p className="text-white/40 max-w-xs text-[11px] font-black uppercase tracking-widest leading-relaxed mb-4">
                  Curated aesthetics for the unapologetic woman. Mastery in every silhouette.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                 { title: 'Sunday Brunch', tag: 'CASUAL LUXURY', img: '/assets/product2.png' },
                 { title: 'Power Corporate', tag: 'EXECUTIVE', img: '/assets/product1.png' },
                 { title: 'Midnight Gala', tag: 'FORMAL', img: '/assets/product3.png' },
                 { title: 'Urban Nomad', tag: 'STREETWEAR', img: '/assets/product5.png' }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10 }}
                   className="group relative aspect-[3/4] rounded-[32px] overflow-hidden"
                 >
                    <img src={item.img} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-8 left-8">
                       <p className="text-premium-red font-black text-[9px] uppercase tracking-widest mb-1">{item.tag}</p>
                       <h4 className="text-xl font-black text-white uppercase italic">{item.title}</h4>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* NEW: Technological Artistry (Deep Specs) */}
      <section className="bg-[#050505] py-40 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">Innovation Lab</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-10">Architectural <span className="text-premium-red">Support.</span></h2>
                  
                  <div className="space-y-12">
                     <div className="grid grid-cols-[80px_1fr] gap-6">
                        <div className="text-4xl font-black italic text-premium-red/20 outline-text">01</div>
                        <div>
                           <h4 className="text-lg font-black uppercase italic mb-2">3D-Printed Arch</h4>
                           <p className="text-gray-500 text-sm leading-relaxed font-medium">Customized pressure mapping ensures the weight is distributed evenly across the foot, eliminating heel pain.</p>
                        </div>
                     </div>
                     <div className="grid grid-cols-[80px_1fr] gap-6">
                        <div className="text-4xl font-black italic text-premium-red/20 outline-text">02</div>
                        <div>
                           <h4 className="text-lg font-black uppercase italic mb-2">Suede Silk Lining</h4>
                           <p className="text-gray-500 text-sm leading-relaxed font-medium">Hypoallergenic and friction-less interior prevents blisters during 18+ hours of usage in high-fashion heels.</p>
                        </div>
                     </div>
                     <div className="grid grid-cols-[80px_1fr] gap-6">
                        <div className="text-4xl font-black italic text-premium-red/20 outline-text">03</div>
                        <div>
                           <h4 className="text-lg font-black uppercase italic mb-2">Kinetic Grip Sole</h4>
                           <p className="text-gray-500 text-sm leading-relaxed font-medium">Aerospace-grade rubber compounds provide maximum traction on marble and slippery surfaces.</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="relative group">
                  <div className="absolute inset-0 bg-premium-red/5 blur-[60px] rounded-full opacity-50 group-hover:opacity-80 transition-all" />
                  <img src="/assets/product6.png" className="relative z-10 rounded-[50px] border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[40px] text-black z-20 shadow-2xl">
                     <p className="font-black italic text-5xl leading-none">0.8kg</p>
                     <p className="text-[10px] font-black uppercase tracking-[0.3em] mt-2">ULTRA-LIGHTWEIGHT</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NEW: Exclusive Muse Drop */}
      <section className="py-40 px-6">
         <div className="max-w-5xl mx-auto text-center p-20 rounded-[60px] bg-white text-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-premium-red/5 rounded-full blur-3xl" />
            <div className="relative z-10">
               <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-6 block">Join The Muse</span>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">Access The <span className="text-premium-red underline">Private</span> Series.</h2>
               <p className="text-black/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12">Limited invite-only collection for our top collectors.</p>
               <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                  <input type="email" placeholder="EMAIL ADDRESS" className="flex-grow bg-black/5 border border-black/10 px-8 py-5 rounded-sm outline-none font-bold text-xs" />
                  <button className="bg-black text-white px-10 py-5 rounded-sm font-black uppercase text-xs tracking-widest hover:bg-premium-red transition-all shadow-xl">Secure Access</button>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Women;

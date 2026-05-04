import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { type Product, products } from '../data/products';
import { Filter, ChevronDown, Star, ShoppingCart, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const heroSlides = [
  {
    tagline: 'Collection 2025',
    headline: ['The Full', 'Lineup'],
    sub: 'Explore every stitch, every sole, every masterpiece.',
    img: '/assets/product4.png',
  },
  {
    tagline: 'Exclusively For You',
    headline: ['Design For', 'Impact'],
    sub: 'Performance meets luxury in our widest collection yet.',
    img: '/assets/home-hero.jpg',
  }
];

const Shop = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (data && data.length > 0) {
          setProductList(data);
        } else {
          setProductList(products); // Fallback to mock data
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProductList(products); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ['All', 'Sneakers', 'Formal', 'Sports', 'Women', 'Kids', 'Eco-Friendly', 'Orthopedic'];
  
  const filteredProducts = activeCategory === 'All' 
    ? productList 
    : productList.filter(p => p.category === activeCategory);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ══════════════════════════════════════════════
          RE-DESIGNED EDITORIAL SHOP HERO
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black pb-20 pt-20">
        {/* Massive Background Outlined Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h1 className="text-[40vw] font-black italic tracking-tighter leading-none" style={{ WebkitTextStroke: '4px #FF1F1F' }}>
            DROPS
          </h1>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 rounded-full border border-premium-red/30 text-premium-red font-black text-[10px] uppercase tracking-[0.3em] mb-6">
                Fresh Inventory 2025
              </span>
              <h1 className="text-7xl md:text-[10rem] font-black italic line-height-[0.85] uppercase tracking-tighter mb-8">
                The <br/>
                <span className="text-premium-red">Vault.</span>
              </h1>
              <p className="text-white/40 text-xl max-w-sm mb-12 font-medium uppercase tracking-widest text-[11px] leading-relaxed">
                Step into our curated collection of the world's most exclusive footwear. From high-tech runners to artisan formalwear.
              </p>
              
              <div className="flex items-center gap-10">
                 <div className="flex flex-col">
                    <span className="text-3xl font-black italic">120+</span>
                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">New Styles</span>
                 </div>
                 <div className="w-[1px] h-12 bg-white/10" />
                 <div className="flex flex-col">
                    <span className="text-3xl font-black italic text-premium-red">24H</span>
                    <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em]">Live Drops</span>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2">
             <motion.div
               animate={{ 
                 y: [0, -20, 0],
                 rotate: [-15, -12, -15] 
               }}
               transition={{ 
                 duration: 6, 
                 repeat: Infinity, 
                 ease: "easeInOut" 
               }}
               className="relative z-10 w-full"
             >
                <img 
                  src="/assets/product3.png" 
                  className="w-full drop-shadow-[0_100px_100px_rgba(255,31,31,0.25)]"
                />
                {/* Floating "Limited" Badge */}
                <div className="absolute top-[20%] -right-10 bg-premium-red text-white p-6 rounded-3xl -rotate-12 shadow-2xl">
                   <p className="font-black italic text-4xl leading-none">LTD.</p>
                   <p className="text-[9px] font-black uppercase tracking-widest mt-1">Edition</p>
                </div>
             </motion.div>
             
             {/* Radial Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-premium-red/5 blur-[80px] rounded-full -z-10" />
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="absolute bottom-0 left-0 right-0 py-8 border-t border-white/5 bg-black/50 overflow-hidden">
           <div className="flex whitespace-nowrap animate-marquee">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10 mx-10">
                   HANDCRAFTED IN ITALY • CARBON FIBER TECH • SUSTAINABLE LEATHER • PREMIUM GRIP •
                </span>
              ))}
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pt-20">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-y border-white/5 py-6">
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full border ${
                  activeCategory === cat 
                    ? 'bg-premium-red text-white border-premium-red' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-premium-red/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-premium-red">
            <Filter size={18} />
            <span>Refine Search</span>
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
            <Loader2 className="animate-spin text-premium-red" size={48} />
            <p className="text-white/40 font-black uppercase tracking-[0.2em]">Accessing The Vault...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              onClick={() => navigate(`/product/${product.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5 rounded-3xl mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-4 bg-premium-red text-white rounded-full hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-[0_0_20px_#FF1F1F]">
                    <ShoppingCart size={20} />
                  </button>
                </div>
                {product.category === 'Formal' && (
                  <div className="absolute top-4 left-4 bg-premium-red text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter rounded-full">
                    Limited Drop
                  </div>
                )}
              </div>
              
              <div className="space-y-2 px-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold uppercase tracking-wide text-xs italic">{product.name}</h3>
                  <span className="text-premium-red font-black">₹{product.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{product.category}</span>
                  <div className="flex items-center gap-1 text-premium-red">
                    <Star size={10} fill="currentColor" />
                    <span className="text-[10px] font-bold text-white">{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
          </div>
        )}

        {/* NEW: Shop by Occasion */}
        <section className="mb-40">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                 <span className="label-mono text-premium-red mb-3 block">Navigation</span>
                 <h2 className="text-4xl font-black uppercase italic tracking-tighter">Shop By <span className="text-premium-red">Occasion</span></h2>
              </div>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Business Pro', img: '/assets/product1.png' },
                { name: 'Urban Run', img: '/assets/product3.png' },
                { name: 'Evening Gala', img: '/assets/product2.png' },
                { name: 'Weekend Base', img: '/assets/product4.png' }
              ].map((occ, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
                >
                   <img src={occ.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                   <p className="absolute bottom-6 left-6 font-black uppercase italic text-sm tracking-tighter">{occ.name}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* New Proper Content: Shop Banner */}
        <section className="mb-40">
           <div className="relative rounded-[40px] overflow-hidden p-12 md:p-20 bg-[#111] border border-white/5">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-premium-red/5 blur-[60px] pointer-events-none" />
              <div className="max-w-2xl relative z-10">
                 <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 leading-none text-white">
                    Not Finding <br/> <span className="text-premium-red underline">What You Need?</span>
                 </h2>
                 <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
                    Our concierge team specializes in sourcing limited edition sizes and custom designs. Send us your requirements and we'll handle the rest.
                 </p>
                 <button 
                    onClick={() => navigate('/contact')}
                    className="bg-white text-black px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-premium-red hover:text-white transition-all"
                 >
                    Get In Touch
                 </button>
              </div>
           </div>
        </section>

        {/* NEW: Shoe Care Guide Snippet */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <img src="/assets/product6.png" className="rounded-[40px] border border-white/5" />
              <div className="absolute -bottom-10 -right-10 bg-black p-8 border border-white/10 rounded-2xl hidden md:block">
                 <p className="text-premium-red font-black text-2xl italic leading-none">Longevity</p>
                 <p className="text-white/40 font-bold uppercase text-[9px] tracking-widest mt-2 uppercase">Shoe Care Kit Included</p>
              </div>
           </div>
           <div>
              <span className="label-mono text-premium-red mb-3 block">Maintenance</span>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8 leading-none">Keep Your <br/> <span className="text-premium-red">Grip Fresh</span></h2>
              <div className="space-y-6">
                 {[
                   { t: 'LEATHER LUXE', d: 'Use our cream polish twice a month to retain moisture.' },
                   { t: 'SNEAKER BREATH', d: 'Air dry for 12 hours after heavy usage to maintain form.' },
                   { t: 'SOLE SECURITY', d: 'Wipe with a damp cloth to keep 360° traction active.' }
                 ].map(tip => (
                   <div key={tip.t} className="flex gap-6 border-b border-white/5 pb-6">
                      <div className="w-1 h-12 bg-premium-red" />
                      <div>
                         <p className="font-black text-xs uppercase tracking-widest">{tip.t}</p>
                         <p className="text-gray-500 text-sm mt-1">{tip.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* New Customer Review Section for Shop */}
        <div className="py-20 border-t border-white/5">
           <h2 className="text-3xl font-black uppercase italic mb-12 tracking-tighter">What Our <span className="text-premium-red">Buyers Say</span></h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Arjun K.', review: 'The fit is absolutely perfect. Best sports shoes in this price range.', rating: 5 },
                { name: 'Ritika M.', review: 'Elegant and professional. I wear these to my board meetings every week.', rating: 5 },
                { name: 'Sameer S.', review: 'Quality material. You can really feel the difference in the cushioning.', rating: 4 }
              ].map((rev, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-[32px] border border-white/5">
                  <div className="flex gap-1 mb-4">
                     {[...Array(rev.rating)].map((_, j) => <Star key={j} size={14} fill="#FF1F1F" className="text-premium-red" />)}
                  </div>
                  <p className="text-gray-400 italic mb-6 leading-relaxed">"{rev.review}"</p>
                  <p className="text-white font-black uppercase text-xs tracking-widest">— {rev.name}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

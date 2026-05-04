import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Zap, Award, Headphones } from 'lucide-react';

const HomeAlt = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black min-h-screen overflow-x-hidden">
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-screen flex items-center justify-center bg-premium-red overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex items-center justify-center">
            <span className="text-[40vw] font-black italic text-white whitespace-nowrap">PREMIUM</span>
        </div>
        
        <div className="container mx-auto px-6 grid lg:grid-cols-2 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              Collection 2025
            </span>
            <h1 className="text-7xl md:text-[8rem] font-black italic text-white leading-[0.8] uppercase mb-8">
              Redefining<br/>Luxury.
            </h1>
            <p className="text-white/80 text-xl font-medium max-w-md mb-10">
              Where performance meets high-fashion. Experience the next generation of footwear.
            </p>
            <button 
              onClick={() => navigate('/shop')}
              className="bg-white text-premium-red px-12 py-5 rounded-full font-black text-xl uppercase tracking-tighter hover:bg-black hover:text-white transition-all shadow-2xl"
            >
              Shop Collection
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <img 
              src="/assets/shoe4.png"
              alt="Hero Sneaker"
              className="w-full drop-shadow-[0_50px_80px_rgba(0,0,0,0.4)]"
            />
            {/* Shading Glow */}
            <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            {[
                { icon: <Zap />, title: 'Speed', desc: 'Lightweight materials for maximum velocity.' },
                { icon: <Award />, title: 'Quality', desc: 'Hand-stitched leather from the finest tanneries.' },
                { icon: <Headphones />, title: 'Support', desc: 'Ergonomic design for all-day comfort.' }
            ].map((f, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 border border-white/10 rounded-3xl hover:border-premium-red/50 transition-all"
                >
                    <div className="text-premium-red mb-6">{f.icon}</div>
                    <h3 className="text-2xl font-black uppercase mb-4">{f.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* ─── EDITORIAL SECTION ─── */}
      <section className="py-32 grid lg:grid-cols-2 gap-0 overflow-hidden">
        <div className="relative group overflow-hidden">
            <img 
                src="/assets/unsplash_aHR0cHM6Ly.jpg" 
                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[15rem] font-black text-white/5 italic pointer-events-none">MEN</span>
            </div>
            <div className="absolute bottom-10 left-10 text-left">
                <h2 className="text-5xl font-black text-white uppercase italic">Modern<br/>Gentleman</h2>
                <button 
                  onClick={() => navigate('/men')}
                  className="mt-4 text-premium-red font-black uppercase tracking-widest border-b-2 border-premium-red"
                >
                  Explore
                </button>
            </div>
        </div>
        <div className="relative group overflow-hidden bg-premium-red">
            <img 
                src="/assets/women-hero.jpg" 
                className="w-full h-[600px] object-cover mix-blend-overlay opacity-80 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12rem] font-black text-black/5 italic pointer-events-none">WOMEN</span>
            </div>
            <div className="absolute bottom-10 left-10 text-left">
                <h2 className="text-5xl font-black text-white uppercase italic">Urban<br/>Luxury</h2>
                <button 
                  onClick={() => navigate('/women')}
                  className="mt-4 text-white font-black uppercase tracking-widest border-b-2 border-white"
                >
                  Explore
                </button>
            </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-40 bg-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-6"
          >
              <h2 className="text-6xl md:text-8xl font-black uppercase italic leading-none mb-10">Ready to step up?</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button 
                    onClick={() => navigate('/account')}
                    className="bg-black text-white px-12 py-5 rounded-full font-black text-xl uppercase tracking-tighter hover:bg-premium-red transition-all w-full sm:w-auto"
                  >
                    Join the Club
                  </button>
                  <button 
                    onClick={() => navigate('/shop')}
                    className="bg-white text-black border-2 border-black px-12 py-5 rounded-full font-black text-xl uppercase tracking-tighter hover:bg-black hover:text-white transition-all w-full sm:w-auto"
                  >
                    View Catalog
                  </button>
              </div>
          </motion.div>
      </section>
    </div>
  );
};

export default HomeAlt;

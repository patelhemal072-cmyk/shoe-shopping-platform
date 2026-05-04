import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, Camera, Zap, Heart } from 'lucide-react';

const StyleV2 = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const visualStories = [
    {
      title: 'Midnight Stealth',
      sub: 'Engineered for the urban shadow.',
      img: '/assets/product2.png',
      accent: '#FF1F1F'
    },
    {
      title: 'Artisan Chrome',
      sub: 'Where metal meets leather.',
      img: '/assets/product1.png',
      accent: '#FFFFFF'
    },
    {
      title: 'Desert Wind',
      sub: 'Lightweight performance for the long path.',
      img: '/assets/product3.png',
      accent: '#FF1F1F'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div 
          style={{ scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/assets/home-hero.jpg" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
           <motion.span 
             initial={{ opacity: 0, tracking: '0.2em' }}
             animate={{ opacity: 1, tracking: '0.6em' }}
             className="text-premium-red font-black uppercase text-xs mb-8 block"
           >
             Visual Narrative
           </motion.span>
           <motion.h1 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-[12vw] md:text-[15vw] font-black italic uppercase leading-none tracking-tighter"
           >
             STYLE <span className="text-premium-red">V2</span>
           </motion.h1>
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-12 flex flex-col items-center"
           >
              <div className="w-[1px] h-24 bg-gradient-to-b from-premium-red to-transparent animate-pulse" />
              <ArrowDown className="text-premium-red mt-4 animate-bounce" size={24} />
           </motion.div>
        </div>
      </section>

      {/* Cinematic Frames */}
      <section className="py-40 px-6">
         <div className="max-w-7xl mx-auto">
            {visualStories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20 mb-60`}
              >
                 <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-[60px]">
                    <img 
                      src={story.img} 
                      className="w-full h-[70vh] object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-xl p-4 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-all">
                       <Camera size={24} />
                    </div>
                 </div>
                 <div className="w-full lg:w-2/5">
                    <span className="text-premium-red font-black text-xs uppercase tracking-widest mb-4 block">Series 0{i+1}</span>
                    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">{story.title}</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-10">{story.sub}</p>
                    <button 
                      onClick={() => navigate('/shop')}
                      className="flex items-center gap-4 text-premium-red font-black uppercase tracking-widest text-[10px] border-b-2 border-premium-red pb-2 hover:gap-8 transition-all"
                    >
                       Discover The Drop <Zap size={16} />
                    </button>
                 </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* Texture Library (Visual Detail) */}
      <section className="bg-white text-black py-40 px-6">
         <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-20 leading-none">The <span className="text-premium-red">Texture</span> <br/> Library.</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 '/assets/product1.png',
                 '/assets/product2.png',
                 '/assets/product3.png',
                 '/assets/product4.png'
               ].map((img, i) => (
                 <div key={i} className="aspect-square rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img src={img} className="w-full h-full object-cover" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* NEW: The Process (Visual Breakdown) */}
      <section className="py-40 px-6 bg-black relative overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1">
                  <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-6 block">Craftsmanship</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-none">How It's <br/> <span className="text-premium-red">Forged.</span></h2>
                  <div className="space-y-12">
                     {[
                       { title: 'The Master Cut', desc: 'Each hide is hand-selected and cut using laser precision for zero waste.' },
                       { title: 'Heat Compression', desc: 'Upper and sole are fused at 120°C for a bond that never breaks.' },
                       { title: 'Final Hand-Stitch', desc: 'The signature red thread is applied by hand by our Master Cobblers.' }
                     ].map((step, i) => (
                       <div key={i} className="flex gap-8 group">
                          <div className="text-4xl font-black text-white/10 group-hover:text-premium-red/50 transition-colors italic">0{i+1}</div>
                          <div>
                             <h4 className="text-xl font-black uppercase italic mb-2 tracking-tight">{step.title}</h4>
                             <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                  <img src="/assets/product5.png" className="rounded-[40px] grayscale h-80 w-full object-cover" />
                  <img src="/assets/product6.png" className="rounded-[40px] translate-y-12 h-80 w-full object-cover" />
               </div>
            </div>
         </div>
      </section>

      {/* NEW: Style Philosophy & Community */}
      <section className="bg-premium-red py-40 px-6 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 text-white font-black text-[20vw] opacity-5 select-none -rotate-12 translate-x-20">ELITE</div>
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
               <div>
                  <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 leading-none">The <br/> New <br/> Standard.</h2>
                  <p className="text-white/80 text-lg leading-relaxed max-w-md">
                     "Style V2 isn't just about how you look. It's about how you move through the world. Every drop is a limited statement of intent."
                  </p>
               </div>
               <div className="grid grid-cols-3 gap-4">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="aspect-square bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center group overflow-hidden">
                       <img 
                          src={`/assets/product${i}.png`} 
                          className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                        />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* NEW: Bespoke Services */}
      <section className="py-40 px-6">
         <div className="max-w-5xl mx-auto border-2 border-premium-red/20 rounded-[60px] p-20 text-center relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black px-8">
               <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs">V2 Exclusive</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">Bespoke <br/> Tailoring.</h2>
            <p className="text-gray-400 mb-12 text-lg">
               Want a unique colorway or custom size? Our V2 concierge is here to help you build the impossible shoe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <button 
                  onClick={() => navigate('/contact')}
                  className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-premium-red hover:text-white transition-all shadow-2xl"
               >
                  Start Custom Order
               </button>
               <button 
                  onClick={() => navigate('/contact')}
                  className="px-12 py-5 border border-white/20 font-black uppercase text-xs tracking-widest hover:border-premium-red transition-all"
               >
                  Talk to Concierge
               </button>
            </div>
         </div>
      </section>

      {/* Exclusive Footer Showdown */}
      <section className="py-40 px-6 text-center">
         <div className="max-w-4xl mx-auto">
            <Heart size={48} className="text-premium-red mx-auto mb-10" />
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 leading-none">Style Is <br/> Forever.</h2>
            <p className="text-white/40 font-bold uppercase tracking-[0.4em] text-xs mb-12">Limited Drops Only • World Wide Shipping</p>
            <div className="flex justify-center gap-6">
                <button 
                  onClick={() => navigate('/men')}
                  className="px-12 py-5 border border-white/20 font-black uppercase text-[10px] tracking-widest hover:border-premium-red hover:text-premium-red transition-all"
                >
                   Shop Men
                </button>
                <button 
                  onClick={() => navigate('/women')}
                  className="px-12 py-5 border border-white/20 font-black uppercase text-[10px] tracking-widest hover:border-premium-red hover:text-premium-red transition-all"
                >
                   Shop Women
                </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default StyleV2;

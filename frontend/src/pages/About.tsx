import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-32 pb-20 px-6 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black mb-24 tracking-tighter uppercase italic"
        >
          Our <span className="text-premium-red">Legacy</span>
        </motion.h1>
        
        <div className="space-y-10 text-lg text-gray-400 leading-relaxed text-left max-w-4xl mx-auto mb-32">
          <p>
            Founded in 1995, our footwear studio began with a single mission: to create the world's most comfortable luxury shoes. What started as a small workshop in the heart of the artisan district has grown into a global beacon of quality.
          </p>
          <img 
            src="/assets/home-hero.jpg" 
            className="w-full h-[500px] object-cover rounded-[40px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            alt="Workshop"
          />
          <p>
            We believe that every pair of shoes tells a story. From the selection of the finest top-grain leathers to the final hand-stitch, our master craftsmen pour decades of experience into every detail.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="py-20 border-y border-white/5 mb-32 text-left">
           <h2 className="text-5xl font-black uppercase italic mb-16 border-l-8 border-premium-red pl-8">The Evolution</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { year: '1995', title: 'The First Stitch', desc: 'Started in a small garage with 2 master cobblers.' },
                { year: '2005', title: 'Global Recognition', desc: 'Opened our first flagship store in Milan, Italy.' },
                { year: '2015', title: 'Tech Innovation', desc: 'Introduced our proprietary carbon-fiber impact sole.' },
                { year: '2025', title: 'Future of Footwear', desc: 'Launching our 100% biodegradable luxury line.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                   <span className="text-5xl font-black text-premium-red italic shrink-0">{item.year}</span>
                   <div>
                      <h3 className="text-xl font-bold uppercase text-white mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* NEW: Manufacturing Section */}
        <div className="py-32 text-left">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="label-mono text-premium-red mb-3 block">Behind the Scenes</span>
                 <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">Where Quality <br/> Is <span className="text-premium-red underline">Forged.</span></h2>
                 <p className="text-white/40 text-lg leading-relaxed mb-10">
                    Our facility in the heart of Northern Italy isn't just a factory; it's a sanctuary for footwear excellence. We combine the tactile wisdom of our veterans with the geometric precision of robotic 3D-knitting.
                 </p>
                 <div className="space-y-6">
                    {[
                      { t: 'SOLAR POWERED', d: '100% green energy facility' },
                      { t: 'ZERO WASTE', d: 'Recycled material shredding' },
                      { t: 'ETHICAL WORK', d: 'Fair wage certified workshops' }
                    ].map(item => (
                      <div key={item.t} className="flex items-center gap-6">
                         <div className="w-12 h-[1px] bg-premium-red" />
                         <div>
                            <p className="text-white font-black text-xs tracking-[0.2em]">{item.t}</p>
                            <p className="text-white/20 text-[10px] font-bold uppercase">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="grid grid-cols-2 gap-4">
                    <img src="/assets/product4.png" className="rounded-3xl grayscale hover:grayscale-0 transition-all duration-700" />
                    <img src="/assets/product1.png" className="rounded-3xl mt-12 grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 bg-premium-red p-10 rounded-2xl hidden lg:block">
                    <p className="text-white font-black text-4xl italic">24/7</p>
                    <p className="text-white/60 font-bold uppercase text-[10px] tracking-widest mt-2">Quality Control</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
      {/* NEW: The Founders' Vision (PRD 5.6) */}
      <section className="bg-[#0a0a0a] py-40 px-6 border-t border-white/5">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <img src="/assets/product6.png" className="rounded-[40px] grayscale brightness-75" />
               <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[40px] text-black shadow-2xl">
                  <p className="font-black italic text-4xl mb-2">"Comfort <br/> is Power."</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em]">— Arjun Sethi, Founder</p>
               </div>
            </div>
            <div>
               <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">The Journey</span>
               <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">A Decade <br/> Of <span className="text-premium-red">Vision.</span></h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-10 italic">
                  "I started this brand not to just sell shoes, but to redefine how we stand. Every entrepreneur knows that your foundation dictates your speed. My mission was to build a base that never fails."
               </p>
               <div className="grid grid-cols-2 gap-10">
                  <div>
                     <h4 className="text-white font-black uppercase text-xs mb-2">Philosophy</h4>
                     <p className="text-[11px] text-white/30 uppercase font-bold tracking-widest leading-relaxed">Minimalism meets extreme performance engineering.</p>
                  </div>
                  <div>
                     <h4 className="text-white font-black uppercase text-xs mb-2">Commitment</h4>
                     <p className="text-[11px] text-white/30 uppercase font-bold tracking-widest leading-relaxed">100% Transparency from hide to high-street.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NEW: Global Reach (PRD 5.6) */}
      <section className="py-40 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
               <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6">Global <span className="text-premium-red">Footprint.</span></h2>
               <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.4em]">Scaling the legacy across continents</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { loc: 'MILAN STUDIO', type: 'Design HQ', desc: 'Where the aesthetic soul of the brand is born.' },
                 { loc: 'TOKYO LAB', type: 'Materials R&D', desc: 'Pioneering synthetic and eco-performance fabrics.' },
                 { loc: 'MUMBAI FLAGSHIP', type: 'Heritage Center', desc: 'Customer experience and personalized bespoke fittings.' }
               ].map((base, i) => (
                 <div key={i} className="p-12 border border-white/5 rounded-[40px] hover:bg-white/5 transition-all">
                    <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">{base.loc}</h3>
                    <p className="text-premium-red font-black text-[10px] uppercase tracking-widest mb-6">{base.type}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{base.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* NEW: Final Quote Section */}
      <section className="bg-white text-black py-40 px-6 text-center">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-10">Quality Over <br/> <span className="text-premium-red">Everything.</span></h2>
            <p className="text-black/40 font-black uppercase text-xs tracking-[0.5em] mb-12 select-none">Est. 1995 • Artisan Grade</p>
            <button 
               onClick={() => navigate('/shop')}
               className="bg-black text-white px-16 py-6 font-black uppercase text-sm tracking-widest hover:bg-premium-red transition-all"
            >
               Join The Legacy
            </button>
         </div>
      </section>
    </div>
  );
};

export default About;

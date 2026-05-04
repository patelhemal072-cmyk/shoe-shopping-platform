import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe2, Truck, Users2, Briefcase, BarChart3, Mail } from 'lucide-react';

const Wholesale = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-40 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-32">
        <div className="absolute inset-0">
           <img 
             src="/assets/shoe4.png"
             className="w-full h-full object-cover grayscale opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Partnership Opportunities
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter mb-8 leading-none"
          >
            THE <span className="text-premium-red underline decoration-white/10 underline-offset-8">NETWORK</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed border-l-4 border-premium-red pl-8 text-left"
          >
            Join our global network of premier retailers. We provide high-performance footwear solutions for luxury boutiques, sports franchises, and corporate partners.
          </motion.p>
        </div>
      </section>

      {/* NEW: Partner Logo Cloud */}
      <section className="max-w-7xl mx-auto px-6 mb-40 border-y border-white/5 py-20 flex flex-wrap justify-between items-center opacity-30 grayscale gap-12">
         {['NIKE', 'ADIDAS', 'PUMA', 'REEBOK', 'UNDER ARMOUR'].map(brand => (
           <span key={brand} className="text-4xl font-black italic tracking-tighter">{brand}</span>
         ))}
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: <BarChart3 size={32} />, title: 'Tiered Pricing', desc: 'Competitive volume-based discounts tailored to your business scale and order frequency.' },
            { icon: <Globe2 size={32} />, title: 'Global Logistics', desc: 'Reliable door-to-door international shipping with real-time tracking and customs handling.' },
            { icon: <Briefcase size={32} />, title: 'Account Manager', desc: 'Dedicated support specialist to help with inventory planning and custom stock orders.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/[0.03] border border-white/5 p-10 rounded-[32px] hover:bg-white/[0.05] transition-all"
            >
              <div className="text-premium-red mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black uppercase mb-4 italic text-white">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust & Scale Section */}
      <section className="bg-white text-black py-32 mb-40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-none mb-8 tracking-tighter">
              SCALE YOUR <br/> <span className="text-premium-red">BUSINESS</span>
            </h2>
            <div className="space-y-6 text-lg font-medium text-black/60">
              <p className="flex items-center gap-4"><Truck className="text-premium-red" /> Priority restocking for VIP partners</p>
              <p className="flex items-center gap-4"><Building2 className="text-premium-red" /> White-label and co-branding options</p>
              <p className="flex items-center gap-4"><Users2 className="text-premium-red" /> Employee discount programs</p>
            </div>
          </div>
          <div className="relative">
             <img 
               src="/assets/unsplash_aHR0cHM6Ly.jpg" 
               className="rounded-[40px] shadow-2xl"
               alt="B2B Office"
             />
             <div className="absolute -bottom-10 -right-10 bg-black text-white p-10 rounded-3xl hidden md:block">
                <p className="text-5xl font-black italic text-premium-red">200+</p>
                <p className="font-bold uppercase tracking-widest text-xs mt-2">Active Partners Worldwide</p>
             </div>
          </div>
        </div>
      </section>

      {/* Wholesale Inquiry Form */}
      <section className="max-w-4xl mx-auto px-6">
         <div className="bg-[#111] p-12 md:p-20 rounded-[40px] border border-white/5 text-center">
            <h2 className="text-4xl font-black uppercase mb-4 italic">Start Your <span className="text-premium-red">Inquiry</span></h2>
            <p className="text-gray-500 mb-12">Submit your business details and our B2B team will contact you within 24 hours.</p>
            
            <form className="grid md:grid-cols-2 gap-6 text-left">
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Company Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-premium-red transition-all" />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-premium-red transition-all" />
               </div>
               <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">Message & Scale Requirements</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl outline-none focus:border-premium-red transition-all"></textarea>
               </div>
               <button className="md:col-span-2 bg-premium-red text-white py-5 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3">
                  Submit Proposal <Mail size={18} />
               </button>
            </form>
         </div>
      </section>

      {/* NEW: Logistics & Terms */}
      <section className="max-w-7xl mx-auto px-6 py-40">
         <div className="grid md:grid-cols-2 gap-20">
            <div>
               <h3 className="text-2xl font-black uppercase italic mb-8">Supply Chain <span className="text-premium-red">Standards</span></h3>
               <div className="space-y-6">
                  {[
                    'Automated Inventory Synching (API integration ready)',
                    'White-Glove Delivery for Flagship partners',
                    '30-Day Net payment terms for verified retailers',
                    'Bi-annual inventory buyout / refresh programs'
                  ].map(term => (
                    <div key={term} className="flex gap-4 items-start p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                       <div className="w-2 h-2 bg-premium-red rounded-full mt-2" />
                       <p className="text-sm text-white/60 font-medium uppercase tracking-wider">{term}</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="bg-premium-red p-12 rounded-[40px] flex flex-col justify-center">
               <h3 className="text-4xl font-black italic uppercase text-white mb-6">Partner <br/> Support</h3>
               <p className="text-white/80 mb-8 leading-relaxed">
                  Our B2B portal provides real-time access to high-res marketing assets, social media kits, and 24/7 restocking support. We don't just sell to you; we grow with you.
               </p>
               <button className="bg-black text-white py-4 px-8 rounded-full font-black uppercase text-[10px] tracking-[0.2em] self-start hover:bg-white hover:text-black transition-all">
                  Download Sample Kit
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Wholesale;

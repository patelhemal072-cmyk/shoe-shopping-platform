import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, BookOpen, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'How to Choose the Perfect Running Shoe',
    excerpt: 'Arch type, cushioning, drop height — everything you need to know before buying your next pair of running shoes.',
    category: 'Buying Guide',
    readTime: '5 min read',
    img: '/assets/product3.png',
  },
  {
    id: 2,
    title: 'The Complete Shoe Size Guide for India',
    excerpt: 'UK, US, EU — stop guessing your size. Our comprehensive chart covers all global sizing standards.',
    category: 'Size Guide',
    readTime: '4 min read',
    img: '/assets/product6.png',
  },
  {
    id: 3,
    title: 'Top Sneaker Trends of 2025',
    excerpt: 'Chunky soles are out. Minimalism is back. Here\'s what\'s dominating global runways and street style this season.',
    category: 'Trends',
    readTime: '6 min read',
    img: '/assets/product2.png',
  },
  {
    id: 4,
    title: 'Leather vs Synthetic: Which is Better?',
    excerpt: 'A deep dive into durability, breathability, cost, and sustainability across both material categories.',
    category: 'Material Guide',
    readTime: '7 min read',
    img: '/assets/product1.png',
  },
  {
    id: 5,
    title: 'Daily Foot Care Tips from Podiatrists',
    excerpt: 'Healthy feet = better life. Expert-approved habits to keep your feet pain-free and healthy year-round.',
    category: 'Foot Health',
    readTime: '5 min read',
    img: '/assets/product5.png',
  },
  {
    id: 6,
    title: 'How to Clean & Maintain Your Shoes',
    excerpt: 'From suede to patent leather — the ultimate shoe care guide to make your footwear last for years.',
    category: 'Care Tips',
    readTime: '4 min read',
    img: '/assets/product4.png',
  },
];

const categories = ['All', 'Buying Guide', 'Size Guide', 'Trends', 'Material Guide', 'Foot Health', 'Care Tips'];

const Knowledge = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Hero */}
      <section className="relative pt-48 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-premium-red/5 to-black pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-premium-red/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Digital Library
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase italic tracking-tighter mb-6 leading-none"
          >
            Knowledge <br/> <span className="text-premium-red underline decoration-white/10 underline-offset-8">Centre</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mt-10"
          >
            Master the art of high-performance footwear. From technical care guides to the latest runway trends, our expert library has you covered.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest border transition-all duration-200 ${
                i === 0
                  ? 'bg-premium-red text-white border-premium-red shadow-[0_10px_25px_rgba(255,31,31,0.3)]'
                  : 'border-white/10 text-gray-500 hover:border-premium-red hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-[40px] cursor-pointer grid lg:grid-cols-2 bg-white/[0.02] border border-white/5"
        >
          <div className="relative overflow-hidden h-96 lg:h-auto">
            <img
              src={articles[0].img}
              alt={articles[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-red mb-4 block">Article of the Month</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tight mb-6 leading-none">{articles[0].title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">{articles[0].excerpt}</p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-white/30 text-xs font-bold uppercase">
                <Clock size={16} className="text-premium-red" /> {articles[0].readTime}
              </div>
              <button className="flex items-center gap-3 text-premium-red font-black uppercase tracking-widest text-[10px] border-b-2 border-premium-red pb-1 hover:gap-6 transition-all">
                Read Article <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/[0.01] border border-white/5 rounded-3xl overflow-hidden cursor-pointer hover:bg-white/[0.03] transition-all"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1 text-[9px] font-black uppercase tracking-widest bg-premium-red text-white">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-black text-xl uppercase tracking-tighter mb-4 group-hover:text-premium-red transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex items-center gap-2 text-white/20 text-[10px] font-bold">
                    <Clock size={14} /> {article.readTime}
                  </div>
                  <button 
                    onClick={() => navigate('/shop')}
                    className="flex items-center gap-1 text-premium-red font-black uppercase tracking-widest text-[10px] hover:gap-3 transition-all"
                  >
                    Read <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-24">
          <button className="red-shading flex items-center gap-3 mx-auto px-12 py-5 text-white font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95">
            <BookOpen size={18} /> Load More Articles
          </button>
        </div>
      </section>

      {/* NEW: Material Encyclopedia */}
      <section className="bg-[#111] py-40 border-y border-white/5 px-6">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">The Library</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-10">Material <br/> <span className="text-premium-red">Encyclopedia.</span></h2>
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { name: 'Kangaroo Leather', desc: 'Superior strength-to-weight ratio for elite boots.', img: '/assets/product1.png' },
                       { name: 'Aero-Mesh 3.0', desc: 'Nanotech fabric for 100% moisture extraction.', img: '/assets/product3.png' },
                       { name: 'Carbon Chassis', desc: 'Rigid support for high-impact performance.', img: '/assets/product2.png' },
                       { name: 'Ocean Plastic', desc: 'Eco-performance materials for a greener future.', img: '/assets/product4.png' }
                     ].map(mat => (
                       <div key={mat.name} className="p-6 bg-white/5 rounded-2xl border border-white/5 group hover:border-premium-red/30 transition-all flex flex-col gap-4">
                          <img src={mat.img} className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                          <div>
                             <p className="font-black text-xs text-white uppercase italic mb-2">{mat.name}</p>
                             <p className="text-[10px] text-white/40 font-bold leading-relaxed">{mat.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative">
                  <img src="/assets/home-hero.jpg" className="rounded-[40px] grayscale brightness-50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <span className="text-white font-black text-9xl italic opacity-10">TECH</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* NEW: Podiatrist Corner (Health) */}
      <section className="py-40 px-6">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
               <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-8 leading-none">The <br/> <span className="text-premium-red">Expert</span> View</h2>
               <p className="text-gray-500 text-sm leading-relaxed mb-10">Direct advice from world-leading foot specialists and biometric engineers.</p>
               <div className="p-10 bg-premium-red text-white rounded-[40px]">
                  <p className="text-3xl font-black italic mb-4">"90% of joint pain starts at the heel strike."</p>
                  <p className="text-[10px] font-black uppercase tracking-widest">— Dr. Sarah Chen, Biometric Lead</p>
               </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
               {[
                 { q: 'How often should I replace running shoes?', a: 'Every 500-800km. The internal foam loses 30% shock absorption after this point.' },
                 { q: 'Are flat soles bad for long walks?', a: 'Only if they lack arch support. Look for internal cushioning even in minimalist designs.' },
                 { q: 'What causes toe numbness?', a: 'Usually an overly narrow toe-box. Ensure at least 1cm of space at the front.' },
                 { q: 'Is carbon fiber safe for daily use?', a: 'Yes, but ensure it is balanced with soft foam to prevent excessive feedback.' }
               ].map(faq => (
                 <div key={faq.q} className="p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-all">
                    <p className="font-black text-premium-red text-xs uppercase italic mb-4">Q: {faq.q}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* NEW: Knowledge Letter Signup */}
      <section className="mb-40 px-6">
         <div className="max-w-7xl mx-auto bg-white p-20 rounded-[50px] text-black flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-premium-red rounded-full blur-[120px] opacity-10" />
            <div className="relative z-10 max-w-xl">
               <h2 className="text-5xl font-black uppercase italic tracking-tighter mb-4 leading-none">Subscribe To The <span className="text-premium-red">Knowledge</span> Letter.</h2>
               <p className="text-black/40 text-[10px] font-black uppercase tracking-widest mb-10">Monthly deep-dives into footwear tech, care, and industry trends.</p>
               <div className="flex gap-2">
                  <input type="email" placeholder="YOUR EMAIL" className="flex-grow bg-black/5 border border-black/10 px-8 py-5 rounded-sm outline-none text-xs font-bold" />
                  <button className="bg-premium-red text-white px-10 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-black transition-all">Subscribe</button>
               </div>
            </div>
            <div className="hidden lg:block">
               <BookOpen size={180} className="text-black/5 -rotate-12" />
            </div>
         </div>
      </section>

      {/* CTA Footer Section */}
      <section className="bg-white text-black py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-6 block">Gear Up</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-10 leading-none">
            Ready To Upgrade Your Game?
          </h2>
          <button
            onClick={() => navigate('/shop')}
            className="bg-black text-white px-16 py-6 font-black uppercase text-sm tracking-widest hover:bg-premium-red transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            Visit The Shop
          </button>
        </div>
      </section>
    </div>
  );
};

export default Knowledge;

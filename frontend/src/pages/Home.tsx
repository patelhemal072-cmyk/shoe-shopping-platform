import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  ChevronRight,
  ChevronLeft,
  PlayCircle,
  Heart,
  ShoppingBag,
  Eye,
  Camera,
  Mail,
  Zap,
  Award,
  Leaf,
  Headphones
} from 'lucide-react';

/* ─── DATA ────────────────────────────────────────────────── */

const heroSlides = [
  {
    tagline: 'Crafting Excellence Since 1995',
    headline: ['Step Into', 'Premium'],
    sub: 'Your shoes tell your story. Make it legendary.',
    img: '',
    specs: { chassis: 'Carbon Fiber Flex', weight: '240g Ultra Light' }
  },
  {
    tagline: 'New Season Collection 2025',
    headline: ['Walk With', 'Confidence'],
    sub: 'Handcrafted luxury for the modern achiever.',
    img: '',
    specs: { chassis: 'Nitrogen-Infused Foam', weight: '210g Hyper Light' }
  },
  {
    tagline: 'Limited Edition Drop',
    headline: ['Born For', 'Greatness'],
    sub: 'Where tradition meets contemporary design.',
    img: '',
    specs: { chassis: 'Aerospace Aluminum Support', weight: '290g Built To Last' }
  },
  {
    tagline: 'The Apex Series',
    headline: ['Performance', 'Peak'],
    sub: 'Designed for those who never settle for second.',
    img: '',
    specs: { chassis: 'Dual-Density Plate', weight: '225g Speed Spec' }
  },
  {
    tagline: 'Evolution 2.0',
    headline: ['Future', 'Forward'],
    sub: 'Redefining the boundaries of athletic footwear.',
    img: '',
    specs: { chassis: 'Recycled Polymer Base', weight: '190g Eco Lightweight' }
  },
];

const genderCategories = [
  {
    label: 'Men',
    count: '120+ Styles',
    img: '/assets/men-hero.jpg',
    href: '/shop',
    accent: '#FF1F1F',
  },
  {
    label: 'Women',
    count: '95+ Styles',
    img: '/assets/women-hero.jpg',
    href: '/shop',
    accent: '#FFFFFF',
  },
  {
    label: 'Kids',
    count: '60+ Styles',
    img: '/assets/kids-hero.jpg',
    href: '/shop',
    accent: '#8B0000',
  },
];

const trendingProducts = [
  {
    id: 1,
    name: 'Apex Runner Pro',
    category: 'Running',
    price: '₹4,299',
    oldPrice: '₹5,999',
    rating: 4.8,
    reviews: 212,
    badge: 'Trending',
    img: '/assets/product3.png',
  },
  {
    id: 2,
    name: 'Heritage Oxford',
    category: 'Formal',
    price: '₹6,499',
    oldPrice: '₹8,499',
    rating: 4.9,
    reviews: 178,
    badge: 'Bestseller',
    img: '/assets/product1.png',
  },
  {
    id: 3,
    name: 'Urban Scout Boot',
    category: 'Boots',
    price: '₹7,199',
    oldPrice: '',
    rating: 4.7,
    reviews: 94,
    badge: 'New',
    img: '/assets/product4.png',
  },
  {
    id: 4,
    name: 'Cloud Stride Flex',
    category: 'Casual',
    price: '₹3,299',
    oldPrice: '₹4,299',
    rating: 4.6,
    reviews: 302,
    badge: 'Sale',
    img: '/assets/product2.png',
  },
  {
    id: 5,
    name: 'Royale Loafer',
    category: 'Loafers',
    price: '₹5,199',
    oldPrice: '',
    rating: 4.9,
    reviews: 145,
    badge: 'Premium',
    img: '/assets/product1.png',
  },
  {
    id: 6,
    name: 'Nimbus Knit Lite',
    category: 'Sports',
    price: '₹2,899',
    oldPrice: '₹3,699',
    rating: 4.5,
    reviews: 267,
    badge: 'Hot',
    img: '/assets/product6.png',
  },
];

const newArrivals = [
  {
    id: 7,
    name: 'Shadow Slip-On',
    price: '₹2,499',
    img: '/assets/product2.png',
    category: 'Casual',
  },
  {
    id: 8,
    name: 'Terra High Boot',
    price: '₹8,199',
    img: '/assets/product4.png',
    category: 'Boots',
  },
  {
    id: 9,
    name: 'Velocity Sprint',
    price: '₹3,799',
    img: '/assets/product3.png',
    category: 'Running',
  },
  {
    id: 10,
    name: 'Petal Heel Mule',
    price: '₹4,499',
    img: '/assets/product5.png',
    category: 'Women',
  },
];

const reviews = [
  {
    name: 'Arjun Mehra',
    city: 'Mumbai',
    rating: 5,
    text: 'Absolutely premium quality! The leather feels like butter and the craftsmanship is unmatched. Worth every rupee.',
    product: 'Heritage Oxford',
    avatar: '/assets/unsplash_aHR0cHM6Ly.jpg',
  },
  {
    name: 'Priya Sharma',
    city: 'Delhi',
    rating: 5,
    text: 'Finally found my perfect everyday sneaker. Comfortable from the first step, and they look stunning with anything.',
    product: 'Cloud Stride Flex',
    avatar: '/assets/unsplash_aHR0cHM6Ly.jpg',
  },
  {
    name: 'Rohan Patel',
    city: 'Ahmedabad',
    rating: 5,
    text: 'Ordered for my wedding. Got so many compliments. Fast delivery, beautiful packaging, flawless shoes.',
    product: 'Royale Loafer',
    avatar: '/assets/unsplash_aHR0cHM6Ly.jpg',
  },
  {
    name: 'Sneha Iyer',
    city: 'Bangalore',
    rating: 4,
    text: 'The design is exactly as shown online. Size fits perfectly. Would love more colorways for women.',
    product: 'Apex Runner Pro',
    avatar: '/assets/unsplash_aHR0cHM6Ly.jpg',
  },
];

const instagramPosts = [
  '/assets/unsplash_aHR0cHM6Ly.jpg',
  '/assets/unsplash_aHR0cHM6Ly.jpg',
  '/assets/unsplash_aHR0cHM6Ly.jpg',
  '/assets/unsplash_aHR0cHM6Ly.jpg',
  '/assets/unsplash_aHR0cHM6Ly.jpg',
  '/assets/unsplash_aHR0cHM6Ly.jpg',
];

const whyUsItems = [
  { icon: <Award size={32} />, title: 'Premium Quality', desc: 'Every pair passes 35-point quality checks using finest materials.' },
  { icon: <Truck size={32} />, title: 'Express Delivery', desc: 'Pan-India delivery within 3-5 days. Free on orders above ₹2,000.' },
  { icon: <RotateCcw size={32} />, title: 'Easy Returns', desc: '30-day hassle-free returns. No questions asked.' },
  { icon: <Zap size={32} />, title: 'AR Try-On', desc: 'See how shoes look on your feet before you buy — virtually.' },
  { icon: <Leaf size={32} />, title: 'Eco Conscious', desc: 'Sustainably sourced materials. Carbon-neutral packaging.' },
  { icon: <Headphones size={32} />, title: '24/7 Support', desc: 'Expert styling advice and customer support around the clock.' },
];

const stats = [
  { value: '30+', label: 'Years Heritage' },
  { value: '2L+', label: 'Happy Customers' },
  { value: '500+', label: 'Styles Available' },
  { value: '98%', label: 'Satisfaction Rate' },
];

/* ─── BADGE COLORS ─────────────────────────────────────────── */
const badgeStyle: Record<string, string> = {
  Trending: 'bg-red-600',
  Bestseller: 'bg-white text-black',
  New: 'bg-red-800',
  Sale: 'bg-premium-red',
  Premium: 'border border-white/20 text-white',
  Hot: 'bg-black text-white border border-red-600',
};

/* ─── PRODUCT CARD ─────────────────────────────────────────── */
const ProductCard = ({ p }: { p: typeof trendingProducts[0] }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => navigate(`/product/${p.id}`)}
      className="group relative bg-black/40 border border-white/5 rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 backdrop-blur-sm"
      style={{ width: '320px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
    >
      {/* Red Glow on Hover */}
      <div className="absolute inset-0 bg-premium-red/0 group-hover:bg-premium-red/[0.03] transition-colors duration-500" />
      {/* Heart/Like */}
      <button
        onClick={(e) => { e.stopPropagation(); setLiked(!liked); }}
        className={`absolute top-5 right-5 z-20 p-2.5 rounded-full backdrop-blur-md transition-all ${liked ? 'bg-premium-red text-white' : 'bg-white/5 hover:bg-white/10 text-white/40'}`}
      >
        <Heart size={18} fill={liked ? 'currentColor' : 'none'} strokeWidth={2} />
      </button>

      <div className="relative overflow-hidden h-72 flex items-center justify-center p-8">
        {/* Background "Brand" outline text like Image 1 */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[8rem] font-black text-white/[0.03] italic leading-none whitespace-nowrap">NIKE</span>
        </div>

        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        />
        
        {/* Rating badge like Image 1 */}
        <div className="absolute bottom-4 right-6 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,31,31,0.2)]">
           <Star size={10} fill="#FF1F1F" className="text-premium-red" />
           <span className="text-[10px] font-bold text-white">{p.rating}</span>
        </div>
      </div>

      <div className="p-6 pt-2">
        <h3 className="font-heading font-black text-white text-xl mb-1 uppercase tracking-tight">{p.name}</h3>
        <p className="text-[11px] uppercase tracking-widest text-white/40 font-bold mb-4">{p.category} — {p.id % 2 === 0 ? 'Collection 2025' : 'Limited Drop'}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-white font-black text-2xl tracking-tighter">{p.price}</span>
            {p.oldPrice && <span className="text-white/20 line-through text-xs">{p.oldPrice}</span>}
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); navigate(`/product/${p.id}`); }}
            className="bg-premium-red text-white px-6 py-2.5 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── MAIN COMPONENT ───────────────────────────────────────── */
const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timestamps = [0, 3, 6, 9, 12]; // Syncing every 3 seconds for fast-paced video edits

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const currentTime = videoRef.current.currentTime;
    
    // Calculate index based on 3-second blocks
    const newIndex = Math.floor(currentTime / 3) % heroSlides.length;
    
    if (newIndex !== currentSlide) {
      setCurrentSlide(newIndex);
    }
  };

  // Progress Bar Width calculation based on current frame duration
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!videoRef.current) return;
      const time = videoRef.current.currentTime;
      const startTime = Math.floor(time / 3) * 3;
      const nextTime = startTime + 3;
      const p = ((time - startTime) / 3) * 100;
      setProgress(Math.min(p, 100));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollSlider = (dir: 'left' | 'right') => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: dir === 'right' ? 350 : -350, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="bg-premium-dark text-premium-cream min-h-screen overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          1. DYNAMIC VIDEO HERO — Left Content Detail
      ══════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden bg-black flex items-center">
        {/* Local Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover"
          >
            <source src="/SHOES WEBSITE VIDEO.mp4" type="video/mp4" />
          </video>
          {/* Subtle gradient to keep left text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
        </div>

        {/* Left Side Dynamic Details */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-10">
           <div className="max-w-xl">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={currentSlide}
                   initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                 >
                    <span className="text-premium-red font-black uppercase tracking-[0.5em] text-[10px] mb-4 block">
                       Product Specification // 0{currentSlide + 1}
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black italic uppercase text-white mb-6 tracking-tighter leading-none">
                       {heroSlides[currentSlide].headline[0]} <br/>
                       <span className="text-premium-red underline decoration-white/10 underline-offset-8">
                          {heroSlides[currentSlide].headline[1]}
                       </span>
                    </h1>
                    <p className="text-white/60 text-lg font-medium leading-relaxed mb-10 border-l-2 border-premium-red/30 pl-6">
                       {heroSlides[currentSlide].sub}
                    </p>

                    {/* Additional Technical Details */}
                    <div className="grid grid-cols-2 gap-8 mb-12">
                       <div>
                          <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-2 font-mono">Chassis</p>
                          <p className="text-white font-bold text-sm">{heroSlides[currentSlide].specs.chassis}</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mb-2 font-mono">Weight</p>
                          <p className="text-white font-bold text-sm">{heroSlides[currentSlide].specs.weight}</p>
                       </div>
                    </div>
                    
                    <button 
                      onClick={() => navigate('/shop')}
                      className="bg-premium-red text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all"
                    >
                       View Details
                    </button>
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>

        {/* Global Slide Progress Bar (Perfect Sync) */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-20">
           <div 
             style={{ width: `${progress}%` }}
             className="h-full bg-premium-red transition-all duration-75"
           />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. TRUST / STATS BAR
      ══════════════════════════════════════════════ */}
      <section className="bg-black/60 border-y border-white/5 py-14">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap justify-between items-center opacity-20 grayscale gap-10">
           {['VOGUE', 'GQ', 'HYPEBEAST', 'HIGHSNOBIETY', 'ESQUIRE'].map(mag => (
             <span key={mag} className="text-2xl font-black italic tracking-tighter">{mag}</span>
           ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
               <div className="text-display-normal text-white mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{s.value}</div>
              <div className="label-mono text-gray-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. FEATURED CATEGORIES — Men / Women / Kids
      ══════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="label-mono text-premium-tan mb-3 block">Shop By</span>
            <h2 className="text-display-normal" style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}>Featured Categories</h2>
          </div>
          <button onClick={() => navigate('/shop')} className="label-mono flex items-center gap-2 text-premium-tan hover:gap-4 transition-all border-b-2 border-premium-tan pb-1">
            View All <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {genderCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => navigate(cat.href)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              style={{ height: i === 0 ? '600px' : '600px' }}
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Corner accent line */}
              <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-premium-tan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-premium-tan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">{cat.count}</p>
                <h3 className="text-5xl font-black uppercase font-heading tracking-tighter text-white group-hover:text-premium-red transition-colors duration-300">{cat.label}</h3>
                <div className="flex items-center gap-3 mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs font-black uppercase tracking-widest text-premium-red">Explore</span>
                  <ArrowRight size={16} className="text-premium-red" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. CATEGORY PILLS — Image 1 Style
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4 mb-14">
             <span className="text-premium-red font-black uppercase text-4xl italic mr-8">Categories</span>
             {['All', 'Sports', 'Shoes', 'Sandals', 'Slipper', 'Jogging'].map((cat, i) => (
               <button 
                key={i}
                className={`px-8 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all ${i === 0 ? 'bg-white text-black' : 'bg-[#1c1c1e] text-white/50 border border-white/5 hover:border-white/20'}`}
               >
                 {cat}
               </button>
             ))}
          </div>

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto pb-10 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {trendingProducts.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEW: TECH SPECS SECTION — Image 3 Style
      ══════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0a0a0a] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
           <span className="text-[25vw] font-black italic">SPECS</span>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-6xl md:text-8xl font-black italic text-white uppercase mb-4 leading-none">Tech Specs</h2>
             <div className="w-24 h-1.5 bg-premium-red mx-auto rounded-full" />
          </div>

          <div className="relative flex items-center justify-center min-h-[600px]">
             {/* Tech Lines Overlay */}
             <div className="absolute inset-0 z-10 hidden lg:block">
                {/* Feature 1: Dynamic Flywire */}
                <div className="absolute top-[15%] left-[10%] max-w-[250px] text-left">
                   <p className="text-premium-red font-black text-xs uppercase tracking-widest mb-2">Dynamic Flywire</p>
                   <p className="text-white/40 text-sm leading-relaxed mb-4">Integrates with the laces for a secure, adaptive fit that locks you in.</p>
                   <div className="w-full h-px bg-white/20 relative">
                      <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-premium-red translate-x-1 -translate-y-1/2 shadow-[0_0_10px_#FF1F1F]" />
                      {/* Connection line to shoe */}
                      <svg className="absolute top-0 left-full w-[200px] h-40 pointer-events-none">
                         <path d="M 0 0 L 150 100" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="1" />
                      </svg>
                   </div>
                </div>

                {/* Feature 2: Air Zoom Unit */}
                <div className="absolute bottom-[10%] right-[12%] max-w-[250px] text-right">
                   <p className="text-premium-red font-black text-xs uppercase tracking-widest mb-2">Air Zoom Technology</p>
                   <p className="text-white/40 text-sm leading-relaxed mb-4">Precision-engineered cushioning for maximum energy return with every stride.</p>
                   <div className="w-full h-px bg-white/20 relative">
                       <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-premium-red -translate-x-1 -translate-y-1/2 shadow-[0_0_10px_#FF1F1F]" />
                       <svg className="absolute bottom-0 right-full w-[200px] h-40 pointer-events-none">
                          <path d="M 200 0 L 50 120" stroke="rgba(255,255,255,0.1)" fill="none" strokeWidth="1" />
                       </svg>
                   </div>
                </div>
             </div>

             {/* Main Shoe Image */}
             <motion.div 
               whileInView={{ scale: [0.9, 1.05, 1], rotate: [-2, 2, 0] }}
               transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
               className="relative z-0 w-full max-w-2xl px-10"
             >
                <img 
                  src="/assets/shoe4.png" 
                  alt="Tech Shoe" 
                  className="w-full filter brightness-110 drop-shadow-[0_0_80px_rgba(255,255,255,0.05)]"
                />
             </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEW: THE CRAFTSMANSHIP — Modern Editorial
      ══════════════════════════════════════════════ */}
      <section className="py-40 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="label-mono text-premium-red mb-3 block">Process</span>
            <h2 className="text-display-normal mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 6rem)' }}>The Art Of<br/>Creation</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Curated Raw Materials', desc: 'We source top-grain leathers and high-tech polymers from certified eco-friendly tanneries across Europe.' },
                { step: '02', title: 'Precision Hand-Stitching', desc: 'Each pair undergoes 18 hours of expert craftsmanship by master cobblers with 20+ years of legacy.' },
                { step: '03', title: 'Rigorous Stress Testing', desc: 'Performance shoes are tested for 500+ miles of simulated impact to ensure absolute structural integrity.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 border-b border-white/5 pb-8 last:border-0">
                  <span className="text-4xl font-black italic text-premium-red/30 leading-none">{item.step}</span>
                  <div>
                    <h3 className="text-xl font-bold uppercase mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
             <div className="relative rounded-[40px] overflow-hidden">
                <img 
                  src="/assets/unsplash_aHR0cHM6Ly.jpg" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
             </div>
             {/* Decorative tag */}
             <div className="absolute -bottom-10 -left-10 bg-premium-red p-10 rounded-3xl md:block hidden">
                <p className="text-white font-black text-4xl leading-none italic">100%</p>
                <p className="text-white/60 font-medium text-[10px] uppercase tracking-widest mt-2">Authentic Quality</p>
             </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEW: FOOTWEAR ANATOMY — Exploded View Style
      ══════════════════════════════════════════════ */}
      <section className="py-40 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-premium-red/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="label-mono text-premium-red mb-3 block">Engineering</span>
            <h2 className="text-display-normal" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>The Anatomy Of <br/> <span className="text-premium-red">Excellence</span></h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
             {/* Left Features */}
             <div className="space-y-16 lg:text-right">
                {[
                  { title: 'Breathable Upper', desc: 'Custom-engineered aero-mesh with 4-way stretch for maximum ventilation.' },
                  { title: 'Carbon Chassis', desc: 'Internal carbon fiber plate providing high energy return and stability.' }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                     <h3 className="text-2xl font-black uppercase text-white mb-4 group-hover:text-premium-red transition-colors italic">{item.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed max-w-xs lg:ml-auto">{item.desc}</p>
                  </div>
                ))}
             </div>

             {/* Center Image */}
             <div className="relative flex justify-center py-20">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="relative z-10"
                >
                   <img src="/assets/shoe4.png" className="w-full rotate-[15deg] drop-shadow-[0_40px_80px_rgba(255,31,31,0.2)]" />
                   {/* Animated pulse dots */}
                   <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-premium-red rounded-full animate-ping" />
                   <div className="absolute top-[60%] left-[80%] w-3 h-3 bg-premium-red rounded-full animate-ping" />
                </motion.div>
             </div>

             {/* Right Features */}
             <div className="space-y-16">
                {[
                  { title: 'Ultra-Grip Sole', desc: 'Hybrid rubber compound designed for 360° traction on all urban surfaces.' },
                  { title: 'Adaptive Fit', desc: 'Heel-locking system that molds to your unique foot shape over time.' }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                     <h3 className="text-2xl font-black uppercase text-white mb-4 group-hover:text-premium-red transition-colors italic">{item.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          NEW: GLOBAL IMPACT — Statistics
      ══════════════════════════════════════════════ */}
      <section className="py-24 border-y border-white/5 bg-black">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '50+', label: 'Global Stores' },
              { val: '1.2M', label: 'Pairs Shipped' },
              { val: '24/7', label: 'Expert Support' },
              { val: '15+', label: 'Awards Won' }
            ].map((stat, i) => (
              <div key={i}>
                 <p className="text-5xl md:text-7xl font-black italic text-white mb-2 leading-none">{stat.val}</p>
                 <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-premium-red">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="label-mono text-premium-red mb-3 block">Just Landed</span>
          <h2 className="text-display-normal" style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}>New Arrivals</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newArrivals.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden h-72">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full bg-premium-red text-white">New</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <button className="w-full py-3 bg-premium-red text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-5">
                <p className="label-mono text-premium-red mb-1">{p.category}</p>
                <h3 className="text-display-normal text-white mb-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>{p.name}</h3>
                <span className="text-white font-black text-lg">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => navigate('/shop')}
            id="new-arrivals-all-btn"
            className="btn-premium group flex items-center gap-3 mx-auto px-12 py-4"
          >
            View All New Arrivals <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
          </button>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. BRAND STORY — Diagonal Layout like Image 4/5
      ══════════════════════════════════════════════ */}
      <section className="relative py-40 overflow-hidden bg-white text-black">
        {/* Diagonal Background Section like Image 4 */}
        <div className="absolute top-0 left-0 w-full h-[30%] bg-black -skew-y-3 origin-top-left -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-premium-red -skew-y-3 origin-bottom-right translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative p-4 bg-black rounded-[40px] rotate-2 shadow-[0_20px_50px_rgba(255,31,31,0.15)]">
              <img
                src="/assets/unsplash_aHR0cHM6Ly.jpg"
                alt="Founder"
                className="rounded-[30px] w-full"
              />
              <div className="absolute -bottom-10 -right-10 bg-premium-red p-8 rounded-3xl shadow-2xl rotate-3">
                 <p className="text-white font-black text-5xl leading-none">30+</p>
                 <p className="text-white font-bold text-xs uppercase tracking-widest mt-2">Years of Legacy</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <div>
              <span className="bg-black text-white px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest mb-6 inline-block">The Visionary</span>
              <h2 className="text-7xl font-black italic uppercase leading-none tracking-tighter">
                "We don't just <span className="text-white bg-premium-red px-2">sell shoes,</span> we build legacy."
              </h2>
            </div>
            
            <p className="text-xl font-medium text-gray-700 leading-relaxed max-w-lg">
              Started in a small studio, now defining premium standards across the globe. Our craftsmanship is the intersection of soul and sole.
            </p>

            <div className="flex items-center gap-10">
               <button 
                  onClick={() => navigate('/about')}
                  className="bg-black text-white px-10 py-4 rounded-2xl font-black uppercase tracking-tighter text-lg hover:bg-premium-red transition-all"
               >
                  Read our Story
               </button>
               <div className="flex items-center gap-4">
                  <PlayCircle size={40} className="text-black cursor-pointer hover:scale-110 transition-transform" />
                  <span className="font-bold uppercase text-[10px] tracking-widest">Watch Film</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. WHY CHOOSE US — 6-Feature Grid
      ══════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="label-mono text-premium-red mb-3 block">Our Promise</span>
          <h2 className="text-display-normal" style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}>Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card group relative overflow-hidden rounded-2xl p-8 hover:border-premium-red/20 transition-all duration-300"
            >
              <div className="text-premium-red mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {item.icon}
              </div>
              <h3 className="text-display-normal text-white mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}>{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-premium-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. CUSTOMER REVIEWS — Carousel
      ══════════════════════════════════════════════ */}
      <section className="py-32 bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="label-mono text-premium-red mb-3 block">Social Proof</span>
            <h2 className="text-display-normal" style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}>What They Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#FF1F1F" className="text-premium-red" />
              ))}
              <span className="label-mono text-white/40 text-sm ml-2">4.9 out of 5 · 2,000+ reviews</span>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIdx}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-3xl p-10 md:p-14 text-center"
              >
                <div className="flex items-center justify-center gap-1 mb-8">
                  {[...Array(reviews[reviewIdx].rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FF1F1F" className="text-premium-red" />
                  ))}
                </div>
                <p className="text-display-normal text-white leading-relaxed mb-10" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
                  "{reviews[reviewIdx].text}"
                </p>
                <div className="flex items-center justify-center gap-5">
                  <img
                    src={reviews[reviewIdx].avatar}
                    alt={reviews[reviewIdx].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-premium-red"
                  />
                  <div className="text-left">
                    <p className="text-display-normal text-white" style={{ fontSize: '1rem' }}>{reviews[reviewIdx].name}</p>
                    <p className="label-mono text-premium-red">{reviews[reviewIdx].city} · {reviews[reviewIdx].product}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setReviewIdx((reviewIdx - 1 + reviews.length) % reviews.length)}
                className="p-3 border border-white/10 hover:border-premium-red hover:text-premium-red transition-colors rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === reviewIdx ? 'w-8 bg-premium-red' : 'w-2 bg-white/20'}`}
                />
              ))}
              <button
                onClick={() => setReviewIdx((reviewIdx + 1) % reviews.length)}
                className="p-3 border border-white/10 hover:border-premium-red hover:text-premium-red transition-colors rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. INSTAGRAM GALLERY
      ══════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="label-mono text-premium-red mb-3 block">Follow Along</span>
            <h2 className="text-display-normal" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}>@PremiumFootwear</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="label-mono flex items-center gap-2 text-premium-red border-b-2 border-premium-red pb-1 hover:gap-4 transition-all"
          >
            <Camera size={16} /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {instagramPosts.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img src={src} alt={`instagram ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera size={24} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10. NEWSLETTER SIGNUP
      ══════════════════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] p-14 md:p-24 text-center border border-white/5 bg-[#111]"
        >
          {/* Neon Glow Accents */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-premium-red to-transparent opacity-50" />
          <div className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-premium-red to-transparent opacity-30" />
          
          {/* Decorative rings / floating blobs like Image 2 */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-premium-red/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-premium-red/5 blur-[100px] rounded-full pointer-events-none" />

          <span className="bg-premium-red text-white px-4 py-1 rounded-full font-black text-xs uppercase tracking-widest mb-6 inline-block">Exclusive Access</span>
          <h2 className="text-8xl md:text-[10rem] font-black italic text-white uppercase mb-6 leading-none tracking-tighter">
            JOIN THE <br/> <span className="text-premium-red">CIRCLE</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed uppercase tracking-widest text-[10px]">
            Subscribe for new drops, exclusive offers, and first access to limited-edition collections. 
          </p>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 text-premium-red font-black text-2xl uppercase tracking-tighter"
            >
              <ShieldCheck size={32} /> YOU'RE IN.
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto items-center">
              <div className="flex items-center gap-4 flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 focus-within:border-premium-red transition-colors w-full">
                <Mail size={20} className="text-white/20 shrink-0" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  required
                  className="bg-transparent text-white placeholder-white/10 py-5 w-full outline-none font-bold text-sm tracking-widest"
                />
              </div>
              <button
                type="submit"
                id="newsletter-subscribe-btn"
                className="bg-premium-yellow text-black h-full px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95"
              >
                JOIN NOW
              </button>
            </form>
          )}

          <p className="text-white/20 font-bold text-[10px] tracking-[0.3em] uppercase mt-10">Get 10% off your first order on signup</p>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          BOTTOM B2B CTA
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-mono text-premium-red mb-2">For Retailers &amp; Distributors</p>
            <h2 className="text-display-normal" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>Partner With Us</h2>
            <p className="text-gray-500 mt-2">Join our elite wholesale network. Bulk pricing, dedicated support.</p>
          </div>
          <button
            onClick={() => navigate('/wholesale')}
            id="b2b-partner-btn"
            className="btn-premium group flex items-center gap-3 px-10 py-4 whitespace-nowrap shrink-0"
          >
            Become a Partner <ChevronRight className="group-hover:translate-x-2 transition-transform" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

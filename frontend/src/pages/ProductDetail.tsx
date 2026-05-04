import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/api';
import { type Product } from '../data/products';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ShieldCheck, Truck, RotateCcw, ChevronLeft, Heart, Share2, Loader2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [activeImg, setActiveImg] = useState<string>('');

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      try {
        const data = await getProductById(id);
        setProduct(data);
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }
        setActiveImg(data.image);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white bg-black gap-4">
        <Loader2 className="animate-spin text-premium-red" size={64} />
        <p className="font-black uppercase tracking-[0.4em]">Analyzing Blueprint...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white bg-black gap-6">
        <h1 className="text-4xl font-black italic uppercase">404 - Trace Not Found</h1>
        <button 
          onClick={() => navigate('/shop')}
          className="px-8 py-4 bg-premium-red text-white font-black uppercase tracking-widest text-xs"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/40 hover:text-premium-red transition-all mb-12 uppercase font-black text-xs tracking-widest"
        >
          <ChevronLeft size={16} /> Back to Collection
        </button>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Gallery Section */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square rounded-[40px] overflow-hidden bg-white/5 border border-white/5 group relative"
            >
              <img src={activeImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={product.name} />
              <div className="absolute top-8 right-8 flex flex-col gap-3">
                 <button className="p-4 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-premium-red transition-all">
                    <Heart size={20} />
                 </button>
                 <button className="p-4 bg-black/40 backdrop-blur-md rounded-full text-white hover:text-premium-red transition-all">
                    <Share2 size={20} />
                 </button>
              </div>
            </motion.div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveImg(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImg === img ? 'border-premium-red p-1' : 'border-transparent opacity-40 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
            <span className="text-premium-red font-black uppercase tracking-[0.4em] text-xs mb-4 block">{product.category}</span>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 leading-none">{product.name}</h1>
            
            <div className="flex items-center gap-6 mb-8">
               <div className="flex items-center gap-1 text-premium-red">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "#FF1F1F" : "none"} />)}
                  <span className="text-white font-black ml-2">{product.rating}</span>
               </div>
               <span className="text-white/20 text-xs font-bold uppercase tracking-widest">{product.reviewsCount} verified reviews</span>
            </div>

            <p className="text-4xl font-black italic text-premium-red mb-10 leading-none">₹{product.price.toLocaleString()}</p>

            <div className="space-y-10 mb-12">
               <div>
                  <p className="text-white font-black uppercase text-xs tracking-widest mb-6">Select Color</p>
                  <div className="flex gap-4">
                     {product.colors.map(color => (
                        <button 
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-6 py-3 rounded-xl border-2 font-bold uppercase text-[10px] tracking-widest transition-all ${selectedColor === color ? 'border-premium-red text-white bg-premium-red/10' : 'border-white/5 text-white/30 hover:border-white/20'}`}
                        >
                           {color}
                        </button>
                     ))}
                  </div>
               </div>

               <div>
                  <div className="flex justify-between items-center mb-6">
                     <p className="text-white font-black uppercase text-xs tracking-widest">Select Size (EU)</p>
                     <button className="text-[10px] text-premium-red font-black uppercase border-b border-premium-red pb-0.5">Size Guide</button>
                  </div>
                  <div className="grid grid-cols-5 gap-3">
                     {product.sizes.map(size => (
                        <button 
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`py-4 rounded-xl border-2 font-black transition-all ${selectedSize === size ? 'border-premium-red bg-premium-red text-white' : 'border-white/5 text-white/40 hover:border-premium-red/50 hover:text-white'}`}
                        >
                           {size}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <button className="red-shading w-full py-6 text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all mb-10">
               <ShoppingCart size={20} /> Add To Cart
            </button>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-4 py-10 border-y border-white/5">
                {[
                  { icon: <ShieldCheck className="text-premium-red" />, title: '2 YEAR', desc: 'WARRANTY' },
                  { icon: <Truck className="text-premium-red" />, title: 'EXPRESS', desc: 'DELIVERY' },
                  { icon: <RotateCcw className="text-premium-red" />, title: '30 DAY', desc: 'RETURNS' }
                ].map((prop, i) => (
                  <div key={i} className="text-center">
                     <div className="flex justify-center mb-2">{prop.icon}</div>
                     <p className="font-black text-xs text-white">{prop.title}</p>
                     <p className="text-[9px] font-bold text-white/30">{prop.desc}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Deep Details (PRD 5.3) */}
        <div className="mt-40 grid lg:grid-cols-2 gap-20 items-start">
           <div>
              <h2 className="text-4xl font-black uppercase italic mb-8 border-l-8 border-premium-red pl-8 leading-tight">Master <br/> Craftsmanship</h2>
              <p className="text-white/40 text-lg leading-relaxed mb-10">{product.longDescription}</p>
              <div className="space-y-4">
                 {product.materials.map((m, i) => (
                   <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl">
                      <div className="w-2 h-2 bg-premium-red rounded-full" />
                      <span className="font-black uppercase tracking-widest text-xs">{m}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-[#111] p-12 rounded-[40px] border border-white/5">
              <h3 className="text-2xl font-black uppercase italic italic mb-10">Technical <span className="text-premium-red">Blueprint</span></h3>
              <div className="space-y-6">
                 {Object.entries(product.specs).map(([key, val]) => (
                   <div key={key} className="flex justify-between items-center py-4 border-b border-white/5">
                      <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest">{key}</span>
                      <span className="text-white font-black text-xs uppercase italic">{val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

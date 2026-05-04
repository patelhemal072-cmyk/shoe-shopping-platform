import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, ShieldCheck, Mail, MapPin, Phone, Building2 } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="bg-black text-white min-h-screen pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Shipping Details */}
          <div className="space-y-12">
             <h1 className="text-5xl font-black uppercase italic tracking-tighter mb-12">Secure <span className="text-premium-red">Checkout</span></h1>
             
             <div className="space-y-8">
                <div className="flex gap-4 items-center border-b border-white/5 pb-4">
                   <div className="w-10 h-10 bg-premium-red rounded-full flex items-center justify-center font-black">1</div>
                   <h2 className="text-2xl font-black uppercase italic">Shipping Information</h2>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">First Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Last Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                   </div>
                   <div className="space-y-2 col-span-2">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Email Address</label>
                      <input type="email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                   </div>
                   <div className="space-y-2 col-span-2">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Full Address</label>
                      <textarea className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" rows={3}></textarea>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">City</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Pincode</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                   </div>
                </div>
             </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-12">
             <div className="bg-[#111] p-12 rounded-[40px] border border-white/5">
                <div className="flex gap-4 items-center border-b border-white/5 pb-4 mb-10">
                   <div className="w-10 h-10 bg-premium-red rounded-full flex items-center justify-center font-black">2</div>
                   <h2 className="text-2xl font-black uppercase italic">Payment Method</h2>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                   {[
                     { id: 'card', name: 'CARD', icon: <CreditCard /> },
                     { id: 'upi', name: 'UPI', icon: <Building2 /> },
                     { id: 'cod', name: 'COD', icon: <Truck /> }
                   ].map(method => (
                     <button 
                       key={method.id}
                       onClick={() => setPaymentMethod(method.id)}
                       className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all ${paymentMethod === method.id ? 'border-premium-red bg-premium-red/10 text-white' : 'border-white/5 text-white/20'}`}
                     >
                        {method.icon}
                        <span className="font-black text-[10px] tracking-widest">{method.name}</span>
                     </button>
                   ))}
                </div>

                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Card Number</label>
                      <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                      <input type="text" placeholder="CVV" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-premium-red" />
                   </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/5 space-y-4">
                   <div className="flex justify-between items-center text-white/40 font-bold uppercase text-[10px] tracking-widest">
                      <span>Grand Total</span>
                      <span className="text-xl font-black text-white italic">₹22,997.00</span>
                   </div>
                   <button className="red-shading w-full py-6 text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 hover:scale-[1.02] transition-all">
                      Confirm & Pay Now
                   </button>
                   <div className="flex items-center gap-2 justify-center text-[9px] font-black uppercase tracking-widest text-white/20">
                      <ShieldCheck size={14} /> 100% Payment Security via Razorpay
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;

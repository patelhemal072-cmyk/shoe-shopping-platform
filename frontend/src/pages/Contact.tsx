import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl font-black mb-8 tracking-tighter uppercase">Get In <span className="text-premium-red">Touch</span></h1>
          <p className="text-gray-400 text-lg mb-12">Whether you're looking for a custom pair or interested in partnership opportunities, our concierge team is here to assist.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/5 rounded-full text-premium-red"><Mail /></div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-500">Email Us</p>
                <p className="font-bold">hello@premiumfootwear.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/5 rounded-full text-premium-red"><Phone /></div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-500">Call Us</p>
                <p className="font-bold">+1 (555) 789-0123</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white/5 rounded-full text-premium-red"><MapPin /></div>
              <div>
                <p className="text-xs uppercase font-bold text-gray-500">Visit Studio</p>
                <p className="font-bold">88 Luxury Lane, Artisan District, NY</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-10 bg-white/[0.03] border border-white/5 rounded-3xl">
          <form className="space-y-6">
             <div className="grid grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-premium-red outline-none" />
                <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-premium-red outline-none" />
             </div>
             <input type="text" placeholder="Subject" className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-premium-red outline-none" />
             <textarea placeholder="Your Message" rows={6} className="w-full bg-white/5 border border-white/10 p-4 rounded-lg focus:border-premium-red outline-none"></textarea>
             <button className="btn-premium w-full flex items-center justify-center gap-3">
               Send Inquiry <Send size={18} />
             </button>
          </form>
        </div>
      </div>

      {/* New FAQ Section on Contact Page */}
      <div className="max-w-4xl mx-auto px-6 py-32 border-t border-white/5 mt-20">
         <h2 className="text-4xl font-black uppercase italic mb-12 text-center">Frequently Asked <span className="text-premium-red">Questions</span></h2>
         <div className="space-y-6">
            {[
              { q: 'How long does shipping take?', a: 'Standard shipping takes 3-5 business days, while express delivery takes 24-48 hours.' },
              { q: 'Do you offer international returns?', a: 'Yes, we offer a 30-day return window for international orders, though return shipping fees apply.' },
              { q: 'Can I customize my pair?', a: 'Currently, we offer customization for our "Heritage" collection through our bespoke studio service.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-premium-red/20 transition-all">
                <h3 className="font-bold uppercase text-lg mb-4 text-white">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Contact;

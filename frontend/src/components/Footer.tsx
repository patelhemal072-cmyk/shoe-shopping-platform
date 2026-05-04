import { Globe, MessageCircle, Send, Play, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-premium-cream pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-heading font-extrabold tracking-tighter text-premium-red block cursor-pointer">
            FOOT<span className="text-white">WEAR</span>
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm">
            Discover the perfect blend of craftsmanship, comfort, and style. Our footwear is designed for the modern individual who values both elegance and endurance.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-premium-red hover:text-white transition-all rounded-full"><Globe size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-premium-red hover:text-white transition-all rounded-full"><MessageCircle size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-premium-red hover:text-white transition-all rounded-full"><Send size={18} /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-premium-red hover:text-white transition-all rounded-full"><Play size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-premium-red uppercase tracking-widest">Quick Links</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/men" className="hover:text-premium-red transition-colors">Men's Collection</Link></li>
            <li><Link to="/women" className="hover:text-premium-red transition-colors">Women's Collection</Link></li>
            <li><Link to="/knowledge" className="hover:text-premium-red transition-colors">Knowledge Center</Link></li>
            <li><Link to="/wholesale" className="hover:text-premium-red transition-colors">Bulk Orders</Link></li>
            <li><Link to="/contact" className="hover:text-premium-red transition-colors">Size Guide</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-premium-red uppercase tracking-widest">Customer Care</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/account" className="hover:text-premium-red transition-colors">Track My Order</Link></li>
            <li><Link to="/contact" className="hover:text-premium-red transition-colors">Return Policy</Link></li>
            <li><Link to="/contact" className="hover:text-premium-red transition-colors">Shipping Info</Link></li>
            <li><Link to="/contact" className="hover:text-premium-red transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/contact" className="hover:text-premium-red transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-premium-red uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-premium-red shrink-0" />
              <span>123 Luxury Avenue, Fashion District, Mumbai, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-premium-red shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-premium-red shrink-0" />
              <span>support@premiumfootwear.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-all active:scale-95 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
        <p>&copy; {new Date().getFullYear()} Premium Footwear Brand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

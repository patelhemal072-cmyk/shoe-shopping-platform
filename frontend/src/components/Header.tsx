import { useState, useEffect } from 'react';
import { ShoppingCart, Search, User, Menu, X, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check for user
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/account');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Knowledge', href: '/knowledge' },
    { name: 'About', href: '/about' },
    { name: 'Style V2', href: '/v2' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-premium-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-black italic tracking-tighter text-white cursor-pointer">
          FOOT<span className="text-premium-red">WEAR</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-black hover:text-premium-red transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-premium-red transition-all cursor-pointer">
            <Search size={22} strokeWidth={2} />
          </button>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-premium-red hidden sm:block">
                Hello, {user.name.split(' ')[0]}
              </span>
              <button 
                onClick={handleLogout}
                className="text-white hover:text-premium-red transition-all cursor-pointer"
              >
                <LogOut size={20} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <button 
              onClick={() => navigate('/account')}
              className="text-white hover:text-premium-red transition-all cursor-pointer"
            >
              <User size={22} strokeWidth={2} />
            </button>
          )}
          
          <button 
            onClick={() => navigate('/cart')}
            className="relative text-white hover:text-premium-red transition-all cursor-pointer"
          >
            <ShoppingCart size={22} strokeWidth={2} />
            <span className="absolute -top-2 -right-2 bg-premium-red text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-black">
              2
            </span>
          </button>
          <button 
            className="lg:hidden text-premium-cream"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-premium-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg uppercase tracking-wider font-semibold hover:text-premium-red"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

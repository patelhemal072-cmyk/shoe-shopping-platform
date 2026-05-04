import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy loading pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Knowledge = lazy(() => import('./pages/Knowledge'));
const Contact = lazy(() => import('./pages/Contact'));
const HomeAlt = lazy(() => import('./pages/HomeAlt'));
const Wholesale = lazy(() => import('./pages/Wholesale'));
const Men = lazy(() => import('./pages/Men'));
const Women = lazy(() => import('./pages/Women'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Auth = lazy(() => import('./pages/Auth'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const StyleV2 = lazy(() => import('./pages/StyleV2'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="h-screen bg-black flex items-center justify-center text-premium-red font-black text-2xl tracking-tighter italic">FOOTWEAR...</div>}>
        <div className="bg-premium-dark text-premium-cream min-h-screen">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/knowledge" element={<Knowledge />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/v2" element={<StyleV2 />} />
              <Route path="/alt" element={<HomeAlt />} />
              <Route path="/wholesale" element={<Wholesale />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Auth />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;

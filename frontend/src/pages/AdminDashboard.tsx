import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  BarChart2, 
  TrendingUp, 
  Settings, 
  LogOut,
  ArrowUpRight,
  Search,
  Bell
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { label: 'Today\'s Revenue', val: '₹1,42,850', trend: '+12.5%', icon: <BarChart2 size={24} /> },
    { label: 'Active Orders', val: '48', trend: '+5', icon: <ShoppingBag size={24} /> },
    { label: 'New Customers', val: '12', trend: '+3', icon: <Users size={24} /> },
    { label: 'In Stock', val: '1,240', trend: '-12', icon: <Package size={24} /> }
  ];

  const recentOrders = [
    { id: '#FW-9482', customer: 'Rahul Sharma', prod: 'Royal Tan Oxford', price: '₹12,999', status: 'Processing' },
    { id: '#FW-9481', customer: 'Priya Patel', prod: 'Midnight V2 Sneakers', price: '₹8,499', status: 'Shipped' },
    { id: '#FW-9480', customer: 'Amit Das', prod: 'Carbon Pro Runner', price: '₹6,999', status: 'Delivered' }
  ];

  return (
    <div className="bg-black text-white min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 p-8 flex flex-col gap-10 hidden lg:flex">
         <div className="text-2xl font-black italic tracking-tighter text-premium-red">ADMIN <br/> PANEL</div>
         
         <nav className="flex flex-col gap-2">
            {[
              { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
              { icon: <Package size={20} />, label: 'Products', active: false },
              { icon: <ShoppingBag size={20} />, label: 'Orders', active: false },
              { icon: <Users size={20} />, label: 'Customers', active: false },
              { icon: <BarChart2 size={20} />, label: 'Analytics', active: false },
              { icon: <Settings size={20} />, label: 'Settings', active: false }
            ].map(item => (
              <button key={item.label} className={`flex items-center gap-4 p-4 rounded-xl font-black uppercase text-[10px] tracking-widest transition-all ${item.active ? 'bg-premium-red text-white' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                 {item.icon} {item.label}
              </button>
            ))}
         </nav>

         <button className="mt-auto flex items-center gap-4 p-4 text-white/40 hover:text-premium-red font-black uppercase text-[10px] tracking-widest">
            <LogOut size={20} /> Logout
         </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto pt-32">
         <header className="flex justify-between items-center mb-12">
            <div>
               <h1 className="text-4xl font-black uppercase italic tracking-tighter">Overview</h1>
               <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Welcome back, Admin</p>
            </div>
            <div className="flex items-center gap-6">
               <div className="relative hidden md:block">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input type="text" className="bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 outline-none focus:border-premium-red text-xs font-bold" placeholder="SEARCH ORDERS..." />
               </div>
               <button className="p-3 bg-white/5 rounded-full border border-white/10 relative">
                  <Bell size={20} />
                  <div className="absolute top-2 right-2 w-2 h-2 bg-premium-red rounded-full" />
               </button>
               <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-6">
                  <div className="text-right">
                     <p className="text-[10px] font-black uppercase tracking-widest text-white">Arjun Sethi</p>
                     <p className="text-[8px] font-black uppercase tracking-widest text-white/30">Super Admin</p>
                  </div>
                  <img src="/assets/unsplash_aHR0cHM6Ly.jpg" className="w-10 h-10 rounded-full border border-premium-red/50" />
               </div>
            </div>
         </header>

         {/* Stats Grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] p-8 rounded-3xl border border-white/5"
              >
                 <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-premium-red/10 rounded-xl text-premium-red">{stat.icon}</div>
                    <span className="text-[10px] font-black text-green-500 flex items-center gap-1">{stat.trend} <TrendingUp size={12} /></span>
                 </div>
                 <p className="text-3xl font-black italic mb-1">{stat.val}</p>
                 <p className="text-white/40 font-bold uppercase text-[9px] tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
         </div>

         {/* Recent Orders Section */}
         <div className="bg-[#111] p-10 rounded-[40px] border border-white/5">
            <div className="flex justify-between items-center mb-10">
               <h2 className="text-2xl font-black uppercase italic">Recent Orders</h2>
               <button className="text-[10px] font-black uppercase text-premium-red flex items-center gap-2">View All <ArrowUpRight size={14} /></button>
            </div>
            
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="border-b border-white/5 pb-4">
                     <tr className="text-white/40 font-black text-[9px] uppercase tracking-[0.2em]">
                        <th className="p-4">Order ID</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Product</th>
                        <th className="p-4">Price</th>
                        <th className="p-4">Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {recentOrders.map((order, i) => (
                        <tr key={i} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-all">
                           <td className="p-4 font-black italic">{order.id}</td>
                           <td className="p-4 text-xs font-bold">{order.customer}</td>
                           <td className="p-4 text-xs font-bold">{order.prod}</td>
                           <td className="p-4 font-black text-premium-red">{order.price}</td>
                           <td className="p-4">
                              <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${order.status === 'Shipped' ? 'bg-blue-500/10 text-blue-500' : order.status === 'Delivered' ? 'bg-green-500/10 text-green-500' : 'bg-premium-red/10 text-premium-red'}`}>
                                 {order.status}
                              </span>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

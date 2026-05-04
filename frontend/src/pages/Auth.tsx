import { login, register } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { User as UserIcon, Mail, Lock, ArrowRight, Github, Chrome as Google, Loader2 } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      let data;
      if (isLogin) {
        data = await login({ email: formData.email, password: formData.password });
      } else {
        data = await register(formData);
      }
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-premium-red/10 to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-[#111] border border-white/5 p-12 rounded-[40px] relative z-10"
      >
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-10">
             <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">
                {isLogin ? 'Welcome Back' : 'Create Account'}
             </h1>
             <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
                Access your exclusive footwear benefits
             </p>
          </div>

          {error && (
            <div className="bg-premium-red/10 border border-premium-red/30 text-premium-red p-4 rounded-xl text-[10px] font-black uppercase tracking-widest mb-6 text-center">
              {error}
            </div>
          )}

          <div className="space-y-6">
             {!isLogin && (
               <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Full Name</label>
                  <div className="relative">
                     <UserIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                     <input 
                       type="text" 
                       required
                       value={formData.name}
                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                       className="w-full bg-white/5 border border-white/10 p-5 pl-14 rounded-2xl outline-none focus:border-premium-red" 
                       placeholder="ARJUN KUMAR" 
                     />
                  </div>
               </div>
             )}

             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Email Address</label>
                <div className="relative">
                   <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                   <input 
                     type="email" 
                     required
                     value={formData.email}
                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                     className="w-full bg-white/5 border border-white/10 p-5 pl-14 rounded-2xl outline-none focus:border-premium-red" 
                     placeholder="EMAIL@EXAMPLE.COM" 
                   />
                </div>
             </div>

             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-2">Password</label>
                <div className="relative">
                   <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                   <input 
                     type="password" 
                     required
                     value={formData.password}
                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                     className="w-full bg-white/5 border border-white/10 p-5 pl-14 rounded-2xl outline-none focus:border-premium-red" 
                     placeholder="••••••••" 
                   />
                </div>
             </div>

             <button 
               type="submit"
               disabled={loading}
               className="red-shading w-full py-6 text-white font-black uppercase tracking-widest text-sm flex items-center justify-center gap-4 hover:scale-[1.02] transition-all disabled:opacity-50"
             >
                {loading ? <Loader2 className="animate-spin" /> : (isLogin ? 'Sign In' : 'Sign Up')} <ArrowRight size={20} />
             </button>
          </div>
        </form>

        <div className="mt-10 pt-10 border-t border-white/5">
           <p className="text-center text-[10px] font-black text-white/40 uppercase tracking-widest mb-6">Or continue with</p>
           <div className="grid grid-cols-2 gap-4">
              <button className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                 <Google size={20} />
              </button>
              <button className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all">
                 <Github size={20} />
              </button>
           </div>
        </div>

        <p className="text-center mt-10 text-white/40 text-[10px] font-black uppercase tracking-widest">
           {isLogin ? "Don't have an account?" : "Already have an account?"}
           <button 
             onClick={() => setIsLogin(!isLogin)}
             className="text-premium-red ml-2"
           >
              {isLogin ? 'Sign Up' : 'Sign In'}
           </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Auth;

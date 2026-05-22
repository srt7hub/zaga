import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-4 pt-1 pb-6 md:px-10',
          isScrolled || !isHome ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-white/10'
        )}
      >
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="text-3xl font-black tracking-tighter leading-none text-white relative z-50 flex items-center">
            <img src="/torkom2.1.png" alt="TORKOM" className="h-10 md:h-14 lg:h-16 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="text-[11px] uppercase tracking-[0.2em] font-medium text-white hover:text-red-600 transition-colors duration-200">Главная</Link>
            <a href="/#about" className="text-[11px] uppercase tracking-[0.2em] font-medium text-white hover:text-red-600 transition-colors duration-200">О Бренде</a>
            <Link to="/catalog" className="text-[11px] uppercase tracking-[0.2em] font-medium text-white hover:text-red-600 transition-colors duration-200">Каталог</Link>
            <a href="https://instagram.com/_turkum_02" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.2em] font-medium text-white hover:text-red-600 transition-colors duration-200">Instagram</a>
          </nav>

          <div className="flex items-center space-x-6 relative z-50">
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#0A0A0A] flex flex-col items-center justify-center space-y-8"
          >
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black tracking-tighter text-white hover:text-red-600 transition-colors uppercase">Главная</Link>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black tracking-tighter text-white hover:text-red-600 transition-colors uppercase">О Бренде</a>
            <Link to="/catalog" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black tracking-tighter text-white hover:text-red-600 transition-colors uppercase">Каталог</Link>
            <a href="https://instagram.com/_turkum_02" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black tracking-tighter text-white hover:text-red-600 transition-colors uppercase">Instagram</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { motion } from 'motion/react';
import ProductCard from '../components/ui/ProductCard';
import RussiaMap from '../components/ui/RussiaMap';
import { getProductsByCategory } from '../data/products';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Home() {
  const hoodies = getProductsByCategory('hoodie');
  const tshirts = getProductsByCategory('tshirt');
  const beanies = getProductsByCategory('beanie');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-[100dvh] min-h-[700px] w-full flex flex-col justify-center overflow-hidden bg-[#050505]">
        {/* Background Images & Cinematic Overlays */}
        <div className="absolute inset-0 z-0">
          <video
            src="/vi1.MP4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) contrast(1.15)' }}
          />
          {/* Gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A] mix-blend-multiply opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-transparent opacity-80" />
          
          {/* Specialized Hero Grain Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none" 
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
          />
        </div>
        
        {/* Micro Fashion Details - одна строка на мобиле, углы на десктопе */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="absolute top-20 sm:top-32 left-4 right-4 md:left-10 md:right-10 z-20 flex items-center justify-between"
        >
          {/* Left */}
          <div className="flex flex-col gap-1">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">ОСН. 2026</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold">УФА / РОССИЯ</span>
          </div>
          {/* Right */}
          <div className="flex flex-col items-end gap-1 text-right">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse hidden sm:block" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white font-bold">ЛИМИТИРОВАННЫЙ ДРОП</span>
            </div>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 font-bold hidden xs:block">
              ЛОКАЛЬНАЯ УЛИЧНАЯ КУЛЬТУРА
            </span>
          </div>
        </motion.div>

        {/* Main Title Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center mt-12 md:mt-0 pointer-events-none select-none">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
             className="flex items-center gap-4 md:gap-6 mb-1"
          >
             <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-white/30" />
             <span className="text-red-600 font-bold text-[10px] md:text-xs tracking-[0.5em] md:tracking-[0.8em] uppercase whitespace-nowrap">ВЕСНА ЛЕТО 26</span>
             <div className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-white/30" />
          </motion.div>

          <div className="overflow-hidden flex flex-col items-center">
            <motion.img
              src="/torkom2.1.png"
              alt="ТӨРКӨМ"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-[70vw] sm:w-[50vw] md:w-[40vw] max-w-[560px] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Cinematic Scroll Indicator (Bottom Left) */}
        <motion.div 
          className="absolute bottom-10 md:bottom-16 left-4 md:left-10 z-20 flex items-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
        >
          <div className="w-[1px] h-10 md:h-16 bg-white/10 relative overflow-hidden hidden sm:block">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/3 bg-red-600"
              animate={{ y: ['-100%', '300%'] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
          </div>
          <div className="flex flex-col gap-1">
             <span className="text-white/30 text-[9px] md:text-[10px] tracking-[0.4em] font-bold uppercase transition-colors">Скролл</span>
             <span className="text-white text-[9px] md:text-[10px] tracking-[0.4em] font-bold uppercase cursor-pointer hover:text-red-600 transition-colors w-max">Для просмотра</span>
          </div>
        </motion.div>

        {/* Bottom Right Editorial Detail */}
        <motion.div 
          className="absolute bottom-10 md:bottom-16 right-4 md:right-10 z-20 hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        >
           <div className="text-right flex flex-col gap-1">
              <p className="text-[10px] text-white/50 tracking-[0.3em] font-bold uppercase">Коллекция 01</p>
              <p className="text-[10px] text-red-600/80 tracking-[0.3em] font-bold uppercase italic">Визуальный манифест</p>
           </div>
           <div className="h-[1px] border-t border-solid border-white/20 w-16 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-red-600" />
           </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="w-full overflow-hidden bg-red-600 py-3 border-y border-red-700">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {['MADE IN BASHKORTOSTAN', 'ВЕСНА ЛЕТО 26', 'ЛИМИТИРОВАННЫЙ ДРОП', 'УФА / РОССИЯ', 'STREETWEAR', 'НОВАЯ КОЛЛЕКЦИЯ', 'ТӨРКӨМ'].map((text, j) => (
                <span key={j} className="flex items-center">
                  <span className="text-white font-black text-[11px] md:text-[13px] tracking-[0.3em] uppercase px-6 md:px-10">{text}</span>
                  <span className="text-white/50 text-[8px]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 2. HOODIES STRIP */}
      <section className="py-24 md:py-32 overflow-hidden border-b border-white/10">
        <div className="px-4 md:px-8 mb-4 flex justify-between items-end max-w-7xl mx-auto">
          <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">Новые Дропы / Худи</h2>
          <Link to="/catalog" className="text-[11px] uppercase tracking-[0.3em] border-b border-white/20 pb-1 text-white hover:text-red-600 transition-colors cursor-pointer">Смотреть Все</Link>
        </div>
        
        <div className="w-full relative px-4 md:px-8">
          <div className="flex space-x-6 md:space-x-10 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory">
            {hoodies.map(product => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} large />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. T-SHIRTS STRIP */}
      <section className="py-24 md:py-32 overflow-hidden border-b border-white/10">
        <div className="px-4 md:px-8 mb-4 flex justify-between items-end max-w-7xl mx-auto">
          <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">Новые Дропы / Футболки</h2>
          <Link to="/catalog" className="text-[11px] uppercase tracking-[0.3em] border-b border-white/20 pb-1 text-white hover:text-red-600 transition-colors cursor-pointer">Смотреть Все</Link>
        </div>
        
        <div className="w-full relative px-4 md:px-8">
          <div className="flex space-x-6 md:space-x-10 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory">
            {tshirts.map(product => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOOKBOOK */}
      <section className="py-32 bg-[#0A0A0A]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1 pt-12 md:pt-0">
              <h2 className="text-[40px] md:text-[60px] font-black tracking-tighter text-white leading-[0.85] mb-8 uppercase">
                ЧИСТЫЙ<br/>СИЛУЭТ
              </h2>
              <p className="text-[14px] leading-relaxed text-white/80 max-w-md mb-8">
                Мы создаем вещи, в которых комфортно быть собой. Ничего лишнего — только правильный крой, качественные материалы и внимание к каждой детали.
              </p>
              <div className="mt-2 mb-6 h-[1px] w-12 bg-red-600"></div>
              <div>
                <Link to="/catalog" className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] font-bold text-white hover:text-red-600 transition-colors">
                  Смотреть Лукбук
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-7 flex justify-center order-1 md:order-2">
              <video 
                src="/vi2.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-[400px] md:h-[650px] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEANIES */}
      <section className="py-24 md:py-32 overflow-hidden border-t border-white/10 bg-[#0A0A0A]">
        <div className="px-4 md:px-8 mb-4 flex justify-between items-end max-w-7xl mx-auto">
          <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">Аксессуары</h2>
        </div>
        
        <div className="w-full relative px-4 md:px-8">
          <div className="flex space-x-6 md:space-x-10 overflow-x-auto hide-scrollbar pb-8 pt-4 snap-x snap-mandatory">
            {beanies.map(product => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MANIFESTO / CORE */}
      <section id="about" className="py-32 md:py-48 px-4 border-t border-white/10 bg-[#0A0A0A] relative overflow-hidden flex items-center">
        {/* Minimalist grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">Origin</p>
              <p className="text-sm font-mono text-white/80">54°44'N 55°58'E</p>
              <p className="text-sm font-mono text-white/80">BASHKORTOSTAN</p>
            </div>
            <div className="hidden md:block mt-24">
              <div className="w-12 h-[1px] bg-red-600 mb-6"></div>
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-relaxed max-w-[200px]">
                Cultural integration.<br/>
                Brutalist aesthetic.<br/>
                Engineered for the urban environment.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] uppercase mb-8">
              <span className="text-red-600">ТӨРКӨМ</span> — современный streetwear бренд, 
              объединяющий локальную культуру, уличную эстетику и 
              современную fashion-подачу.
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-white/20 pt-8 mt-12">
               <div>
                 <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">Identity</p>
                 <p className="text-sm text-white/70 max-w-xs leading-relaxed">Мы не просто делаем одежду. Мы формируем комьюнити людей, мыслящих вне шаблонов, и транслируем наш культурный код через минимализм.</p>
               </div>
               <div>
                 <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">Vision</p>
                 <p className="text-sm text-white/70 max-w-xs leading-relaxed">Прагматичный крой, скрытые детали и абсолютная свобода движений. Униформа для тех, кто создает будущее.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.5. TERRITORY */}
      <section className="py-24 md:py-40 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden selection:bg-red-600 selection:text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.03)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* Left Column: Title & Text */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full inline-block animate-pulse" />
                  Local Signals
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase mb-8 leading-[0.85]">
                  Территория<br/>Бренда
                </h2>
                <div className="h-[1px] w-12 bg-white/20 mb-8 mt-12 bg-gradient-to-r from-red-600 to-transparent"></div>
                <p className="text-[13px] font-mono text-white/60 leading-relaxed max-w-sm">
                  От локальных точек в Башкортостане до доставки по всей России.
                </p>
              </div>

              <div className="hidden lg:block mt-24">
                 <div className="border border-white/10 bg-[#111] p-6 max-w-[280px]">
                   <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4">Operations Center</p>
                   <p className="text-lg font-bold text-white uppercase tracking-widest mb-1">GLOBAL REACH</p>
                   <p className="text-[11px] font-mono text-white/50 tracking-wider">RU-WIDE LOGISTICS</p>
                 </div>
              </div>
            </div>

            {/* Right Column: Abstract Map & Locations */}
            <div className="lg:col-span-8 flex flex-col justify-between">
                {/* Abstract Interactive Grid / Map */}
                <div className="relative w-full overflow-hidden flex flex-col justify-between py-6 md:py-8 lg:py-12 mb-8 group h-full min-h-[400px] lg:min-h-[500px]">
                  
                  {/* Map Component */}
                  <div className="absolute inset-x-0 inset-y-0 opacity-100">
                    <RussiaMap />
                  </div>

                  {/* Big Statement */}
                  <div className="relative z-10 mb-20 pointer-events-none mt-auto">
                    <h3 className="text-4xl sm:text-6xl lg:text-[5rem] font-black text-white/30 uppercase tracking-tighter leading-[0.80] drop-shadow-lg">
                      ДОСТАВЛЯЕМ<br/>ПО ВСЕЙ<br/>РОССИИ
                    </h3>
                  </div>

                  <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 text-right pointer-events-none z-10">
                    <p className="text-[10px] md:text-[11px] font-mono text-white/40 uppercase tracking-widest bg-black/40 backdrop-blur-sm px-3 py-2 border border-white/5">От Уфы до Владивостока</p>
                  </div>
                </div>

                {/* Physical Locations */}
                <div className="w-full relative z-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Location 1 */}
                  <div className="bg-[#111] border border-white/5 p-5 hover:border-red-600/30 transition-colors group/card relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-600/5 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">УФА</span>
                      </div>
                      <h4 className="text-[13px] font-bold text-white mb-[0.15rem] tracking-wider uppercase">Локальная база</h4>
                      <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Доставка / Pop-ups</p>
                    </div>
                  </div>

                  {/* Location 2 */}
                  <div className="bg-[#111] border border-white/5 p-5 hover:border-white/20 transition-colors group/card relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                        <span className="relative flex h-2 w-2">
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white/30 group-hover/card:bg-white transition-colors"></span>
                        </span>
                        <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">СИБАЙ</span>
                      </div>
                      <h4 className="text-[13px] font-bold text-white mb-[0.15rem] tracking-wider uppercase">BellStore</h4>
                      <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Примерка и покупка</p>
                    </div>
                  </div>

                  {/* Location 3 */}
                  <div className="bg-[#111] border border-white/5 p-5 hover:border-white/20 transition-colors group/card relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                        <span className="relative flex h-2 w-2">
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-white/30 group-hover/card:bg-white transition-colors"></span>
                        </span>
                        <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest">АСКАРОВО</span>
                      </div>
                      <h4 className="text-[13px] font-bold text-white mb-[0.15rem] tracking-wider uppercase">Barbershop TӨRKӨM</h4>
                      <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Локальная точка</p>
                    </div>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEXT DROP SIGNAL */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-[#050505] overflow-hidden border-t border-white/5 selection:bg-red-600 selection:text-white">
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/fon1.png" 
            alt="Background" 
            className="w-full h-full object-cover object-center opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        </div>

        {/* Top Centered Label */}
        <div className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono text-red-600 uppercase tracking-[0.3em] font-bold">СИГНАЛ АКТИВЕН</span>
          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
        </div>

        {/* Right Side Rotated Label */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 pointer-events-none hidden lg:flex z-20">
           <span className="text-[8px] font-mono text-white/50 tracking-widest rotate-90 my-20 whitespace-nowrap uppercase">TӨRKӨM SIGNAL SYSTEM</span>
           <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
        </div>

        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full pt-32 pb-40 md:pt-0 md:pb-0">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-start max-w-2xl"
          >
            {/* Massive Headline */}
            <h2 className="flex flex-col mb-8">
              <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-black tracking-tighter text-white uppercase leading-[0.85] drop-shadow-2xl">
                ДРОП 03
              </span>
              <span 
                className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-black tracking-tighter text-transparent uppercase leading-[0.85]"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)', textShadow: 'none' }}
              >
                СКОРО
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-[12px] sm:text-[14px] font-mono text-white uppercase tracking-[0.15em] leading-relaxed md:leading-loose mb-10 max-w-sm">
              ДАТА РЕЛИЗА БУДЕТ<br/>ОБЪЯВЛЕНА<br/>В INSTAGRAM-КАНАЛЕ
            </p>

            {/* Separator */}
            <div className="w-12 h-[2px] bg-red-600/80 mb-10" />

            {/* Bullet Points */}
            <ul className="flex flex-col gap-4 mb-16">
              {[
                'ЛИМИТИРОВАННЫЙ ДРОП',
                'РАННИЙ ДОСТУП',
                'ОБНОВЛЕНИЯ РЕЛИЗОВ'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-[10px] sm:text-[12px] font-mono text-white/80 uppercase tracking-widest">
                  {/* Custom list icon */}
                  <div className="relative w-3 h-3 flex items-center justify-center">
                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-red-600" />
                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-red-600" />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a 
              href="https://instagram.com/_turkum_02"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm px-8 sm:px-12 py-5 sm:py-6 overflow-hidden transition-colors hover:border-white/50"
            >
              <div className="absolute inset-0 bg-red-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <div className="relative flex items-center gap-6">
                <span className="text-[11px] sm:text-[13px] font-mono text-white font-bold uppercase tracking-[0.25em]">
                  ВОЙТИ В КАНАЛ
                </span>
                <span className="text-red-600 font-mono text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>

              {/* Bracket corners */}
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/50 transition-colors" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/50 transition-colors" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-white/50 transition-colors" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/50 transition-colors" />
            </a>
            {/* Bottom Left Details Box */}
            <div className="mt-12 md:mt-20 flex" >
              <div className="relative pl-5 py-2">
                {/* L-shaped border */}
                <div className="absolute top-0 left-0 w-4 h-[1px] bg-red-600" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-red-600" />
                <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-red-600" />

                <div className="flex flex-col gap-2">
                  <span className="text-[9px] sm:text-[10px] font-mono text-white/50 tracking-[0.2em] uppercase">КООРД: 54°44′N 55°58′E</span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-white/50 tracking-[0.2em] uppercase">ЛОК: УФА / РФ</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Right Details */}
        <div className="absolute bottom-10 right-6 md:right-12 z-20">
          <div className="relative w-4 h-4 flex items-center justify-center opacity-50">
            <span className="absolute w-full h-[1px] bg-white" />
            <span className="absolute h-full w-[1px] bg-white" />
            <span className="absolute w-2 h-2 border border-white rotate-45" />
          </div>
        </div>
      </section>
    </div>
  );
}

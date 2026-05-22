import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <p className="text-[10px] font-mono text-red-600 uppercase tracking-[0.5em] mb-6">Ошибка 404</p>

        <h1
          className="font-black tracking-tighter uppercase text-transparent leading-none mb-8 select-none"
          style={{ fontSize: 'clamp(80px, 20vw, 200px)', WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}
        >
          404
        </h1>

        <p className="text-white/40 font-mono text-[13px] uppercase tracking-widest mb-12">
          Страница не найдена
        </p>

        <Link
          to="/"
          className="group relative inline-flex items-center justify-center border border-white/20 bg-black/40 px-10 py-4 overflow-hidden transition-colors hover:border-white/50"
        >
          <div className="absolute inset-0 bg-red-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative text-[11px] font-mono text-white font-bold uppercase tracking-[0.25em]">
            На главную →
          </span>
        </Link>
      </motion.div>
    </div>
  );
}

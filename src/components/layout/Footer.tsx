import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      {/* Main footer body */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link to="/" className="inline-block">
              <img src="/torkom2.1.png" alt="TORKOM" className="h-7 md:h-9 object-contain" />
            </Link>
            <p className="text-white/40 font-mono text-[12px] leading-relaxed max-w-xs">
              Современный streetwear бренд из Башкортостана. Локальная культура, уличная эстетика, минималистичный крой.
            </p>
            <a
              href="https://instagram.com/_turkum_02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/50 hover:text-white transition-colors group w-fit"
            >
              <Instagram className="w-4 h-4 group-hover:text-red-500 transition-colors" />
              <span className="font-mono text-[11px] tracking-widest uppercase">@_TURKUM_02</span>
            </a>
          </div>

          {/* Contact column */}
          <div className="md:col-span-3 md:col-start-9 flex flex-col gap-4">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-2">Контакты</p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href="https://instagram.com/_turkum_02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] font-mono text-white/60 hover:text-white transition-colors uppercase tracking-wider"
                >
                  @_turkum_02
                </a>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-1">Локация</p>
                <p className="text-[12px] font-mono text-white/60 uppercase tracking-wider">Уфа, Башкортостан</p>
                <p className="text-[11px] font-mono text-white/30 mt-0.5">54°44′N 55°58′E</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-wider mb-1">Доставка</p>
                <p className="text-[12px] font-mono text-white/60 uppercase tracking-wider">По всей России</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 md:px-12 py-5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
            © 2026 ТӨРКӨМ / TORKOM — Все права защищены
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">УФА / РФ — ВЕСНА ЛЕТО 26</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

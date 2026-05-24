import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const sizeChart = [
  { size: 'XS', length: 66, width: 62, sleeve: 56, shoulder: 20 },
  { size: 'S',  length: 67, width: 64, sleeve: 57, shoulder: 21 },
  { size: 'M',  length: 68, width: 66, sleeve: 58, shoulder: 22 },
  { size: 'L',  length: 69, width: 68, sleeve: 59, shoulder: 22 },
  { size: 'XL', length: 70, width: 70, sleeve: 60, shoulder: 23 },
  { size: 'XXL',length: 71, width: 72, sleeve: 61, shoulder: 23 },
];

function SizeChartModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-[#0F0F0F] border border-white/10 w-full max-w-lg"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <p className="text-[11px] font-mono text-white uppercase tracking-[0.3em]">Таблица размеров</p>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-[12px] font-mono">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-6 py-3 text-white/40 uppercase tracking-widest font-normal">Размер</th>
                <th className="text-center px-4 py-3 text-white/40 uppercase tracking-widest font-normal">Длина</th>
                <th className="text-center px-4 py-3 text-white/40 uppercase tracking-widest font-normal">Ширина</th>
                <th className="text-center px-4 py-3 text-white/40 uppercase tracking-widest font-normal">Рукава</th>
                <th className="text-center px-4 py-3 text-white/40 uppercase tracking-widest font-normal">Плечи</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row, i) => (
                <tr key={row.size} className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}>
                  <td className="px-6 py-3 text-red-500 font-bold tracking-wider">{row.size}</td>
                  <td className="px-4 py-3 text-white/70 text-center">{row.length}</td>
                  <td className="px-4 py-3 text-white/70 text-center">{row.width}</td>
                  <td className="px-4 py-3 text-white/70 text-center">{row.sleeve}</td>
                  <td className="px-4 py-3 text-white/70 text-center">{row.shoulder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="px-6 py-4 border-t border-white/10">
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Все замеры в сантиметрах</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [sizeChartOpen, setSizeChartOpen] = useState(false);

  const needsSize = product?.category === 'hoodie' || product?.category === 'tshirt';
  const canOrder = !needsSize || !!selectedSize;
  const orderHref = product
    ? `https://t.me/a13144a?text=${encodeURIComponent(`Привет, ТӨРКӨМ! Хочу заказать ${product.name}${selectedSize ? `, размер ${selectedSize}` : ''}.`)}`
    : '#';

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-white font-black uppercase text-2xl tracking-tighter">
        Product not found
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {sizeChartOpen && <SizeChartModal onClose={() => setSizeChartOpen(false)} />}
      </AnimatePresence>

      <div className="pt-24 pb-24 md:pb-24 pb-36 min-h-screen">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">

          {/* Breadcrumb / Back */}
          <Link to="/catalog" className="inline-flex items-center text-white/50 hover:text-white transition-colors text-[11px] uppercase tracking-[0.2em] font-medium mb-8 md:mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" />
            В каталог
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

            {/* Photos Area - Left Side */}
            <div className="md:col-span-7 xl:col-span-8 flex flex-col space-y-4 md:space-y-8">
              {product.images.filter((img, i, arr) => arr.indexOf(img) === i).map((img, idx) => (
                <div key={idx} className="w-full bg-[#111] overflow-hidden">
                  <img
                    src={img}
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Info Area - Right Side (Sticky) */}
            <div className="md:col-span-5 xl:col-span-4 flex flex-col pt-4 md:pt-0">
              <div className="md:sticky md:top-32">
                <h1 className="text-[32px] md:text-[40px] font-black tracking-tighter text-white mb-2 leading-[0.85] uppercase">
                  {product.name}
                </h1>

                <div className="text-[14px] text-red-600 font-bold mt-4 mb-8">
                  {product.price.toLocaleString('ru-RU')} RUB
                </div>

                <div className="h-[1px] w-full bg-white/10 mb-8" />

                {/* Sizes */}
                {(product.category === 'hoodie' || product.category === 'tshirt') && (
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-[10px] text-white/50 uppercase tracking-[0.2em]">
                        Размер{selectedSize && <span className="text-white ml-2">— {selectedSize}</span>}
                      </h3>
                      <button
                        onClick={() => setSizeChartOpen(true)}
                        className="text-[10px] text-white/40 hover:text-white border-b border-white/20 pb-0.5 uppercase tracking-[0.2em] transition-colors"
                      >
                        Таблица размеров
                      </button>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size === selectedSize ? null : size)}
                          className={`py-3 border text-[11px] uppercase tracking-[0.2em] transition-colors text-center ${
                            selectedSize === size
                              ? 'border-white text-white bg-white/10'
                              : 'border-white/10 text-white/60 hover:border-white/40 hover:text-white'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buy in Instagram — desktop */}
                <a
                  href={orderHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden md:block w-full py-4 px-6 uppercase tracking-[0.2em] font-bold text-[11px] transition-colors duration-300 mb-10 text-center ${
                    !canOrder
                      ? 'bg-white/10 text-white/40 border border-white/10 cursor-default pointer-events-none'
                      : 'bg-white text-black hover:bg-red-600 hover:text-white'
                  }`}
                >
                  {!canOrder ? 'ВЫБЕРИТЕ РАЗМЕР' : 'ЗАКАЗАТЬ В TELEGRAM'}
                </a>

                <div className="h-[1px] w-full bg-white/10 mb-8" />

                {/* Description */}
                <div>
                  <h3 className="text-[10px] text-white/50 uppercase tracking-[0.2em] mb-4">Описание</h3>
                  <p className="text-white/80 text-[14px] leading-relaxed italic">
                    "{product.description}"
                  </p>
                  <div className="mt-6 mb-4 h-[1px] w-8 bg-red-600"></div>
                  <ul className="space-y-2 text-[12px] text-white/60 tracking-wide">
                    {product.category === 'beanie' ? (
                      <>
                        <li>01 / Универсальный размер</li>
                        <li>02 / Плотная вязка, не тянется</li>
                        <li>03 / Мягкая подкладка</li>
                        <li>04 / Разработано в Башкортостане</li>
                      </>
                    ) : (
                      <>
                        <li>01 / Оверсайз, прямоугольный крой</li>
                        <li>02 / Спущенные плечи</li>
                        <li>03 / Плотная премиальная ткань</li>
                        <li>04 / Разработано в Башкортостане</li>
                      </>
                    )}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Fixed bottom bar — mobile only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 p-4">
        <a
          href={orderHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-4 px-6 uppercase tracking-[0.2em] font-bold text-[11px] transition-colors duration-300 text-center ${
            !canOrder
              ? 'bg-white/10 text-white/40 border border-white/10 cursor-default pointer-events-none'
              : 'bg-white text-black active:bg-red-600 active:text-white'
          }`}
        >
          {!canOrder ? 'ВЫБЕРИТЕ РАЗМЕР' : 'ЗАКАЗАТЬ В TELEGRAM'}
        </a>
      </div>
    </>
  );
}

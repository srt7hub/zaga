import { useState } from 'react';
import { products, Category } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { clsx } from 'clsx';

export default function Catalog() {
  const [filter, setFilter] = useState<Category | 'all'>('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-[1600px] mx-auto min-h-screen">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
        <div>
          <h1 className="text-[50px] md:text-[80px] font-black tracking-tighter text-white leading-[0.85] mb-4 uppercase">КОЛЛЕКЦИЯ</h1>
          <p className="text-white/50 text-[11px] uppercase tracking-[0.2em] max-w-xl leading-relaxed">
            Премиальные вещи созданные с целью. Исследование пересечения локального наследия и современной уличной моды.
          </p>
        </div>
        
        <div className="mt-8 md:mt-0 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em] font-medium text-white/50">
          <button 
            onClick={() => setFilter('all')}
            className={clsx("transition-colors", filter === 'all' ? "text-white border-b border-white" : "hover:text-white")}
          >
            Все
          </button>
          <button 
            onClick={() => setFilter('hoodie')}
            className={clsx("transition-colors", filter === 'hoodie' ? "text-white border-b border-white" : "hover:text-white")}
          >
            Худи
          </button>
          <button 
            onClick={() => setFilter('tshirt')}
            className={clsx("transition-colors", filter === 'tshirt' ? "text-white border-b border-white" : "hover:text-white")}
          >
            Футболки
          </button>
          <button 
            onClick={() => setFilter('beanie')}
            className={clsx("transition-colors", filter === 'beanie' ? "text-white border-b border-white" : "hover:text-white")}
          >
            Аксессуары
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} className="w-full" />
        ))}
      </div>
    </div>
  );
}

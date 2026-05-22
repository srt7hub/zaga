import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { clsx } from 'clsx';

interface ProductCardProps {
  product: Product;
  className?: string;
  large?: boolean;
  key?: string | number;
}

export default function ProductCard({ product, className, large = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      to={`/product/${product.id}`}
      className={clsx("group block cursor-pointer flex-shrink-0", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className={clsx(
        "relative overflow-hidden bg-neutral-900 border border-white/5",
        large ? "aspect-[3/4] w-[85vw] md:w-[35vw] max-w-[500px]" : "aspect-[3/4] w-[70vw] sm:w-[50vw] md:w-[25vw] max-w-[350px]"
      )}>
        {/* Primary image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick add overlay - visible on hover for desktop */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out hidden md:block">
          <div className="bg-white/10 backdrop-blur-md text-white text-center py-3 text-[10px] font-bold tracking-[0.2em] uppercase border border-white/20 hover:bg-white hover:text-black transition-colors">
            Подробнее
          </div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-1 px-1 mt-4">
        <h3 className="text-sm uppercase font-bold text-white leading-tight">{product.name}</h3>
        <p className="text-[10px] font-bold mt-1 text-red-600">{product.price.toLocaleString('ru-RU')} RUB</p>
      </div>
    </Link>
  );
}

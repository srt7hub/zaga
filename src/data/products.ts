export type Category = 'hoodie' | 'tshirt' | 'beanie';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  colors: string[];
  images: string[]; // Two images for hover swap
  description: string;
}

export const products: Product[] = [
  {
    id: 'h-1',
    name: 'ХУДИ BASHKORTOSTAN (БЕЛ.)',
    price: 4500,
    category: 'hoodie',
    colors: ['Black', 'Graphite'],
    images: [
      '/h2.1.png',
      '/h2.1.png'
    ],
    description: 'Вдохновлено уличной культурой Башкортостана. Плотный хлопковый бленд, оверсайз фит.'
  },
  {
    id: 'h-4',
    name: 'ХУДИ TATARSTAN (ЧЕРН.)',
    price: 4500,
    category: 'hoodie',
    colors: ['Washed Grey', 'Black'],
    images: [
      '/h3.jpg',
      '/h3.jpg'
    ],
    description: 'Оверсайз худи из плотного хлопка с уникальным принтом. Идеально для повседневной носки.'
  },
  {
    id: 'h-2',
    name: 'ХУДИ BASHKORTOSTAN (ЧЕРН.)',
    price: 4500,
    category: 'hoodie',
    colors: ['Black', 'Grey'],
    images: [
      '/h1.jpg',
      '/h1.jpg'
    ],
    description: 'Минималистичное базовое худи со спущенным плечом и аккуратно интегрированным брендингом.'
  },
  {
    id: 'h-3',
    name: 'ХУДИ BASHKORTOSTAN (ЗЕЛ.)',
    price: 4500,
    category: 'hoodie',
    colors: ['Washed Black'],
    images: [
      '/h2.2.jpg',
      '/h2.2.jpg'
    ],
    description: 'Винтажное тяжелое худи на зипке. Сделано для улиц.'
  },
  {
    id: 't-1',
    name: 'ФУТБОЛКА БАШКОРТОСТАН (ЧЕРН.)',
    price: 3500,
    category: 'tshirt',
    colors: ['Black', 'White'],
    images: [
      '/q1.1.png',
      '/q1.1.png'
    ],
    description: 'Плотная футболка оверсайз фита с премиальным текстовым принтом.'
  },
  {
    id: 't-4',
    name: 'ЛОНГСЛИВ ТАТАР КЫЗЫ (БЕЛ.)',
    price: 3200,
    category: 'tshirt',
    colors: ['Washed Black'],
    images: [
      '/q2.jpg',
      '/q2.jpg'
    ],
    description: 'Винтажная футболка с эксклюзивным уличным принтом.'
  },
  {
    id: 't-2',
    name: 'ФУТБОЛКА БАШКОРТОСТАН (БЕЛ.)',
    price: 2900,
    category: 'tshirt',
    colors: ['Off-White', 'Black'],
    images: [
      '/q2.png',
      '/q2.png'
    ],
    description: 'Идеально скроенная базовая оверсайз футболка для расслабленного образа.'
  },
  {
    id: 't-3',
    name: 'ЛОНГСЛИВ БАШКОРТ КЫЗЫ (ЧЕРН.)',
    price: 3800,
    category: 'tshirt',
    colors: ['Black'],
    images: [
      '/q12(1).jpg',
      '/q12(1).jpg'
    ],
    description: 'Футболка с эффектом состаренности и брутальным типографическим принтом.'
  },
  {
    id: 't-5',
    name: 'ФУТБОЛКА BASHKORTOSTAN (ЧЕРН.)',
    price: 3400,
    category: 'tshirt',
    colors: ['White'],
    images: [
      '/q11(1).jpg',
      '/q11(1).jpg'
    ],
    description: 'Базовая футболка с контрастным принтом.'
  },
  {
    id: 'b-1',
    name: 'ПАНАМА ТОРКОМ',
    price: 2200,
    category: 'beanie',
    colors: ['Black', 'Red'],
    images: [
      '/a1.png',
      '/a1.png'
    ],
    description: 'Классическая шапка в рубчик с минималистичным патчем с необработанными краями.'
  },
  {
    id: 'b-2',
    name: 'ШАПКА ТОРКОМ',
    price: 2500,
    category: 'beanie',
    colors: ['Graphite'],
    images: [
      '/a2.png',
      '/a2.png'
    ],
    description: 'Очень теплая шапка крупной вязки. Незаменимый зимний аксессуар.'
  }
];

export const getProductsByCategory = (category: Category) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

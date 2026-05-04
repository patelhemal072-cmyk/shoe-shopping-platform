export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  longDescription: string;
  rating: number;
  reviewsCount: number;
  colors: string[];
  sizes: number[];
  materials: string[];
  specs: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Tan Oxford',
    price: 12999,
    category: 'Formal',
    image: '/assets/product1.png',
    images: ['/assets/product1.png'],
    description: 'Bespoke hand-crafted oxfords made from premium Italian calfskin leather.',
    longDescription: 'Designed for the modern gentleman, these oxfords combine centuries-old craftsmanship with contemporary ergonomic design. Every pair is hand-dyed and features a Goodyear welted construction for lifelong durability.',
    rating: 4.9,
    reviewsCount: 128,
    colors: ['Tan', 'Black', 'Cherry'],
    sizes: [7, 8, 9, 10, 11],
    materials: ['Full-Grain Calfskin', 'Oak-Barked Sole', 'Waxed Cotton Laces'],
    specs: { 'Construction': 'Goodyear Welt', 'Sole': 'Leather with Rubber Insert', 'Lining': 'Memory Foam Padded' }
  },
  {
    id: '2',
    name: 'Midnight V2 Sneakers',
    price: 8499,
    category: 'Sneakers',
    image: '/assets/product2.png',
    images: ['/assets/product2.png'],
    description: 'Minimalist sneakers for maximum comfort and urban style.',
    longDescription: 'The Midnight V2 is our flagship urban sneaker. Featuring a breathable FlyKnit upper and a high-response responsive foam midsole, it provides all-day energy return without compromising on aesthetics.',
    rating: 4.8,
    reviewsCount: 256,
    colors: ['Midnight Black', 'Slate Grey', 'Pure White'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    materials: ['Recycled Polyester Knit', 'EVA Foam', 'Vegan Suede'],
    specs: { 'Heel Drop': '10mm', 'Weight': '240g', 'Support': 'Neutral' }
  },
  {
    id: '3',
    name: 'Carbon Pro Runner',
    price: 6999,
    category: 'Sports',
    image: '/assets/product3.png',
    images: ['/assets/product3.png'],
    description: 'Lightweight breathable mesh with responsive cushioning for serious runners.',
    longDescription: 'Engineered for speed, the Carbon Pro Runner features an internal carbon fiber plate that propels you forward with every stride. Tested by Olympic athletes for maximum performance.',
    rating: 4.7,
    reviewsCount: 89,
    colors: ['Solar Red', 'Electric Blue'],
    sizes: [8, 9, 10, 11],
    materials: ['Nanomesh', 'Carbon Fiber Plate', 'Hyper-Grip Rubber'],
    specs: { 'Distance': 'Marathon Ready', 'Stability': 'High', 'Surface': 'Road' }
  },
  {
    id: '4',
    name: 'Eco-Vista Hemp Boots',
    price: 9999,
    category: 'Eco-Friendly',
    image: '/assets/product4.png',
    images: ['/assets/product4.png'],
    description: '100% sustainable materials for the conscious wanderer.',
    longDescription: 'Constructed from organic hemp and recycled ocean plastics, the Eco-Vista is our commitment to a greener planet. Completely vegan, waterproof, and designed for rugged durability.',
    rating: 4.6,
    reviewsCount: 42,
    colors: ['Earth Brown', 'Forest Green'],
    sizes: [7, 8, 9, 10, 11],
    materials: ['Organic Hemp', 'Recycled Rubber', 'Pineapple Leather'],
    specs: { 'Waterproofing': 'IPX7 Certified', 'Biodegradability': '60%', 'Origin': 'Fair Trade' }
  },
  {
    id: '5',
    name: 'Kids Joy Spark Sneakers',
    price: 3499,
    category: 'Kids',
    image: '/assets/product5.png',
    images: ['/assets/product5.png'],
    description: 'Durable, colorful, and easy-to-wear sneakers for daily adventures.',
    longDescription: 'Designed with growing feet in mind, the Joy Spark features ultra-flexible soles and easy-fasten straps. Built to withstand playground wear and tear.',
    rating: 4.8,
    reviewsCount: 110,
    colors: ['Neon Blue', 'Candy Pink'],
    sizes: [1, 2, 3, 4, 5],
    materials: ['Soft Canvas', 'Anti-Skid Rubber', 'Mesh Lining'],
    specs: { 'Fastener': 'Velcro', 'Washable': 'Machine Safe', 'Support': 'Padded Arch' }
  },
  {
    id: '6',
    name: 'Ortho-Grip Therapeutic',
    price: 7999,
    category: 'Orthopedic',
    image: '/assets/product6.png',
    images: ['/assets/product6.png'],
    description: 'Scientifically designed for back support and balance.',
    longDescription: 'Recommended by podiatrists, these shoes feature a custom arch-support system that corrects posture and reduces joint strain during long walks.',
    rating: 4.9,
    reviewsCount: 75,
    colors: ['Classic Black', 'Navy Blue'],
    sizes: [6, 7, 8, 9, 10],
    materials: ['High-Density Foam', 'Breathable Textile', 'Corrective Insole'],
    specs: { 'Arch Type': 'High Support', 'Width': 'Wide Fit Available', 'Prescription': 'Ready' }
  }
];

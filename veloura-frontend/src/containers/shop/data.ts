import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Lira Earrings',
    price: 20.00,
    imageSrc: '/products/earings.png',
    label: '-50%',
    category: 'earrings',
    inStock: true,
    onSale: true,
    slug: 'lira-earrings',
  },
  {
    id: '2',
    title: 'Hal Earrings',
    price: 25.00,
    imageSrc: '/products/img2.png',
    category: 'earrings',
    inStock: true,
    onSale: false,
    slug: 'golden-hoops',
  },
  {
    id: '3',
    title: 'Kaede Hair Pin Set Of 3',
    price: 30.00,
    imageSrc: '/products/img3.png',
    category: 'hair-accessories',
    inStock: true,
    onSale: false,
    slug: 'kaede-hair-pin-set-of-3',
  },
  {
    id: '4',
    title: 'Hair Pin Set of 3',
    price: 30.00,
    imageSrc: '/products/img4.png',
    category: 'hair-accessories',
    inStock: true,
    onSale: false,
    slug: 'hair-pin-set-of-3',
  },
  {
    id: '5',
    title: 'Plaine Necklace',
    price: 19.00,
    imageSrc: '/products/img5.png',
    label: 'Sold out',
    category: 'necklaces',
    inStock: false,
    onSale: false,
    slug: 'plaine-necklace',

  },
  {
    id: '6',
    title: 'Yuki Hair Pin Set of 3',
    price: 29.00,
    imageSrc: '/products/img6.png',
    category: 'hair-accessories',
    inStock: true,
    onSale: false,
    slug: 'yuki-hair-pin-set-of-3',
  },
];

export const categories = [
  { value: 'all', label: 'All Products' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'hair-accessories', label: 'Hair Accessories' },
];

export const sortOptions = [
  { value: 'default', label: 'Default sorting' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
];
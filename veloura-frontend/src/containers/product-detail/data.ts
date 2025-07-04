import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'lira-earrings',
    name: 'Lira Earrings',
    price: 20.00,
    rating: 5,
    reviewCount: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis.',
    images: [

     '/products/earings.png',
      '/products/img2.png',
      '/products/img3.png',
  '/products/img4.png'
    ],
    sku: '12',
    categories: ['Fashion', 'Style']
  },
  {
    id: '2',
    slug: 'golden-hoops',
    name: 'Golden Hoops',
    price: 25.00,
    rating: 4,
    reviewCount: 3,
    description: 'Beautiful golden hoop earrings perfect for any occasion. Made with high-quality materials and elegant design.',
    images: [
      '/products/earings.png',
      '/products/img2.png',
      '/products/img3.png',
  '/products/img4.png'
    ],
    sku: '13',
    categories: ['Fashion', 'Jewelry']
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};
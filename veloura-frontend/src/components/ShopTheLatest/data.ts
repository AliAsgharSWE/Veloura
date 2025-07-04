export interface Product {
  id: string;
  imageSrc: string;
  title: string;
  price: number;
  label?: string;
}
export const latestProducts: Product[] = [
  {
    id: '1',
    imageSrc: '/products/earings.png',
    title: 'Lira Earrings',
    price: 20.00,
  },
  {
    id: '2',
    imageSrc: '/products/img2.png',
    title: 'Hal Earrings',
    price: 25.00,
  },
  {
    id: '3',
    imageSrc: '/products/img3.png',
    title: 'Kaede Hair Pin Set Of 3',
    price: 30.00,
  },
  {
    id: '4',
    imageSrc: '/products/img4.png',
    title: 'Hair Pin Set of 3',
    price: 30.00,
  },
  {
    id: '5',
    imageSrc: '/products/img5.png',
    title: 'Plaine Necklace',
    price: 19.00,
  },
  {
    id: '6',
    imageSrc: '/products/img6.png',
    title: 'Yuki Hair Pin Set of 3',
    price: 29.00,
    label: 'ADD TO CART',
  },
];

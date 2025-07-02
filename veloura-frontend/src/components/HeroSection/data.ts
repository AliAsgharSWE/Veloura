import { HeroSlide } from './types';

export const heroSlides: HeroSlide[] = [
  {
    id: 'gold-big-hoops',
    title: 'Gold big hoops',
    price: '$ 68,00',
    buttonText: 'View Product',
    image: '/hero/banner.png', 
    alt: 'Woman wearing gold big hoop earrings',
    description: 'Elegant gold big hoop earrings that make a statement',
    category: 'Earrings',
    featured: true,
  },
  {
    id: 'silver-chains',
    title: 'Silver chains',
    price: '$ 45,00',
    buttonText: 'View Product',
    image: '/hero/banner.png', 
    alt: 'Woman wearing silver chain necklaces',
    description: 'Delicate silver chains for a sophisticated look',
    category: 'Necklaces',
    featured: true,
  },
  {
    id: 'diamond-rings',
    title: 'Diamond rings',
    price: '$ 120,00',
    buttonText: 'View Product',
    image: '/hero/banner.png', 
    alt: 'Woman wearing diamond rings',
    description: 'Sparkling diamond rings for special occasions',
    category: 'Rings',
    featured: true,
  },
  {
    id: 'pearl-collection',
    title: 'Pearl collection',
    price: '$ 85,00',
    buttonText: 'View Product',
    image: '/hero/banner.png', 
    alt: 'Woman wearing pearl jewelry',
    description: 'Timeless pearl jewelry for classic elegance',
    category: 'Collections',
    featured: true,
  },
  {
    id: 'rose-gold-bracelet',
    title: 'Rose gold bracelet',
    price: '$ 92,00',
    buttonText: 'View Product',
    image: '/hero/banner.png', 
    alt: 'Woman wearing rose gold bracelet',
    description: 'Delicate rose gold bracelet with intricate details',
    category: 'Bracelets',
    featured: true,
  },
];

export const heroConfig = {
  autoPlay: true,
  autoPlayInterval: 5000,
  showArrows: true,
  showDots: true,
  showProgressBar: true,
  transitionDuration: 700,
};


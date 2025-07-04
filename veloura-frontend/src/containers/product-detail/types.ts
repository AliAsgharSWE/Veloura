export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  description: string;
  images: string[];
  sku: string;
  categories: string[];
}

export interface ProductDetailProps {
  slug: string;
}
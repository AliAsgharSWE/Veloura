export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ProductSpecification {
  weight: string;
  dimensions: string;
  colours: string[];
  material: string;
}

export interface ProductTabsData {
  description: string;
  additionalInfo: ProductSpecification;
  reviews: Review[];
  reviewCount: number;
}

export interface ProductTabsProps {
  data: ProductTabsData;
  productName: string;
}

export interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  comment: string;
  saveInfo: boolean;
}

export type TabType = 'description' | 'additional' | 'reviews';
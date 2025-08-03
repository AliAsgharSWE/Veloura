export interface Product {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
  label?: string;
  category: string;
  inStock: boolean;
  onSale: boolean;
    slug: string;

}

export interface FilterState {
  category: string;
  sortBy: string;
  priceRange: {
    min: number;
    max: number;
  };
  onSale: boolean;
  inStock: boolean;
}
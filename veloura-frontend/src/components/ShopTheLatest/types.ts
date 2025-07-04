export interface Product {
  id: string;
  imageSrc: string;
  title: string;
  price: number;
  label?: string;
}
export interface ShopTheLatestProps {
  products: Product[];
  className?: string;
}
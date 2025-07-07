export interface BlogCardData {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt?: string;
  readMoreText?: string;
}

export interface BlogCardProps {
  blog: BlogCardData;
  className?: string;
  onClick?: (slug: string) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
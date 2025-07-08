export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  imageAlt: string;
  imageDetail: string;
  imageDetailAlt: string;
  category: string;
  date: string;
  readMoreText: string;
  author: string;
  tags: string[];
  topTrendsList: string[];
  socialLinks: {
    name: string;
    href: string;
    icon: string;
  }[];
}
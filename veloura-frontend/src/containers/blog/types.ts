export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  readMoreText: string;
  author?: string;
  tags?: string[];
}

export interface BlogCardProps {
  blog: BlogPost;
  className?: string;
  onClick?: (slug: string) => void;
}

export interface BlogPageProps {
  initialBlogs?: BlogPost[];
}
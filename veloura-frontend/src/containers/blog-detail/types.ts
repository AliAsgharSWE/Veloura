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
    comments: Comment[];

}



export interface Comment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  replies?: Comment[]; 
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  imageAlt: string;
  content: string[];
  imageDetail: string;
  imageDetailAlt: string;
  topTrendsList: string[];
  tags: string[];
  socialLinks: {
    name: string;
    href: string;
    icon: string;
  }[];
  comments: Comment[];
}

export interface FormData {
  name: string;
  email: string;
  website: string;
  comment: string;
  saveInfo: boolean;
}

export interface FormErrors {
  [key: string]: string;
}
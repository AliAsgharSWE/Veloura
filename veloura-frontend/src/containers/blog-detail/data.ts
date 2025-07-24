import { InputField } from '@/components/common/InputField/types';
import { BlogPost } from './types';

export const blogCategories = [
  'Fashion',
  'Style',
  'Accessories',
  'Season',
  'Lifestyle',
  'Beauty',
  'Trends'
];

export const blogdetailData: BlogPost[] = [
  {
    id: '1',
    slug: 'top-trends-from-spring-2024',
    title: 'Fast Fashion, And Faster Fashion',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a vulputate hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consectetur sed eu felis.',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a vulputate hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consectetur sed eu felis.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a vulputate hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consectetur sed eu felis.'
    ],
    image: '/blogs/img1.png',
    imageAlt: 'Hands with watch and jewelry',
    imageDetail: '/blogs/img2.png',
    imageDetailAlt: 'Hands with pearl bracelet and red nails',
    category: 'Fashion',
    date: 'October 8, 2020',
    readMoreText: 'Read More',
    author: 'ANNY JOHNSON',
    tags: ['Fashion', 'Style', 'Season'],
    
    topTrendsList: [
      'consectetur adipiscing elit. Aliquam placerat',
      'Lorem ipsum dolor sit amet consectetur',
      'sapien tortor faucibus augue',
      'a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis'
    ],
    socialLinks: [
      {
        name: "Facebook",
        href: "https://facebook.com",
        icon: "/facebook.svg"
      },
      {
        name: "Instagram",
        href: "https://instagram.com",
        icon: "/instagram.svg"
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: "/twitter.svg"
      }
    ],
      comments: [
    {
      id: '1',
      author: 'Scarlet withch',
      avatar: '/blogs/avatar1.png',
      date: '6 May, 2020',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
    },
    {
      id: '2',
      author: 'Kate moss',
      avatar: '/blogs/avatar2.png',
      date: '6 May, 2020',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.',
    },
    {
      id: '3',
      author: 'Scarlet withch',
      avatar: '/blogs/avatar1.png',
      date: '6 May, 2020',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    },
  ],
  },
  {
    id: '2',
    slug: 'elegant-jewelry-collection',
    title: 'Elegant Jewelry Collection',
    excerpt: 'Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Faucibus Augue, A Maximus Elit Ex Vitae Libero...',
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, a vulputate hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, a vulputate hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.'
    ],
    image: '/blogs/img2.png',
    imageAlt: 'Elegant gold hoop earrings on model',
    imageDetail: '/blogs/img1.png',
    imageDetailAlt: 'Hands with watch and jewelry',
    category: 'Fashion',
    date: 'October 8, 2020',
    readMoreText: 'Read More',
    author: 'Style Expert',
    tags: ['jewelry', 'accessories', 'elegant'],
    topTrendsList: [
      'consectetur adipiscing elit. Aliquam placerat',
      'Lorem ipsum dolor sit amet consectetur',
      'sapien tortor faucibus augue',
      'a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis'
    ],
    socialLinks: [
      {
        name: "Facebook",
        href: "https://facebook.com",
        icon: "/facebook.svg"
      },
      {
        name: "Instagram",
        href: "https://instagram.com",
        icon: "/instagram.svg"
      },
      {
        name: "Twitter",
        href: "https://twitter.com",
        icon: "/twitter.svg"
      }
    ],
      comments: [
    {
      id: '1',
      author: 'Scarlet withch',
      avatar: '/blogs/avatar1.png',
      date: '6 May, 2020',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
    },
    {
      id: '2',
      author: 'Kate moss',
      avatar: '/blogs/avatar2.png',
      date: '6 May, 2020',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.',
    },
    {
      id: '3',
      author: 'Scarlet withch',
      avatar: '/blogs/avatar1.png',
      date: '6 May, 2020',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
    },
  ],
  }
];

export const formFields: InputField[] = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name*',
    required: true,
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your Email*',
    required: true,
  },
  {
    id: 'website',
    name: 'website',
    type: 'url',
    placeholder: 'Enter your Website',
    required: false,
  },
  {
    id: 'comment',
    name: 'comment',
    type: 'textarea',
    placeholder: 'Your Comment*',
    required: true,
  },
];

'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BlogCardProps } from './types';

const BlogCard: React.FC<BlogCardProps> = ({ 
  blog, 
  className = '', 
  onClick 
}) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    if (onClick) {
      onClick(blog.slug);
    } else {
      router.push(`/blog-detail/${blog.slug}`);
    }
  };

  const handleCardClick = () => {
    router.push(`/blog-detail/${blog.slug}`);
  };

  return (
    <div 
      className={` rounded-lg overflow-hidden transition-shadow duration-300 cursor-pointer ${className}`}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.imageAlt || 'Blog image'}
          fill
          className="object-cover transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content Container */}
      <div className="py-4">
        {/* Category and Date */}
        <div className="flex space-x-2 mb-3">
          <span className={`text-body text-ternary font-base ${(blog.category)}`}>
            {blog.category}
          </span>
          <span className="text-body text-ternary font-base">
            - {blog.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium text-gray-900 mb-3 hover:text-gray-700 transition-colors">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-ternary text-body leading-relaxed mb-4">
          {blog.excerpt}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleReadMoreClick();
          }}
          className="text-body font-medium text-secondary  transition-colors cursor-pointer inline-flex items-center group"
        >
          {blog.readMoreText}
       
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
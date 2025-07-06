'use client'
import BlogCard from '@/src/components/BlogCard';
import { sampleBlogData } from '@/src/components/BlogCard/data';
import React from 'react';

const BlogList: React.FC = () => {
  // Custom onClick handler (optional)
  const handleBlogClick = (slug: string) => {
    console.log('Blog clicked:', slug);
    // Custom logic here if needed
    // Router navigation will still happen automatically
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Latest Blog Posts
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the latest trends, tips, and insights from our blog
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sampleBlogData.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={handleBlogClick}
            className=" transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
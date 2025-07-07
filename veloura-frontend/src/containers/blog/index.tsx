'use client'
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { blogData, blogCategories } from './data';
import { BlogPost } from './types';
import BlogCard from '@/src/components/Blogs/BlogsCard';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Fashion']);

  // Filter blogs based on search term and selected categories
  const filteredBlogs = useMemo(() => {
    return blogData.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(blog.category);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleBlogClick = (slug: string) => {
    console.log('Navigate to blog:', slug);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen">
      <div className=" mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <div className=" p-6 ">
              {/* Title */}
              <h1 className="text-heading font-medium text-gray-900 mb-6">Blog</h1>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {blogCategories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center transition-colors ${
                        selectedCategories.includes(category)
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-300 group-hover:border-gray-400'
                      }`}>
                        {selectedCategories.includes(category) && (
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                            <path d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm transition-colors ${
                        selectedCategories.includes(category)
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-600 group-hover:text-gray-900'
                      }`}>
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
          

            {/* Blog Grid */}
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                {filteredBlogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                    onClick={handleBlogClick}
                    className="duration-300"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">No blogs found</p>
                  <p className="text-sm">Try adjusting your search terms or categories</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
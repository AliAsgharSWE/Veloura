'use client'
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { blogData, blogCategories } from './data';
import { BlogPost } from './types';
import BlogCard from '@/src/components/Blogs/BlogsCard';
import Pagination from '@/src/components/Blogs/Pagination';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Fashion']);
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 4;


  // Filter blogs
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

  // Paginated blogs
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
    setCurrentPage(1); 
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleBlogClick = (slug: string) => {
    console.log('Navigate to blog:', slug);
  };

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 lg:flex-shrink-0">
            <div className="p-6">
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
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); 
                  }}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {blogCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryToggle(category)}
                      className={`text-sm transition-colors block text-left w-full cursor-pointer ${
                        selectedCategories.includes(category)
                          ? 'text-secondary font-medium cursor-pointer'
                          : 'text-gray-600 hover:text-gray-900 cursor-pointer'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {currentBlogs.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                  {currentBlogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      blog={blog}
                      onClick={handleBlogClick}
                      className="duration-300"
                    />
                  ))}
                </div>
                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
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

'use client'
import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, Filter } from 'lucide-react';
import { Product, FilterState } from './types';
import { products, categories, sortOptions } from './data';
import ProductCard from '@/components/common/ProductCard';
import ToggleSwitch from '@/components/ToggleSwitch';

const ShopPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    sortBy: 'default',
    priceRange: { min: 0, max: 1000 },
    onSale: false,
    inStock: false,
  });

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesPrice = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
      const matchesSale = !filters.onSale || product.onSale;
      const matchesStock = !filters.inStock || product.inStock;

      return matchesSearch && matchesCategory && matchesPrice && matchesSale && matchesStock;
    });

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, filters]);

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min, max },
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" py-8 px-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className=" text-3xl font-medium ">Shop The Latest</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* Left Sidebar - Filters */}
          <div className="w-full lg:w-65 space-y-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Shop By Category */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">Shop By</h3>
              </div>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-700">Sort By</h3>
              </div>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <input
                type="range"
                min="0"
                max="1000"
                value={filters.priceRange.min}
                onChange={(e) => handlePriceRangeChange(Number(e.target.value), filters.priceRange.max)}
                className="w-full mr-2 "
              />
              <div className="flex justify-between items-center">

                <span className="text-body text-gray-600">Price:${filters.priceRange.min} - ${filters.priceRange.max}</span>
                <button
                  onClick={() => handlePriceRangeChange(40, 180)}
                  className="ml-2 text-body text-secondary hover:underline focus:outline-none"
                >
                  Filter
                </button>
              </div>
            </div>

            {/* Additional Filters */}
           <div className="space-y-4">
              <ToggleSwitch
                checked={filters.onSale}
                onChange={(checked) => handleFilterChange('onSale', checked)}
                label="On sale"
              />
              <ToggleSwitch
                checked={filters.inStock}
                onChange={(checked) => handleFilterChange('inStock', checked)}
                label="In stock"
              />
            </div>
          </div>
          

          {/* Right Content - Products Grid */}
          <div className="flex-1 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedProducts.map(product => (
                <ProductCard
                  key={product.id}
                  imageSrc={product.imageSrc}
                  title={product.title}
                  price={product.price}
                  label={product.label}
                  slug={product.slug}

                  onAddToCart={() => console.log('Add to cart:', product.title)}
                  onQuickView={() => console.log('Quick view:', product.title)}
                  onAddToWishlist={() => console.log('Add to wishlist:', product.title)}
                />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

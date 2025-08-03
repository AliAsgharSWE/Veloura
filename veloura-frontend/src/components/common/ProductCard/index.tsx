'use client'; // Required for hooks in App Router

import Image from 'next/image';
import { useRouter } from 'next/navigation'; // ✅ App Router navigation
import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
  label?: string;
  slug?: string;
  onAddToCart?: () => void;
  onQuickView?: () => void;
  onAddToWishlist?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  label,
  slug,
  onAddToCart,
  onAddToWishlist,
}) => {
  const router = useRouter();

  const handleQuickView = () => {
    if (slug) {
      router.push(`/product-detail/${slug}`);
    }
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="w-full h-auto object-cover transition-all duration-300"
        />
        {label && (
          <span className="absolute top-4 left-4 bg-[#a18a68] text-white text-small font-normal px-2 py-1 rounded">
            {label}
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={onAddToCart}
            >
              <Image src="/shopping-cart.svg" alt="Add to cart" width={20} height={20} />
            </button>

            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              onClick={handleQuickView} // ✅ Route with slug
            >
              <Image src="/eye.svg" alt="Quick view" width={20} height={20} />
            </button>

            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={onAddToWishlist}
            >
              <Image src="/heart.svg" alt="Add to wishlist" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-subheading font-medium text-primary">{title}</h3>
        <p className="text-sm font-light text-secondary mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;

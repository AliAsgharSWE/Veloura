'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ 
  images, 
  productName 
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Thumbnail Images */}
      <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`relative w-18 h-18 lg:w-20 lg:h-20 cursor-pointer border-2 rounded-lg overflow-hidden ${
              selectedImage === index ? 'border-gray-400' : 'border-gray-200'
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`${productName} view ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden order-1 lg:order-2">
        <Image
          src={images[selectedImage]}
          alt={`${productName} main view`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};
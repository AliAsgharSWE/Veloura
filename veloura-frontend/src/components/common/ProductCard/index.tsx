import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  imageSrc: string;       
  title: string;          
  price: number;        
  label?: string;         
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, title, price, label }) => {
  return (
    <div className="w-full max-w-[377px] p-4">
      <div className="relative">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="w-full h-auto object-cover rounded-md"
        />
        {label && (
          <span className="absolute top-4 left-4 bg-[#a18a68] text-white text-small font-normal px-2 py-1 rounded">
            {label}
          </span>
        )}
      </div>
      <div className="mt-4">
       <h3 className="text-subheading font-medium text-gray-900">{title}</h3>
         <p className="text- font-light text-secondary mt-2">${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
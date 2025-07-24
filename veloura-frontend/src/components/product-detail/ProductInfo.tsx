'use client';

import { Product } from '@/containers/product-detail/types';
import { useState } from 'react';
import Button from '../common/Button';
import Image from 'next/image';

interface ProductInfoProps {
    product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (increment: boolean) => {
        setQuantity(prev => increment ? prev + 1 : Math.max(1, prev - 1));
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? 'text-black' : 'text-gray-300'}>
                ★
            </span>
        ));
    };

    return (
        <div className="space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl font-light text-gray-900">
                {product.name}
            </h1>

            {/* Price */}
            <div className="text-xl text-secondary font-base">
                ${product.price.toFixed(2)}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
                <div className="flex text-lg">
                    {renderStars(product.rating)}
                </div>
                <span className="text-sm text-gray-500">
                    {product.reviewCount} customer review{product.reviewCount !== 1 ? 's' : ''}
                </span>
            </div>

            {/* Description */}
            <p className="text-ternary leading-relaxed">
                {product.description}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded">
                    <button
                        onClick={() => handleQuantityChange(false)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">
                        {quantity}
                    </span>
                    <button
                        onClick={() => handleQuantityChange(true)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                    >
                        +
                    </button>
                </div>

                {/* Add to Cart Button */}
                <Button variant='primary' className="flex-1 bg-white border border-gray-900 text-gray-900 px-8 py-3 rounded hover:bg-gray-900 hover:text-white transition-colors font-medium">
                    ADD TO CART
                </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Image src="/heart.svg" alt="Heart" width={20} height={20} />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors md:ml-10">
                    <Image src="/email.svg" alt="Email" width={20} height={20} />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Image src="/facebook.svg" alt="Facebook" width={20} height={20} className='w-5 h-5' />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
                </button>
            </div>


            {/* Product Details */}
            <div className="pt-6 border-t border-gray-200 space-y-2">
                <div className="flex items-center gap-2">
                    <span className="text-body ">SKU:</span>
                    <span className="text-sm text-ternary ml:4">{product.sku}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-body">Categories:</span>
                    <span className="text-sm text-ternary ml:4">
                        {product.categories.join(', ')}
                    </span>
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import Link from 'next/link'; // Import Link
import ProductCard from '../common/ProductCard';
import { latestProducts } from './data';

const ShopTheLatest: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-heading font-medium">Shop The Latest</h2>
        <Link href="/shop">
          <span className="text-body text-ternary cursor-pointer">
            View All
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {latestProducts.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
            label={product.label}
              slug={product.slug}

          />
        ))}
      </div>
    </section>
  );
};

export default ShopTheLatest;

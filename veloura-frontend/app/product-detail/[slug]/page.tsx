

import React from 'react';
import { getProductBySlug } from '@/containers/product-detail/data';
import { ProductDetailContainer } from '@/containers/product-detail';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const product = getProductBySlug(params.slug);

  if (!product) return <div>Product not found</div>;

  return <ProductDetailContainer slug={product.slug} />;
};

export default Page;

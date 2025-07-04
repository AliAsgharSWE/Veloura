import { ProductInfo } from '@/src/components/product-detail/ProductInfo';
import { getProductBySlug } from './data';
import { ProductDetailProps } from './types';
import { ProductImageGallery } from '@/src/components/product-detail/ProductImageGallery';
import { ProductTabs } from '@/src/components/product-detail/Product-tab';
import { productTabsData } from '@/src/components/product-detail/Product-tab/data';

export const ProductDetailContainer: React.FC<ProductDetailProps> = ({ slug }) => {
    const product = getProductBySlug(slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-light text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600">The product you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className=" px-4 sm:px-12 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Section - Image Gallery */}
                    <div className="w-full">
                        <ProductImageGallery
                            images={product.images}
                            productName={product.name}
                        />
                    </div>

                    {/* Right Section - Product Info */}
                    <div className="w-full">
                        <ProductInfo product={product} />
                    </div>
                </div>
                <ProductTabs
                    data={productTabsData}
                    productName={product.name}
                />      </div>
        </div>
    );
};
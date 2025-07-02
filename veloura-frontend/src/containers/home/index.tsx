import ProductCard from "@/src/components/common/ProductCard";
import HeroSection from "@/src/components/HeroSection";


const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-10 py-10">
      <ProductCard
        imageSrc="/earings.png"
        title="Lira Earrings"
        price={20.00}
        label="Sold out"
      />
      <ProductCard
        imageSrc="/earings.png"
        title="Plaine Necklace"
        price={19.00}
      />
    </div>
    </>
  );
};

export default HomePage;
import { categories, Product, productsList } from "@/assets/products";
import ProductCard from "@/Components/ProductCard";
import StoreLayout from "@/Components/StoreLayout";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const getParams = await params;
  const categorySlug = getParams?.category?.toLowerCase();
  const categoryInfo = categories.find((cat) => cat.slug === categorySlug);
  const categoryName = categoryInfo?.name || getParams.category;

  const categoryProducts: Product[] = productsList.filter(
    (product) => product.category.toLocaleLowerCase() === categorySlug
  );

  return (
    <StoreLayout>
      <div className="max-w-7xl mx-auto px-4 py-12 mt-10 pt-20">
        <div className="bg-gradient-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-3">{categoryName}</h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Explore Our Section In Premium {categoryName}
            </p>
          </div>
        </div>

        {/* product */}
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categorySlug={categorySlug}
            />
          ))}
        </div>

        {/* Back To Navigation */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link
            href={"/product"}
            className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
          >
            <FaArrowLeft className="mr-2 text-xl"></FaArrowLeft>
            Back To All Category
          </Link>
        </div>
      </div>
    </StoreLayout>
  );
};

export default CategoryPage;

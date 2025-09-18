import React from "react";
import { categories, productsList } from "@/assets/products";
import Link from "next/link";
import StoreLayout from "@/Components/StoreLayout";
import Image from "next/image";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";

const ProductPages = () => {
  const getCategoryImages = (categorySlug: string): string => {
    const categoryProduct = productsList.find(
      (product) => product.category === categorySlug
    );
    return categoryProduct?.image || "./images/placeholder.png";
  };
  return (
    <StoreLayout>
      <div className="max-w-7xl mx-auto px-4 pt-20 mb-16 mt-10">
        {/*@ category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              href={`/product/${category.slug}`}
              key={index}
              style={{ borderColor: category.color }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:translate-y-[-5px] relative transition-all"
            >
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={getCategoryImages(category.slug)}
                  fill
                  alt={category.name}
                  sizes="(max-width:760px) 100vw , (max-width:1200px) 50vw ,25vw"
                  className="object-contact p-4 group-hover:scale-105 transition-transform duration-300 "
                ></Image>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#003d5b] group-hover:text-[#00798c] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-[#30638e] mb-4">
                  {category.description}
                </p>

                <div
                  className="flex justify-end items-center text-sm font-medium transition-colors"
                  style={{ borderColor: category.color }}
                >
                  <span className="mr-1 text-[#edae49]">View Product</span>
                  <FaChevronRight
                    className="text-xl transform group-hover:translate-x-1 transition-transform "
                    color="#edae49"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* bottom navigation */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <Link
            href={"/"}
            className="inline-flex items-center text-[#00798c] hover:text-[#003d5b] transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </StoreLayout>
  );
};

export default ProductPages;

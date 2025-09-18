"use client";
import { Product } from "@/assets/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
  categorySlug: string;
}

const ProductCard = ({ product, categorySlug }: ProductCardProps) => {
  // Handle add to cart
  const handleAddToCart = () => {
    // Get existing cart from localStorage
    const storedCart = localStorage.getItem("cart");
    let cart: Product[] = storedCart ? JSON.parse(storedCart) : [];

    // Check if product already exists
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      // If already exists, you might increase qty (optional feature)
      alert("This product is already in your cart!");
    } else {
      // Add new product
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("Product added to cart!");
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl">
      <div className="relative flex h-64 items-center justify-center bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="max-w-full object-contain h-full w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-gray-100 p-6">
        <h2 className="mb-2 line-clamp-1 text-lg font-bold text-[#003d5b]">
          {product.name}
        </h2>
        <p className="mb-4 line-clamp-1 text-sm text-[#30638e]/80">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#d1495b]">
            ${product.price.toLocaleString()}
          </span>
          <div className="flex flex-row gap-4">
            <Link
              href={`/product/${categorySlug}/${product.id}`}
              className="flex cursor-pointer items-center justify-center rounded-full bg-[#d1495b] px-4 py-2 text-sm font-medium text-white"
            >
              View Details
            </Link>
            <button
              onClick={handleAddToCart}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#d1495b] text-white"
            >
              <FaCartPlus className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

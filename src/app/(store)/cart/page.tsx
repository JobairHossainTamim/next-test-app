"use client";
import StoreLayout from "@/Components/StoreLayout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { Product } from "@/assets/products";

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // ✅ Load cart data from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Remove product from cart
  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <StoreLayout>
      <div className="mt-4 p-4">
        <h1 className="mb-6 text-2xl font-bold text-[#003d5b]">🛒 Your Cart</h1>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center rounded-xl border bg-white p-4 shadow-md"
              >
                {/* Product Image */}
                <div className="relative h-40 w-40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={200}
                    width={200}
                    className=""
                  />
                </div>

                {/* Product Name */}
                <h2 className="mt-4 text-lg font-bold text-[#003d5b] line-clamp-1">
                  {item.name}
                </h2>

                {/* Product Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                {/* Product Price */}
                <span className="mt-2 text-xl font-bold text-[#d1495b]">
                  ${item.price.toLocaleString()}
                </span>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-4 flex items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ✅ Total Price Section */}
        {cart.length > 0 && (
          <div className="mt-10 flex flex-col items-center border-t pt-6">
            <h2 className="text-xl font-bold text-[#003d5b]">
              Total: ${totalPrice.toLocaleString()}
            </h2>
            <button className="mt-4 rounded-full bg-[#003d5b] px-6 py-3 text-lg font-medium text-white hover:bg-[#00263f]">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </StoreLayout>
  );
};

export default CartPage;

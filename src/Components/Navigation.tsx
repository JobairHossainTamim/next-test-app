"use client";
import { productsList } from "@/assets/products";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCartArrowDown,
  FaChevronDown,
  FaSearch,
  FaStore,
  FaUserAlt,
  FaTimes,
} from "react-icons/fa";

const Navigation = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof productsList>([]);
  const [openProducts, setOpenProducts] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = Array.from(new Set(productsList.map((p) => p.category)));

  // -----------------------------
  // Function to read cart count
  // -----------------------------
  const getCartCount = () => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsed = JSON.parse(storedCart);
      setCartCount(parsed.length);
    } else {
      setCartCount(0);
    }
  };

  // -----------------------------
  // Function to handle search
  // -----------------------------
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const filtered = productsList.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 6));
    } else {
      setSuggestions([]);
    }
  };

  // -----------------------------
  // Function to render suggestions dropdown
  // -----------------------------
  const renderSuggestions = () => {
    if (query.length <= 1) return null;

    return (
      <div className="absolute left-0 right-0 top-full mt-2 rounded-lg border border-gray-200 bg-white shadow-lg">
        <ul className="max-h-64 overflow-y-auto">
          {suggestions.length > 0 ? (
            suggestions.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/product/${item.category}`}
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                  onClick={() => {
                    setQuery("");
                    setSuggestions([]);
                    setSidebarOpen(false); // Close sidebar if open
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm italic text-gray-500">
              No result found
            </li>
          )}
        </ul>
      </div>
    );
  };

  // -----------------------------
  // Function to render product categories dropdown
  // -----------------------------
  const renderProductsDropdown = () => {
    if (!openProducts) return null;

    return (
      <div className="absolute left-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/product/${category}`}
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // -----------------------------
  // useEffect to sync cart count
  // -----------------------------
  useEffect(() => {
    getCartCount();
    window.addEventListener("storage", getCartCount);
    return () => {
      window.removeEventListener("storage", getCartCount);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#003d5d] py-4 shadow-md">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={"/"} className="flex items-center">
              <div className="flex items-center">
                <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#edae49] text-xl font-bold text-[#003d5d]">
                  SB
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Store<span className="text-[#edae49]">Brand</span>
                </span>
              </div>
            </Link>

            {/* Search Form */}
            <div className="relative mx-8 hidden w-full max-w-lg flex-grow md:block">
              <form className="group relative">
                <input
                  type="text"
                  value={query ?? ""}
                  onChange={handleSearchChange}
                  placeholder="Search Product Here..."
                  className="w-full rounded-full border border-white/20 bg-white/10 py-2 pl-4 pr-12 text-white placeholder:text-white/60 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#edae49]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-white/70 transition-colors hover:text-white"
                >
                  <FaSearch className="text-xl" />
                </button>
              </form>
              {renderSuggestions()}
            </div>

            {/* Navigation Icons */}
            <div className="hidden items-center space-x-4 md:flex">
              {/* Products Dropdown */}
              <div
                className="group relative cursor-pointer"
                onMouseEnter={() => setOpenProducts(true)}
                onMouseLeave={() => setOpenProducts(false)}
              >
                <button className="flex items-center rounded-full p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-[#edae49]">
                  <FaStore className="mr-1 text-xl" />
                  <span className="text-base font-medium">Products</span>
                  <FaChevronDown className="ml-1 text-sm" />
                </button>
                {renderProductsDropdown()}
              </div>

              {/* Cart Button */}
              <Link
                href="/cart"
                className="relative flex items-center justify-center rounded-full p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-[#edae49]"
              >
                <FaCartArrowDown className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#edae49] text-xs font-bold text-[#003d5d]">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              <Link
                href="/account"
                className="flex items-center justify-center rounded-full p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-[#edae49]"
              >
                <FaUserAlt className="text-xl" />
              </Link>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <button
                className="p-2 text-white"
                onClick={() => setSidebarOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-[#003d5d] transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold text-white">Menu</span>
          <button className="text-white" onClick={() => setSidebarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-2 p-4 text-white">
          <li>
            <Link href="/" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/cart" onClick={() => setSidebarOpen(false)}>
              Cart ({cartCount})
            </Link>
          </li>
          <li>
            <Link href="/account" onClick={() => setSidebarOpen(false)}>
              Account
            </Link>
          </li>
          <li className="mt-2 border-t border-white/20 pt-2">
            <span className="font-semibold">Products</span>
            <ul className="mt-1 flex flex-col gap-1">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/product/${category}`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;

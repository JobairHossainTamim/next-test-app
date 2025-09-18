"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Simulate API call
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="py-16 bg-[#003d5b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="mb-8 md:mb-0 md:max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                Join our newsletter
              </h2>
              <p className="text-white/80 text-lg">
                Get the latest products, promotions, and tech news delivered to
                your inbox.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {isSubscribed ? (
                <div className="bg-green-500 text-white p-4 rounded-lg text-center">
                  <p className="font-medium">Thank you for subscribing!</p>
                  <p>Check your email for confirmation.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your Email"
                      className="w-full px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white 
                        placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#edae49] 
                        focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <button
                    className="bg-[#edae49] hover:bg-[#edae49]/90 text-white px-6 py-3 gap-2 font-medium 
                      flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-105 
                      min-w-[140px]"
                    type="submit"
                  >
                    Subscribe <FaEnvelope className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-[#edae49] text-[#003d5b] rounded-full flex items-center justify-center font-bold text-xl mr-3">
                  SB
                </div>
                <span className="text-xl font-bold">
                  Store<span className="text-[#edae49]">Brand</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Providing quality products and exceptional service since 2015.
                Your trusted partner for all your shopping needs.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#edae49] transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#edae49] transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#edae49] transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#edae49] transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Customer Service
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/shipping"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/warranty"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-[#edae49] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-[#edae49] mt-1 mr-3" />
                  <span className="text-gray-400">
                    123 Commerce St, Business City, BC 12345
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-[#edae49] mr-3" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="text-[#edae49] mr-3" />
                  <span className="text-gray-400">support@storebrand.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} StoreBrand. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#edae49] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#edae49] text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-[#edae49] text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

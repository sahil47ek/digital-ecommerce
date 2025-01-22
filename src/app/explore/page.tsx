'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  HiCodeBracket,
  HiBookOpen,
  HiCamera,
  HiMusicalNote,
  HiShoppingBag,
  HiMagnifyingGlass
} from "react-icons/hi2";
import { useState, useEffect } from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  sales: number;
  category: string;
};

type CategoryProducts = {
  [key: string]: Product[];
};

const PRODUCTS_BY_CATEGORY: CategoryProducts = {
  Development: [
    {
      id: 1,
      title: "React Dashboard Template",
      description: "Modern admin dashboard with dark/light mode",
      price: 49,
      image: "/images/projects/e-learning.jpg",
      rating: 4.8,
      sales: 1234,
      category: "Development"
    },
    {
      id: 7,
      title: "Next.js E-commerce Starter",
      description: "Full-stack e-commerce boilerplate with auth and payments",
      price: 79,
      image: "/images/projects/nft.jpg",
      rating: 4.7,
      sales: 892,
      category: "Development"
    }
  ],
  Design: [
    {
      id: 2,
      title: "UI Design System Kit",
      description: "Complete Figma design system with 1000+ components",
      price: 79,
      image: "/images/projects/nft.jpg",
      rating: 4.9,
      sales: 856,
      category: "Design"
    },
    {
      id: 8,
      title: "Icon Design Pack",
      description: "2000+ customizable vector icons in multiple styles",
      price: 39,
      image: "/images/projects/ai.jpg",
      rating: 4.8,
      sales: 1567,
      category: "Design"
    }
  ],
  Education: [
    {
      id: 3,
      title: "Python Masterclass 2024",
      description: "Comprehensive Python programming course",
      price: 129,
      image: "/images/projects/ai.jpg",
      rating: 4.7,
      sales: 2341,
      category: "Education"
    },
    {
      id: 9,
      title: "Web Development Bootcamp",
      description: "Full-stack web development with modern technologies",
      price: 199,
      image: "/images/projects/e-learning.jpg",
      rating: 4.9,
      sales: 3421,
      category: "Education"
    }
  ],
  Photography: [
    {
      id: 4,
      title: "Premium Stock Photos Bundle",
      description: "500+ high-resolution lifestyle photos",
      price: 39,
      image: "/images/projects/e-learning.jpg",
      rating: 4.6,
      sales: 673,
      category: "Photography"
    },
    {
      id: 10,
      title: "Lightroom Presets Collection",
      description: "Professional photo editing presets for all styles",
      price: 29,
      image: "/images/projects/nft.jpg",
      rating: 4.8,
      sales: 1892,
      category: "Photography"
    }
  ],
  Audio: [
    {
      id: 5,
      title: "Cinematic Sound Effects",
      description: "Professional sound effects library",
      price: 59,
      image: "/images/projects/nft.jpg",
      rating: 4.8,
      sales: 445,
      category: "Audio"
    },
    {
      id: 11,
      title: "Music Production Kit",
      description: "Premium loops, samples, and MIDI files",
      price: 89,
      image: "/images/projects/ai.jpg",
      rating: 4.7,
      sales: 723,
      category: "Audio"
    }
  ],
  "E-commerce": [
    {
      id: 6,
      title: "Shopify Theme Bundle",
      description: "3 premium e-commerce themes with support",
      price: 149,
      image: "/images/projects/ai.jpg",
      rating: 4.9,
      sales: 892,
      category: "E-commerce"
    },
    {
      id: 12,
      title: "WooCommerce Plugin Pack",
      description: "Essential plugins for your online store",
      price: 69,
      image: "/images/projects/e-learning.jpg",
      rating: 4.6,
      sales: 567,
      category: "E-commerce"
    }
  ]
};

const CATEGORIES = [
  {
    icon: HiCodeBracket,
    title: "Development",
    description: "Web, mobile, and software development resources",
    count: PRODUCTS_BY_CATEGORY.Development.length,
    color: "bg-blue-500"
  },
  {
    icon: HiBookOpen,
    title: "Design",
    description: "UI kits, templates, and graphics",
    count: PRODUCTS_BY_CATEGORY.Design.length,
    color: "bg-purple-500"
  },
  {
    icon: HiBookOpen,
    title: "Education",
    description: "Courses, tutorials, and learning materials",
    count: PRODUCTS_BY_CATEGORY.Education.length,
    color: "bg-green-500"
  },
  {
    icon: HiCamera,
    title: "Photography",
    description: "Stock photos, presets, and effects",
    count: PRODUCTS_BY_CATEGORY.Photography.length,
    color: "bg-orange-500"
  },
  {
    icon: HiMusicalNote,
    title: "Audio",
    description: "Music, sound effects, and audio tools",
    count: PRODUCTS_BY_CATEGORY.Audio.length,
    color: "bg-red-500"
  },
  {
    icon: HiShoppingBag,
    title: "E-commerce",
    description: "Templates, plugins, and solutions",
    count: PRODUCTS_BY_CATEGORY["E-commerce"].length,
    color: "bg-teal-500"
  }
];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all products in a flat array
  const allProducts: Product[] = Object.values(PRODUCTS_BY_CATEGORY).flat();

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    let results = allProducts;

    // Filter by search query
    if (query) {
      results = results.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }

    // Filter by selected category
    if (selectedCategory) {
      results = results.filter(product => 
        product.category === selectedCategory
      );
    }

    setFilteredProducts(results);
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Explore background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 animate-slideUp">
              Explore Digital Products
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-slideUp animation-delay-200">
              Browse through our curated collection of premium digital products across various categories
            </p>
            <div className="relative max-w-xl mx-auto animate-slideUp animation-delay-400">
              <input
                type="text"
                placeholder="Search products, categories, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-lg text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Search Results (if searching) */}
      {searchQuery && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Search Results ({filteredProducts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  className="group bg-surface rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xl font-bold text-primary">
                        ${product.price}
                      </p>
                    </div>
                    <p className="text-text-secondary text-sm mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {"★".repeat(Math.floor(product.rating))}
                        <span className="text-text-light ml-1">({product.rating})</span>
                      </div>
                      <span className="text-text-light">
                        {product.sales.toLocaleString()} sales
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Categories with Products (if not searching) */}
      {!searchQuery && (
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary text-center mb-16 animate-fadeIn">
              Browse by Category
            </h2>

            <div className="space-y-20">
              {CATEGORIES.map((category, categoryIndex) => (
                <div 
                  key={category.title}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${categoryIndex * 100}ms` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-lg ${category.color}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">
                        {category.title}
                      </h3>
                      <p className="text-text-secondary">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PRODUCTS_BY_CATEGORY[category.title].map((product, productIndex) => (
                      <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        className="group bg-surface rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-slideUp"
                        style={{ animationDelay: `${productIndex * 100}ms` }}
                      >
                        <div className="relative h-48 rounded-t-xl overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                              {product.title}
                            </h3>
                            <p className="text-xl font-bold text-primary">
                              ${product.price}
                            </p>
                          </div>
                          <p className="text-text-secondary text-sm mb-4">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-1 text-yellow-500">
                              {"★".repeat(Math.floor(product.rating))}
                              <span className="text-text-light ml-1">({product.rating})</span>
                            </div>
                            <span className="text-text-light">
                              {product.sales.toLocaleString()} sales
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}

                    {/* View All Link */}
                    <Link
                      href={`/category/${category.title.toLowerCase()}`}
                      className="group flex items-center justify-center bg-surface rounded-xl border-2 border-dashed border-gray-200 hover:border-primary transition-colors p-8"
                    >
                      <div className="text-center">
                        <p className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">
                          View All {category.title} Products
                        </p>
                        <p className="text-text-secondary">
                          {category.count} products available
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
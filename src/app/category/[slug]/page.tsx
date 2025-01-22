'use client';

import { useState, useMemo } from 'react';
import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Code, Palette, BookOpen, Camera, Music, ShoppingBag, Star, Filter, SlidersHorizontal } from 'lucide-react';
import CustomSelect from '../../components/CustomSelect';
import Hero from '../../components/Hero';

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

type CategoryConfig = {
  icon: any;
  title: string;
  description: string;
  color: string;
  heroImage: string;
};

const CATEGORY_CONFIG: Record<string, CategoryConfig> = {
  development: {
    icon: Code,
    title: "Development",
    description: "Web, mobile, and software development resources",
    color: "bg-blue-500",
    heroImage: "/images/projects/e-learning.jpg"
  },
  design: {
    icon: Palette,
    title: "Design",
    description: "UI kits, templates, and graphics",
    color: "bg-purple-500",
    heroImage: "/images/projects/nft.jpg"
  },
  education: {
    icon: BookOpen,
    title: "Education",
    description: "Courses, tutorials, and learning materials",
    color: "bg-green-500",
    heroImage: "/images/projects/ai.jpg"
  },
  photography: {
    icon: Camera,
    title: "Photography",
    description: "Stock photos, presets, and effects",
    color: "bg-orange-500",
    heroImage: "/images/projects/e-learning.jpg"
  },
  audio: {
    icon: Music,
    title: "Audio",
    description: "Music, sound effects, and audio tools",
    color: "bg-red-500",
    heroImage: "/images/projects/nft.jpg"
  },
  ecommerce: {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Templates, plugins, and solutions",
    color: "bg-teal-500",
    heroImage: "/images/projects/ai.jpg"
  }
};

const PRODUCTS_BY_CATEGORY: Record<string, Product[]> = {
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

type SortOption = 'featured' | 'price-low' | 'price-high' | 'best-selling';
type PriceRange = 'all' | 'under-50' | '50-100' | 'over-100';
type RatingFilter = 'all' | '4.5' | '4.0' | '3.5';

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [priceRange, setPriceRange] = useState<PriceRange>('all');
  const [ratingFilter, setRatingFilter] = useState<RatingFilter>('all');

  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const categoryConfig = CATEGORY_CONFIG[resolvedParams.slug.toLowerCase()];

  if (!categoryConfig) {
    notFound();
  }

  const CategoryIcon = categoryConfig.icon;
  const products = PRODUCTS_BY_CATEGORY[categoryConfig.title] || [];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply price range filter
    if (priceRange !== 'all') {
      filtered = filtered.filter(product => {
        if (priceRange === 'under-50') return product.price < 50;
        if (priceRange === '50-100') return product.price >= 50 && product.price <= 100;
        if (priceRange === 'over-100') return product.price > 100;
        return true;
      });
    }

    // Apply rating filter
    if (ratingFilter !== 'all') {
      const minRating = parseFloat(ratingFilter);
      filtered = filtered.filter(product => product.rating >= minRating);
    }

    // Apply sorting
    return filtered.sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'best-selling') return b.sales - a.sales;
      return 0; // featured - maintain original order
    });
  }, [products, sortBy, priceRange, ratingFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title={categoryConfig.title}
        description={categoryConfig.description}
        image={categoryConfig.heroImage}
        align="left"
        size="lg"
      />

      {/* Filters and Sort */}
      <div className="bg-white border-b sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-6 items-center justify-between">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                <Filter className="w-5 h-5" />
                <span className="text-sm font-medium">Filters:</span>
              </div>
              
              {/* Price Range Filter */}
              <CustomSelect
                options={[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under-50', label: 'Under $50' },
                  { value: '50-100', label: '$50 - $100' },
                  { value: 'over-100', label: 'Over $100' }
                ]}
                value={priceRange}
                onChange={(value) => setPriceRange(value as PriceRange)}
                className="min-w-[160px]"
              />

              {/* Rating Filter */}
              <CustomSelect
                options={[
                  { value: 'all', label: 'All Ratings' },
                  { 
                    value: '4.5',
                    label: (
                      <div className="flex items-center justify-between">
                        <span>4.5+</span>
                        <span className="text-yellow-400 ml-2">★★★★½</span>
                      </div>
                    )
                  },
                  {
                    value: '4.0',
                    label: (
                      <div className="flex items-center justify-between">
                        <span>4.0+</span>
                        <span className="text-yellow-400 ml-2">★★★★</span>
                      </div>
                    )
                  },
                  {
                    value: '3.5',
                    label: (
                      <div className="flex items-center justify-between">
                        <span>3.5+</span>
                        <span className="text-yellow-400 ml-2">★★★½</span>
                      </div>
                    )
                  }
                ]}
                value={ratingFilter}
                onChange={(value) => setRatingFilter(value as RatingFilter)}
                className="min-w-[160px]"
              />

              {/* Active Filters Display */}
              <div className="flex flex-wrap gap-2">
                {priceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium shadow-sm">
                    {priceRange === 'under-50' ? 'Under $50' : 
                     priceRange === '50-100' ? '$50 - $100' : 
                     'Over $100'}
                    <button 
                      onClick={() => setPriceRange('all')}
                      className="ml-2 hover:text-primary-dark hover:bg-primary/20 rounded-full w-6 h-6 inline-flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>
                  </span>
                )}
                {ratingFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-primary/10 text-primary text-sm font-medium shadow-sm">
                    {ratingFilter}+ Stars
                    <button 
                      onClick={() => setRatingFilter('all')}
                      className="ml-2 hover:text-primary-dark hover:bg-primary/20 rounded-full w-6 h-6 inline-flex items-center justify-center transition-colors"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="text-sm font-medium">Sort by:</span>
              </div>
              <CustomSelect
                options={[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'best-selling', label: 'Best Selling' }
                ]}
                value={sortBy}
                onChange={(value) => setSortBy(value as SortOption)}
                className="min-w-[180px]"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-500">
            Showing {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'product' : 'products'}
            {(priceRange !== 'all' || ratingFilter !== 'all') && ' with selected filters'}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredAndSortedProducts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your filters to find more products.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProducts.map((product, index) => (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-slideUp"
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
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xl font-bold text-primary">
                      ${product.price}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                      <span className="ml-1 text-gray-600">({product.rating})</span>
                    </div>
                    <span className="text-gray-600">
                      {product.sales.toLocaleString()} sales
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 
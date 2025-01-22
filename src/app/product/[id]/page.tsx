'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, ShoppingCart, ArrowLeft, Plus, Minus, Check } from 'lucide-react';
import { useState } from 'react';
import { use } from 'react';
import { useCart } from '@/app/providers/CartProvider';

// Import the Product type and PRODUCTS_BY_CATEGORY from the category page
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
  // ... other categories remain the same
};

// Flatten products array for easy lookup
const ALL_PRODUCTS = Object.values(PRODUCTS_BY_CATEGORY).flat();

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();
  
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const product = ALL_PRODUCTS.find(p => p.id === parseInt(resolvedParams.id));
  
  if (!product) {
    notFound();
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Add to cart using the context
    addItem(product, quantity);
    
    // Show success state
    setTimeout(() => {
      setIsAddingToCart(false);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }, 500);
  };

  const relatedProducts = ALL_PRODUCTS.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to category link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href={`/category/${product.category.toLowerCase()}`}
          className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {product.category}
        </Link>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-text-primary mb-4">
                {product.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-text-light">({product.rating})</span>
                </div>
                <span className="text-text-light">
                  {product.sales.toLocaleString()} sales
                </span>
              </div>

              <p className="text-text-secondary text-lg mb-8">
                {product.description}
              </p>

              <div className="mt-auto space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <span className="text-text-light line-through">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4">
                  <span className="text-text-secondary font-medium">Quantity:</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="p-2 rounded-l-lg border border-r-0 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Minus className="w-4 h-4 text-text-secondary" />
                    </button>
                    <div className="w-16 h-10 flex items-center justify-center border-t border-b">
                      {quantity}
                    </div>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 10}
                      className="p-2 rounded-r-lg border border-l-0 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Plus className="w-4 h-4 text-text-secondary" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || isAdded}
                  className={`w-full py-4 px-6 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    isAdded
                      ? 'bg-green-500'
                      : isAddingToCart
                      ? 'bg-primary/80 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added to Cart!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      {isAddingToCart ? 'Adding to Cart...' : `Add ${quantity} to Cart - $${(product.price * quantity).toFixed(2)}`}
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-text-light">
                  Free updates • Lifetime access • Money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <Link
                  href={`/product/${relatedProduct.id}`}
                  key={relatedProduct.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 rounded-t-xl overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors">
                        {relatedProduct.title}
                      </h3>
                      <p className="text-xl font-bold text-primary">
                        ${relatedProduct.price}
                      </p>
                    </div>
                    <p className="text-text-secondary text-sm mb-4">
                      {relatedProduct.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center gap-1 text-yellow-500">
                        {"★".repeat(Math.floor(relatedProduct.rating))}
                        <span className="text-text-light ml-1">
                          ({relatedProduct.rating})
                        </span>
                      </div>
                      <span className="text-text-light">
                        {relatedProduct.sales.toLocaleString()} sales
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
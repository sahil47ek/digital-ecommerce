import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';

export default function FeaturedProducts() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text-primary">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredProducts.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group">
              <div className="bg-surface rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-xl mb-2 text-text-primary">{product.title}</h3>
                  <p className="text-2xl font-bold text-primary">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 
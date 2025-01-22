import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/data/products';

export default function ProductGrid() {
  return (
    <div className="animate-fadeIn grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
      {PRODUCTS.map((product, index) => (
        <Link 
          href={`/product/${product.id}`} 
          key={product.id} 
          className={`group animate-slideUp`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="bg-surface rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-52">
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
              <h3 className="font-semibold text-lg mb-2 text-text-primary">{product.title}</h3>
              <p className="text-xl font-bold text-primary">${product.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 
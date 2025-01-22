'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiShoppingCart } from 'react-icons/hi2';
import { useCart } from '../providers/CartProvider';

export default function CartPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice } = useCart();

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Cart Icon with Badge */}
      <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
        <HiShoppingCart className="w-6 h-6 text-black" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Dropdown Preview */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 animate-fadeIn">
          <div className="p-4">
            <h3 className="font-medium text-gray-900">Shopping Cart</h3>
            {items.length === 0 ? (
              <p className="text-sm text-gray-500 mt-2">Your cart is empty</p>
            ) : (
              <>
                <ul className="mt-4 space-y-3 max-h-64 overflow-auto">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {item.quantity} × ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ${(item.quantity * item.price).toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-900">Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <Link
                    href="/cart"
                    className="mt-4 block w-full bg-primary text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Cart
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HiShoppingCart } from 'react-icons/hi2';  // Already using correct icon import
import { useCart } from '@/app/providers/CartProvider';
import { usePathname } from 'next/navigation';
import CartPreview from './CartPreview';

const NAVIGATION_ITEMS = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const { items } = useCart();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-primary">
                            Digital Market
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {NAVIGATION_ITEMS.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors ${
                                    pathname === item.href
                                        ? 'text-primary'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right section */}
                    <div className="flex items-center space-x-4">
                        <CartPreview />
                        <Link
                            href="/login"
                            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

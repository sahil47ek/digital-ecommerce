import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  description: string;
  image: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  align?: 'left' | 'center';
  size?: 'sm' | 'lg';
}

export default function Hero({
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  align = 'left',
  size = 'lg'
}: HeroProps) {
  return (
    <div className="relative bg-primary text-white">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={image}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`
            ${size === 'lg' ? 'py-24 sm:py-32' : 'py-16 sm:py-24'}
            ${align === 'center' ? 'text-center mx-auto' : 'text-left'}
            max-w-3xl
          `}
        >
          <h1 
            className={`
              text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 
              animate-slideUp tracking-tight
              ${align === 'center' ? 'mx-auto' : ''}
            `}
          >
            {title}
          </h1>
          <p 
            className={`
              text-lg sm:text-xl text-gray-300 mb-8 
              animate-slideUp animation-delay-200
              ${align === 'center' ? 'mx-auto' : ''}
            `}
          >
            {description}
          </p>
          {(primaryAction || secondaryAction) && (
            <div 
              className={`
                flex flex-wrap gap-4 
                animate-slideUp animation-delay-400
                ${align === 'center' ? 'justify-center' : ''}
              `}
            >
              {primaryAction && (
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  {primaryAction.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center gap-2 bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors border border-white/20"
                >
                  {secondaryAction.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
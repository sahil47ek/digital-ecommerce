import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight, HiShoppingBag, HiShieldCheck, HiUsers, HiClock, HiStar } from 'react-icons/hi2';

const TRENDING_PRODUCTS = [
  {
    id: 1,
    title: "React Dashboard Template",
    price: 49,
    image: "/images/projects/e-learning.jpg",
    category: "Development"
  },
  {
    id: 2,
    title: "UI Design System Kit",
    price: 79,
    image: "/images/projects/nft.jpg",
    category: "Design"
  },
  {
    id: 3,
    title: "Python Masterclass 2024",
    price: 129,
    image: "/images/projects/ai.jpg",
    category: "Education"
  }
];

const TESTIMONIALS = [
  {
    name: "John Smith",
    role: "Frontend Developer",
    image: "/images/team/michael.jpg",
    content: "The quality of digital products on this platform is outstanding. I've found everything I need for my web development projects."
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "/images/team/sarah.jpg",
    content: "As a designer, I appreciate the attention to detail in every product. The design resources have saved me countless hours."
  },
  {
    name: "Emily Chen",
    role: "Startup Founder",
    image: "/images/team/emma.jpg",
    content: "This marketplace has been instrumental in helping us launch our startup quickly with high-quality digital assets."
  }
];

const FEATURES = [
  {
    icon: HiShoppingBag,
    title: "Curated Products",
    description: "Hand-picked, quality-assured digital products from top creators"
  },
  {
    icon: HiShieldCheck,
    title: "Secure Transactions",
    description: "Safe and encrypted payments with money-back guarantee"
  },
  {
    icon: HiUsers,
    title: "Community Support",
    description: "Active community of creators and users for support"
  },
  {
    icon: HiClock,
    title: "Regular Updates",
    description: "Free updates and ongoing support for all products"
  },
  {
    icon: HiStar,
    title: "Premium Quality",
    description: "Top-rated products meeting highest quality standards"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary min-h-[80vh] flex items-center">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8 animate-slideUp">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                Discover Premium Digital Products
              </h1>
              <p className="text-xl text-gray-300">
                Your one-stop marketplace for high-quality digital assets, templates, and tools to accelerate your projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/explore"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Products
                  <HiArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors "
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-slideInRight">
              <div className="relative h-[500px] w-full">
                <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-6"></div>
                <div className="absolute bottom-0 left-0 w-4/5 h-4/5 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg transform -rotate-6"></div>
                <div className="absolute inset-0 m-auto w-full h-full">
                  <Image
                    src="/images/projects/e-learning.jpg"
                    alt="Featured product"
                    fill
                    className="object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 animate-fadeIn">
              Why Choose Our Marketplace?
            </h2>
            <p className="text-text-secondary text-lg animate-fadeIn animation-delay-200">
              We provide everything you need to bring your projects to life with confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Products Section */}
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-4 animate-fadeIn">
                Trending Products
              </h2>
              <p className="text-text-secondary text-lg animate-fadeIn animation-delay-200">
                Discover our most popular digital products
              </p>
            </div>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors animate-fadeIn"
            >
              View All
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRENDING_PRODUCTS.map((product, index) => (
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
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xl font-bold text-primary">
                    ${product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 animate-fadeIn">
              What Our Users Say
            </h2>
            <p className="text-text-secondary text-lg animate-fadeIn animation-delay-200">
              Join thousands of satisfied customers who trust our marketplace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-primary text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero-bg.jpg"
            alt="CTA background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-slideUp">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-slideUp animation-delay-200">
            Join our marketplace today and discover the perfect digital products for your next project
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slideUp animation-delay-400">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Create Account
              <HiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 bg-primary-light text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

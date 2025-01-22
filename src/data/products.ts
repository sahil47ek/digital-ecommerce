import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Premium UI Kit",
    price: 49.99,
    image: "/images/products/ui-kit.jpg",
    category: "Design",
    description: "A comprehensive UI kit featuring modern design components, perfect for creating stunning web applications. Includes dark and light themes, responsive layouts, and customizable elements.",
    features: [
      "200+ UI Components",
      "Dark & Light Themes",
      "Figma Source Files",
      "Responsive Layouts",
      "Documentation"
    ]
  },
  {
    id: 2,
    title: "Website Template",
    price: 29.99,
    image: "/images/products/template.jpg",
    category: "Development",
    description: "Professional website template built with Next.js and Tailwind CSS. Perfect for modern web applications with SEO optimization and performance in mind.",
    features: [
      "Next.js 13+ Ready",
      "Tailwind CSS",
      "SEO Optimized",
      "Performance Focused",
      "Easy Customization"
    ]
  },
  {
    id: 3,
    title: "Icon Pack",
    price: 19.99,
    image: "/images/products/icons.jpg",
    category: "Design",
    description: "A versatile icon pack with over 1000 customizable icons. Perfect for any design project, with multiple styles and formats included.",
    features: [
      "1000+ Icons",
      "Multiple Styles",
      "SVG & PNG Formats",
      "Customizable Colors",
      "Regular Updates"
    ]
  }
]; 
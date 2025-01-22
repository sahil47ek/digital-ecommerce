import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';

const PROJECTS = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "A comprehensive learning management system built with Next.js and TypeScript",
    image: "/images/projects/e-learning.jpg",
    category: "Education",
    completedDate: "2024",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "NFT Marketplace",
    description: "Digital marketplace for trading unique digital assets and collectibles",
    image: "/images/projects/nft.jpg",
    category: "Blockchain",
    completedDate: "2023",
    technologies: ["React", "Solidity", "Ethereum", "Web3.js"]
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "AI-powered platform for generating marketing content and social media posts",
    image: "/images/projects/ai.jpg",
    category: "Artificial Intelligence",
    completedDate: "2024",
    technologies: ["Python", "OpenAI", "Next.js", "MongoDB"]
  }
];

export default function Projects() {
  return (
    <div>
      <Hero
        title="Our Latest Projects"
        description="Discover our portfolio of innovative digital solutions that have helped businesses transform and grow in the digital age."
        image="/images/hero-bg.jpg"
        align="left"
        size="lg"
        primaryAction={{
          label: "View Projects",
          href: "#featured-projects"
        }}
        secondaryAction={{
          label: "Start a Project",
          href: "/contact"
        }}
      />

      {/* Main Content */}
      <div id="featured-projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Our Projects</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore our portfolio of successful digital projects and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className="bg-surface rounded-xl shadow-lg overflow-hidden animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full">
                    {project.category}
                  </span>
                  <span className="text-text-light text-sm">{project.completedDate}</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                <p className="text-text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-text-secondary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-slideUp" style={{ animationDelay: '400ms' }}>
          <h2 className="text-2xl font-bold text-text-primary mb-4">Have a Project in Mind?</h2>
          <p className="text-text-secondary mb-8">
            Let's collaborate to bring your digital ideas to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
} 
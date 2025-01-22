import Image from 'next/image';
import Link from 'next/link';
import { HiUsers, HiCursorArrowRays, HiBolt, HiShieldCheck } from "react-icons/hi2";
import Hero from '../components/Hero';

const TEAM_MEMBERS = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/images/team/sarah.jpg",
    bio: "10+ years of experience in digital product development"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/images/team/michael.jpg",
    bio: "Expert in blockchain and web technologies"
  },
  {
    name: "Emma Williams",
    role: "Head of Design",
    image: "/images/team/emma.jpg",
    bio: "Award-winning UI/UX designer"
  }
];

const VALUES = [
  {
    icon: HiCursorArrowRays,
    title: "Innovation",
    description: "Pushing boundaries in digital product development"
  },
  {
    icon: HiUsers,
    title: "Community",
    description: "Building strong relationships with our customers"
  },
  {
    icon: HiShieldCheck,
    title: "Trust",
    description: "Maintaining highest standards of security and reliability"
  },
  {
    icon: HiBolt,
    title: "Excellence",
    description: "Delivering exceptional quality in every product"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Hero
        title="About Digital Market"
        description="We're on a mission to revolutionize the digital product marketplace by connecting creators with customers worldwide."
        image="/images/hero-bg.jpg"
        align="center"
        size="lg"
      />

      {/* Values Section */}
      <div className="pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Our Values</h2>
            <p className="text-text-secondary">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 bg-white rounded-xl shadow-sm animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{value.title}</h3>
                <p className="text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Meet Our Team</h2>
            <p className="text-text-secondary">The people behind Digital Market</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div 
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-text-secondary">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of digital creators and customers today.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
} 
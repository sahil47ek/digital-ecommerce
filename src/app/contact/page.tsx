import Image from 'next/image';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    color: "bg-blue-500"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["support@digitalmarket.com", "sales@digitalmarket.com"],
    color: "bg-purple-500"
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Digital Avenue", "San Francisco, CA 94105"],
    color: "bg-green-500"
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Monday - Friday: 9AM - 6PM", "Weekend: 10AM - 4PM"],
    color: "bg-orange-500"
  }
];

const FAQ_ITEMS = [
  {
    question: "How do I get support for a purchased product?",
    answer: "Each product comes with dedicated support from the creator. You can access support through your product dashboard or by contacting our customer service team."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and various cryptocurrency payments to ensure secure and convenient transactions."
  },
  {
    question: "Can I request a refund?",
    answer: "Yes, we offer a 30-day money-back guarantee on all products if they don't meet your expectations or have technical issues."
  }
];

export default function Contact() {
  return (
    <div>
      <Hero
        title="Get in Touch"
        description="Have questions about our products or services? We're here to help you find the perfect solution for your needs."
        image="/images/hero-bg.jpg"
        align="center"
        size="lg"
      />

      {/* Contact Information */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTACT_INFO.map((item, index) => (
              <div
                key={item.title}
                className="bg-surface rounded-xl p-6 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${item.color} rounded-lg text-white mb-4`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-text-secondary">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl shadow-sm p-8 animate-slideInRight">
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-secondary mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-text-secondary mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="animate-slideInRight animation-delay-200">
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {FAQ_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm p-6"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-3">
                      {item.question}
                    </h3>
                    <p className="text-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                <h3 className="text-lg font-semibold text-text-primary mb-3">
                  Need More Help?
                </h3>
                <p className="text-text-secondary mb-4">
                  Check out our comprehensive documentation and guides for detailed information about our products and services.
                </p>
                <a
                  href="/docs"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                >
                  Visit Documentation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-[400px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0876740392148!2d-122.39997812393559!3d37.78795971083743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0x9eb37fccb45f2a04!2s123%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2s!4v1709655144612!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        <div className="absolute left-4 bottom-4 bg-white p-4 rounded-lg shadow-lg max-w-sm">
          <h3 className="font-semibold text-text-primary mb-2">Our Office</h3>
          <p className="text-text-secondary text-sm">123 Digital Avenue, San Francisco, CA 94105</p>
        </div>
      </div>
    </div>
  );
} 
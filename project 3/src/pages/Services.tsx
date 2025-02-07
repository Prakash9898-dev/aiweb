import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Globe, 
  Code, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight
} from 'lucide-react';

const servicesList = [
  {
    id: 'mobile-app-development',
    icon: <Smartphone className="h-12 w-12 text-blue-600" />,
    title: 'Mobile App Development',
    description: 'Create powerful mobile applications for iOS and Android platforms.',
    link: '/services/mobile-app-development'
  },
  {
    id: 'web-app-development',
    icon: <Globe className="h-12 w-12 text-blue-600" />,
    title: 'Web App Development',
    description: 'Build responsive and scalable web applications using modern technologies.',
    link: '/services/web-app-development'
  },
  {
    id: 'custom-software',
    icon: <Code className="h-12 w-12 text-blue-600" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business requirements.',
    link: '/services/custom-software'
  },
  {
    id: 'database',
    icon: <Database className="h-12 w-12 text-blue-600" />,
    title: 'Database Management',
    description: 'Efficient database solutions for optimal data storage and retrieval.',
    link: '/services/database-management'
  },
  {
    id: 'cloud',
    icon: <Cloud className="h-12 w-12 text-blue-600" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure to power your business applications.',
    link: '/services/cloud-solutions'
  },
  {
    id: 'security',
    icon: <Shield className="h-12 w-12 text-blue-600" />,
    title: 'Cybersecurity Services',
    description: 'Protect your digital assets with our comprehensive security solutions.',
    link: '/services/cybersecurity'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to transform your business and drive growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  {service.icon}
                  <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="text-blue-600 inline-flex items-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
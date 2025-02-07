import React from 'react';
import { ArrowRight, Code, Database, Cloud, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative Software Solutions<br />for Your Business
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            We help businesses transform their digital presence with cutting-edge
            software solutions tailored to their unique needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of IT solutions to help your business thrive
              in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Code className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Custom Software Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored software solutions designed to meet your specific business requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Database className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Database Management</h3>
              <p className="text-gray-600 mb-4">
                Efficient database solutions for optimal data storage and retrieval.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Cloud className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud infrastructure to power your business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Arveon?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver
              exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: 'Secure Solutions',
                description: 'Top-tier security measures to protect your data',
              },
              {
                icon: <Code className="h-12 w-12 text-blue-600" />,
                title: 'Expert Team',
                description: 'Skilled developers with years of experience',
              },
              {
                icon: <Database className="h-12 w-12 text-blue-600" />,
                title: 'Scalable Systems',
                description: 'Solutions that grow with your business',
              },
              {
                icon: <Cloud className="h-12 w-12 text-blue-600" />,
                title: '24/7 Support',
                description: 'Round-the-clock technical assistance',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
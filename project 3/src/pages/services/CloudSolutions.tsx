import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, CheckCircle2, ArrowRight } from 'lucide-react';

const CloudSolutions = () => {
  const features = [
    'Cloud Migration',
    'Cloud Infrastructure Setup',
    'Serverless Architecture',
    'DevOps Implementation',
    'Cloud Security',
    'Cost Optimization'
  ];

  const technologies = [
    'AWS',
    'Azure',
    'Google Cloud',
    'Kubernetes',
    'Docker',
    'Terraform'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-6">Cloud Solutions</h1>
              <p className="text-xl text-white/90 mb-8">
                Scalable and secure cloud infrastructure to power your digital transformation.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Cloud className="h-48 w-48 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Cloud Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white p-6 rounded-lg shadow-md">
                <CheckCircle2 className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Cloud Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Cloud Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluating your current infrastructure and needs'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing a comprehensive cloud adoption plan'
              },
              {
                step: '03',
                title: 'Migration',
                description: 'Seamless transition to cloud infrastructure'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous monitoring and improvement'
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Move to the Cloud?
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

export default CloudSolutions;
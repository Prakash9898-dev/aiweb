import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Arveon</span>
            </div>
            <p className="text-gray-400">
              Transforming businesses through innovative software solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-blue-400">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-blue-400">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tech Street</li>
              <li>Silicon Valley, CA 94025</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@arveon.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arveon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
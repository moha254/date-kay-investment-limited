import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-gray-400 leading-relaxed">
              A forward-thinking quarrying company dedicated to sustainable practices, 
              environmental preservation, and employee safety.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/sustainability" className="text-gray-400 hover:text-white transition-colors">
                  Sustainability
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Quarry Operations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Aggregate Supply
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Site Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Environmental Restoration
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">111 Obinagu Road, Awka, Anambra State</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-orange-500 flex-shrink-0" />
                <a href="mailto:christopheriloanya005@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  datekayinvestment@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-orange-500 flex-shrink-0" />
                <a href="tel:08037055864" className="text-gray-400 hover:text-white transition-colors">
                  08037055864
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Date-Kay Investment Limited. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
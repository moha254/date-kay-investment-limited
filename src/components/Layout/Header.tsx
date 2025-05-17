import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavItem } from '../../types';
import Logo from './Logo';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Sustainability', href: '/sustainability' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.href}
                className={({ isActive }) =>
                  `font-medium text-base transition-colors duration-200 ${
                    isActive
                      ? 'text-orange-700 hover:text-orange-800'
                      : isScrolled
                      ? 'text-gray-800 hover:text-orange-700'
                      : 'text-white hover:text-orange-200'
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-md transition-colors duration-200"
            >
              Get a Quote
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block py-2 font-medium ${
                      isActive
                        ? 'text-orange-700'
                        : 'text-gray-800 hover:text-orange-700'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-md transition-colors duration-200">
                Get a Quote
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
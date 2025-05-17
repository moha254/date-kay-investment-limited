import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6942018/pexels-photo-6942018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeIn">
            Sustainable Quarrying for a Greener Tomorrow
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl animate-fadeIn animation-delay-200">
            Delivering responsible, innovative, and environmentally-conscious 
            quarrying solutions across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-400">
            <Link
              to="/services"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium inline-flex items-center transition-colors duration-300"
            >
              Explore Our Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
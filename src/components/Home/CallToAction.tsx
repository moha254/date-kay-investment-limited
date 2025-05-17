import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-primary-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with us for your next construction project
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Whether you're working on a major infrastructure project or need custom material sourcing, 
            Date-Kay Investment Limited delivers with professionalism and purpose.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-primary-700 px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Contact Our Team
            </Link>
            <Link
              to="/projects"
              className="bg-transparent hover:bg-primary-800 text-white border border-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
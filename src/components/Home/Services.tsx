import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Truck, Hammer, Recycle } from 'lucide-react';

const services = [
  {
    icon: <Mountain className="w-10 h-10 text-orange-600" />,
    title: 'Quarry Operations',
    description: 'Reliable and efficient stone extraction and processing with minimal environmental impact.',
  },
  {
    icon: <Truck className="w-10 h-10 text-orange-600" />,
    title: 'Aggregate Supply',
    description: 'Supplying quality sand, gravel, ballast, and other construction materials for various projects.',
  },
  {
    icon: <Hammer className="w-10 h-10 text-orange-600" />,
    title: 'Site Development',
    description: 'Support for infrastructure development with professional excavation and leveling services.',
  },
  {
    icon: <Recycle className="w-10 h-10 text-orange-600" />,
    title: 'Environmental Restoration',
    description: 'Land rehabilitation and green initiative integration to restore quarry sites post-extraction.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive quarrying and material supply solutions for 
            construction and infrastructure projects of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-md"
            >
              <div className="inline-block mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
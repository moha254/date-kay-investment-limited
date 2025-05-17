import React from 'react';

const ServiceHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pb-32 bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/6899089/pexels-photo-6899089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 leading-relaxed">
            Comprehensive quarrying and construction material solutions
            delivered with professionalism and environmental responsibility.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
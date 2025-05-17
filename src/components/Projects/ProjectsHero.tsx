import React from 'react';

const ProjectsHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pb-32 bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Impact in Action</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 leading-relaxed">
            From roads to residential developments, our materials and expertise support 
            critical projects that improve lives across the region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
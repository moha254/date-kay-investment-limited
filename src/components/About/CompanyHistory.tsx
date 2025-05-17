import React from 'react';

const CompanyHistory: React.FC = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-orange-600 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Established with the goal of balancing development with sustainability, Date-Kay 
              Investment Limited has grown to become a leading quarrying company in the region. 
              Our journey began with a simple vision: to provide quality construction materials 
              while protecting the environment.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Through years of dedication, innovation, and ethical business practices, we have 
              expanded our operations while maintaining our commitment to sustainability and 
              community development.
            </p>
            
            <p className="text-lg text-gray-700">
              Today, we pride ourselves on providing top-quality quarry materials while mitigating 
              environmental degradation and enhancing community development. Our team of experts 
              continues to push the boundaries of sustainable quarrying practices, setting new 
              standards for the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/1238864/pexels-photo-1238864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Company history" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md mt-8">
              <img 
                src="https://images.pexels.com/photos/4491876/pexels-photo-4491876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Company growth" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.pexels.com/photos/4491883/pexels-photo-4491883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Quarry operations" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md mt-8">
              <img 
                src="https://images.pexels.com/photos/4491884/pexels-photo-4491884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Sustainable practices" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
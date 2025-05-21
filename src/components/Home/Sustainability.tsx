import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Wind, TreePine } from 'lucide-react';

const Sustainability: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to the Environment</h2>
            <div className="w-24 h-1 bg-orange-600 mb-6"></div>
            <p className="text-lg text-gray-700 mb-6">
              We recognize the responsibility that comes with quarrying. That's why sustainability 
              is central to everything we do. From eco-friendly blasting techniques to land 
              reclamation and emission control, we ensure our impact on the planet is minimal — 
              and where possible, positive.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <Leaf className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Environmental Impact Assessments</h3>
                  <p className="text-gray-700">Thorough analysis before any extraction begins</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <Droplets className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Waste Reduction and Recycling</h3>
                  <p className="text-gray-700">Minimizing waste and maximizing material utilization</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <Wind className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dust and Emission Control</h3>
                  <p className="text-gray-700">Advanced technologies to reduce air pollution</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-4">
                  <TreePine className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Land Reclamation</h3>
                  <p className="text-gray-700">Restoring quarried land for future use and biodiversity</p>
                </div>
              </li>
            </ul>
            <Link
              to="/sustainability"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Learn More About Our Sustainability Efforts
            </Link>
          </div>
          <div className="relative lg:h-[600px]">
            <img 
              src="/img/quary person.jpg" 
              alt="Sustainable quarrying practices" 
              className="w-full h-full rounded-lg object-cover shadow-lg"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
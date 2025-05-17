import React from 'react';
import { ShieldCheck, Leaf, Clock } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Date-Kay Investment Limited</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            A forward-thinking quarrying company dedicated to sustainable practices, 
            environmental preservation, and employee safety. With a strong foundation 
            in innovation and excellence, we meet today's infrastructural demands while 
            ensuring a greener future for generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
              <Leaf className="text-orange-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Practices</h3>
            <p className="text-gray-700">
              We integrate eco-friendly technologies and methods to minimize our 
              environmental footprint at every stage of the quarrying process.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
              <ShieldCheck className="text-orange-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
            <p className="text-gray-700">
              The wellbeing of our employees and communities is paramount, with 
              rigorous safety protocols exceeding industry standards.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
            <div className="w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="text-orange-600 h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Timely Delivery</h3>
            <p className="text-gray-700">
              We understand the importance of timelines in construction projects,
              consistently delivering quality materials on schedule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
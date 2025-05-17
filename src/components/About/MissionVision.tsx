import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 lg:p-12 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-orange-100 opacity-50"></div>
            <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-orange-100 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-orange-600 mr-4" />
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a strong force in sustainable quarrying operations, while preserving the 
                environment for generations yet unborn and at the same time driving excellence 
                and innovation.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 lg:p-12 rounded-lg shadow-sm relative overflow-hidden">
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-orange-100 opacity-50"></div>
            <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange-100 opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-orange-600 mr-4" />
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide responsible, sustainable quarrying solutions to meet the growing 
                demand for quarrying products, ameliorating environmental degradation and at the 
                same time not losing sight of the well-being, safety, and health of our employees, 
                which is a top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
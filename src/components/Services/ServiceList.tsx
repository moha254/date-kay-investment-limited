import React from 'react';
import { Mountain, Truck, Hammer, Recycle, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Mountain className="w-16 h-16 text-orange-600" />,
    title: 'Quarry Operations',
    description: 'Our core business involves the careful extraction and processing of stone and other materials from our quarry sites. Using modern equipment and environmentally-conscious methods, we produce high-quality materials for construction projects of all sizes.',
    features: [
      'Sustainable stone extraction',
      'Quality processing and grading',
      'Environmental impact monitoring',
      'Dust control measures',
      'Noise reduction technology'
    ],
    image: '/img/man.webp'
  },
  {
    icon: <Truck className="w-16 h-16 text-orange-600" />,
    title: 'Aggregate Supply',
    description: 'We provide a comprehensive range of aggregates to meet the needs of various construction projects. From sand and gravel to crushed stone and specialized materials, our aggregates meet strict quality standards for durability and performance.',
    features: [
      'Sand and gravel supply',
      'Crushed stone and ballast',
      'Custom material specifications',
      'Timely delivery service',
      'Bulk quantity availability'
    ]
  },
  {
    icon: <Hammer className="w-16 h-16 text-orange-600" />,
    title: 'Site Development',
    description: 'Beyond material supply, our team supports infrastructure development with professional excavation and leveling services. We work closely with contractors and developers to prepare sites for construction, ensuring proper grading and foundation preparation.',
    features: [
      'Site clearance and preparation',
      'Excavation services',
      'Professional grading',
      'Foundation support',
      'Engineering consultation'
    ]
  },
  {
    icon: <Recycle className="w-16 h-16 text-orange-600" />,
    title: 'Environmental Restoration',
    description: 'We take our environmental responsibility seriously. Our land rehabilitation program works to restore quarry sites after extraction, transforming them into useful spaces for communities or natural habitats that support biodiversity.',
    features: [
      'Comprehensive rehabilitation plans',
      'Native plant reforestation',
      'Water feature creation',
      'Recreational area development',
      'Long-term ecosystem monitoring'
    ]
  }
];

const ServiceList: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <div className="w-24 h-1 bg-orange-600 mb-6"></div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-orange-600 h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} h-96`}>
                <img 
                  src={index === 0 ? service.image : `https://images.pexels.com/photos/${index === 1 ? '2219024' : index === 2 ? '2566417' : '5969391'}/pexels-photo-${index === 1 ? '2219024' : index === 2 ? '2566417' : '5969391'}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
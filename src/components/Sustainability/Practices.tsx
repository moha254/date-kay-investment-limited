import React from 'react';
import { Leaf, Droplets, Wind, ShieldCheck, TreePine, Recycle } from 'lucide-react';

const practices = [
  {
    icon: <Leaf className="w-10 h-10 text-orange-600" />,
    title: 'Environmental Impact Assessments',
    description: 'Before any extraction begins, we conduct thorough environmental impact assessments to understand and mitigate potential effects on the surrounding ecosystem, water sources, and communities.'
  },
  {
    icon: <Wind className="w-10 h-10 text-orange-600" />,
    title: 'Dust and Emission Control',
    description: 'We implement advanced dust suppression systems and regularly maintain our equipment to minimize air pollution and reduce our carbon footprint during quarrying operations.'
  },
  {
    icon: <Droplets className="w-10 h-10 text-orange-600" />,
    title: 'Water Management',
    description: 'Our comprehensive water management systems include sedimentation ponds and water recycling facilities to prevent contamination of local water sources and reduce water consumption.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
    title: 'Safety Standards',
    description: 'We maintain rigorous safety protocols that protect both our employees and the environment, ensuring that our operations are conducted with the highest standards of care and responsibility.'
  },
  {
    icon: <TreePine className="w-10 h-10 text-orange-600" />,
    title: 'Land Reclamation',
    description: 'After extraction is complete, we implement comprehensive land rehabilitation plans that restore the landscape for future use, creating functioning ecosystems or community spaces.'
  },
  {
    icon: <Recycle className="w-10 h-10 text-orange-600" />,
    title: 'Waste Reduction and Recycling',
    description: 'We minimize waste through efficient resource use and implement recycling programs for materials that can be repurposed, reducing landfill contributions and conserving natural resources.'
  }
];

const Practices: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sustainable Practices</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            From eco-friendly blasting techniques to land reclamation and emission control, 
            we ensure our impact on the planet is minimal — and where possible, positive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-block mb-6">{practice.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{practice.title}</h3>
              <p className="text-gray-700">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practices;
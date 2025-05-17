import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Highway Construction Project',
    description: 'Supplied quality aggregates for a major highway construction project in the region.',
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Infrastructure'
  },
  {
    id: 2,
    title: 'Residential Development',
    description: 'Provided stone and sand materials for a large-scale residential development.',
    imageUrl: 'https://images.pexels.com/photos/2566417/pexels-photo-2566417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Residential'
  },
  {
    id: 3,
    title: 'Land Restoration Initiative',
    description: 'Successfully rehabilitated a former quarry site into a public recreation area.',
    imageUrl: 'https://images.pexels.com/photos/5969391/pexels-photo-5969391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Environmental'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Action</h2>
            <div className="w-24 h-1 bg-orange-600 mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl">
              From roads to residential developments, our materials and expertise support 
              critical projects that improve lives across the region.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center text-orange-700 font-medium mt-6 md:mt-0 hover:text-orange-800 transition-colors duration-200"
          >
            View all projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
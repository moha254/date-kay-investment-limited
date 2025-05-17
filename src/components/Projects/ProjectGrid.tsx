import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Highway Construction Project',
    description: 'Supplied quality aggregates for a major highway construction project in the region, providing materials that meet strict durability and safety standards.',
    imageUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Infrastructure'
  },
  {
    id: 2,
    title: 'Residential Development',
    description: 'Provided stone and sand materials for a large-scale residential development, helping create homes for hundreds of families in an expanding community.',
    imageUrl: 'https://images.pexels.com/photos/2566417/pexels-photo-2566417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Residential'
  },
  {
    id: 3,
    title: 'Land Restoration Initiative',
    description: 'Successfully rehabilitated a former quarry site into a public recreation area with walking trails, picnic areas, and restored native vegetation.',
    imageUrl: 'https://images.pexels.com/photos/5969391/pexels-photo-5969391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Environmental'
  },
  {
    id: 4,
    title: 'Commercial Complex Foundation',
    description: 'Delivered specialized aggregate materials for the foundation of a major commercial complex, ensuring structural integrity and longevity.',
    imageUrl: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Commercial'
  },
  {
    id: 5,
    title: 'Bridge Reconstruction',
    description: 'Supplied critical materials for a bridge reconstruction project, helping improve transportation infrastructure and community connectivity.',
    imageUrl: 'https://images.pexels.com/photos/1419108/pexels-photo-1419108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Infrastructure'
  },
  {
    id: 6,
    title: 'School Construction',
    description: 'Provided aggregates for the construction of a new school, contributing to educational infrastructure development in underserved communities.',
    imageUrl: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Institutional'
  },
  {
    id: 7,
    title: 'Water Treatment Facility',
    description: 'Supplied specialized materials for a municipal water treatment facility, supporting clean water access for thousands of residents.',
    imageUrl: 'https://images.pexels.com/photos/2466312/pexels-photo-2466312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Infrastructure'
  },
  {
    id: 8,
    title: 'Wetland Creation',
    description: 'Transformed a former quarry site into a thriving wetland ecosystem that now serves as a habitat for native wildlife and a natural water filtration system.',
    imageUrl: 'https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sunset-158179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Environmental'
  },
];

const categories = ['All', 'Infrastructure', 'Residential', 'Commercial', 'Environmental', 'Institutional'];

const ProjectGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Category filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group cursor-pointer rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 line-clamp-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80" onClick={closeModal}>
            <div 
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-80 sm:h-96 relative">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full mb-3">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-700 text-lg mb-6">{selectedProject.description}</p>
                <div className="flex justify-end">
                  <button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-md transition-colors duration-300"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
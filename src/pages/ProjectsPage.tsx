import React from 'react';
import ProjectsHero from '../components/Projects/ProjectsHero';
import ProjectGrid from '../components/Projects/ProjectGrid';
import CallToAction from '../components/Home/CallToAction';
import { Helmet } from 'react-helmet';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects - Date-Kay Investment Limited</title>
        <meta name="description" content="Browse Date-Kay's portfolio of infrastructure, residential, commercial and environmental projects across the region." />
      </Helmet>
      <ProjectsHero />
      <ProjectGrid />
      <CallToAction />
    </>
  );
};

export default ProjectsPage;
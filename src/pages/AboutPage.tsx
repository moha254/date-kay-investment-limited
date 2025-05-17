import React from 'react';
import AboutHero from '../components/About/AboutHero';
import MissionVision from '../components/About/MissionVision';
import CompanyHistory from '../components/About/CompanyHistory';
import CallToAction from '../components/Home/CallToAction';
import { Helmet } from 'react-helmet';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Date-Kay Investment Limited</title>
        <meta name="description" content="Learn about Date-Kay Investment Limited, a sustainable quarrying company dedicated to environmental stewardship and quality materials." />
      </Helmet>
      <AboutHero />
      <MissionVision />
      <CompanyHistory />
      <CallToAction />
    </>
  );
};

export default AboutPage;
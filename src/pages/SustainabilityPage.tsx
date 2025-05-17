import React from 'react';
import SustainabilityHero from '../components/Sustainability/SustainabilityHero';
import Practices from '../components/Sustainability/Practices';
import CallToAction from '../components/Home/CallToAction';
import { Helmet } from 'react-helmet';

const SustainabilityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability - Date-Kay Investment Limited</title>
        <meta name="description" content="Discover Date-Kay's commitment to environmental stewardship and sustainable quarrying practices." />
      </Helmet>
      <SustainabilityHero />
      <Practices />
      <CallToAction />
    </>
  );
};

export default SustainabilityPage;
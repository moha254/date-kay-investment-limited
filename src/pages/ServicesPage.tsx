import React from 'react';
import ServiceHero from '../components/Services/ServiceHero';
import ServiceList from '../components/Services/ServiceList';
import CallToAction from '../components/Home/CallToAction';
import { Helmet } from 'react-helmet';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Date-Kay Investment Limited</title>
        <meta name="description" content="Explore Date-Kay's comprehensive quarrying and construction material services, delivered with environmental responsibility." />
      </Helmet>
      <ServiceHero />
      <ServiceList />
      <CallToAction />
    </>
  );
};

export default ServicesPage;
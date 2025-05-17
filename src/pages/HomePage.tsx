import React from 'react';
import Hero from '../components/Home/Hero';
import Welcome from '../components/Home/Welcome';
import Services from '../components/Home/Services';
import Sustainability from '../components/Home/Sustainability';
import Projects from '../components/Home/Projects';
import Testimonials from '../components/Home/Testimonials';
import CallToAction from '../components/Home/CallToAction';
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Date-Kay Investment Limited - Sustainable Quarrying</title>
        <meta name="description" content="Date-Kay Investment Limited - A forward-thinking quarrying company dedicated to sustainable practices, environmental preservation, and employee safety." />
      </Helmet>
      <Hero />
      <Welcome />
      <Services />
      <Sustainability />
      <Projects />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;
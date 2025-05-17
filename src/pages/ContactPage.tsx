import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import { Helmet } from 'react-helmet';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Date-Kay Investment Limited</title>
        <meta name="description" content="Get in touch with Date-Kay Investment Limited for all your quarrying and construction material needs." />
      </Helmet>
      <div className="pt-20">
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
import React from 'react';
import ContactContent from '../components/Contact/ContactContent';
import ContactForm from '../components/Contact/ContactForm';
import PageAttributes from './PageAttributes';

const Contact = () => {
  return (
    <>
      <PageAttributes bodyID="contact" pageTitle="Contact" />
      <div className="contact container">
        <h1>Nous contacter</h1>
        <ContactContent />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;

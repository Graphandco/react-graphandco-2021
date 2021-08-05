import React from 'react';
import ContactContent from '../components/Contact/ContactContent';
import ContactForm from '../components/Contact/ContactForm';
import PageAttributes from './PageAttributes';
import { motion } from 'framer-motion';

const Contact = ({ variant, transition }) => {
  return (
    <>
      <PageAttributes bodyID="contact" pageTitle="Contact" />
      <motion.div initial="initial" animate="in" exit="out" variants={variant} transition={transition} className="contact container">
        <h1>Nous contacter</h1>
        <ContactContent />
        <ContactForm />
      </motion.div>
    </>
  );
};

export default Contact;

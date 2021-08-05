import React from 'react';
import { Projects } from '../components/Projets/Projects';
import PageAttributes from './PageAttributes';
import { motion } from 'framer-motion';

const Realisations = ({ variant, transition }) => {
  return (
    <>
      <PageAttributes pageTitle="Réalisations" bodyID="realisations" />
      <motion.div initial="initial" animate="in" exit="out" variants={variant} transition={transition} className="prestations container">
        <h1>Nos réalisations</h1>
        <Projects />
      </motion.div>
    </>
  );
};

export default Realisations;

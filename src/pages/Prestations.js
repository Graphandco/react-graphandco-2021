import React from 'react';
import PageAttributes from './PageAttributes';
import { PrestationsBloc } from '../components/Prestations';
import { motion } from 'framer-motion';

const Prestations = ({ variant, transition }) => {
  return (
    <>
      <PageAttributes bodyID="prestations" pageTitle="Prestations" />
      <motion.div initial="initial" animate="in" exit="out" variants={variant} transition={transition} className="prestations container">
        <h1>Nos prestations</h1>
        <PrestationsBloc />
      </motion.div>
    </>
  );
};

export default Prestations;

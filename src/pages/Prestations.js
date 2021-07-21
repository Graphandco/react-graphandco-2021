import React from 'react';
import PageAttributes from './PageAttributes';
import { PrestationsBloc } from '../components/Prestations';

const Prestations = () => {
  return (
    <>
      <PageAttributes bodyID="prestations" pageTitle="Prestations" />
      <div className="prestations container">
        <h1>Nos prestations</h1>
        <PrestationsBloc />
      </div>
    </>
  );
};

export default Prestations;

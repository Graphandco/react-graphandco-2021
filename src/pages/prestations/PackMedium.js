import React from 'react';
import { PrestationSinglePack } from '../../components/Prestations';
import PageAttributes from '../PageAttributes';

const PackMedium = () => {
  return (
    <>
      <PageAttributes bodyID="pack-medium" pageTitle="Pack Medium" />
      <div className="pack container">
        <h1>Pack Medium</h1>
        <PrestationSinglePack title="Votre pack clé en main" />
      </div>
    </>
  );
};

export default PackMedium;

import React from 'react';
import { PrestationSinglePack } from '../../components/Prestations';
import PageAttributes from '../PageAttributes';

const PackSurMesure = () => {
  return (
    <>
      <PageAttributes bodyID="pack-sur-mesure" pageTitle="Pack Sur Mesure" />
      <div className="pack container">
        <h1>Pack Sur Mesure</h1>
        <PrestationSinglePack title="Votre pack clé en main" />
      </div>
    </>
  );
};

export default PackSurMesure;

import React from 'react';
import { PrestationSinglePack } from '../../components/Prestations';
import PageAttributes from '../PageAttributes';

const PackCommerce = () => {
  return (
    <>
      <PageAttributes bodyID="pack-commerce" pageTitle="Pack Commerce" />
      <div className="pack container">
        <h1>Pack Commerce</h1>
        <PrestationSinglePack title="Votre pack clé en main" />
      </div>
    </>
  );
};

export default PackCommerce;

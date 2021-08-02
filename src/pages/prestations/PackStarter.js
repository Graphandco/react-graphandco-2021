import React from 'react';
import { PrestationSinglePack } from '../../components/Prestations';
import PageAttributes from '../PageAttributes';

const PackStarter = () => {
  return (
    <>
      <PageAttributes bodyID="pack-starter" pageTitle="Pack Starter" />
      <div className="pack container">
        <h1>Pack Starter</h1>
        <PrestationSinglePack title="Votre pack clé en main" />
      </div>
    </>
  );
};

export default PackStarter;

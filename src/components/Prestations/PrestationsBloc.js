import React from 'react';
import { PrestationItem } from './PrestationItem';

export const PrestationsBloc = () => {
  return (
    <section className="prestations">
      <div className="prestations-bloc">
        <PrestationItem />
        <PrestationItem />
        <PrestationItem />
        <PrestationItem />
      </div>
    </section>
  );
};

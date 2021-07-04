import React from 'react';
import PageAttributes from './PageAttributes';

const MentionsLégales = () => {
  return (
    <>
      <PageAttributes title="Mentions Légales" bodyID="mentions-legales" />
      <section className="mentions-legales container">
        <h1>Mentions Légales</h1>
        <div className="mentions-wrapper">
          <div className="mention">
            <h2>Ce site web est édité par :</h2>
            <p>Représentant légal : Mr Régis Daum</p>
            <p>Directeur de la publication : Mr Régis Daum</p>
          </div>
          <div className="mention">
            <h2>Ce site web est développé par :</h2>
            <p>
              Mail :{' '}
              <a href="mailto:contact@graphandco.com" title="Nous contacter">
                contact@graphandco.com
              </a>
            </p>
            <p>
              Téléphone :{' '}
              <a href="tel:0661619998" title="Nous appeler">
                06 61 61 99 98
              </a>
            </p>
          </div>
          <div className="mention">
            <h2>Ce site web est hébergé par :</h2>
            <p>1&1 , dont le siège social est : 14 Place de la Gare, 57200 Sarreguemines</p>
            <p>Téléphone : 03 39 70 80 89</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentionsLégales;

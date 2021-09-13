import React from 'react';

export const PrestationsTools = () => {
  const outils = [
    'html',
    'css',
    'javascript',
    'php',
    'wordpress',
    'woocommerce',
    'elementor',
    'prestashop',
    'react',
    'next.js',
    'strapi',
    'photoshop',
    'xd',
    'illustrator',
  ];

  return (
    <div className="prestations-tools">
      <h3>Voici les outils et langages que nous utilisons (entre autres !)</h3>
      <div className="prestations-tools-list">
        {outils.map((outil) => (
          <div className="tool-item" key={outil}>
            <img src={`/img/tools/${outil}.png`} alt={outil} />
            <span>{outil}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { FaPaintBrush, FaLock, FaMobileAlt, FaPlusCircle } from 'react-icons/fa';
import Button from '../Button';

export const PrestationItem = ({ title, slug, url, children }) => {
  return (
    <div className={`prestation-item prestation-${slug}`}>
      <h2>{title}</h2>
      <ul className="prestation-commun">
        <li>
          <FaLock />
          Site sécurisé
        </li>
        <li>
          <FaMobileAlt />
          Adapté pour tablettes et smartphones
        </li>
        <li>
          <FaPaintBrush />
          Contenus éditables facilement
        </li>
      </ul>
      <div className="separator">
        <FaPlusCircle />
      </div>
      <ul className="prestation-specific">{children}</ul>
      {/* <Button title="En savoir plus" link={url} small center mt="2" mb="2" /> */}
    </div>
  );
};

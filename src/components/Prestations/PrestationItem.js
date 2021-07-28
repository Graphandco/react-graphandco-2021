import React from 'react';
import { FaPaintBrush, FaLock, FaMobileAlt } from 'react-icons/fa';

export const PrestationItem = ({ title, children }) => {
  return (
    <div className="prestation-item">
      <h2>{title}</h2>
      <ul>
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
      {children}
    </div>
  );
};

import React from 'react';

import Button from '../Button';

// import {ReactComponent as BlackTrees} from '../../assets/01-black-trees.svg'
import { ReactComponent as HeroImg } from '../../assets/illustration.svg';
import TextAnimation from '../animations/TextAnimation';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper container">
        <div className="hero-content">
          <div className="hero-site-name">Graph and Co</div>
          <div className="hero-title">
            <span>Un</span> métier<span>, une </span>
            <TextAnimation />
          </div>
          <div className="hero-subtitle">Une agence spécialisée dans la création de sites web modernes et intuitifs.</div>
          <Button title="Voir nos offres" mt="3" link="/prestations" />
        </div>
        <HeroImg />
      </div>
    </section>
  );
};

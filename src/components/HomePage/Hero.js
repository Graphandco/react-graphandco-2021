import React from 'react';

// import {ReactComponent as BlackTrees} from '../../assets/01-black-trees.svg'
// import {ReactComponent as DarkPurpleTrees} from '../../assets/02-dark-purple-trees.svg'
// import {ReactComponent as PurpleTrees} from '../../assets/03-purple-trees.svg'
import { ReactComponent as HeroImg } from '../../assets/hero.svg';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper container">
        <div className="hero-content">
          <div className="hero-site-name">Graph and Co</div>
          <div className="hero-title">
            <span>Un</span> métier<span>, une </span>passion
          </div>
          <div className="hero-subtitle">Une agence spécialisée dans la création de sites web modernes et intuitifs.</div>
        </div>
        <HeroImg />
      </div>
    </section>
  );
};

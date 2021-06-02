import React from 'react';

// import {ReactComponent as BlackTrees} from '../../assets/01-black-trees.svg'
// import {ReactComponent as DarkPurpleTrees} from '../../assets/02-dark-purple-trees.svg'
// import {ReactComponent as PurpleTrees} from '../../assets/03-purple-trees.svg'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="parallax">
        <img src="/img/hero/01-black-trees.png" alt="dark trees" className="black-trees" />
        <img src="/img/hero/02-dark-purple-trees.png" alt="dark purple trees" className="dark-purple-trees" />
        <img src="/img/hero/03-purple-trees.png" alt="purple trees" className="purple-trees" />
        <img src="/img/hero/04-orange-trees.png" alt="orange trees" className="orange-trees" />
        <img src="/img/hero/05-mountains.png" alt="mountains" className="mountains" />
        <img src="/img/hero/clouds-1.png" alt="clouds" className="clouds1" />
        <img src="/img/hero/clouds-2.png" alt="clouds" className="clouds2" />
      </div>
    </section>
  );
};

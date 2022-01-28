import React, { useRef, useEffect } from 'react';
import Button from '../Button';
import { gsap } from 'gsap';

// import { ReactComponent as HeroImg } from '../../assets/illustration.svg';
import { ReactComponent as SiteName } from '../../assets/site-title.svg';

import TextAnimation from '../animations/TextAnimation';

export const Hero = () => {
  const svgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline({ Defaults: { Easing: 'Expo.EaseOut' } });
    tl.from(svgRef.current, {
      y: -150,
      duration: 2,
      // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    });
    tl.to(
      svgRef.current,
      {
        // clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);',
        opacity: 0,
        duration: 1,
        y: -150,
      },
      '+=.1'
    );
    tl.to(svgRef.current, {
      // clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);',
      width: '90vw',
      y: 0,
      duration: 0,
    });
    tl.to(contentRef.current, {
      // clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);',
      opacity: 1,
      y: 0,
      duration: 2,
    });
    tl.to(svgRef.current, {
      // clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);',
      width: '90vw',
      opacity: 0.05,
    });
  }, []);

  // useEffect(() => {
  //   let tl = gsap.timeline({ delay: 0.5 });
  //   tl.from('#Clavier', {
  //     y: '200px',
  //     opacity: 0,
  //     ease: 'Power4.easeOut',
  //     duration: 0.3,
  //   });
  //   tl.from('#Woman', {
  //     y: '-200px',
  //     opacity: 0,
  //     ease: 'Power4.easeOut',
  //     duration: 0.3,
  //   });
  //   tl.from('#Man_right', {
  //     x: '200px',
  //     opacity: 0,
  //     ease: 'Power4.easeOut',
  //     duration: 0.3,
  //   });
  //   tl.from('#Man_top', {
  //     y: '-200px',
  //     opacity: 0,
  //     ease: 'Power4.easeOut',
  //     duration: 0.3,
  //   });
  //   tl.from('#Symboles', {
  //     opacity: 0,
  //     ease: 'Power4.easeOut',
  //     duration: 0.8,
  //   });
  // }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper container">
        <SiteName ref={svgRef} />
        <div className="hero-content" ref={contentRef}>
          <div className="hero-uptitle">Création de sites web</div>
          <div className="hero-title">
            <span>Un</span> métier<span>, une </span>
            <TextAnimation />
          </div>
          <div className="hero-subtitle">Nous sommes spécialisés dans la réalisation de sites web modernes et intuitifs.</div>
          <Button title="Voir nos offres" mt="1" link="/prestations" />
        </div>
      </div>
    </section>
  );
};

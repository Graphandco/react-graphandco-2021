import React, { useRef, useEffect } from 'react';
import Button from '../Button';
import { gsap } from 'gsap';

// import { ReactComponent as HeroImg } from '../../assets/illustration.svg';
import { ReactComponent as SiteName } from '../../assets/site-title.svg';

import TextAnimation from '../animations/TextAnimation';

export const Hero = () => {
  const svgRef = useRef(null);
  const contentRef = useRef(null);

  function getScaleLogoValue() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      return 0.5;
    } else {
      return 1;
    }
  }

  const createTL = () => {
    let tl = gsap.timeline({ Defaults: { Easing: 'Expo.EaseOut' } });
    // tl.from(svgRef.current, {
    //   y: -150,
    //   duration: 2,
    //   scaleY: 0.2,
    //   // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    // });
    tl.to(
      svgRef.current,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2,
        y: 150,
      },
      '+=.3'
    );
    tl.to(
      svgRef.current,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 1,
      },
      '+=1'
    );

    tl.to(svgRef.current, {
      // clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);',
      y: 0,
      duration: 0,
      width: 'auto',
      scale: getScaleLogoValue,
    });

    tl.to(
      contentRef.current,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        y: 0,
        duration: 2,
      },
      '-=1.1'
    );
    tl.to(
      svgRef.current,
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 2,
      },
      '+=.5'
    );
  };

  useEffect(() => {
    // if (window.matchMedia('(min-width: 600px)').matches) {
    //   let ScaleLogoSize = 1;
    // } else {
    //   let ScaleLogoSize = 0.5;
    // }
    createTL();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

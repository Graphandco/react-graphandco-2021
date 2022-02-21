import React, { useEffect } from 'react';
import Button from '../Button';
import { gsap } from 'gsap';

import { ReactComponent as HeroImg } from '../../assets/illustration.svg';
import TextAnimation from '../animations/TextAnimation';

export const Hero = () => {
    useEffect(() => {
        let tl = gsap.timeline({ delay: 0.5 });
        tl.from('#Clavier', {
            y: '200px',
            opacity: 0,
            ease: 'Power4.easeOut',
            duration: 0.3,
        });
        tl.from('#Woman', {
            y: '-200px',
            opacity: 0,
            ease: 'Power4.easeOut',
            duration: 0.3,
        });
        tl.from('#Man_right', {
            x: '200px',
            opacity: 0,
            ease: 'Power4.easeOut',
            duration: 0.3,
        });
        tl.from('#Man_top', {
            y: '-200px',
            opacity: 0,
            ease: 'Power4.easeOut',
            duration: 0.3,
        });
        tl.from('#Symboles', {
            opacity: 0,
            ease: 'Power4.easeOut',
            duration: 0.8,
        });
    }, []);

    return (
        <section className="hero">
            <div className="hero-wrapper container">
                <div className="hero-content">
                    <div className="hero-site-name">Création de sites web</div>
                    <div className="hero-title">
                        <span>Un</span> métier<span>, une </span>
                        <TextAnimation />
                    </div>
                    <div className="hero-subtitle">Nous sommes spécialisés dans la réalisation de sites web modernes et intuitifs.</div>
                    <Button title="Voir nos offres" mt="1" link="/prestations" />
                </div>
                <HeroImg />
                {/* <div className="site-title">
          <span className="graph">Graph</span>
          <span className="and">and</span>
          <span className="co">Co</span>
        </div> */}
            </div>
        </section>
    );
};

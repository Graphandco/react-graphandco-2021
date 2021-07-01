import React, { useState, useEffect } from 'react';
import FooterColumn from './FooterColumn';
import { FaCopyright, FaChevronUp } from 'react-icons/fa';
import { Jump } from 'react-jump';

export const Footer = () => {
  // const [scrolled, setscrolled] = useState(false);

  // const handleScroll = ()=> {

  // }
  // useEffect(() => {
  // 	let st = window.pageYOffset || document.documentElement.scrollTop;
  // 	if (st > lastScrollTop){
  // 		// downscroll code
  // 	} else {
  // 		// upscroll code
  // 	}
  // 	if (typeof window !== 'undefined') {
  // 		window.addEventListener('scroll', () => setscrolled(window.pageYOffset > 500));
  // 	}
  // }, []);

  return (
    <footer>
      <div className="footer-wrapper container">
        <FooterColumn title="Nous appeler" desc="Par téléphone" name="06 61 61 99 98" icon="phone" />
        <FooterColumn title="Nous écrire" desc="Par mail" name="contact@graphandco.com" icon="mail" />
        <FooterColumn title="Nous trouver" desc="1, rue de la Lucelle" name="68127 Sainte-Croix-en-Plaine" icon="map" />
        <div className="footer-col">
          <h2>Infos</h2>
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Plan du site</a>
          <div className="copyright">
            <FaCopyright /> 2021 Graph and Co
          </div>
        </div>
      </div>
      <Jump target={'header'}>
        <FaChevronUp />
      </Jump>
      {/* {scrolled && (
      )} */}
    </footer>
  );
};

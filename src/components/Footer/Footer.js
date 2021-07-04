import React, { useState, useEffect } from 'react';
import FooterColumn from './FooterColumn';
import { FaCopyright, FaChevronUp } from 'react-icons/fa';
import { Jump } from 'react-jump';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setscrolled(window.pageYOffset > 500));
    }
  }, []);

  return (
    <footer>
      <div className="footer-wrapper container">
        <FooterColumn title="Nous appeler" desc="Par téléphone" name="06 61 61 99 98" icon="phone" link="tel:0661619998" />
        <FooterColumn title="Nous écrire" desc="Par mail" name="contact@graphandco.com" icon="mail" link="mailto:contact@graphandco.com" />
        <FooterColumn title="Nous trouver" desc="1, rue de la Lucelle" name="68127 Sainte-Croix-en-Plaine" icon="map" />
        <div className="footer-col">
          <div className="footer-col-title">Infos</div>
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/politique-confidentialite">Politique de confidentialité</Link>
          <div className="copyright">
            <FaCopyright /> 2021 Graph and Co
          </div>
        </div>
      </div>
      {scrolled && (
        <Jump target={'header'}>
          <FaChevronUp />
        </Jump>
      )}
    </footer>
  );
};

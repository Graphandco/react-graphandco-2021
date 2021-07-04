import React from 'react';
import Button from '../Button';

export const ContactSection = () => {
  return (
    // <section className="packs" style={{ backgroundImage: 'url(./img/bg-packs.jpg)' }}>
    <section className="contact-section">
      <img src="/img/bg-packs.jpg" alt="" />
      <div className="contact-section-content container">
        <h2>Contactez-nous !</h2>
        <p>N'hésitez pas à nous contacter pour en savoir plus sur nos prestations !</p>
        <Button title="Nous écrire" link="/contact" center />
      </div>
    </section>
  );
};

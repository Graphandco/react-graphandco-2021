import React from 'react';
import { Link } from 'react-router-dom';

export const Packs = () => {
  return (
    // <section className="packs" style={{ backgroundImage: 'url(./img/bg-packs.jpg)' }}>
    <section className="packs">
      <img src="/img/bg-packs.jpg" alt="" />
      <div className="packs-content container">
        <h2>Contactez-nous !</h2>
        <p>N'hésitez pas à nous contacter pour en savoir plus sur nos prestations !</p>
        <button className="btn btn-primary">
          <Link to="/contact"> Nous écrire</Link>
        </button>
      </div>
    </section>
  );
};

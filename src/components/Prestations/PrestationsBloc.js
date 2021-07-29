import React from 'react';
import { PrestationItem } from './PrestationItem';
import { FaChild } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const PrestationsBloc = () => {
  return (
    <section className="prestations">
      <div className="prestations-intro">
        <p>Nous mettons à votre disposition le site qui correspond le mieux à vos besoins.</p>
        <p>
          <FaChild />
          Vous êtes novice en informatique ? Aucun problème, nous vous montrons à quel point éditer votre site est un vrai jeu d'enfant !
        </p>
        <p>
          <GiMuscleUp />
          Vous êtes un utilisateur aguerri ? Vous serez ravi du niveau de personnalisation que le site vous propose.
        </p>
      </div>
      <div className="prestations-wrapper">
        <PrestationItem title="Pack Starter">
          <li>Vous gérez votre nom de domaine et votre hébergement</li>
          <li>Votre site est livré clé en main</li>
        </PrestationItem>
        <PrestationItem title="Pack Medium">
          <li>Gestion de votre nom de domaine et hébergement</li>
          <li>Maintenance permanente de votre site</li>
          <li>Modifications graphiques et techniques</li>
        </PrestationItem>
        <PrestationItem title="Pack Commerce">
          <li className="medium">Pack Medium +</li>
          <li>Vente en ligne avec panier et tunnel de commande</li>
          <li>Paiement en ligne et livraison / click and collect</li>
        </PrestationItem>
        <PrestationItem title="Sur mesure">
          <li>
            <IoIosRocket />
            Virtual DOM → un site rapide comme l'éclair !
          </li>
          <li>
            <AiOutlineAppstoreAdd />
            Applications mobiles, interfaces utilisateurs, bases de données (backend)...
          </li>
          <li className="more">Et bien d'autres !</li>
        </PrestationItem>
      </div>
      <div className="prestations-outro">
        Nous avons forcément le site taillé pour vous ! N'hésitez pas à<Link to="contact"> nous contacter</Link>
      </div>
    </section>
  );
};

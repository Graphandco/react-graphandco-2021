import React from 'react';
import { PrestationItem } from './PrestationItem';
import { FaChild } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';
import { IoIosRocket } from 'react-icons/io';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as SurMesure } from '../../assets/sur-mesure.svg';
import { ReactComponent as SurMesureMobile } from '../../assets/sur-mesure-mobile.svg';
import { useMediaQuery } from '@material-ui/core';

export const PrestationsBloc = () => {
  const isResponsive = useMediaQuery('(min-width: 768px)');

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
        <PrestationItem title="Pack Starter" slug="starter">
          <li>Vous gérez votre nom de domaine et votre hébergement</li>
          <li>Votre site est livré clé en main</li>
        </PrestationItem>
        <PrestationItem title="Pack Medium" slug="medium">
          <li>Gestion de votre nom de domaine et hébergement</li>
          <li>Maintenance permanente de votre site</li>
          <li>Modifications graphiques et techniques</li>
        </PrestationItem>
        <PrestationItem title="Pack Commerce" slug="commerce">
          <li className="medium">Pack Medium +</li>
          <li>Vente en ligne avec panier et tunnel de commande</li>
          <li>Paiement en ligne et livraison / click and collect</li>
        </PrestationItem>
        <div className="prestation-with-title">
          <div className="need-more">Besoin de plus ?</div>
          <PrestationItem title="Sur mesure" slug="sur-mesure">
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
      </div>
      <h3 className="h2">Nous réalisons le site taillé pour vous !</h3>
      <div className="prestations-outro container">
        {isResponsive ? <SurMesure /> : <SurMesureMobile />}
        <div className="prestation-description-wrapper">
          <div className="prestation-description-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat laborum, similique ad sit omnis tempore eius dignissimos sequi voluptatum,
              numquam aliquam, provident veniam quos voluptate excepturi voluptatem velit ipsam? Veritatis laborum autem, numquam fugit ut, maiores nostrum
              nulla a quo optio minima iusto ipsam accusamus sed! Non incidunt vel facere id sit, quod aliquid aspernatur eos repellendus asperiores cumque,
              sequi fuga! Commodi sapiente minima sit aliquid illum quidem assumenda corporis saepe? Odit voluptate, fugiat eos beatae totam quam unde provident
              molestias similique itaque pariatur iure ratione accusantium blanditiis labore rerum facilis. Repellat, culpa unde molestiae autem, architecto
              aspernatur doloribus laudantium nostrum deleniti sunt
            </p>
            <p>
              Nous avons forcément le site taillé pour vous ! N'hésitez pas à<Link to="contact"> nous contacter</Link>
            </p>
          </div>
        </div>

        <div className="prestation-description-accroche">
          Nous avons forcément le site taillé pour vous ! N'hésitez pas à<Link to="contact"> nous contacter</Link>
        </div>
      </div>
    </section>
  );
};

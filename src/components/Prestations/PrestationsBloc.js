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
import { PrestationsTools } from './PrestationsTools';

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
        <PrestationItem title="Pack Starter" slug="starter" url="/pack-starter">
          <li>Vous gérez votre nom de domaine et votre hébergement</li>
          <li>Votre site est livré clé en main</li>
        </PrestationItem>
        <PrestationItem title="Pack Medium" slug="medium" url="/pack-medium">
          <li>Gestion de votre nom de domaine et hébergement</li>
          <li>Maintenance permanente de votre site</li>
          <li>Modifications graphiques et techniques</li>
        </PrestationItem>
        <PrestationItem title="Pack Commerce" slug="commerce" url="/pack-commerce">
          <li className="commerce">Pack Medium +</li>
          <li>Vente en ligne avec panier et tunnel de commande</li>
          <li>Paiement en ligne et livraison / click and collect</li>
        </PrestationItem>
        <div className="prestation-with-title">
          <div className="need-more">Besoin de plus ?</div>
          <PrestationItem title="Sur mesure" slug="sur-mesure" url="/pack-sur-mesure">
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
      <h3 className=" h2 taille-pour-vous">Nous réalisons le site taillé pour vous !</h3>
      <div className="prestations-outro container">
        {isResponsive ? <SurMesure /> : <SurMesureMobile />}
        <div className="prestation-description-wrapper">
          <div className="prestation-description-content">
            <p>
              Nous avons à coeur de définir avec vous le site qui <strong>vous ressemble</strong>. En fonction de vos besoins nous établirons ensemble un cahier
              des charges. Chaque site est unique, car chaque entreprise l'est également. C'est pour cela qu'il est important que le site soit réalisé{' '}
              <strong>sur-mesure</strong>, afin qu'il vous convienne comme un vêtement taillé pour vous ! Ni trop grand, ni trop petit, dans une matière seyante
              et avec un budget qui vous correspond.
            </p>
            <p>
              Vous pouvez jeter un oeil à quelques unes de <Link to="realisations"> nos réalisations</Link> pour vous aider à établir vos besoins. Découvrez
              également plus d'informations en cliquant sur nos différents packs ou n'hésitez pas à nous demander conseil, nous serons ravis de vous guider.
            </p>
            <p>
              Nous avons forcément le site taillé pour vous ! N'hésitez pas à<Link to="contact"> nous contacter</Link>
            </p>
          </div>
        </div>

        <PrestationsTools />
      </div>
    </section>
  );
};

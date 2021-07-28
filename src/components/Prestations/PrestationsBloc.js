import React from 'react';
import { PrestationItem } from './PrestationItem';
import { FaChild } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';

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
        <PrestationItem title="Pack Starter"></PrestationItem>
        <PrestationItem title="Pack Medium" />
        <PrestationItem title="Pack Commerce" />
        <PrestationItem title="Sur mesure" />
      </div>
    </section>
  );
};

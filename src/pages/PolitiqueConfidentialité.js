import React from 'react';
import PageAttributes from './PageAttributes';

const PolitiqueConfidentialité = () => {
  return (
    <>
      <PageAttributes title="Politique de Confidentialité" bodyID="politique-confidentialite" />
      <section className="politique-confidentialite container">
        <h1>Politique de Confidentialité</h1>
        <div className="mention">
          <h2>Qui suis-je ?</h2>
          <p>L’adresse de mon site Web est : https://www.graphandco.com</p>
        </div>
        <div className="mention">
          <h2>Commentaires</h2>
          <p>
            Quand vous laissez un commentaire sur notre site web, les données inscrites dans le formulaire de commentaire, mais aussi votre adresse IP et
            l’agent utilisateur de votre navigateur sont collectés pour nous aider à la détection des commentaires indésirables.
          </p>
          <p>
            Une chaîne anonymisée créée à partir de votre adresse de messagerie (également appelée hash) peut être envoyée au service Gravatar pour vérifier si
            vous utilisez ce dernier. Les clauses de confidentialité du service Gravatar sont disponibles ici : https://automattic.com/privacy/. Après
            validation de votre commentaire, votre photo de profil sera visible publiquement à coté de votre commentaire.
          </p>
        </div>
        <div className="mention">
          <h2>Médias</h2>
          <p>
            Si vous êtes un utilisateur ou une utilisatrice enregistré·e et que vous téléversez des images sur le site web, nous vous conseillons d’éviter de
            téléverser des images contenant des données EXIF de coordonnées GPS. Les visiteurs de votre site web peuvent télécharger et extraire des données de
            localisation depuis ces images.
          </p>
        </div>
        <div className="mention">
          <h2>Formulaire de contact</h2>
          <p>En me contactant via le formulaire de contact, vous acceptez d’être recontacté par mail</p>
        </div>
        <div className="mention">
          <h2>Cookies</h2>
          <p>
            Si vous déposez un commentaire sur notre site, il vous sera proposé d’enregistrer votre nom, adresse de messagerie et site web dans des cookies.
            C’est uniquement pour votre confort afin de ne pas avoir à saisir ces informations si vous déposez un autre commentaire plus tard. Ces cookies
            expirent au bout d’un an.
          </p>
          <p>
            Si vous avez un compte et que vous vous connectez sur ce site, un cookie temporaire sera créé afin de déterminer si votre navigateur accepte les
            cookies. Il ne contient pas de données personnelles et sera supprimé automatiquement à la fermeture de votre navigateur.
          </p>
          <p>
            Lorsque vous vous connecterez, nous mettrons en place un certain nombre de cookies pour enregistrer vos informations de connexion et vos préférences
            d’écran. La durée de vie d’un cookie de connexion est de deux jours, celle d’un cookie d’option d’écran est d’un an. Si vous cochez « Se souvenir de
            moi », votre cookie de connexion sera conservé pendant deux semaines. Si vous vous déconnectez de votre compte, le cookie de connexion sera effacé.
          </p>
          <p>
            {' '}
            En modifiant ou en publiant une publication, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne comprend aucune donnée
            personnelle. Il indique simplement l’ID de la publication que vous venez de modifier. Il expire au bout d’un jour.
          </p>
        </div>
        <div className="mention">
          <h2>Contenu embarqué depuis d’autres sites</h2>
          <p>
            Les articles de ce site peuvent inclure des contenus intégrés (par exemple des vidéos, images, articles…). Le contenu intégré depuis d’autres sites
            se comporte de la même manière que si le visiteur se rendait sur cet autre site.
          </p>
          <p>
            Ces sites web pourraient collecter des données sur vous, utiliser des cookies, embarquer des outils de suivis tiers, suivre vos interactions avec
            ces contenus embarqués si vous disposez d’un compte connecté sur leur site web.
          </p>
        </div>
        <div className="mention">
          <h2>Statistiques et mesures d’audience</h2>
          <p>Dans le but d’améliorer notre site et d’avoir des infos concernant l’audience, nous collectons des informations liées au trafic sur ce dernier.</p>
        </div>
      </section>
    </>
  );
};

export default PolitiqueConfidentialité;

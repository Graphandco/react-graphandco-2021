import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks';
import { CreateProject } from './CreateProject';
// import { UpdateDeleteProject } from './UpdateDeleteProject';
import { fb } from '../../services';
import { ProjectItem } from './ProjectItem';
import { ReactComponent as RealisationImage } from '../../assets/realisations.svg';

const localData = [
  {
    description: 'Exemple de création pour un barbier',
    name: 'Barber Shop',
    position: '5',
    slug: 'barber-shop',
    url: 'https://barber.graphandco.com',
    responsive: true,
    mockup: false,
  },
  {
    description: 'Prototype pour un site de stockage en ligne',
    name: 'Fylo',
    position: '1',
    slug: 'fylo',
    url: 'https://fylo.graphandco.com',
    responsive: false,
    mockup: true,
  },
  {
    description: 'Site pour un magasin de pêche à Kingersheim',
    name: '3 Frontières Pêche',
    position: '6',
    slug: '3fp',
    url: 'https://3frontierespeche.fr',
    responsive: true,
    mockup: false,
  },
  {
    description: 'Site pour un magasin de pêche à Dannemarie',
    name: 'Pêche Exotique',
    position: '6',
    slug: 'peche-exotique',
    url: 'https://3frontierespeche.fr',
    responsive: true,
    mockup: false,
  },
  {
    description: "Exemple de réalisation d'un site pour un restaurant spécialisé dans les burgers",
    name: 'Burgerio',
    position: '4',
    slug: 'burgerio',
    url: 'https://burgerio.graphandco.com',
    responsive: false,
    mockup: true,
  },
  {
    description: 'Site pour le distributeur français des bateaux-amorceurs Boatman',
    name: 'Boatman',
    position: '9',
    slug: 'boatman',
    url: 'https://www.boatmanfrance.fr',
    responsive: true,
    mockup: false,
  },
  {
    description: 'Site pour la pizzeria La Toscana à Mulhouse avec commande et paiement en click and collect.',
    name: 'La Toscana',
    position: '2',
    slug: 'la-toscana',
    url: 'https://latoscana.fr',
    responsive: true,
    mockup: false,
  },
  {
    description: 'Site d’accompagnement à travers la taromancie.',
    name: 'Willow Tarot',
    position: '3',
    slug: 'willow-tarot',
    url: 'https://willow-tarot.fr',
    responsive: true,
    mockup: false,
  },
  {
    description: 'Site vitrine pour un créateur de guitares originales en tissu.',
    name: 'Loïde Guitare',
    position: '8',
    slug: 'loide-guitare',
    url: 'https://loide-guitare.fr',
    responsive: true,
    mockup: false,
  },
];

export const Projects = () => {
  const { authUser } = useAuth();
  const [projects, setprojects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = fb.firestore.collection('projects').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setprojects(data);
      setIsLoading(false);
      console.log(projects);
    });
    return unsubscribe;
  }, []);

  //TRI DES PROJETS PAR POSITION
  const dynamicSort = (property) => {
    let sortOrder = -1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      let result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  };
  localData.sort(dynamicSort('position'));

  return (
    <>
      <div className="projects container">
        <div className="projects-description">
          <div className="projects-description-content">
            <p>
              Nous vous présentons les projets réalisés pour les clients qui nous ont fait confiance pour le développement de leur site internet. Qu'il s'agisse
              d'une refonte ou d'une première présence web, nous avons à coeur de leur livrer <strong>un site qui correspond à leur besoin</strong>, à leur
              identité, ainsi qu'à leur budget. Nous travaillons également en collaboration avec des référenceurs, graphistes et photographes pour donner vie à
              un projet dans sa globalité.
            </p>
            <p>
              N'hésitez pas à consulter également les prototypes - ou <strong>"mockups"</strong>- de sites, qui sont des inspirations sur différents thèmes.
            </p>
          </div>
          <RealisationImage />
        </div>
        <div className="projects-list">
          <div className="project-item description">
            <img src="/img/projects/project-lead.png" alt="" />
            <div className="content">
              {/* <h2>Portfolio</h2> */}
              <p>Retrouvez ici les différents projets que nous avons pu développer pour nos clients.</p>
            </div>
          </div>
          {localData.map((project) => (
            <ProjectItem key={project.slug} project={project} isLoading={isLoading} />
          ))}
        </div>
        {authUser && <CreateProject />}
      </div>
    </>
  );
};

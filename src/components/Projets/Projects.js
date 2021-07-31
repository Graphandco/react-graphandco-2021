import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks';
import { CreateProject } from './CreateProject';
// import { UpdateDeleteProject } from './UpdateDeleteProject';
import { fb } from '../../services';
import { ProjectItem } from './ProjectItem';
import { ReactComponent as RealisationImage } from '../../assets/realisations.svg';

export const Projects = () => {
  const { authUser } = useAuth();
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    const unsubscribe = fb.firestore.collection('projects').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setprojects(data);
      console.log(data);
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
  projects.sort(dynamicSort('position'));

  return (
    <div className="projects container">
      <h1>Nos réalisations</h1>
      <div className="projects-description">
        <div className="projects-description-content">
          <p>
            Nous vous présentons les projets réalisés pour les clients qui nous ont fait confiance en nous confiant la création de leur site internet. Qu'il
            s'agisse d'une refonte ou d'une première présence web, nous avons à coeur de leur livrer <strong>un site qui correspond à leur besoin</strong>, à
            leur identité, ainsi qu'à leur budget. Nous travaillons également en collaboration avec des référenceurs, graphistes et photographes pour donner vie
            à un projet dans sa globalité.
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
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      {authUser && <CreateProject />}
    </div>
  );
};

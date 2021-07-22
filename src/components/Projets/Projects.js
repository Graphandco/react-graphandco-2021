import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks';
import { CreateProject } from './CreateProject';
// import { UpdateDeleteProject } from './UpdateDeleteProject';
import { fb } from '../../services';
import { ProjectItem } from './ProjectItem';

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
      //console.log(data);
    });
    return unsubscribe;
  }, []);

  return (
    <div className="projects container">
      <h1>Projets</h1>
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

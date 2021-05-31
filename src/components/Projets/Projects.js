import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks';
import { CreateProject } from './CreateProject';
// import { UpdateDeleteProject } from './UpdateDeleteProject';
import { fb } from '../../services';

export const Projects = () => {
  const { authUser } = useAuth();

  const [projects, setprojects] = useState([]);

  useEffect(() => {
    const unsubscribe = fb.firestore
      .collection('projects')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setprojects(data);
      });
    return unsubscribe;
  }, []);

  return (
    <div className="projects container">
      <h1>Projets</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id}>
            <div>{project.name}</div>
            {/* <UpdateDeleteProject project={project} /> */}
          </div>
        ))}
      </div>
      {authUser && <CreateProject />}
    </div>
  );
};

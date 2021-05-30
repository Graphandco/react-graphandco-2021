import { useEffect } from 'react';
import { useProjects } from '../../hooks';
import { useAuth } from '../../hooks';

export const Projets = () => {
  const { authUser } = useAuth();
  const projects = useProjects(authUser?.uid);

  useEffect(() => {
    // console.log(projects);
  }, [projects]);

  return (
    <div>
      <h2>Projets</h2>
    </div>
  );
};

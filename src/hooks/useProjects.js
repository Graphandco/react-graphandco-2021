import { fb } from '../services/';
import { useEffect, useState } from 'react';

export const useProjects = (userId) => {
  const [projects, setProjects] = useState();

  useEffect(() => {
    const unsubscribe = userId
      ? fb.firestore
          .collection('projects')
          .where('userid', '==', userId)
          //   .orderBy('name')
          .onSnapshot((snap) => {
            const _projects = [];
            // snap.forEach((s) => {
            //   console.log(s);
            //   _projects.push({
            //     ...s.data(),
            //     id: s.id,
            //   });
            // });
            snap.forEach((doc) => {
              _projects.push({ ...doc.data(), id: doc.id });
            });
            console.log(_projects);
            console.log(userId);
            setProjects(_projects);
          })
      : undefined;

    return unsubscribe;
  }, [userId]);

  return {
    projects,
  };
};

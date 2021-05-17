import React, { useState, useEffect, useCallback } from 'react';

import ProjectsList from './ProjectsList';
import AddProject from './AddProject';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjectsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://graph-and-co-react-default-rtdb.europe-west1.firebasedatabase.app/movies.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedProjects = [];

      for (const key in data){
        loadedProjects.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate,
        })
      }


      setProjects(loadedProjects);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProjectsHandler();
  }, [fetchProjectsHandler]);

  async function addProjectHandler(project) {
    const response = await fetch('https://graph-and-co-react-default-rtdb.europe-west1.firebasedatabase.app/movies.json', {
        method: 'POST',
        body: JSON.stringify(project),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await  response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (projects.length > 0) {
    content = <ProjectsList projects={projects} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddProject onAddProject={addProjectHandler} />
      </section>
      <section>
        <button onClick={fetchProjectsHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default Projects;

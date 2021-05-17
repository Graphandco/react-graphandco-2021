import React from 'react';

import ProjectSingle from './ProjectSingle';

const ProjectsList = (props) => {
  return (
    <ul>
      {props.projects.map((project) => (
        <ProjectSingle
          key={project.id}
          title={project.title}
          releaseDate={project.release}
          openingText={project.openingText}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;

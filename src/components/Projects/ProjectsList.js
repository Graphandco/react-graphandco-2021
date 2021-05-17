import React from 'react';

import ProjectSingle from './ProjectSingle';

const ProjectsList = (props) => {
  return (
    <ul>
      {props.projects.map((project) => (
        <ProjectSingle
          key={project.id}
          title={project.title}
          releaseDate={project.releaseDate}
          openingText={project.openingText}
          slug={project.slug}
        />
      ))}
    </ul>
  );
};

export default ProjectsList;

import React from 'react';

import ProjectSingle from './ProjectSingle';

const ProjectsList = (props) => {
  return (
    <div className="project-list container">
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
    </div>
  );
};

export default ProjectsList;

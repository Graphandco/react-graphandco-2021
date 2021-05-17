import React from 'react';


const ProjectSingle = (props) => {
  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.openingText}</p>
      <h3>{props.releaseDate}</h3>
      <p>{props.slug}</p>
    </li>
  );
};

export default ProjectSingle;

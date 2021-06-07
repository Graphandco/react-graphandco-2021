import React from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { fb } from '../../services';
import { useAuth } from '../../hooks';

export const ProjectItem = (props) => {
  const { authUser } = useAuth();
  const deleteProject = () => {
    if (window.confirm(`Voulez-vous vraiment supprimer le projet ${props.project.name} ?`)) {
      fb.firestore.collection('projects').doc(props.project.id).delete();
    }
  };

  return (
    <div className="project-item">
      <img src={`/img/projects/${props.project.slug}.jpg`} alt="" />
      <div className="project-item-content">
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
        <div className="project-item-footer">
          <button className="btn btn-primary btn-small">
            <a href={props.project.url}>Voir le site</a>
          </button>
          {authUser && (
            <div className="project-item-manage">
              <FaTrash className="delete" onClick={deleteProject} />
              <FaPencilAlt className="edit" />
            </div>
          )}
        </div>
      </div>
      {/* <UpdateDeleteProject project={project} /> */}
    </div>
  );
};

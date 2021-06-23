import React, { useState } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { fb } from '../../services';
import { useAuth } from '../../hooks';
import Button from '../Button';

export const ProjectItem = (props) => {
  const [name, setName] = useState(props.project.name);
  const [description, setDescription] = useState(props.project.description);
  const [slug, setSlug] = useState(props.project.slug);
  const [url, setUrl] = useState(props.project.url);

  const [edit, setEdit] = useState(false);

  const { authUser } = useAuth();
  const deleteProject = () => {
    if (window.confirm(`Voulez-vous vraiment supprimer le projet ${props.project.name} ?`)) {
      fb.firestore.collection('projects').doc(props.project.id).delete();
    }
  };

  const updateProject = (e) => {
    e.preventDefault();
    fb.firestore.collection('projects').doc(props.project.id).update({
      name,
      description,
      slug,
      url,
    });
    setEdit(false);
  };

  return (
    <div className="project-item">
      <img src={`/img/projects/${props.project.slug}.jpg`} alt="" />
      <div className="project-item-content">
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
        <div className="project-item-footer">
          <Button title="Voir le site" link={props.project.url} outside />
          {authUser && (
            <div className="project-item-manage">
              <FaTrash className="delete" onClick={deleteProject} />
              <FaPencilAlt className="edit" onClick={() => setEdit(!edit)} />
            </div>
          )}
        </div>
        {edit && (
          <div className="project-item-edit">
            <form className="admin-form">
              <div className="form-body">
                <div className="form-item">
                  <label>Nom du projet</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-item">
                  <label>Slug du projet</label>
                  <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} />
                </div>
                <div className="form-item">
                  <label>Description du projet</label>
                  <textarea rows="5" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-item">
                  <label>URL du projet</label>
                  <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>
              </div>
              <button className="btn btn-primary" onClick={updateProject}>
                Editer
              </button>
            </form>
          </div>
        )}
      </div>
      {/* <UpdateDeleteProject project={project} /> */}
    </div>
  );
};

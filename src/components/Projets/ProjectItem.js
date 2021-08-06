import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { fb } from '../../services';
import { useAuth } from '../../hooks';
import Button from '../Button';

export const ProjectItem = (props) => {
  const [name, setName] = useState(props.project.name);
  const [description, setDescription] = useState(props.project.description);
  const [slug, setSlug] = useState(props.project.slug);
  const [url, setUrl] = useState(props.project.url);
  const [mockup, setMockup] = useState(props.project.mockup);
  const [position, setPosition] = useState(props.project.position);

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
      mockup,
      position,
    });
    setEdit(false);
  };

  const realisationRefs = useRef([]);
  realisationRefs.current = [];

  const addToRefs = (el) => {
    if (el && !realisationRefs.current.includes(el)) {
      realisationRefs.current.push(el);
    }
  };

  useEffect(() => {
    realisationRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 0.5,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center+=190',
            //toggleActions: 'play none none reverse',
            //markers: true,
          },
        },
      );
    });
  }, [realisationRefs]);

  return (
    <div className="project-item" ref={addToRefs}>
      {props.isLoading ? (
        <div className="project-loading"></div>
      ) : (
        <>
          <img src={`/img/projects/${props.project.slug}.jpg`} alt="" />
          <div className="project-item-content">
            {mockup && <div className="mockup">Mockup</div>}
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            <div className="project-item-footer">
              <Button small title="Voir le site" link={props.project.url} outside />
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
                    <div className="form-item">
                      <label>Mockup ?</label>
                      <input type="checkbox" value={mockup} checked={mockup} onChange={(e) => setMockup(!mockup)} />
                    </div>
                    <div className="form-item">
                      <label>Position du projet</label>
                      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
                    </div>
                  </div>
                  <div className="buttons">
                    <Button small title="Editer" onClick={updateProject} />
                    <Button className="cancel" small title="X" onClick={() => setEdit(!edit)} />
                  </div>
                </form>
              </div>
            )}
          </div>
        </>
      )}
      {/* <UpdateDeleteProject project={project} /> */}
    </div>
  );
};

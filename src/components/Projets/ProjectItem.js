import React, { useState, useRef } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';
import { fb } from '../../services';
import { useAuth } from '../../hooks';
import Button from '../Button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export const ProjectItem = (props) => {
  const [name, setName] = useState(props.project.name);
  const [description, setDescription] = useState(props.project.description);
  const [slug, setSlug] = useState(props.project.slug);
  const [url, setUrl] = useState(props.project.url);
  const [mockup, setMockup] = useState(props.project.mockup);
  const [responsive, setResponsive] = useState(props.project.responsive);
  const [position, setPosition] = useState(props.project.position);
  const [popupVisible, setPopupVisible] = useState(false);

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
      responsive,
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

  // useEffect(() => {
  //   realisationRefs.current.forEach((el, index) => {
  //     gsap.fromTo(
  //       el,
  //       {
  //         x: 50,
  //         autoAlpha: 0,
  //       },
  //       {
  //         duration: 0.5,
  //         x: 0,
  //         autoAlpha: 1,
  //         ease: 'none',
  //         scrollTrigger: {
  //           id: `section-${index + 1}`,
  //           trigger: el,
  //           start: 'top center+=190',
  //           toggleActions: 'play none none reverse',
  //           //markers: true,
  //         },
  //       },
  //     );
  //   });
  // }, []);

  return (
    <motion.div className="project-item" ref={addToRefs}>
      {props.isLoading ? (
        <div className="project-loading"></div>
      ) : (
        <>
          {responsive && (
            <img
              className={`${popupVisible ? 'responsive-preview show' : 'responsive-preview'}`}
              src={`/img/projects/${props.project.slug}-responsive.jpg`}
              alt={props.project.name}
            />
          )}
          <div className="project-img">
            <img
              src={`/img/projects/${props.project.slug}.jpg`}
              alt={props.project.name}
              onMouseOver={(e) => setPopupVisible(true)}
              onMouseLeave={(e) => setPopupVisible(false)}
            />
            {!mockup && (
              <div className="click-icon">
                <MdTouchApp />
              </div>
            )}
          </div>
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
                    <div className="form-item form-item-checkboxes">
                      <div className="checkbox-item">
                        <label>Mockup ?</label>
                        <input type="checkbox" value={mockup} checked={mockup} onChange={(e) => setMockup(!mockup)} />
                      </div>
                      <div className="checkbox-item">
                        <label>Responsive Preview ?</label>
                        <input type="checkbox" value={responsive} checked={responsive} onChange={(e) => setResponsive(!responsive)} />
                      </div>
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
    </motion.div>
  );
};

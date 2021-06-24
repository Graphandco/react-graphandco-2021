import React, { useState } from 'react';
import { fb } from '../../services';
import Button from '../Button';

export const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [slug, setSlug] = useState('');
  const [url, setUrl] = useState('');
  const [showForm, setShowForm] = useState(false);

  const createProject = (e) => {
    e.preventDefault();
    fb.firestore.collection('projects').add({
      name,
      description,
      slug,
      url,
    });

    setName('');
    setDescription('');
    setSlug('');
    setUrl('');
  };

  return (
    <>
      <Button mt="3" mb="2" title="Ajouter un projet" onClick={() => setShowForm(!showForm)} />
      {showForm && (
        <div className="create">
          <h4>Ajouter un projet</h4>
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
            <Button small title="Ajouter le projet" onClick={createProject} />
          </form>
        </div>
      )}
    </>
  );
};

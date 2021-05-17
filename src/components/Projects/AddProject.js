import React, { useRef } from 'react';


function AddProject(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
  const slugRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const project = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
      slug: slugRef.current.value,
    };

    props.onAddProject(project);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <div>
        <label htmlFor='slug'>Slug</label>
        <input type='text' id='slug' ref={slugRef} />
      </div>
      <button>Ajouter le Projet</button>
    </form>
  );
}

export default AddProject;
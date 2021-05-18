import React from 'react';


const ProjectSingle = (props) => {

  const id={props}

  const deleteHandler = async (id) => {
    try {
      await fetch(
        `https://graph-and-co-react-default-rtdb.europe-west1.firebasedatabase.app/movies/${id}.json`,
        {
          method: 'DELETE'
        }
      );
 
    } catch (error) {
      console.log(error);
    }
 
  };


  return (
    <li>
      <h2>{props.title}</h2>
      <p>{props.openingText}</p>
      <h3>{props.releaseDate}</h3>
      <p>{props.slug}</p>
      <form onSubmit={deleteHandler}>
      <button>Supprimer le Projet</button>
    </form>
    </li>
  );
};

export default ProjectSingle;

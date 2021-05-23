import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const AddTip = () => {
   const [name, setName] = useState("");
   const [slug, setSlug] = useState("");
   const { addTip } = useContext(GlobalContext);
   const history = useHistory();

   const onSubmit = (e) => {
      e.preventDefault();
      const newTip = {
         id: uuid(),
         name,
         slug,
      };
      addTip(newTip);
      history.push("/tips");
   };

   const onNameChange = (e) => {
      setName(e.target.value);
   };
   const onSlugChange = (e) => {
      setSlug(e.target.value);
   };

   return (
      <div className="tip-submit container">
         <h1>Ajouter un Tip</h1>
         <form className="admin-form add-form" onSubmit={onSubmit}>
            <div className="form-body">
               <div className="form-item">
                  <label>Nom</label>
                  <input
                     type="text"
                     value={name}
                     onChange={onNameChange}
                     name="name"
                     //placeholder="Enter user"
                     required
                  ></input>
               </div>
               <div className="form-item">
                  <label>Slug</label>
                  <input
                     type="text"
                     value={slug}
                     onChange={onSlugChange}
                     name="name"
                     //placeholder="Enter slug"
                     required
                  ></input>
               </div>
            </div>
            <button className="btn btn-success" type="submit">
               Ajouter
            </button>
            <button className="btn btn-alert">
               <Link to="/tips">Annuler</Link>
            </button>
         </form>
      </div>
   );
};

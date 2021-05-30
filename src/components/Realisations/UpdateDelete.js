import React, { useState } from "react";
import {firebase} from "../Auth/firebase";

const UpdateDelete = ({ item }) => {
   const [update, setUpdate] = useState(false);
   const [authorUpdate, setAuthorUpdate] = useState(null);
   const [textUpdate, setTextUpdate] = useState(null);

   const updateItem = () => {
      // pointer id de l'élement à update
      let quote = firebase.database().ref("quotesDB").child(item.id);

      // make sure there's no undifined
      if (authorUpdate !== null) {
         quote.update({
            author: authorUpdate,
         });
      }
      if (textUpdate !== null) {
         quote.update({
            text: textUpdate,
         });
      }
      // repasse update sur false
      setUpdate(false);
   };

   const deleteItem = () => {
      // pointer id de l'élement à delete
      let quote = firebase.database().ref("realisations").child(item.id);

      quote.remove();
   };

   return (
      <li>
         {update === false && (
            <div className="item-container">
               <p>"{item.text}"</p>
               <h6>{item.author}</h6>

               <div className="buttons-container">
                  <button className="btn btn-success btn-small" onClick={() => setUpdate(!update)}>Mettre à jour</button>
                  {/* <button onClick={deleteItem}>Delete</button> */}
                  <button
                  className="btn btn-alert btn-small"
                     onClick={(e) => {
                        if (
                           window.confirm(
                              "Êtes-vous sûr de vouloir supprimer ce projet ?"
                           )
                        )
                           deleteItem(e);
                     }}
                  >
                     Supprimer
                  </button>
               </div>
            </div>
         )}

         {update && (
            <div className="item-container-update">
               <textarea
                  defaultValue={item.text}
                  onChange={(e) => setTextUpdate(e.target.value)}
               />
               <input
                  type="text"
                  defaultValue={item.author}
                  onChange={(e) => setAuthorUpdate(e.target.value)}
               />
               <button className="btn btn-success" onClick={updateItem}>Validate update</button>
            </div>
         )}
      </li>
   );
};

export default UpdateDelete;

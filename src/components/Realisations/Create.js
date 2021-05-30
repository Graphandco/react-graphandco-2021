import React, { useState } from "react";
import {firebase} from "../Auth/firebase";

const Create = () => {
   const [author, setAuthor] = useState("");
   const [text, setText] = useState("");

   const createQuote = (e) => {
      e.preventDefault()
      const quotesDB = firebase.database().ref("realisations");
      const quote = {
         author,
         text,
      };

      quotesDB.push(quote);

      setAuthor("");
      setText("");
   };

   return (
      <div className="create">
         <h4>Ajouter un projet</h4>
         <form className="admin-form">
            <div className="form-body">
               <div className="form-item">
                  <label>Auteur</label>
                  <input
                     type="text"
                     value={author}
                     onChange={(e) => setAuthor(e.target.value)}
                  />
               </div>
               <div className="form-item">
                  <label>Citation</label>
                  <textarea
                     rows="5"
                     type="text"
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                  />
               </div>
            </div>
            <button className="btn btn-primary" onClick={createQuote}>
               Ajouter
            </button>
         </form>
      </div>
   );
};

export default Create;

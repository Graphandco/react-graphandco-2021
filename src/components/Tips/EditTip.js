import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link, useHistory } from "react-router-dom";

export const EditTip = (props) => {
   const { editTip, tips } = useContext(GlobalContext);
   const [selectedTip, setSelectedTip] = useState({
      id: "",
      name: "",
      slug: "",
   });
   const history = useHistory();
   const currentTipId = props.match.params.id;

   useEffect(() => {
      const tipId = currentTipId;
      const selectedTip = tips.find((tip) => tip.id === tipId);
      setSelectedTip(selectedTip);
   }, [currentTipId, tips]);

   const onNameChange = (e) => {
      setSelectedTip({ ...selectedTip, [e.target.name]: e.target.value });
   };

   const onSlugChange = (e) => {
      setSelectedTip({ ...selectedTip, [e.target.name]: e.target.value });
   };

   const onSubmit = (e) => {
      e.preventDefault();
      editTip(selectedTip);
      history.push("/tips");
   };

   return (
      <form className="admin-form edit-form" onSubmit={onSubmit}>
         <div className="form-body">
            <div className="form-item">
               <label>Nom</label>
               <input
                  type="text"
                  value={selectedTip.name}
                  onChange={onNameChange}
                  name="name"
                  //placeholder="Enter tip"
                  required
               ></input>
            </div>
            <div className="form-item">
               <label>Slug</label>

               <input
                  type="text"
                  value={selectedTip.slug}
                  onChange={onSlugChange}
                  name="slug"
                  //placeholder="Enter slug"
                  required
               ></input>
            </div>
         </div>
         <button className="btn btn-success" type="submit">Editer</button>
         <button className="btn btn-alert">
            <Link to="/tips">
               Annuler
            </Link>
         </button>
      </form>
   );
};

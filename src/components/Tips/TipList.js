import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";

export const TipList = () => {
   const { tips, removeTip } = useContext(GlobalContext);

   return (
      <div className="container">
         {tips.length > 0 ? (
            <>
               {tips.map((tip) => (
                  <div key={tip.id}>
                     <strong>{tip.name}</strong>
                     <br></br>
                     <strong>{tip.slug}</strong>
                     <div className="single-tip-control">
                        <button className="btn btn-success">
                           <Link
                              to={`/edit/${tip.id}`}
                              color="warning"
                              className="btn btn-warning mr-1"
                           >
                              Editer
                           </Link>
                        </button>
                        <button className="btn btn-alert"
                           onClick={() => removeTip(tip.id)}
                        >
                           Supprimer
                        </button>
                     </div>
                  </div>
               ))}
            </>
         ) : (
            <p className="text-center">Aucun tip trouvé !</p>
         )}
         <button className=" btn btn-primary">
            <Link to="/add">Ajouter un Tip</Link>
         </button>
      </div>
   );
};

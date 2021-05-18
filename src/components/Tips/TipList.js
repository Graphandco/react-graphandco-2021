import React, { useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { Link } from "react-router-dom";


export const TipList = () => {

  const { tips, removeTip } = useContext(GlobalContext);

  return (
    <div>
      {tips.length > 0 ? (
        <>
          {tips.map(tip => (
            <div key={tip.id}>
              <strong>{tip.name}</strong><br></br>
              <strong>{tip.slug}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${tip.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <button onClick={() => removeTip(tip.id)} color="danger">Delete</button>
              </div>
            </div>
          ))}
        </>
      ) : (
          <h4 className="text-center">No tips</h4>
        )}
        <button className=" btn btn-primary">
            <Link to="/add">Ajouter un Tip</Link>
        </button>
    </div>
  )
}
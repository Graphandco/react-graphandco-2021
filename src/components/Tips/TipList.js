import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { Link } from "react-router-dom";


export const TipList = () => {

  const { users, removeUser } = useContext(GlobalContext);

  return (
    <div>
      {users.length > 0 ? (
        <>
          {users.map(user => (
            <div key={user.id}>
              <strong>{user.name}</strong>
              <div className="ml-auto">
                <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link>
                <button onClick={() => removeUser(user.id)} color="danger">Delete</button>
              </div>
            </div>
          ))}
        </>
      ) : (
          <h4 className="text-center">No Users</h4>
        )}
        <Link className="btn btn-primary" to="/add">Add Tip</Link>
    </div>
  )
}
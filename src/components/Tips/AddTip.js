import React, { useState, useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const AddTip = () => {
    const [name, setName] = useState('');
    const { addUser } = useContext(GlobalContext);
    const history = useHistory();
  
    const onSubmit = (e) => {
      e.preventDefault();
      const newUser = {
        id: uuid(),
        name
      }
      addUser(newUser);
      history.push("/tips");
    }
  
    const onChange = (e) => {
      setName(e.target.value);
    }
  
    return (
      <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></input>
        <button type="submit">Submit</button>
        <Link to="/tips" >Cancel</Link>
      </form>
    )
}
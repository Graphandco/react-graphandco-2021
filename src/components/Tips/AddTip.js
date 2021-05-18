import React, { useState, useContext } from 'react';
import { GlobalContext } from "../../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const AddTip = () => {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const { addTip } = useContext(GlobalContext);
    const history = useHistory();
  
    const onSubmit = (e) => {
      e.preventDefault();
      const newTip = {
        id: uuid(),
        name,
        slug
      }
      addTip(newTip);
      history.push("/tips");
    }
  
    const onNameChange = (e) => {
      setName(e.target.value);
    }
    const onSlugChange = (e) => {
      setSlug(e.target.value);
    }
  
    return (
      <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" value={name} onChange={onNameChange} name="name" placeholder="Enter user" required></input>
          <input type="text" value={slug} onChange={onSlugChange} name="name" placeholder="Enter slug" required></input>
        <button type="submit">Submit</button>
        <Link to="/tips" >Cancel</Link>
      </form>
    )
}
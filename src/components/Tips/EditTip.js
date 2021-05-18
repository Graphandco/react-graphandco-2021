import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { Link, useHistory } from "react-router-dom";


export const EditTip = (props) => {
    const { editTip, tips } = useContext(GlobalContext);
    const [selectedTip, setSelectedTip] = useState({
      id: '',
      name: '',
      slug: ''
    })
    const history = useHistory();
    const currentTipId = props.match.params.id;
  
    useEffect(() => {
      const tipId = currentTipId;
      const selectedTip = tips.find(tip => tip.id === tipId);
      setSelectedTip(selectedTip);
    }, [currentTipId, tips])
  
    const onNameChange = (e) => {
      setSelectedTip({ ...selectedTip, [e.target.name]: e.target.value })
    }
  
    const onSlugChange = (e) => {
      setSelectedTip({ ...selectedTip, [e.target.name]: e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      editTip(selectedTip);
      history.push("/tips")
    }
  
    return (
      <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" value={selectedTip.name} onChange={onNameChange} name="name" placeholder="Enter tip" required></input>
          <input type="text" value={selectedTip.slug} onChange={onSlugChange} name="slug" placeholder="Enter slug" required></input>
        <button type="submit">Edit Name</button>
        <Link to="/tips" className="btn btn-danger ml-2">Cancel</Link>
      </form>
    )
}
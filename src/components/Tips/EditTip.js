import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { Link, useHistory } from "react-router-dom";


export const EditTip = (props) => {
    const { editUser, users } = useContext(GlobalContext);
    const [selectedUser, setSelectedUser] = useState({
      id: '',
      name: '',
      slug: ''
    })
    const history = useHistory();
    const currentUserId = props.match.params.id;
  
    useEffect(() => {
      const userId = currentUserId;
      const selectedUser = users.find(user => user.id === userId);
      setSelectedUser(selectedUser);
    }, [currentUserId, users])
  
    const onNameChange = (e) => {
      setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
  
    const onSlugChange = (e) => {
      setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      editUser(selectedUser);
      history.push("/tips")
    }
  
    return (
      <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" value={selectedUser.name} onChange={onNameChange} name="name" placeholder="Enter user" required></input>
          <input type="text" value={selectedUser.slug} onChange={onSlugChange} name="slug" placeholder="Enter slug" required></input>
        <button type="submit">Edit Name</button>
        <Link to="/tips" className="btn btn-danger ml-2">Cancel</Link>
      </form>
    )
}
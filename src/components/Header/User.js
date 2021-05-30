import React from 'react';
import { useState } from 'react';
import Gravatar from 'react-gravatar';

import { useAuth } from '../../hooks';

const User = () => {
  const { authUser } = useAuth();
  const { isAuthed } = useAuth();

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="user-login" onClick={toggleHover}>
      {isAuthed ? (
        <Gravatar email={authUser.email} size={30} default="mp" />
      ) : (
        <Gravatar email="blahblah@blah.com" size={30} default="mp" />
      )}
      <div className={`user-infos ${hovered ? 'show' : ''}`}>
        <div className={`user-name ${isAuthed ? 'authed' : 'unauthed'}`}>
          {isAuthed
            ? `Connecté sous ${authUser.email}`
            : "Vous n'êtes pas connecté"}
        </div>
        <div className={`user-connexion ${isAuthed ? 'authed' : 'unauthed'}`}>
          {isAuthed ? 'Se déconnecter' : 'Se connecter'}
        </div>
      </div>
    </div>
  );
};

export default User;

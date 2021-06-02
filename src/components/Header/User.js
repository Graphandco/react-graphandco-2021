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
      {isAuthed ? <Gravatar email={authUser.email} size={30} default="mp" /> : <Gravatar email="blahblah@blah.com" size={30} default="mp" />}
      <div className={`user-infos ${hovered ? 'show' : ''}`}>
        {isAuthed ? (
          <>
            <div className="user-name authed">
              <span>Connecté sous</span> {authUser.email}
            </div>
            <div className="user-connexion authed">Se déconnecter</div>
          </>
        ) : (
          <>
            <div className="user-name unauthed">Vous n'êtes pas connecté</div>
            <div className="user-connexion unauthed">Se connecter</div>
          </>
        )}
      </div>
    </div>
  );
};

export default User;

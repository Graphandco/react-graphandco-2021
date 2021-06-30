import React from 'react';
import { useState } from 'react';
import Gravatar from 'react-gravatar';
import { fb } from '../../services/';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks';

const User = ({ setIsOpen }) => {
  const { authUser } = useAuth();

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const logout = async () => {
    await fb.auth.signOut();
    await setIsOpen(false);
  };

  return (
    <div className="user-login" onClick={toggleHover}>
      {authUser ? <Gravatar email={authUser.email} size={30} default="mp" /> : <Gravatar email="blahblah@blah.com" size={30} default="mp" />}
      <div className={`user-infos ${hovered ? 'show' : ''}`}>
        {authUser ? (
          <>
            <div className="user-name authed">
              <span>Connecté sous</span> {authUser.email}
            </div>
            <div className="user-connexion authed" onClick={logout}>
              Se déconnecter
            </div>
          </>
        ) : (
          <>
            <div className="user-name unauthed">Vous n'êtes pas connecté</div>

            <div className="user-connexion unauthed">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Se connecter
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default User;

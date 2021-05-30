import { useContext, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useAuth } from '../../hooks/';

const Menu = () => {
  const logoutHandler = () => {
    // optional: redirect the user
  };

  const { isAuthed } = useAuth();

  const navLinks = [
    {
      name: 'Accueil',
      link: '/',
    },
    {
      name: 'Réalisations',
      link: '/realisations',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ];

  const navLinksUnauthed = [
    {
      name: "S'identifier",
      link: '/login',
    },
  ];

  const navRef = useRef(null);
  // useEffect(() => {
  //    gsap.from(navRef.current, {
  //       duration: .5,
  //       autoAlpha: 0,
  //       ease: 'none',
  //       y: -30,
  //       delay: 1
  //    })
  // }, [navRef])

  useEffect(() => {
    gsap.from('nav a', {
      duration: 0.5,
      autoAlpha: 0,
      ease: 'none',
      y: -30,
      delay: 1,
      stagger: 0.2,
    });
  }, [navRef]);

  return (
    <>
      <NavLink to="/" className="site-logo">
        Graph and Co
      </NavLink>
      <nav ref={navRef}>
        {navLinks.map((navLink) => (
          <NavLink key={navLink.link} to={navLink.link} exact>
            {navLink.name}
          </NavLink>
        ))}
        {!isAuthed &&
          navLinksUnauthed.map((navLinkUnauthed) => (
            <NavLink key={navLinkUnauthed.link} to={navLinkUnauthed.link} exact>
              {navLinkUnauthed.name}
            </NavLink>
          ))}

        {/* <NavLink to="/" exact>Accueil</NavLink>
                  <NavLink to="/projects">Projets</NavLink>
                  <NavLink to="/tips">Tips</NavLink>
               {!isLoggedIn && (
                     <NavLink to="/auth">Login</NavLink>
               )}
               {isLoggedIn && (
                     <NavLink to="/profile">Profile</NavLink>
               )}
               {isLoggedIn && (
                     <NavLink to="/test-auth">Test</NavLink>
               )} */}
      </nav>
    </>
  );
};

export default Menu;

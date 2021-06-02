import { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { useMediaQuery } from '@material-ui/core';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMailSend, BiPhotoAlbum } from 'react-icons/bi';
//import { useAuth } from '../../hooks/';

const Menu = () => {
  //const { isAuthed } = useAuth();

  // const navLinks = [
  //   {
  //     name: 'Accueil',
  //     link: '/',
  //   },
  //   {
  //     name: 'Réalisations',
  //     link: '/realisations',
  //   },
  //   {
  //     name: 'Contact',
  //     link: '/contact',
  //   },
  // ];

  // const navLinksUnauthed = [
  //   {
  //     name: "S'identifier",
  //     link: '/login',
  //   },
  // ];

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

  // useEffect(() => {
  //   function handleResize() {
  //     console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
  //     window.innerWidth <= 767 ? setResponsive(true) : setResponsive(false);
  //   }
  //   // window.addEventListener('resize', handleResize);
  // }, []);

  const isResponsive = useMediaQuery('(max-width: 768px)');

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
        <NavLink to="/" exact>
          {isResponsive ? <AiOutlineHome /> : 'Accueil'}
        </NavLink>
        <NavLink to="/realisations" exact>
          {isResponsive ? <BiPhotoAlbum /> : 'Réalisation'}
        </NavLink>
        <NavLink to="/contact" exact>
          {isResponsive ? <BiMailSend /> : 'Contact'}
        </NavLink>
        {/* {navLinks.map((navLink) => (
          <NavLink key={navLink.link} to={navLink.link} exact>
            {navLink.name}
          </NavLink>
        ))} */}
        {/* {!isAuthed &&
          navLinksUnauthed.map((navLinkUnauthed) => (
            <NavLink key={navLinkUnauthed.link} to={navLinkUnauthed.link} exact>
              {navLinkUnauthed.name}
            </NavLink>
          ))} */}

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

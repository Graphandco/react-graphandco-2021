import { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { gsap } from 'gsap'

const Menu = () => {
   const authCtx = useContext(AuthContext);

   const isLoggedIn = authCtx.isLoggedIn;

   const logoutHandler = () => {
      authCtx.logout();
      // optional: redirect the user
   };

   const navLinks = [
      {
         name: "Accueil",
         link: "/"
      },
      {
         name: "Projets",
         link: "/projects"
      },
      {
         name: "Tips",
         link: "/tips"
      },
   ]

   const navLinksLogged = [

      {
         name: "Profile",
         link: "/profile"
      },
      {
         name: "Test",
         link: "/test-auth"
      },
   ]

   const navLinksUnlogged = [
      {
         name: "Login",
         link: "/auth"
      }
   ]

   const navRef = useRef(null)
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
      gsap.from("nav a", {
         duration: .5,
         autoAlpha: 0,
         ease: 'none',
         y: -30,
         delay: 1,
         stagger: .2,
      })
   }, [navRef])


   return (
      <>
         <NavLink to="/"  className="site-logo">
            Graph and Co
         </NavLink>
         <nav ref={navRef} className={
               isLoggedIn ? "logged" : "unlogged"
            }>
               {navLinks.map(navLink => (
                  <NavLink key={navLink.link} to={navLink.link} exact>{navLink.name}</NavLink>
               ))}
               {isLoggedIn && (
                  navLinksLogged.map(navLink => (
                     <NavLink key={navLink.link} to={navLink.link} exact>{navLink.name}</NavLink>
                  ))
               )}
               {!isLoggedIn && (
                  navLinksUnlogged.map(navLink => (
                     <NavLink key={navLink.link} to={navLink.link} exact>{navLink.name}</NavLink>
                  ))
               )}
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
               {isLoggedIn && (
                  <span onClick={logoutHandler}>
                     Logout
                  </span>
               )}
         </nav>
      </>
   );
};

export default Menu;

import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToggleDarkMode } from './ToggleDarkMode';
import Menu from './Menu';
import User from './User';
import { gsap } from 'gsap';
import { useMediaQuery } from '@material-ui/core';

import { ReactComponent as Logo } from '../../assets/logo.svg';
// import { ReactComponent as SiteName } from '../../assets/site-title.svg';

const Header = ({ theme, toggleTheme }) => {
  const isResponsive = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef(null);
  const navMenuRef = useRef(null);
  const navLinkRef = useRef(null);

  gsap.config({
    nullTargetWarn: false,
  });

  // let tl = gsap.timeline({ reversed: true });
  // tl.paused(true);
  // tl.to(navMenuRef.current, {
  //   duration: 0.8,
  //   left: 0,
  //   ease: 'Expo.easeOut',
  // });
  useEffect(() => {
    let tl = gsap.timeline();
    if (isResponsive) {
      if (!isOpen) {
        tl.to(
          '.header-menu nav a',
          {
            duration: 0.1,
            opacity: 1,
            left: 450,
            ease: 'Expo.easeOut',
            stagger: 0.1,
          },
          '-=.1',
        );
        tl.to(navMenuRef.current, {
          duration: 0.2,
          left: '100%',
          ease: 'Expo.easeOut',
        });
      } else {
        tl.to(navMenuRef.current, {
          duration: 0.8,
          left: '10%',
          ease: 'Expo.easeOut',
        });
        tl.to(
          '.header-menu nav a',
          {
            duration: 0.3,
            opacity: 1,
            left: 0,
            ease: 'Expo.easeOut',
            stagger: 0.1,
          },
          '-=.6',
        );
      }
    } else {
      tl.to(
        '.header-menu nav a',
        {
          duration: 0.3,
          opacity: 1,
          left: 0,
          ease: 'Expo.easeOut',
          stagger: 0.1,
        },
        '-=.6',
      );
    }
  }, [isOpen, isResponsive]);
  // tl.to(
  //   '.header-menu nav a',
  //   {
  //     duration: 0.3,
  //     opacity: 1,
  //     left: 0,
  //     ease: 'Expo.easeOut',
  //     stagger: 0.2,
  //   },
  //   '-=.5',
  // );
  // tl.to(
  //   '.header-controls',
  //   {
  //     duration: 0.3,
  //     opacity: 1,
  //     y: 20,
  //     ease: 'Back.easeOut',
  //     stagger: 0.2,
  //   },
  //   '-=.3',
  // );

  // const handleOpen = () => {
  //   tl.reversed() ? tl.play() : tl.reverse(0.6);
  // };

  return (
    <>
      <header ref={headerRef} className={`header ${isResponsive ? 'mobile' : ''}`}>
        <div className="header-wrapper container">
          <Link to="/" className="site-logo">
            {/* <img src={logo} alt="Logo" /> */}
            <Logo />
          </Link>
          <div
            ref={navMenuRef}
            className={`header-menu ${isResponsive && isOpen ? 'mobile open' : ''}${isResponsive && !isOpen ? 'mobile close' : ''}${
              !isResponsive ? 'full' : ''
            }`}
          >
            <Menu setIsOpen={setIsOpen} ref={navLinkRef} />
            <div className="header-controls">
              <ToggleDarkMode theme={theme} toggleTheme={toggleTheme} />
              <User setIsOpen={setIsOpen} />
            </div>
          </div>
        </div>
      </header>
      {isResponsive && (
        // <div className={`toggle-btn ${isOpen ? 'opened' : 'closed'}`} onClick={handleOpen}>
        <div className={`toggle-btn ${isOpen ? 'opened' : 'closed'}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      )}
    </>
  );
};
export default Header;

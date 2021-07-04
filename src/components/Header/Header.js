import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToggleDarkMode } from './ToggleDarkMode';
import Menu from './Menu';
import User from './User';
import { gsap } from 'gsap';
import { useMediaQuery } from '@material-ui/core';

const Header = ({ theme, toggleTheme }) => {
  const isResponsive = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

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
            left: 300,
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
      <header className={`header ${isResponsive ? 'mobile' : ''}`}>
        <div className="header-wrapper container">
          <Link to="/" className="site-logo">
            Graph and Co
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

// const [scrolled, setscrolled] = useState(false);
// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     window.addEventListener('scroll', () => setscrolled(window.pageYOffset > 100));
//   }
// }, []);

// const [prevScrollPos, setPrevScrollPos] = useState(0);
// const [visible, setVisible] = useState(true);
// const [top, setTop] = useState(true);

// const handleScroll = debounce(() => {
//   const currentScrollPos = window.pageYOffset;
//   const scrollTop = document.documentElement.scrollTop;

//   setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 1) || currentScrollPos < 1);
//   setTop(scrollTop < 10);
//   setPrevScrollPos(currentScrollPos);
// }, 50);

// useEffect(() => {
//   window.addEventListener('scroll', handleScroll);

//   return () => window.removeEventListener('scroll', handleScroll);
// }, [prevScrollPos, visible, handleScroll, top, setTop]);

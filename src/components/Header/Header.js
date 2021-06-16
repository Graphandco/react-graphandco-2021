import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleDarkMode } from './ToggleDarkMode';
import Menu from './Menu';
import User from './User';
//import { debounce } from '../../helpers';
import { useMediaQuery } from '@material-ui/core';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiMenu2Fill } from 'react-icons/ri';

const Header = ({ theme, toggleTheme }) => {
  const isResponsive = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <header className={`header ${isResponsive ? 'mobile' : ''} ${isOpen ? 'open' : 'close'}`}>
        <div className="header-wrapper container">
          <NavLink to="/" className="site-logo">
            Graph and Co
          </NavLink>
          <Menu setIsOpen={setIsOpen} />
          <ToggleDarkMode theme={theme} toggleTheme={toggleTheme} />
          <User />
        </div>
      </header>
      {isResponsive && (
        <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineCloseCircle /> : <RiMenu2Fill />}
        </div>
      )}
    </>
  );
};
export default Header;

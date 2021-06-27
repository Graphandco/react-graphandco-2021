import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleDarkMode } from './ToggleDarkMode';
import Menu from './Menu';
import User from './User';
//import { debounce } from '../../helpers';
import { useMediaQuery } from '@material-ui/core';

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
      <header className={`header ${isResponsive ? 'mobile' : ''}`}>
        <div className="header-wrapper container">
          <Link to="/" className="site-logo">
            Graph and Co
          </Link>
          <div className={`header-menu ${isOpen ? 'open' : 'close'}`}>
            <Menu setIsOpen={setIsOpen} />
            <div className="header-controls">
              <ToggleDarkMode theme={theme} toggleTheme={toggleTheme} />
              <User />
            </div>
          </div>
        </div>
      </header>
      {isResponsive && (
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

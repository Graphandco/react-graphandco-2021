import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ToggleDarkMode } from './ToggleDarkMode';
import Menu from './Menu';
import User from './User';
import { debounce } from '../../helpers';

const Header = ({ theme, toggleTheme }) => {
  // const [scrolled, setscrolled] = useState(false);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', () => setscrolled(window.pageYOffset > 100));
  //   }
  // }, []);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [top, setTop] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    const scrollTop = document.documentElement.scrollTop;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 1) || currentScrollPos < 1);
    setTop(scrollTop < 10);
    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll, top, setTop]);

  return (
    <>
      <header className={`header ${!visible ? 'scrolled' : ''} ${top ? 'top' : ''}  `} style={{ top: visible ? '0' : '-50px' }}>
        <div className="header-top container">
          <NavLink to="/" className="site-logo">
            Graph and Co
          </NavLink>
          <div className="controls">
            <ToggleDarkMode theme={theme} toggleTheme={toggleTheme} />
            <User />
          </div>
        </div>
        <Menu />
      </header>
    </>
  );
};
export default Header;

import React, { useEffect, useState } from 'react';
import { ToggleDarkMode } from './ToggleDarkMode';
import Menu from './Menu';
import User from './User';

const Header = ({ theme, toggleTheme }) => {
  const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setscrolled(window.pageYOffset > 100),
      );
    }
  }, []);
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper container">
        <Menu />
        <div className="controls">
          <ToggleDarkMode theme={theme} toggleTheme={toggleTheme} />
          <User />
        </div>
      </div>
    </header>
  );
};
export default Header;

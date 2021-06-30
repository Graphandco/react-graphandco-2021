import React, { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

const Menu = forwardRef(({ setIsOpen }, ref) => {
  const navLinks = [
    {
      name: 'Accueil',
      url: '/',
    },
    {
      name: 'Prestations',
      url: '/prestations',
    },
    {
      name: 'Réalisations',
      url: '/realisations',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ];

  return (
    <>
      <nav>
        {navLinks.map((link, index) => (
          <NavLink ref={ref} key={index} to={link.url} onClick={() => setIsOpen(false)} exact>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </>
  );
});

export default Menu;

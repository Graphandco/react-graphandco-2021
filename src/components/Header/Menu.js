import React, { forwardRef } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

  const [navCurrent, setNavCurrent] = useState(0);
  const pointerPosition = `calc(100% / ${navLinks.length} * ${navCurrent})`;

  return (
    <>
      <Nav columns={navLinks.length}>
        <Pointer linksLength={navLinks.length} position={pointerPosition} />
        {navLinks.map((link, index) => (
          <NavLink
            ref={ref}
            key={index}
            to={link.url}
            onMouseEnter={() => setNavCurrent(index)}
            //onMouseLeave={() => setNavCurrent(0)}
            onClick={() => setIsOpen(false)}
            exact
            // isActive={(match) => {
            //   if (!match) {
            //     setNavCurrent(index);
            //   }
            // }}
          >
            {link.name}
          </NavLink>
        ))}
      </Nav>
    </>
  );
});

const Nav = styled.nav`
  position: relative;
  margin-right: 2rem;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  &:hover span {
    opacity: 1;
  }
`;

const Pointer = styled.span`
  position: absolute;
  bottom: 5px;
  left: calc(${(props) => props.position} + 15px);
  width: calc(100% / ${(props) => props.linksLength} - 30px);
  height: 3px;
  background: var(--secondary);
  border-radius: 50px;
  opacity: 0;
  transition: left 0.5s ease-in-out, opacity 0.2s;
  @media (max-width: 767px) {
    display: none;
  }
`;
export default Menu;

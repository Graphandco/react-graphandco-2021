import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = ({ title, link, outside }) => {
  return (
    <Btn>
      {link ? (
        outside ? (
          <a href={link} target="blank">
            <span>{title}</span>
          </a>
        ) : (
          <NavLink to={link}>
            <span>{title}</span>
          </NavLink>
        )
      ) : (
        <span>{title}</span>
      )}
    </Btn>
  );
};

const Btn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  letter-spacing: 0.05rem;

  &:focus {
    outline: 2px dotted #55d7dc;
  }

  span {
    display: block;
    padding: ${(props) => (props.small ? '0.5em 1.5em' : '1em 3em')};
    color: #58afd1;
  }
  &:hover span {
    color: var(--contrast);
  }
`;

export default Button;

import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = ({ title, link, outside, small, onClick, disabled, mt, mr, mb, ml }) => {
  return (
    <Btn small={small} onClick={onClick} mt={mt} mr={mr} mb={mb} ml={ml} disabled={disabled}>
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
  margin-top: ${(props) => props.mt + 'rem'};
  margin-right: ${(props) => props.mr + 'rem'};
  margin-bottom: ${(props) => props.mb + 'rem'};
  margin-left: ${(props) => props.ml + 'rem'};

  &:focus {
    outline: 2px solid var(--secondary-400);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  span {
    display: block;
    padding: ${(props) => (props.small ? '0.5em 1.5em' : '1em 3em')};
    color: var(--contrast);
  }
  &:hover span {
    color: var(--secondary-400);
  }
`;

export default Button;

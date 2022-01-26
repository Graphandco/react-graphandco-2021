import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = ({ title, link, outside, small, onClick, center, disabled, mt, mr, mb, ml }) => {
  return (
    <Btn small={small} onClick={onClick} center={center} mt={mt} mr={mr} mb={mb} ml={ml} disabled={disabled}>
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
  position: relative;
  display: block;
  //background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  margin-left: ${(props) => props.center && 'auto'};
  margin-right: ${(props) => props.center && 'auto'};
  margin-top: ${(props) => props.mt && props.mt + 'rem'};
  margin-right: ${(props) => props.mr && props.mr + 'rem'};
  margin-bottom: ${(props) => props.mb && props.mb + 'rem'};
  margin-left: ${(props) => props.ml && props.ml + 'rem'};
  font-family: var(--main-font);

  /* &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border: 1px solid var(--contrast);
    opacity: 0;
    transition: 0.3s;
  } */

  &:focus,
  &:hover {
    background-color: var(--contrast);
    /* &:before {
      opacity: 1;
    } */
    span {
      color: var(--bloc-1);
    }
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  span {
    display: block;
    padding: ${(props) => (props.small ? '0.5em 1.5em' : '.6em 2em')};
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
    @media (max-width: 767px) {
      padding: ${(props) => (props.small ? '0.3em 1em' : '.4em 1.5em')};
    }
  }
  /* &:hover span {
    color: var(--secondary-400);
  } */
`;

export default Button;

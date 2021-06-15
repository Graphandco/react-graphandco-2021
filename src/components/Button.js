import React from 'react';
import styled from 'styled-components';

const Button = ({ title }) => {
  return (
    <Btn>
      <span>{title}</span>
    </Btn>
  );
};

const Btn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1.5;
  padding: 1em 3em;
  letter-spacing: 0.05rem;

  &:focus {
    outline: 2px dotted #55d7dc;
  }
`;

export default Button;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: background-color .5s linear;
  }
  p {
    line-height: 1.4rem;
  }
  .btn-primary {
    background-color: ${({ theme }) => theme.primary};
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }
  a {
    color: ${({ theme }) => theme.body};
    text-decoration: none;
  }
`;

export const lightTheme = {
  body: '#fff',
  text: '#4b4b4c',
  primary: '#404040',
};

export const darkTheme = {
  body: '#121212',
  text: '#fff',
  primary: '#bb86fc',
};
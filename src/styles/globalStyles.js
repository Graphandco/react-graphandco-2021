import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
  }
   body {
      --primary-800: ${({ theme }) => theme.primary800};
      --primary-700: ${({ theme }) => theme.primary700};
      --primary-600: ${({ theme }) => theme.primary600};
      --primary-500: ${({ theme }) => theme.primary500};
      --primary-400: ${({ theme }) => theme.primary400};
      --primary-300: ${({ theme }) => theme.primary300};
      --primary: ${({ theme }) => theme.primary};
      --secondary-400: ${({ theme }) => theme.secondary400};
      --bg-color: ${({ theme }) => theme.bgColor};
      --text-color: ${({ theme }) => theme.text};
      --hero-bg: ${({ theme }) => theme.heroBG};
      --main-font: 'MostraNuova', sans-serif;
      --title-font: 'MostraNuova2', sans-serif;
      margin: 0;
      font-family: var(--main-font);
      font-size: 19px;
      background-color: var(--primary-400);
      color: var(--text-color);
      transition: background-color .5s linear;
   }
   h1, h2, h3, h4, h5 {
      font-family: var(--title-font);
      line-height: 1;
   }
   h2 {
      font-size: calc(2rem + 1vw);
      text-transform: uppercase;
   }
   img {
      max-width: 100%;
   }
   .main-wrapper {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
   }
   main {
      background-color: var(--primary-300);
      flex-grow: 1;
   }
   body:not(#home) main {
      padding-top: 70px;
   }
   p {
      line-height: 1.4rem;
   }
   .btn {
      padding: 0.8rem 2rem;
      background-size: 150%;
      background-position: 0 0;
      -webkit-appearance: none !important;
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 3px;
      transition: all .2s linear;
   }
   .btn, .btn a {
      font-size: 1.1rem;
      color: white;
      font-weight: 400;
      margin: 0;
   }
   .btn a {
      padding: 0;
   }
   .btn:hover, .btn:focus {
      background-position: 100% 0;
   }
   .btn-small {
      padding: .3rem 1rem;
      font-size: .9rem;
   }
   .btn-primary {
      background-image: linear-gradient(to left, #9e752b, #ccb283);
   }
   .btn-success {
      background-image: linear-gradient(to left, #52bd00, #2f6d00);
   }
   .btn-alert {
      background-image: linear-gradient(to left, #ff0000, #8c0000);
   }
   a {
      color: var(--text-color);
      font-weight: bold;
      text-decoration: none;
      padding: 0;
   }
   `;

export const lightTheme = {
  primary800: 'hsl(0, 0%, 70%, 1)',
  primary700: 'hsl(0, 0%, 75%, 1)',
  primary600: 'hsl(0, 0%, 80%, 1)',
  primary500: 'hsl(0, 0%, 85%, 1)',
  primary400: 'hsl(0, 0%, 90%, 1)',
  primary300: 'hsl(0, 0%, 95%, 1)',
  secondary400: 'hsl(39, 42%, 45%, 1)',
  bgColor: '#e8e8e8',
  text: '#4b4b4c',
  heroBG: '#fcd8bd',
};

export const darkTheme = {
  primary800: 'hsl(240, 8%, 0%, 1)',
  primary700: 'hsl(240, 8%, 0%, 1)',
  primary600: 'hsl(240, 8%, 5%, 1)',
  primary500: 'hsl(240, 8%, 10%, 1)',
  primary400: 'hsl(240, 8%, 15%, 1)',
  primary300: 'hsl(240, 8%, 20%, 1)',
  secondary400: 'hsl(39, 42%, 60%, 1)',
  bgColor: 'hsl(240, 8%, 14%, 1)',
  text: '#cecece',
  heroBG: '#333958',
};

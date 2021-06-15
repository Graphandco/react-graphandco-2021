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
      --contrast: ${({ theme }) => theme.contrast};
      --secondary-400: ${({ theme }) => theme.secondary400};
      --secondary-500: ${({ theme }) => theme.secondary500};
      --secondary-600: ${({ theme }) => theme.secondary600};
      --secondary-700: ${({ theme }) => theme.secondary700};
      --secondary-800: ${({ theme }) => theme.secondary800};
      --bg-color: ${({ theme }) => theme.bgColor};
      --text-color: ${({ theme }) => theme.text};
      --hero-bg: ${({ theme }) => theme.heroBG};
      --bg1: ${({ theme }) => theme.bg1};
      --bg2: ${({ theme }) => theme.bg2};
      --main-font: 'MostraNuova', sans-serif;
      --title-font: 'MostraNuova2', sans-serif;
      margin: 0;
      font-family: var(--main-font);
      font-size: 19px;
      background-color: var(--primary-400);
      color: var(--text-color);
      transition: background-color .5s linear;
   }
  
   `;

export const lightTheme = {
  primary800: 'hsl(0, 0%, 70%, 1)',
  primary700: 'hsl(0, 0%, 75%, 1)',
  primary600: 'hsl(0, 0%, 80%, 1)',
  primary500: 'hsl(0, 0%, 85%, 1)',
  primary400: 'hsl(0, 0%, 90%, 1)',
  primary300: 'hsl(0, 0%, 95%, 1)',
  secondary400: 'hsl(222, 60%, 50%, 1);',
  secondary500: 'hsl(222, 60%, 60%, 1);',
  secondary600: 'hsl(222, 60%, 70%, 1);',
  secondary700: 'hsl(222, 60%, 80%, 1);',
  secondary800: 'hsl(222, 60%, 90%, 1);',
  contrast: '#000',
  bgColor: '#e8e8e8',
  text: '#4b4b4c',
  heroBG: '#fcd8bd',
  bg1: '#c6e8ff ',
  bg2: '#e6e6e6',
};

export const darkTheme = {
  primary800: 'hsl(240, 8%, 0%, 1)',
  primary700: 'hsl(240, 8%, 0%, 1)',
  primary600: 'hsl(240, 8%, 5%, 1)',
  primary500: 'hsl(240, 8%, 10%, 1)',
  primary400: 'hsl(240, 8%, 15%, 1)',
  primary300: 'hsl(240, 8%, 20%, 1)',
  secondary400: 'hsl(222, 60%, 70%, 1);',
  secondary500: 'hsl(222, 60%, 60%, 1);',
  secondary600: 'hsl(222, 60%, 50%, 1);',
  secondary700: 'hsl(222, 60%, 40%, 1);',
  secondary800: 'hsl(222, 60%, 30%, 1);',
  contrast: '#FFF',
  bgColor: 'hsl(240, 8%, 14%, 1)',
  text: '#cecece',
  heroBG: '#333958',
  bg1: '#092436 ',
  bg2: '#141515 ',
};

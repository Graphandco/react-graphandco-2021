import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
  }
   body {
      --primary: hsl(209, 80%, 60%, 1);
      --bloc-1: ${({ theme }) => theme.bloc1};
      --bloc-2: ${({ theme }) => theme.bloc2};
      --bloc-3: ${({ theme }) => theme.bloc3};
      --bloc-4: ${({ theme }) => theme.bloc4};
      --primary: ${({ theme }) => theme.primary};
      --contrast: ${({ theme }) => theme.contrast};
      --text-color: ${({ theme }) => theme.text};
      --bg1: ${({ theme }) => theme.bg1};
      --bg2: ${({ theme }) => theme.bg2};
      --main-font: 'MostraNuova', sans-serif;
      --title-font: 'MostraNuova2', sans-serif;
      margin: 0;
      font-family: var(--main-font);
      font-size: 19px;
      color: var(--text-color);
      transition: background-color .5s linear;
   }
  
   `;

export const lightTheme = {
  bloc1: 'hsl(209, 20%, 92%, 1)',
  bloc2: 'hsl(209, 20%, 94%, 1)',
  bloc3: 'hsl(209, 20%, 96%, 1)',
  bloc4: 'hsl(209, 20%, 98%, 1)',
  contrast: '#000',
  text: '#4b4b4c',
  bg1: 'hsl(210, 100%, 87%, 1)',
  bg2: '#e6e6e6',
};

export const darkTheme = {
  bloc1: 'hsl(209, 80%, 16%, 1)',
  bloc2: 'hsl(209, 80%, 14%, 1)',
  bloc3: 'hsl(209, 80%, 12%, 1)',
  bloc4: 'hsl(209, 80%, 10%, 1)',
  contrast: '#FFF',
  text: '#cecece',
  bg1: '#092436 ',
  bg2: '#171f2a ',
};

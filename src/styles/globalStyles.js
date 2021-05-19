import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
  }
body {
    --primary: ${({ theme }) => theme.primary};
    --bg-color: ${({ theme }) => theme.bgColor};
    --text-color: ${({ theme }) => theme.text};
    --main-font: 'MostraNuova', sans-serif;
    --title-font: 'MostraNuova2', sans-serif;
    margin: 0;
    font-family: var(--main-font);
    font-size: 19px;
    background: var(--bg-color);
    color: var(--text-color);
    transition: background-color .5s linear;
  }
  h1, h2, h3, h4, h5 {
    font-family: var(--title-font);
  }

  .main-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  p {
    line-height: 1.4rem;
  }
  .btn-primary {
    background-color: var(--primary);
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    border: none;
    transition: all .5s linear;
  }
  a {
    color: var(--text-color);
    font-weight: bold;
    text-decoration: none;
  }
`;

export const lightTheme = {
   bgColor: "#e8e8e8",
   text: "#4b4b4c",
   primary: "#404040",
};

export const darkTheme = {
   bgColor: "#212127",
   text: "#cecece",
   primary: "#929292",
};

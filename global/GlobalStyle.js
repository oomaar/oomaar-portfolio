import styled, { createGlobalStyle } from "styled-components";

// Navbar Height

// View Ports

// Colors Constants
const primaryHue = 250;
const saturation = `66%`;
const light = `75%`;
const secondaryHue = 219;

// Theme
export const lightTheme = {
  colors: {
    firstColor: `hsl(${primaryHue}, ${saturation}, ${light})`,
    firstColorAlt: `hsl(${primaryHue}, ${saturation}, 71%)`,
    titleColor: `hsl(${secondaryHue}, 15%, 95%)`,
    textColor: `hsl(${secondaryHue}, 8%, 75%)`,
    textColorLight: `hsl(${secondaryHue}, 4%, 55%)`,
    bodyColor: `hsl(${secondaryHue}, 48%, 8%)`,
    containerColor: `hsl(${secondaryHue}, 32%, 12%)`,
  },
};
export const darkTheme = {};
export const theme = {
  font: {
    bodyFont: `'Karla', sans-serif`,
    titleFont: `'Lato', sans-serif`,
    bigFont: `1.75rem`,
    h1Font: `1.5rem`,
    h2Font: `1.25rem`,
    h3Font: `1rem`,
    normalFont: `0.938rem`,
    smallFont: `0.813`,
    smallerFont: `0.75rem`,
    tinyFont: `0.625rem`,
  },
  weight: {
    medium: `400`,
    bold: `700`,
  },
  zIndex: {
    zToolTip: 10,
    zFixed: 100,
    zModal: 1000,
  },
};

// Reusable Classes

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: ${({ theme }) => theme.font.bodyFont};
    font-size: ${({ theme }) => theme.font.normalFont};
  }

  button {
    font-family: ${({ theme }) => theme.font.bodyFont};
    font-size: ${({ theme }) => theme.font.normalFont};
    cursor: pointer;
    border: 0;
    outline: 0;
  }

  input,
  textarea {
    font-family: ${({ theme }) => theme.font.bodyFont};
    font-size: ${({ theme }) => theme.font.normalFont};
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.font.titleFont};
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    height: auto;
    max-width: 100%;
  }
  /* Scroll Bar */
`;

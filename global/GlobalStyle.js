import styled, { createGlobalStyle } from "styled-components";

// Navbar Height
export const navbarHeight = `3.5rem`;
// View Ports
export const mobileScreen = `320px`;
export const tabletScreen = `576px`;

// Colors Constants
export const primaryHue = 250;
export const saturation = `66%`;
export const light = `75%`;
export const secondaryHue = 219;

// Theme
export const lightTheme = {
  colors: {
    firstColor: `hsl(${primaryHue}, ${saturation}, ${light})`,
    firstColorAlt: `hsl(${primaryHue}, ${saturation}, 71%)`,
    titleColor: `hsl(${secondaryHue}, 15%, 15%)`,
    textColor: `hsl(${secondaryHue}, 8%, 35%)`,
    textColorLight: `hsl(${secondaryHue}, 4%, 55%)`,
    bodyColor: `hsl(${secondaryHue}, 100%, 99%)`,
    containerColor: `hsl(${secondaryHue}, 100%, 100%)`,
    navColor: `hsla(${secondaryHue}, 32%, 90%, 0.8)`,
    navShadowColor: `0 2px 4px hsla(0, 0%, 1%, 0.1)`,
    sectionSubtitleColor: `hsl(${secondaryHue}, 8%, 35%)`,
    heroSocialShadow: `0 2px 8px hsla(${secondaryHue}, "48%", "8%", 0.1)`,
    heroSocialAfter: `hsl(${secondaryHue}, 15%, 15%)`,
    linksAndButtonsColor: `hsl(${secondaryHue}, 15%, 15%)`,
    containerShadow: `0 2px 16px hsla(${secondaryHue}, 48%, 8%, 0.1)`,
    iconColor: `hsl(${secondaryHue}, 15%, 15%)`,
    scrollBarColor: `hsl(${secondaryHue}, 8%, 66%)`,
    scrollBarThumb: `hsl(${secondaryHue}, 8%, 54%)`,
    scrollBarThumbHover: `hsl(${secondaryHue}, 8%, 44%)`,
  },
};

export const darkTheme = {
  colors: {
    firstColor: `hsl(${primaryHue}, ${saturation}, ${light})`,
    firstColorAlt: `hsl(${primaryHue}, ${saturation}, 71%)`,
    titleColor: `hsl(${secondaryHue}, 15%, 95%)`,
    textColor: `hsl(${secondaryHue}, 8%, 75%)`,
    textColorLight: `hsl(${secondaryHue}, 4%, 55%)`,
    bodyColor: `hsl(${secondaryHue}, 48%, 8%)`,
    containerColor: `hsl(${secondaryHue}, 32%, 12%)`,
    navColor: `hsla(${secondaryHue}, 32%, 16%, 0.8)`,
    navShadowColor: `0 4px 4px hsla(0, 0%, 4%, 0.3)`,
    sectionSubtitleColor: `hsl(${secondaryHue}, 4%, 55%)`,
    heroSocialShadow: ``,
    heroSocialAfter: `hsl(${primaryHue}, ${saturation}, ${light})`,
    linksAndButtonsColor: `#fff`,
    containerShadow: ``,
    iconColor: `hsl(${primaryHue}, ${saturation}, ${light})`,
    scrollBarColor: `hsl(${secondaryHue}, 8%, 38%)`,
    scrollBarThumb: `hsl(${secondaryHue}, 8%, 26%)`,
    scrollBarThumbHover: `hsl(${secondaryHue}, 8%, 20%)`,
  },
};

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
export const Container = styled.div`
  max-width: 968px;
  margin: 0 1rem;
`;

export const Main = styled.main`
  overflow: hidden;
  padding-bottom: calc(${navbarHeight} + 4rem);
`;

export const Section = styled.section`
  padding: 4.5rem 0 1rem;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.h2Font};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.firstColor};
`;

export const SectionSubTitle = styled.span`
  text-align: center;
  display: block;
  font-size: ${({ theme }) => theme.font.smallerFont};
  color: ${({ theme }) => theme.colors.sectionSubtitleColor};
`;

// Buttons
export const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme, ghost, link }) =>
    ghost || link ? "transparent" : theme.colors.firstColor};
  border: ${({ theme, ghost }) =>
    ghost ? `2px solid ${theme.colors.firstColor}` : `2px solid transparent`};
  color: ${({ theme, ghost, link }) =>
    ghost || link
      ? theme.colors.titleColor
      : theme.colors.linksAndButtonsColor};
  padding: 0.75rem 1rem;
  border-radius: ${({ link }) => (link ? "0rem" : "0.5rem")};
  font-weight: ${({ theme, link }) =>
    link ? theme.weight.bold : theme.weight.medium};
  transition: all 0.4s ease-in;
  cursor: pointer;

  :hover {
    background-color: ${({ theme, link }) =>
      link ? "transparent" : theme.colors.firstColorAlt};
    color: ${({ theme, link }) =>
      link ? theme.colors.firstColor : theme.colors.linksAndButtonsColor};
    transform: ${({ link }) => link && "scale(1.1)"};
  }
`;

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
    transition: all 0.4s ease-in;
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
  ::-webkit-scrollbar {
    width: 0.6rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.scrollBarColor};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollBarThumb};
    border-radius: 0.5rem;

    :hover {
    background-color: ${({ theme }) => theme.colors.scrollBarThumbHover};
    }
  }

  /* Text Highlight */
  ::selection {
    background-color: ${({ theme }) => theme.colors.firstColor};
    color: #000;
  }
`;

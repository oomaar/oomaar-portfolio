import styled, { createGlobalStyle } from "styled-components";

// Navbar Height
export const navbarHeight = `6.25rem`;

// View Ports
export const xlScreen = `1024px`;
export const lgScreen = `768px`;
export const mdScreen = `425px`;
export const smScreen = `375px`;
export const xsScreen = `320px`;

// Theme
export const theme = {
  lightColors: {
    primaryColor: `hsl(111, 56%, 56%)`,
    titleColor: `hsl(0, 0%, 0%)`,
    textColor: `hsl(222, 34%, 60%)`,
    borderWhite: `hsl(0, 0%, 15%)`,
    borderBlack: `hsl(0, 0%, 91%)`,
    iconColor: `hsl(212, 4%, 51%)`,
    menuColor: `hsl(295, 100%, 5%)`,
    lightTextColor: `hsl(0, 0%, 100%)`,
    bodyColor: "hsl(0, 0%, 95%)",
  },
  typo: {
    headingFont: `5.725rem`,
    subHeadingFont: `2.7rem`,
    largeTitleFont: `2rem`,
    smallTitleFont: `1.525rem`,
    menuLinkFont: `1.40625rem`,
    logoFont: `1.875rem`,
    iconSmallFont: `1.199375rem`,
    iconLargeFont: `6rem`,
    textFont: `1rem`,
    buttonFont: `0.9rem`,
  },
  typoFamily: {
    bodyFont: `'Karla', sans-serif`,
    logoFont: `'Lato', sans-serif`,
  },
  zIndex: {
    zModal: "1000",
    zMenu: "500",
    zNav: "100",
  },
};

// Reusable Classes
export const Section = styled.section`
  padding: 2rem 0 4rem;
  height: 100vh;
  margin: 4.5rem 0;

  @media screen and (min-width: ${lgScreen}) {
    padding: 6rem 0 2rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.typo.largeTitleFont};
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: ${({ theme }) => theme.typo.smallTitleFont};
  }
`;

export const Container = styled.div`
  max-width: 768px;
  margin: 0 1.5rem 0 1.5rem;

  @media screen and (max-width: ${xsScreen}) {
    margin: 0 1rem 0 1rem;
  }

  @media screen and (min-width: ${lgScreen}) {
    margin: 0 auto 0 auto;
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
    font-family: ${({ theme }) => theme.typoFamily.bodyFont};
  }

  ul {
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }

  img {
    max-width: 100%;
  }

  /* Scroll Bar */
  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: ${({ theme }) => theme.lightColors.borderBlack};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.lightColors.primaryColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.lightColors.textColor};
  }

  ::selection {
    color: #000;
    background-color: ${({ theme }) => theme.lightColors.primaryColor};
  }
`;

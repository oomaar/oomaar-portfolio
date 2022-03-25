import styled from "styled-components";
import {
  largeScreen,
  light,
  navbarHeight,
  primaryHue,
  saturation,
  tabletScreen,
  transition,
} from "../../global/GlobalStyle";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  z-index: ${({ theme }) => theme.zIndex.zFixed};
  box-shadow: ${({ navShadow, theme }) =>
    navShadow && theme.colors.navShadowColor};
  transition: ${transition};
`;

export const Nav = styled.nav`
  height: ${navbarHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: ${largeScreen}) {
    height: calc(${navbarHeight} + 1rem);
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.firstColor};
  font-weight: ${({ theme }) => theme.weight.medium};
  transition: ${transition};

  :hover {
    color: ${({ theme }) => theme.colors.firstColorAlt};
  }
`;

export const NavMenu = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.navColor};
  width: 80%;
  border-radius: 4rem;
  padding: 0.1rem 1.25rem;
  backdrop-filter: blur(10px);
  transition: ${transition};

  @media screen and (min-width: ${tabletScreen}) {
    width: 328px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

export const NavbarLink = styled.a`
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.25rem;
  padding: 0.4rem;
  display: flex;
  border-radius: 5rem;

  &.active {
    background: linear-gradient(
      180deg,
      hsla(${primaryHue}, ${saturation}, ${light}, 1),
      hsla(${primaryHue}, ${saturation}, ${light}, 0.2)
    );
    box-shadow: 0 0 16px hsla(${primaryHue}, ${saturation}, ${light}, 0.4);
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const NavThemeButton = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  transition: ${transition};

  :hover {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;

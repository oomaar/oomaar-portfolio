import styled from "styled-components";
import {
  light,
  navbarHeight,
  primaryHue,
  saturation,
  secondaryHue,
} from "../../global/GlobalStyle";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  z-index: ${({ theme }) => theme.zIndex.zFixed};
`;

export const Nav = styled.nav`
  height: ${navbarHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.firstColor};
  font-weight: ${({ theme }) => theme.weight.medium};
  transition: all 0.4s ease-in-out;

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
  background-color: hsla(${secondaryHue}, 32%, 16%, 0.8);
  width: 90%;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  backdrop-filter: blur(10px);
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`;

export const NavbarItem = styled.li``;

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
  }
`;

export const NavThemeButton = styled.div``;

import styled from "styled-components";
import { mdScreen, xsScreen, navbarHeight } from "../../global/GlobalStyle";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 3rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.zNav};
  color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.lightColors.borderBlack};
  height: ${navbarHeight};
  background-color: rgba(0, 0, 0, 0.8);
  transition: all 0.5s ease-in;

  @media screen and (max-width: ${xsScreen}) {
    padding: 0.5rem 1rem;
  }
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typo.logoFont};

  @media screen and (max-width: ${mdScreen}) {
    font-size: ${({ theme }) => theme.typo.iconSmallFont};
  }
`;

export const NavButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 0.5rem;
  cursor: pointer;
  overflow: hidden;

  @media screen and (max-width: ${mdScreen}) {
    width: 30px;
    height: 30px;
  }
`;

export const NavButtonLine1 = styled.div`
  width: 3px;
  height: 30px;
  background-color: #fff;
  transform: ${({ showMenu }) =>
    showMenu ? "translateY(100px)" : "translateY(0)"};
  transition: all 0.5s ease-in;

  @media screen and (max-width: ${mdScreen}) {
    height: 25px;
  }
`;

export const NavButtonLine2 = styled.div`
  width: 3px;
  height: 30px;
  transform: ${({ showMenu }) =>
    showMenu ? "translateY(100px)" : "translateY(0)"};
  background-color: #fff;
  transition: all 0.7s ease-in;

  @media screen and (max-width: ${mdScreen}) {
    height: 25px;
  }
`;

export const NavButtonLine3 = styled.div`
  width: 3px;
  height: 30px;
  background-color: #fff;
  transform: ${({ showMenu }) =>
    showMenu ? "translateY(100px)" : "translateY(0)"};
  transition: all 0.9s ease-in;

  @media screen and (max-width: ${mdScreen}) {
    height: 25px;
  }
`;

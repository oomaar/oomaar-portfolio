import styled from "styled-components";
import { lgScreen } from "../../global/GlobalStyle";

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: ${({ theme }) => theme.zIndex.zMenu};
  width: 100%;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0)" : "translateX(-2000px)"};
  transition: all 0.5s ease-in;
`;

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 564px;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0)" : "translateX(2000px)"};
  padding: 1rem;
  background-color: ${({ theme }) => theme.lightColors.menuColor};
  z-index: ${({ theme }) => theme.zIndex.zMenu};
  color: ${({ theme }) => theme.lightColors.titleColor};
  transition: all 0.5s ease-in;

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }
`;

export const CrossIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  cursor: pointer;
`;

export const CrossLine1 = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 1rem;
  background-color: #fff;
  transform: rotate(45deg);
`;

export const CrossLine2 = styled.div`
  width: 30px;
  height: 4px;
  border-radius: 1rem;
  background-color: #fff;
  transform: translateX(-30px) rotate(-45deg);
`;

export const SidebarList = styled.ul`
  margin: 0;
  padding-top: 25px;
  list-style: none;
`;

export const SidebarListItem = styled.li`
  position: relative;
  font-weight: bold;
  font-size: 2.5rem;
  margin: 2rem auto;
  width: max-content;
  cursor: pointer;

  span {
    position: relative;
    display: flex;
    flex-direction: column;
    line-height: 1;
    transition: color 0ms 200ms;

    ::before {
      position: absolute;
      content: attr(data-text);
      height: calc(0.5em);
      overflow: hidden;
      left: 0;
      right: 0;
      color: #fff;
      transition: color 200ms ease-in-out, transform 200ms ease-in-out;
      user-select: none;
    }

    ::after {
      position: absolute;
      content: attr(data-text);
      height: calc(0.5em);
      overflow: hidden;
      left: 0;
      right: 0;
      color: #fff;
      transition: color 200ms ease-in-out, transform 200ms ease-in-out;
      user-select: none;
      bottom: 0;
      display: flex;
      align-items: flex-end;
    }
  }

  :hover > span {
    color: transparent;
    user-select: none;
    transition-delay: 0ms;
  }

  :hover > span {
    ::after {
      color: #fff;
      transform: skewX(15deg);
    }

    ::before {
      color: #fff;
      transform: skewX(15deg);
    }
  }

  :hover span {
    ::before {
      color: ${({ theme }) => theme.lightColors.primaryColor};
      transform: skewX(15deg);
    }

    ::after {
      color: ${({ theme }) => theme.lightColors.primaryColor};
      transform: skewX(15deg);
    }
  }

  ::before {
    content: "";
    position: absolute;
    width: 110%;
    left: -5%;
    top: calc(50% - 1px);
    height: 2px;
    transform: scale(0);
    background-color: ${({ theme }) => theme.lightColors.textColor};
    border-radius: 20px;
    z-index: 1;
    transition: transform 200ms ease-in-out;
  }

  :hover::before {
    transform: scale(1);
  }
`;

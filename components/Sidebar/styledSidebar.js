import styled from "styled-components";
import { mdScreen } from "../../global/GlobalStyle";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 564px;
  transform: ${({ showMenu }) =>
    showMenu ? "translateX(0)" : "translateX(1000px)"};
  padding: 1rem;
  background-color: ${({ theme }) => theme.lightColors.menuColor};
  z-index: ${({ theme }) => theme.zIndex.zMenu};
  color: ${({ theme }) => theme.lightColors.titleColor};
  transition: all 1s ease-in;
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

  @media screen and (max-width: ${mdScreen}) {
    width: 30px;
    height: 30px;
  }
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

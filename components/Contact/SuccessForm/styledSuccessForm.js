import styled from "styled-components";
import { transition } from "../../../global/GlobalStyle";

export const FormSuccess = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  inset: 0;
  color: #fff;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({ confirmForm }) => (confirmForm ? "visible" : "hidden")};
  height: ${({ confirmForm }) => (confirmForm ? "100vh" : "0")};
  overflow: hidden;
  opacity: ${({ confirmForm }) => (confirmForm ? "1" : "0")};
  transform: ${({ confirmForm }) =>
    confirmForm ? "translateY(0)" : "translateY(1000vw)"};
  transition: ${transition};
`;

export const FormSuccessContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  display: grid;
  gap: 3rem 0;
`;

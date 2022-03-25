import styled from "styled-components";
import { laptopScreen, tabletScreen } from "../../global/GlobalStyle";

export const ContactContainer = styled.div`
  display: grid;
  gap: 3rem 1.5rem;
  padding-bottom: 3rem;

  @media screen and (min-width: ${laptopScreen}) {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    gap: 3rem;
  }
`;

export const ContactContent = styled.div``;

export const ContactTitle = styled.h3`
  text-align: center;
  font-size: ${({ theme }) => theme.font.h3Font};
  margin-bottom: 1.5rem;
`;

export const ContactInfo = styled.div`
  display: grid;
  gap: 1rem;

  @media screen and (min-width: ${tabletScreen}) {
    grid-template-columns: 300px;
    justify-content: center;
  }
`;

export const ContactCard = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.colors.containerShadow};

  i {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.titleColor};
    margin-bottom: 0.25rem;
  }
`;

export const ContactCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.smallFont};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

export const ContactCardData = styled.span`
  font-size: ${({ theme }) => theme.font.smallFont};
  display: block;
  margin-bottom: 0.75rem;
`;

export const ContactButton = styled.a`
  color: ${({ theme }) => theme.colors.firstColor};
  font-size: ${({ theme }) => theme.font.smallFont};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;

  i {
    font-size: 1.1rem;
    transition: all 0.4s ease-in;
    margin-top: 0.27rem;
    color: ${({ theme }) => theme.colors.firstColor};
  }

  :hover i {
    transform: translateX(0.25rem);
  }
`;

export const ContactForm = styled.form`
  box-shadow: ${({ theme }) => theme.colors.containerShadow};
  padding: 1rem;
  border-radius: 1rem;

  @media screen and (min-width: ${tabletScreen}) {
    width: 360px;
    margin: 0 auto;
  }
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 4rem;

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.textColorLight};
    background: none;
    outline: 0;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: 0.75rem;
    z-index: 1;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: ${({ theme }) => theme.font.smallerFont};
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  z-index: 10;
`;

export const FormInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  border: 2px solid
    ${({ theme, errors }) => (errors ? "#ff6b6b" : theme.colors.textColorLight)};
  background: none;
  outline: 0;
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 0.75rem;
  z-index: 1;
`;

export const FormTextAreaContainer = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 11rem;

  textarea {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid
      ${({ theme, errors }) =>
        errors ? "#ff6b6b" : theme.colors.textColorLight};
    background: none;
    outline: 0;
    padding: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: 0.75rem;
    z-index: 1;
    resize: none;
  }
`;

export const FormButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.firstColor};
  color: ${({ theme }) => theme.colors.linksAndButtonsColor};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: ${({ theme }) => theme.weight.medium};
  transition: all 0.4s ease-in;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.firstColorAlt};
    color: ${({ theme }) => theme.colors.bodyColor};
  }
`;

export const FormError = styled.span`
  position: absolute;
  top: 105%;
  left: 35%;
  color: #ff6b6b;
`;

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
    confirmForm ? "translateX(0)" : "translateX(1000vw)"};
  transition: all 0.4s ease-in;
`;

export const FormSuccessContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
  display: grid;
  gap: 3rem 0;
`;

export const FormSuccessTitle = styled.h3``;

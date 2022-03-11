import styled from "styled-components";
import { lgScreen } from "../../global/GlobalStyle";

export const AboutContainer = styled.div`
  display: flex;
  padding: 0 0.5rem;

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column-reverse;
  }
`;

export const AboutLeftContainer = styled.div`
  position: relative;
  display: flex;

  @media screen and (max-width: ${lgScreen}) {
    justify-content: center;
  }
`;

export const AboutImage = styled.div`
  width: 350px;

  @media screen and (max-width: ${lgScreen}) {
    width: 250px;
    align-self: center;
  }

  img {
    border-radius: 1rem;
  }
`;

export const AboutExperience = styled.div`
  display: flex;
  align-items: flex-end;
  transform: translateY(-50%);

  span {
    font-size: calc(${({ theme }) => theme.typo.headingFont} * 2);
    color: ${({ theme }) => theme.lightColors.primaryColor};
  }

  p {
    font-size: ${({ theme }) => theme.typo.smallTitleFont};
    display: flex;
    flex-direction: column;
  }
`;

export const AboutRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;

  @media screen and (max-width: ${lgScreen}) {
    align-items: center;
    text-align: center;
  }
`;

export const AboutText = styled.p`
  font-size: ${({ theme }) => theme.typo.largeTitleFont};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  margin: 0;

  span {
    color: ${({ theme }) => theme.lightColors.primaryColor};
  }
`;

export const AboutSkillsList = styled.ul`
  @media screen and (max-width: ${lgScreen}) {
    margin: 0;
  }
`;

export const AboutSkillsListItem = styled.li`
  text-transform: uppercase;
  list-style: none;
  margin: 1rem 0;
  font-size: ${({ theme }) => theme.typo.menuLinkFont};
`;

export const AboutButton = styled.a`
  font-size: ${({ theme }) => theme.typo.menuLinkFont};
  background-color: ${({ theme }) => theme.lightColors.primaryColor};
  width: 200px;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.4rem;
  color: #fff;
  transition: all 0.5s ease-in;
  border: 1px solid transparent;

  :hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

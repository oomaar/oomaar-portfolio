import styled from "styled-components";
import { lgScreen, mdScreen, smScreen } from "../../global/GlobalStyle";

export const SkillsContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${lgScreen}) {
    flex-direction: column;
  }
`;

export const SkillsRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
    padding: 0 1rem;
  }

  @media screen and (max-width: ${mdScreen}) {
    padding: 0;
  }
`;

export const SkillsRightTitle = styled.h3`
  font-size: ${({ theme }) => theme.typo.largeTitleFont};
  width: 18.75rem;

  span {
    color: ${({ theme }) => theme.lightColors.primaryColor};
  }

  @media screen and (max-width: ${lgScreen}) {
    text-align: center;
    width: 50%;
    margin: 1.5rem auto 0;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }
`;

export const SkillsRightText = styled.p`
  font-size: ${({ theme }) => theme.typo.textFont};
  color: ${({ theme }) => theme.lightColors.textColor};
  width: 30rem;

  @media screen and (max-width: ${lgScreen}) {
    text-align: center;
    width: 70%;
    margin: 1.5rem auto 0;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }
`;

export const SkillsRightSubTitle = styled.p`
  font-size: ${({ theme }) => theme.typo.smallTitleFont};
  font-weight: 700;
`;

export const SkillsRightList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 0;

  @media screen and (max-width: ${mdScreen}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: ${smScreen}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillsRightListItem = styled.li`
  list-style-type: none;
  text-transform: uppercase;
  font-weight: 700;
`;

export const SkillsLeft = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
    padding: 0 2rem;
  }
`;

export const SkillsLeftImage = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }
`;

export const SkillsLeftIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  &.icon-git {
    right: 5rem;
    top: -3rem;
    background-color: hsl(280, 38%, 31%);

    @media screen and (max-width: ${lgScreen}) {
      top: 0;
    }

    @media screen and (max-width: ${mdScreen}) {
      top: -1rem;
      right: 0;
    }

    @media screen and (max-width: ${smScreen}) {
      right: -1rem;
      top: -3rem;
    }
  }

  &.icon-fav {
    background-color: hsl(43, 100%, 54%);
    left: -2.5rem;
    bottom: 50%;

    img {
      filter: invert(1);
    }

    @media screen and (max-width: ${lgScreen}) {
      left: -1rem;
    }

    @media screen and (max-width: ${smScreen}) {
      left: -2.5rem;
    }
  }

  img {
    width: 2.5rem;
    border-radius: 1rem;
  }

  @media screen and (max-width: ${mdScreen}) {
    width: 65px;
    height: 65px;
  }
`;

import styled from "styled-components";
import {
  laptopScreen,
  largeScreen,
  mobileScreen,
  tabletScreen,
} from "../../global/GlobalStyle";

export const ProjectsNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: 2rem;

  @media screen and (max-width: ${mobileScreen}) {
    column-gap: 0.25rem;
  }
`;

export const ProjectsNavLink = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.titleColor};
  padding: 0.25rem 0.75rem;
  font-weight: ${({ theme }) => theme.weight.medium};
  border-radius: 0.5rem;

  &.active {
    color: ${({ theme }) => theme.colors.linksAndButtonsColor};
    background-color: ${({ theme }) => theme.colors.firstColor};
  }

  @media screen and (max-width: ${mobileScreen}) {
    font-size: ${({ theme }) => theme.font.smallFont};
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  padding-top: 1rem;

  @media screen and (min-width: ${tabletScreen}) {
    justify-content: center;
  }

  @media screen and (min-width: ${laptopScreen}) {
    grid-template-columns: repeat(2, max-content);
  }

  @media screen and (min-width: ${largeScreen}) {
    gap: 3rem;
  }
`;

export const ProjectsCard = styled.div`
  background: ${({ theme }) => theme.colors.containerColor};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.containerShadow};

  img {
    border-radius: 1rem;
    margin-bottom: 0.75rem;

    @media screen and (min-width: ${tabletScreen}) {
      width: 295px;
    }

    @media screen and (min-width: ${laptopScreen}) {
      height: 200px;
    }

    @media screen and (min-width: ${largeScreen}) {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: ${largeScreen}) {
    padding: 1.25rem;
  }
`;

export const ProjectsCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.normalFont};
  font-weight: ${({ theme }) => theme.weight.medium};
  margin-bottom: 0.25rem;

  @media screen and (min-width: ${largeScreen}) {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 968px) {
    font-size: 1rem;
  }
`;

export const ProjectsCardButton = styled.a`
  width: max-content;
  color: ${({ theme }) => theme.colors.firstColor};
  font-size: ${({ theme }) => theme.font.smallFont};
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  margin-top: 1rem;

  i {
    font-size: 1rem;
    transition: all 0.4s ease-in;
  }

  :hover i {
    transform: translateX(0.25rem);
  }

  @media screen and (min-width: ${largeScreen}) {
    margin-top: 1.5rem;
  }
`;

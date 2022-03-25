import styled from "styled-components";
import {
  largeScreen,
  mobileScreen,
  transition,
} from "../../global/GlobalStyle";

export const HeroContainer = styled.section`
  display: grid;
  gap: 1.5rem;
  position: relative;
  row-gap: 4.5rem;
  padding-top: 2rem;
`;

export const HeroData = styled.div`
  text-align: center;
`;

export const HeroName = styled.h1`
  font-size: ${({ theme }) => theme.font.bigFont};

  span {
    font-size: ${({ theme }) => theme.font.smallFont};
    font-weight: ${({ theme }) => theme.weight.medium};
    display: block;
    color: ${({ theme }) => theme.colors.titleColor};
    margin-bottom: 1.25rem;

    @media screen and (min-width: 968px) {
      font-size: 0.875rem;
    }
  }

  @media screen and (min-width: 968px) {
    font-size: 2.5rem;
  }
`;

export const HeroTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.smallFont};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 2.5rem;

  @media screen and (min-width: 968px) {
    font-size: 0.875rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: ${mobileScreen}) {
    flex-direction: column-reverse;
  }
`;

export const HeroImage = styled.div`
  width: 160px;
  justify-self: center;

  @media screen and (max-width: ${mobileScreen}) {
    width: 150px;
  }

  @media screen and (min-width: ${largeScreen}) {
    width: 290px;
  }
`;

export const HeroSocial = styled.div`
  position: absolute;
  bottom: 5rem;
  display: grid;
  row-gap: 0.5rem;

  ::after {
    content: "";
    width: 32px;
    height: 3px;
    border-radius: 10rem;
    background-color: ${({ theme }) => theme.colors.heroSocialAfter};
    transform: rotate(90deg) translate(16px, 3px);

    @media screen and (min-width: ${largeScreen}) {
      transform: rotate(90deg) translate(16px);
    }
  }
`;

export const HeroSocialLink = styled.a`
  width: max-content;
  background-color: ${({ theme }) => theme.colors.containerColor};
  color: ${({ theme }) => theme.colors.iconColor};
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  display: flex;
  transition: ${transition};

  :hover {
    background-color: ${({ theme }) => theme.colors.firstColor};
    color: #fff;
  }

  @media screen and (min-width: ${largeScreen}) {
    padding: 0.4rem;
    font-size: 1.25rem;
  }
`;

export const HomeScroll = styled.a`
  position: absolute;
  right: -1.5rem;
  bottom: 4rem;
  display: grid;
  row-gap: 2.25rem;
  justify-items: center;
  color: ${({ theme }) => theme.colors.iconColor};

  span {
    font-size: ${({ theme }) => theme.font.smallerFont};
    transform: rotate(-90deg);

    @media screen and (min-width: 968px) {
      font-size: 0.813rem;
    }
  }
`;

export const HomeScrollIcon = styled.div`
  font-size: 1.25rem;

  @media screen and (min-width: ${largeScreen}) {
    font-size: 2rem;
  }
`;

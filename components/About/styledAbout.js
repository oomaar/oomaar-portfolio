import styled from "styled-components";
import { largeScreen, tabletScreen } from "../../global/GlobalStyle";

export const AboutContainer = styled.div`
  display: grid;
  gap: 1.5rem 2.5rem;

  img {
    width: 220px;
    border-radius: 1.5rem;
    justify-self: center;

    @media screen and (min-width: ${largeScreen}) {
      width: 350px;
    }
  }

  @media screen and (min-width: ${largeScreen}) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

export const AboutData = styled.div`
  text-align: center;

  @media screen and (min-width: ${largeScreen}) {
    text-align: initial;
  }
`;

export const AboutInfo = styled.div`
  p {
    font-size: ${({ theme }) => theme.font.normalFont};
    margin-bottom: 2rem;

    @media screen and (min-width: ${tabletScreen}) {
      padding: 0 5rem;
    }

    @media screen and (min-width: ${largeScreen}) {
      padding: 0 4rem 0 0;
      margin-bottom: 2.5rem;
    }

    @media screen and (min-width: 968px) {
      font-size: 1rem;
    }

    span {
      font-size: ${({ theme }) => theme.font.h1Font};
      color: ${({ theme }) => theme.colors.firstColor};
    }
  }
`;

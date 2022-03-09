import styled from "styled-components";
import { lgScreen, navbarHeight } from "../../global/GlobalStyle";

export const HeroContainer = styled.section`
  background: url("/hero.jpg");
  height: 100vh;
  padding-top: calc(${navbarHeight} + 1rem);
  color: #fff;
`;

export const HeroFeature = styled.div`
  width: 480px;
  transform: translateY(20%);
  position: relative;
  padding: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.typo.headingFont};
    margin: 0;

    span {
      color: ${({ theme }) => theme.lightColors.primaryColor};
    }

    @media screen and (max-width: ${lgScreen}) {
      font-size: 5rem;
    }
  }

  div {
    background-color: ${({ theme }) => theme.lightColors.primaryColor};
    height: 5px;
    width: 240px;
    margin-top: 4rem;
  }

  @media screen and (max-width: ${lgScreen}) {
    width: 100%;
  }
`;

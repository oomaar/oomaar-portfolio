import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  gap: 1.5rem 2.5rem;

  img {
    width: 220px;
    border-radius: 1.5rem;
    justify-self: center;
  }
`;

export const AboutData = styled.div`
  text-align: center;
`;

export const AboutInfo = styled.div`
  p {
    font-size: ${({ theme }) => theme.font.normalFont};
    margin-bottom: 2rem;

    span {
      font-size: ${({ theme }) => theme.font.h1Font};
      color: ${({ theme }) => theme.colors.firstColor};
    }
  }
`;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff;
  padding: 1rem;
  align-items: center;
`;

export const FooterSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InfoContainer = styled.div`
  p {
    font-size: 1.1rem;

    span {
      font-size: ${({ theme }) => theme.typo.smallTitleFont};
      font-weight: 700;
      color: ${({ theme }) => theme.lightColors.primaryColor};
    }
  }
`;

export const SocialContainer = styled.div``;

export const FooterCopy = styled.h6`
  font-size: ${({ theme }) => theme.typo.buttonFont};

  span {
    color: ${({ theme }) => theme.lightColors.primaryColor};
  }
`;

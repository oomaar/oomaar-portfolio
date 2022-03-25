import styled from "styled-components";

export const FooterTag = styled.footer`
  background-color: ${({ theme }) => theme.colors.firstColor};
`;

export const FooterContainer = styled.div`
  padding: 2rem 0 6rem;
`;

export const FooterTitle = styled.h1`
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
  margin-bottom: 2rem;
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0 1.5rem;
  margin-bottom: 2rem;
  padding: 0;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const FooterSocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0 1.25rem;
  padding: 0;
`;

export const FooterSocialLink = styled.a`
  background-color: ${({ theme }) => theme.colors.bodyColor};
  color: ${({ theme }) => theme.colors.titleColor};
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  display: inline-flex;
`;

export const FooterCopy = styled.span`
  display: block;
  margin-top: 4.5rem;
  color: ${({ theme }) => theme.colors.titleColor};
  text-align: center;
  font-size: ${({ theme }) => theme.font.smallerFont};

  span {
    font-size: ${({ theme }) => theme.font.normalFont};
    color: #000;
  }
`;

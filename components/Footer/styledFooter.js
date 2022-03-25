import styled from "styled-components";
import { secondaryHue } from "../../global/GlobalStyle";

export const FooterTag = styled.footer`
  background-color: ${({ theme }) => theme.colors.firstColor};
`;

export const FooterContainer = styled.div`
  padding: 2rem 0 6rem;
`;

export const FooterTitle = styled.h1`
  color: hsl(${secondaryHue}, 15%, 15%);
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
  color: hsl(${secondaryHue}, 15%, 15%);
`;

export const FooterSocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 0 1.25rem;
  padding: 0;
`;

export const FooterSocialLink = styled.a`
  background-color: hsl(${secondaryHue}, 15%, 15%);
  color: ${({ theme }) => theme.colors.firstColor};
  padding: 0.25rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  display: inline-flex;
`;

export const FooterCopy = styled.span`
  display: block;
  margin-top: 4.5rem;
  color: #000;
  text-align: center;
  font-size: ${({ theme }) => theme.font.smallerFont};

  span {
    font-size: ${({ theme }) => theme.font.normalFont};
    color: #fff;
  }
`;

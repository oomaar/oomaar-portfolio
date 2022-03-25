import { Container } from "../../global/GlobalStyle";
import {
  FooterTag,
  FooterContainer,
  FooterTitle,
  FooterList,
  FooterLink,
  FooterSocialList,
  FooterSocialLink,
  FooterCopy,
} from "./styledFooter";

export const Footer = ({ data }) => {
  const footerLinks = data.links.map((link) => (
    <li key={link.id}>
      <FooterLink href={link.href}>{link.title}</FooterLink>
    </li>
  ));

  const footerSocialLinks = data.social.map((link) => (
    <li key={link.id}>
      <FooterSocialLink href={link.href}>
        <i className={link.icon}></i>
      </FooterSocialLink>
    </li>
  ));

  return (
    <FooterTag>
      <FooterContainer>
        <Container>
          <FooterTitle>{data.info.name}</FooterTitle>
          <FooterList>{footerLinks}</FooterList>
          <FooterSocialList>{footerSocialLinks}</FooterSocialList>
        </Container>
        <FooterCopy>
          &copy; Designed and Developed by <span>Omar Hassan</span>
        </FooterCopy>
      </FooterContainer>
    </FooterTag>
  );
};

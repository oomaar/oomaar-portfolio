import { HeroAnimation } from "..";
import { Container, Section } from "../../global/GlobalStyle";
import {
  HeroContainer,
  HeroName,
  HeroTitle,
  HeroButtons,
  HeroButton,
  HeroImage,
  HeroSocial,
  HeroSocialLink,
  HomeScroll,
  HomeScrollIcon,
  HeroData,
} from "./styledHero";

export const Hero = ({ data }) => {
  const socialLinks = data.socialLinks.map((link) => (
    <HeroSocialLink key={link.id} href={link.href}>
      <i className={link.icon}></i>
    </HeroSocialLink>
  ));

  return (
    <Section id="home">
      <Container>
        <HeroContainer>
          <HeroData>
            <HeroName>
              <span>Hello, I'm</span> {data.name}
            </HeroName>
            <HeroTitle>{data.profession}</HeroTitle>
          </HeroData>
          <HeroButtons>
            <HeroButton download="" href="/pdf/Omar-Hassan-CV-2022.pdf">
              Download CV
            </HeroButton>
            <HeroButton href="#about">About Me</HeroButton>
          </HeroButtons>
          <HeroImage>
            <HeroAnimation />
          </HeroImage>
          <HeroSocial>{socialLinks}</HeroSocial>
          <HomeScroll href="#about">
            <HomeScrollIcon>
              <i className="bx bx-mouse"></i>
            </HomeScrollIcon>
            <span>Scroll Down</span>
          </HomeScroll>
        </HeroContainer>
      </Container>
    </Section>
  );
};

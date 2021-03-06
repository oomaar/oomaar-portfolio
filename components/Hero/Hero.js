import { HeroAnimation } from "..";
import { Button, Container, Section } from "../../global/GlobalStyle";
import {
  HeroContainer,
  HeroName,
  HeroTitle,
  HeroButtons,
  HeroImage,
  HeroSocial,
  HeroSocialLink,
  HomeScroll,
  HomeScrollIcon,
  HeroData,
} from "./styledHero";

export const Hero = ({ data }) => {
  const socialLinks = data.socialLinks.map((link) => (
    <HeroSocialLink key={link.id} href={link.href} target="_blank">
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
            <Button ghost download={true} href="/pdf/Omar-Hassan-CV-2022.pdf">
              Download CV
            </Button>
            <Button href="#about">About Me</Button>
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

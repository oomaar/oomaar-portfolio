import {
  Button,
  Container,
  Section,
  SectionSubTitle,
  SectionTitle,
} from "../../global/GlobalStyle";
import { AboutContainer, AboutData, AboutInfo } from "./styledAbout";

export const About = ({ data }) => {
  return (
    <Section id="about">
      <SectionSubTitle>My Intro</SectionSubTitle>
      <SectionTitle>About Me</SectionTitle>
      <Container>
        <AboutContainer>
          <img src={data.img} alt="Simply Me!" />
          <AboutData>
            <AboutInfo>
              <p>
                {data.info} <span>{data.infoSpan}</span> {data.info2}
              </p>
              <Button href="#contact">Contact Me</Button>
            </AboutInfo>
          </AboutData>
        </AboutContainer>
      </Container>
    </Section>
  );
};

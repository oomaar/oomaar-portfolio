import { Container, Section, SectionTitle } from "../../global/GlobalStyle";
import {
  AboutContainer,
  AboutLeftContainer,
  AboutImage,
  AboutExperience,
  AboutRightContainer,
  AboutText,
  AboutSkillsList,
  AboutSkillsListItem,
  AboutButton,
} from "./styledAbout";

export const About = ({ data }) => {
  const listItems = data.skills.map((skill) => (
    <AboutSkillsListItem key={skill.id}>{skill.skill}</AboutSkillsListItem>
  ));

  return (
    <Section id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContainer>
          <AboutLeftContainer>
            <AboutImage>
              <img src={data.img} alt="Simply Me" />
              <AboutExperience>
                <span>{data.years}</span>
                <p>
                  <strong>Years</strong>
                  <strong>of</strong>
                  <strong>Experience</strong>
                </p>
              </AboutExperience>
            </AboutImage>
          </AboutLeftContainer>
          <AboutRightContainer>
            <AboutText>
              {data.experiencePartA} <span>{data.experiencePartB}</span>{" "}
              {data.experiencePartC}
            </AboutText>
            <AboutSkillsList>{listItems}</AboutSkillsList>
            <AboutButton download={true} href={data.cv}>
              Download CV
            </AboutButton>
          </AboutRightContainer>
        </AboutContainer>
      </Container>
    </Section>
  );
};

import {
  Container,
  Section,
  SectionSubTitle,
  SectionTitle,
} from "../../global/GlobalStyle";
import { ProjectsContainer } from "./styledProjects";

export const Projects = ({ data }) => {
  return (
    <Section id="projects">
      <SectionSubTitle>My Portfolio</SectionSubTitle>
      <SectionTitle>Recent Projects</SectionTitle>
      <Container>
        <ProjectsContainer></ProjectsContainer>
      </Container>
    </Section>
  );
};

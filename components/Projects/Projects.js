import { useState } from "react";
import {
  Container,
  Section,
  SectionSubTitle,
  SectionTitle,
} from "../../global/GlobalStyle";
import {
  ProjectsContainer,
  ProjectsNav,
  ProjectsNavLink,
  ProjectsCard,
  ProjectsCardTitle,
  ProjectsCardButton,
} from "./styledProjects";

export const Projects = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const workProjects = data.work.map((work) => (
    <ProjectsCard>
      <img src={work.src} alt={work.alt} />
      <ProjectsCardTitle>{work.title}</ProjectsCardTitle>
      <ProjectsCardButton href={work.url}>
        Demo <i className="bx bx-right-arrow-alt"></i>
      </ProjectsCardButton>
    </ProjectsCard>
  ));

  const hobbyProjects = data.hobby.map((hobby) => (
    <ProjectsCard>
      <img src={hobby.src} alt={hobby.alt} />
      <ProjectsCardTitle>{hobby.title}</ProjectsCardTitle>
      <ProjectsCardButton href={hobby.url}>
        Demo <i className="bx bx-right-arrow-alt"></i>
      </ProjectsCardButton>
    </ProjectsCard>
  ));

  const clonesProjects = data.clones.map((clones) => (
    <ProjectsCard>
      <img src={clones.src} alt={clones.alt} />
      <ProjectsCardTitle>{clones.title}</ProjectsCardTitle>
      <ProjectsCardButton href={clones.url}>
        Demo <i className="bx bx-right-arrow-alt"></i>
      </ProjectsCardButton>
    </ProjectsCard>
  ));

  return (
    <Section id="projects">
      <SectionSubTitle>My Portfolio</SectionSubTitle>
      <SectionTitle>Recent Projects</SectionTitle>
      <ProjectsNav>
        <ProjectsNavLink onClick={() => setActiveCategory("All")}>
          All
        </ProjectsNavLink>
        <ProjectsNavLink onClick={() => setActiveCategory("Work")}>
          Work
        </ProjectsNavLink>
        <ProjectsNavLink onClick={() => setActiveCategory("Hobby")}>
          Hobby
        </ProjectsNavLink>
        <ProjectsNavLink onClick={() => setActiveCategory("Clones")}>
          Clones
        </ProjectsNavLink>
      </ProjectsNav>
      <Container>
        <ProjectsContainer>
          {activeCategory === "All" ? (
            <>
              {workProjects}
              {hobbyProjects}
              {clonesProjects}
            </>
          ) : activeCategory === "Work" ? (
            <>{workProjects}</>
          ) : activeCategory === "Hobby" ? (
            <>{hobbyProjects}</>
          ) : activeCategory === "Clones" ? (
            <>{clonesProjects}</>
          ) : (
            <></>
          )}
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

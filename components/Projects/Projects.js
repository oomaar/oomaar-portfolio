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
    <ProjectsCard key={work.id}>
      <img src={work.src} alt={work.alt} />
      <ProjectsCardTitle>{work.title}</ProjectsCardTitle>
      <ProjectsCardButton href={work.url} target="_blank">
        Demo <i className="bx bx-right-arrow-alt"></i>
      </ProjectsCardButton>
    </ProjectsCard>
  ));

  const hobbyProjects = data.hobby.map((hobby) => (
    <ProjectsCard key={hobby.id}>
      <img src={hobby.src} alt={hobby.alt} />
      <ProjectsCardTitle>{hobby.title}</ProjectsCardTitle>
      <ProjectsCardButton href={hobby.url}>
        Demo <i className="bx bx-right-arrow-alt"></i>
      </ProjectsCardButton>
    </ProjectsCard>
  ));

  const clonesProjects = data.clones.map((clones) => (
    <ProjectsCard key={clones.id}>
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
        <ProjectsNavLink
          onClick={() => setActiveCategory("All")}
          className={`${activeCategory === "All" ? "active" : ""}`}
        >
          All
        </ProjectsNavLink>
        <ProjectsNavLink
          onClick={() => setActiveCategory("Work")}
          className={`${activeCategory === "Work" ? "active" : ""}`}
        >
          Work
        </ProjectsNavLink>
        <ProjectsNavLink
          onClick={() => setActiveCategory("Hobby")}
          className={`${activeCategory === "Hobby" ? "active" : ""}`}
        >
          Hobby
        </ProjectsNavLink>
        <ProjectsNavLink
          onClick={() => setActiveCategory("Clones")}
          className={`${activeCategory === "Clones" ? "active" : ""}`}
        >
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

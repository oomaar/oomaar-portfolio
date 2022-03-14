import { useState } from "react";
import { Container, Section } from "../../global/GlobalStyle";
import {
  ProjectsContainer,
  CarouselContainer,
  CarouselSlide,
  Arrows,
  Arrow,
} from "./styledProjects";

export const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <ProjectsContainer>
          <CarouselContainer>
            {/* <Arrow onClick={prevSlide}>&#10094;</Arrow> */}
            {/* <Arrow onClick={nextSlide}>&#10095;</Arrow> */}
          </CarouselContainer>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

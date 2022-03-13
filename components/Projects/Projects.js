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
  const carouselImages = [
    {
      id: 1,
      title: "TODO: Projects 1",
    },
    {
      id: 2,
      title: "TODO: Projects 2",
    },
  ];
  const len = carouselImages.length - 2;
  const [activeIndex, setActiveIndex] = useState(1);

  // Arrows
  const prevSlide = () =>
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  const nextSlide = () =>
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);

  return (
    <Section id="projects">
      <Container>
        <ProjectsContainer>
          <CarouselContainer>
            {carouselImages.map((test, index) => (
              <CarouselSlide
                key={index}
                className={`${test.id === activeIndex ? "active" : ""}`}
              >
                <h1>{test.title}</h1>
              </CarouselSlide>
            ))}
            <Arrows>
              <Arrow onClick={prevSlide}>&#10094;</Arrow>
              <Arrow onClick={nextSlide}>&#10095;</Arrow>
            </Arrows>
          </CarouselContainer>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

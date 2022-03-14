import { useState } from "react";
import { Container, Section } from "../../global/GlobalStyle";
import {
  ProjectsContainer,
  CarouselContainer,
  CarouselSlide,
  Arrows,
  Arrow,
  Dots,
} from "./styledProjects";

export const Projects = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testData = data.map((test) => (
    <CarouselSlide
      key={test.id}
      className={`${test.id === activeIndex ? "active" : ""}`}
    >
      <img src={test.img} alt="" />
    </CarouselSlide>
  ));

  const onclick = (active) => setActiveIndex(active);

  const testDots = data.map((dot) => (
    <span
      key={dot.id}
      className={`${activeIndex === dot.id ? "active-dot" : ""}`}
      onClick={(event) => onclick((event.target.value = dot.id))}
    ></span>
  ));

  const len = data.length - 1;

  const prevSlide = () =>
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  const nextSlide = () =>
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);

  return (
    <Section id="projects">
      <Container>
        <ProjectsContainer>
          <Arrows>
            <Arrow onClick={prevSlide}>&#10094;</Arrow>
            <Arrow onClick={nextSlide}>&#10095;</Arrow>
          </Arrows>
          <Dots>{testDots}</Dots>
          <CarouselContainer>{testData}</CarouselContainer>
          <h1 style={{ fontSize: "20rem" }}>
            TODO: Style and Organize Carousel
          </h1>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

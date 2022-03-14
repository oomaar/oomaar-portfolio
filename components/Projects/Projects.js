import { useState } from "react";
import { Container, Section } from "../../global/GlobalStyle";
import {
  ProjectsContainer,
  CarouselContainer,
  CarouselSlide,
  Arrows,
  Arrow,
} from "./styledProjects";

export const Projects = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(
    "🚀 ~ file: Projects.js ~ line 13 ~ Projects ~ activeIndex",
    activeIndex
  );
  const testData = data.map((test) => (
    <CarouselSlide
      key={test.id}
      className={`${test.id === activeIndex ? "active" : ""}`}
    >
      <img src={test.img} alt="" />
    </CarouselSlide>
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
          <CarouselContainer>{testData}</CarouselContainer>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

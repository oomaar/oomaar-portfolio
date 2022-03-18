import { useState } from "react";
import { Container, Section, SectionTitle } from "../../global/GlobalStyle";
import {
  ProjectsContainer,
  CarouselContainer,
  CarouselSlide,
  SlideImage,
  SlideTitle,
  SlideText,
  SlideLink,
  SlideIcon,
  Arrows,
  Arrow,
  Dots,
  SlideTextContainer,
  SlideLinksContainer,
} from "./styledProjects";

export const Projects = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = data.projectsData.map((slide) => (
    <CarouselSlide
      key={slide.id}
      className={`${slide.id === activeIndex ? "active" : ""}`}
    >
      <SlideImage>
        <img src={slide.src} alt={slide.alt} />
      </SlideImage>
      <SlideTextContainer>
        <SlideTitle>{slide.title}</SlideTitle>
        <SlideText>{slide.description}</SlideText>
        <SlideLinksContainer>
          <SlideLink href={slide.url}>Demo</SlideLink>
          <SlideIcon>
            <img src="/social/github-sign.png" alt="" />
          </SlideIcon>
        </SlideLinksContainer>
      </SlideTextContainer>
    </CarouselSlide>
  ));

  const onclick = (active) => setActiveIndex(active);

  const slideDots = data.projectsData.map((dot) => (
    <span
      key={dot.id}
      className={`${activeIndex === dot.id ? "active-dot" : ""}`}
      onClick={(event) => onclick((event.target.value = dot.id))}
    ></span>
  ));

  const len = data.projectsData.length - 1;

  const prevSlide = () =>
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  const nextSlide = () =>
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);

  return (
    <Section id="projects" image={true} url={data.sectionBg}>
      <SectionTitle style={{ color: "#fff" }}>My Projects</SectionTitle>
      <Container>
        <ProjectsContainer>
          <Arrows>
            <Arrow onClick={prevSlide}>&#10094;</Arrow>
            <Arrow onClick={nextSlide}>&#10095;</Arrow>
          </Arrows>
          <Dots>{slideDots}</Dots>
          <CarouselContainer>{slidesData}</CarouselContainer>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

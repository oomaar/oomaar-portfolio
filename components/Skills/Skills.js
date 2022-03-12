import React from "react";
import { Container, Section, SectionTitle } from "../../global/GlobalStyle";
import {
  SkillsContainer,
  SkillsRight,
  SkillsRightTitle,
  SkillsRightText,
  SkillsRightSubTitle,
  SkillsRightList,
  SkillsRightListItem,
  SkillsLeft,
  SkillsLeftImage,
  SkillsLeftIcon,
} from "./styledSkills";

export const Skills = ({ data }) => {
  const ninjaSkills = data.ninja.map((ninja) => (
    <SkillsRightListItem key={ninja.id}>{ninja.skill}</SkillsRightListItem>
  ));

  const goodSkills = data.good.map((good) => (
    <SkillsRightListItem key={good.id}>{good.skill}</SkillsRightListItem>
  ));

  const coolSkills = data.cool.map((cool) => (
    <SkillsRightListItem key={cool.id}>{cool.skill}</SkillsRightListItem>
  ));

  return (
    <Section id="skills" skills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <SkillsContainer>
          <SkillsRight>
            <SkillsRightTitle>
              {data.title} <span>{data.titleSpan}.</span>
            </SkillsRightTitle>
            <SkillsRightText>{data.text}</SkillsRightText>
            <div>
              <SkillsRightSubTitle>Ninja At</SkillsRightSubTitle>
              <SkillsRightList>{ninjaSkills}</SkillsRightList>
            </div>
            <div>
              <SkillsRightSubTitle>Good At</SkillsRightSubTitle>
              <SkillsRightList>{goodSkills}</SkillsRightList>
            </div>
            <div>
              <SkillsRightSubTitle>Cool At</SkillsRightSubTitle>
              <SkillsRightList>{coolSkills}</SkillsRightList>
            </div>
          </SkillsRight>
          <SkillsLeft>
            <SkillsLeftImage>
              <img src="skills.jpg" alt="Dev Image" />
              <SkillsLeftIcon className="icon-git">
                <img src="/social/github-sign.png" alt="Github" />
              </SkillsLeftIcon>
              <SkillsLeftIcon className="icon-fav">
                <img src="/favicon.png" alt="Brackets" />
              </SkillsLeftIcon>
            </SkillsLeftImage>
          </SkillsLeft>
        </SkillsContainer>
      </Container>
    </Section>
  );
};

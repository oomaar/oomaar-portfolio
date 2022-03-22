import React from "react";
import {
  Container,
  Section,
  SectionSubTitle,
  SectionTitle,
} from "../../global/GlobalStyle";
import {
  SkillsContainer,
  SkillsContent,
  SkillsTitle,
  SkillsBox,
  SkillsGroup,
  SkillsData,
  SkillsName,
  SkillsLevel,
} from "./styledSkills";

export const Skills = ({ data }) => {
  const skillsData = data.group1Data.map((data) => (
    <SkillsData key={data.id}>
      <i className="bx bxs-badge-check"></i>
      <div>
        <SkillsName>{data.name}</SkillsName>
        <SkillsLevel>{data.level}</SkillsLevel>
      </div>
    </SkillsData>
  ));

  const skillsData2 = data.group2Data.map((data) => (
    <SkillsData key={data.id}>
      <i className="bx bxs-badge-check"></i>
      <div>
        <SkillsName>{data.name}</SkillsName>
        <SkillsLevel>{data.level}</SkillsLevel>
      </div>
    </SkillsData>
  ));

  const skillsData3 = data.group3Data.map((data) => (
    <SkillsData key={data.id}>
      <i className="bx bxs-badge-check"></i>
      <div>
        <SkillsName>{data.name}</SkillsName>
        <SkillsLevel>{data.level}</SkillsLevel>
      </div>
    </SkillsData>
  ));

  const skillsData4 = data.group4Data.part1.map((data) => (
    <SkillsData key={data.id}>
      <i className="bx bxs-badge-check"></i>
      <div>
        <SkillsName>{data.name}</SkillsName>
        <SkillsLevel>{data.level}</SkillsLevel>
      </div>
    </SkillsData>
  ));

  const skillsData4part2 = data.group4Data.part2.map((data) => (
    <SkillsData key={data.id}>
      <i className="bx bxs-badge-check"></i>
      <div>
        <SkillsName>{data.name}</SkillsName>
        <SkillsLevel>{data.level}</SkillsLevel>
      </div>
    </SkillsData>
  ));

  return (
    <Section id="skills">
      <Container>
        <SectionSubTitle>My Abilities</SectionSubTitle>
        <SectionTitle>My Experience</SectionTitle>
        <SkillsContainer>
          <SkillsContent>
            <SkillsTitle>{data.profession1}</SkillsTitle>

            <SkillsBox>
              <SkillsGroup>{skillsData}</SkillsGroup>
              <SkillsGroup>{skillsData2}</SkillsGroup>
            </SkillsBox>
          </SkillsContent>
          <SkillsContent>
            <SkillsTitle>{data.profession2}</SkillsTitle>

            <SkillsBox>
              <SkillsGroup className="backData">{skillsData3}</SkillsGroup>
            </SkillsBox>
          </SkillsContent>
          <SkillsContent>
            <SkillsTitle>{data.profession3}</SkillsTitle>

            <SkillsBox>
              <SkillsGroup>{skillsData4}</SkillsGroup>
              <SkillsGroup>{skillsData4part2}</SkillsGroup>
            </SkillsBox>
          </SkillsContent>
        </SkillsContainer>
      </Container>
    </Section>
  );
};

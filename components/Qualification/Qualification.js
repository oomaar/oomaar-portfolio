import {
  QualificationContainer,
  QualificationNav,
  QualificationCardsContainer,
  QualificationCard,
  QualificationTitle,
  QualificationSubTitle,
  QualificationDate,
} from "./styledQualification";
import {
  Section,
  Container,
  SectionTitle,
  SectionSubTitle,
  Button,
} from "../../global/GlobalStyle";
import { useState } from "react";

export const Qualification = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Education");

  const educationTab = data.education.map((education) => (
    <QualificationCard key={education.id}>
      <QualificationTitle>{education.title}</QualificationTitle>
      <QualificationSubTitle>{education.subtitle}</QualificationSubTitle>
      <QualificationDate>
        <strong>{education.start}</strong> - <strong>{education.finish}</strong>
      </QualificationDate>
    </QualificationCard>
  ));

  const workTab = data.work.map((work) => (
    <QualificationCard key={work.id}>
      <QualificationTitle>{work.title}</QualificationTitle>
      <QualificationSubTitle>{work.subtitle}</QualificationSubTitle>
      <QualificationDate>
        <strong>{work.start}</strong> - <strong>{work.finish}</strong>
      </QualificationDate>
    </QualificationCard>
  ));

  return (
    <Section id="qualification">
      <Container>
        <SectionSubTitle>My Journey </SectionSubTitle>
        <SectionTitle>My Qualifications</SectionTitle>
        <QualificationContainer>
          <QualificationNav>
            <Button
              link
              onClick={() => setActiveTab("Education")}
              className={`${activeTab === "Education" ? "active" : ""}`}
            >
              Education
            </Button>
            <Button
              link
              onClick={() => setActiveTab("Work")}
              className={`${activeTab === "Work" ? "active" : ""}`}
            >
              Work
            </Button>
          </QualificationNav>
          <QualificationCardsContainer>
            {activeTab === "Education" ? (
              educationTab
            ) : activeTab === "Work" ? (
              workTab
            ) : (
              <></>
            )}
          </QualificationCardsContainer>
        </QualificationContainer>
      </Container>
    </Section>
  );
};

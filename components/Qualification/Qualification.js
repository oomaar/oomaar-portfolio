import {
  QualificationContainer,
  QualificationNav,
  QualificationTab,
  QualificationDetails,
  QualificationTitle,
  QualificationSubTitle,
  QualificationDate,
} from "./styledQualification";
import { Section, Container, SectionTitle } from "../../global/GlobalStyle";
import { useState } from "react";

export const Qualification = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Education");

  const educationTab = data.education.map((education) => (
    <QualificationDetails key={education.id}>
      <QualificationTitle>{education.title}</QualificationTitle>
      <QualificationSubTitle>{education.subtitle}</QualificationSubTitle>
      <QualificationDate>
        <strong>{education.start}</strong> - <strong>{education.finish}</strong>
      </QualificationDate>
    </QualificationDetails>
  ));

  const workTab = data.work.map((work) => (
    <QualificationDetails key={work.id}>
      <QualificationTitle>{work.title}</QualificationTitle>
      <QualificationSubTitle>{work.subtitle}</QualificationSubTitle>
      <QualificationDate>
        <strong>{work.start}</strong> - <strong>{work.finish}</strong>
      </QualificationDate>
    </QualificationDetails>
  ));

  return (
    <Section id="qualification" image={true} url={data.sectionBg}>
      <Container>
        <SectionTitle style={{ color: "#fff" }}>My Qualifications</SectionTitle>
        <QualificationContainer>
          <QualificationNav>
            <p
              className={`${activeTab === "Education" ? "active" : ""}`}
              onClick={() => setActiveTab("Education")}
            >
              Education
            </p>
            <p
              className={`${activeTab === "Work" ? "active" : ""}`}
              onClick={() => setActiveTab("Work")}
            >
              Work
            </p>
          </QualificationNav>
          <QualificationTab>
            {activeTab === "Education"
              ? educationTab
              : activeTab === "Work"
              ? workTab
              : ""}
          </QualificationTab>
        </QualificationContainer>
      </Container>
    </Section>
  );
};

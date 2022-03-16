import React from "react";
import { Container, Section, SectionTitle } from "../../global/GlobalStyle";
import {
  ContactContainer,
  ContactInfo,
  ContactForm,
  FormHeader,
  InfoContainer,
} from "./styledContact";

export const Contact = ({ data }) => {
  return (
    <Section id="contact">
      <Container>
        <SectionTitle>Contact Me</SectionTitle>
        <ContactContainer>
          <ContactInfo>
            <InfoContainer>
              <p>{data.address}</p>
              <p>{data.phone}</p>
              <p>{data.email}</p>
            </InfoContainer>
          </ContactInfo>
          <ContactForm>
            <FormHeader>
              {data.text} <span>{data.textSpan}</span>
            </FormHeader>
          </ContactForm>
        </ContactContainer>
      </Container>
    </Section>
  );
};

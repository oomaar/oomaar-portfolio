import React from "react";
import { Container, Section, SectionTitle } from "../../global/GlobalStyle";
import {
  ContactContainer,
  ContactInfo,
  ContactForm,
  FormHeader,
  InfoContainer,
  InputsContainer,
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
            <InputsContainer>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
            </InputsContainer>
          </ContactForm>
        </ContactContainer>
      </Container>
    </Section>
  );
};

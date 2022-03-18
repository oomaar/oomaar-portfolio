import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmitForm = (values) =>
    console.log("🚀 ~ file: Contact.js ~ line 15 ~ Contact ~ values", values);

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
          <ContactForm onSubmit={handleSubmit(onSubmitForm)}>
            <FormHeader>
              {data.text} <span>{data.textSpan}</span>
            </FormHeader>
            <InputsContainer>
              <input
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                })}
                name="name"
              />
              <span>{errors?.name?.message}</span>
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter your email",
                  },
                })}
                name="email"
              />
              <span>{errors?.email?.message}</span>
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                name="message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "What's on Your Mind ??!",
                  },
                })}
              ></textarea>
              <span>{errors?.message?.message}</span>
              <button type="submit">Send</button>
            </InputsContainer>
          </ContactForm>
        </ContactContainer>
      </Container>
    </Section>
  );
};

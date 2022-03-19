import { useForm } from "react-hook-form";
import axios from "axios";
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
  } = useForm({
    defaultValues: {
      name: "test",
      email: "test@test.com",
      message: "testssss",
    },
  });
  const onSubmitForm = async (values) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("success");
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: Contact.js ~ line 38 ~ onSubmitForm ~ error",
        error
      );
    }
  };

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
                ref={register}
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
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$/i,
                    message: "This need to be a valid email address",
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

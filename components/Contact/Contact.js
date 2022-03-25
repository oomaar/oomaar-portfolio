import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Container,
  Section,
  SectionSubTitle,
  SectionTitle,
} from "../../global/GlobalStyle";
import {
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactInfo,
  ContactCard,
  ContactCardTitle,
  ContactCardData,
  ContactButton,
  ContactForm,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormTextAreaContainer,
  FormButton,
  FormError,
  FormSuccess,
  FormSuccessContainer,
  FormSuccessTitle,
} from "./styledContact";

export const Contact = ({ data }) => {
  const [confirmForm, setConfirmForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
        reset();
        setConfirmForm(true);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: Contact.js ~ line 38 ~ onSubmitForm ~ error",
        error
      );
    }
  };

  const contactCards = data.cards.map((card) => (
    <ContactCard key={card.id}>
      <i className={card.icon}></i>
      <ContactCardTitle>{card.text}</ContactCardTitle>
      <ContactCardData>{card.data}</ContactCardData>
      <ContactButton href={card.href} target="_blank">
        Let's Chat <i className="bx bx-right-arrow-alt"></i>
      </ContactButton>
    </ContactCard>
  ));

  const successForm = (
    <FormSuccess confirmForm={confirmForm}>
      <FormSuccessContainer>
        <h3>Thank you for contacting me, I will be in touch soon.</h3>
        <FormButton onClick={() => setConfirmForm(false)}>Close</FormButton>
      </FormSuccessContainer>
    </FormSuccess>
  );

  return (
    <Section id="contact">
      <SectionSubTitle>Get in touch</SectionSubTitle>
      <SectionTitle>Contact Me</SectionTitle>
      <Container>
        <ContactContainer>
          <div>
            <ContactTitle>Talk to me</ContactTitle>
            <ContactInfo>{contactCards}</ContactInfo>
          </div>

          <div>
            <ContactTitle>Write to me your project</ContactTitle>

            <ContactForm onSubmit={handleSubmit(onSubmitForm)}>
              {successForm}
              <FormInputContainer>
                <FormLabel>Name</FormLabel>
                <FormInput
                  errors={errors?.name}
                  type="text"
                  placeholder="Insert your name"
                  autoComplete="off"
                  ref={register}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                  })}
                  name="name"
                />
                <FormError>{errors?.name?.message}</FormError>
              </FormInputContainer>

              <FormInputContainer>
                <FormLabel>Mail</FormLabel>
                <FormInput
                  errors={errors?.email}
                  type="email"
                  placeholder="Insert your email"
                  autoComplete="off"
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
                <FormError>{errors?.email?.message}</FormError>
              </FormInputContainer>

              <FormTextAreaContainer errors={errors?.message}>
                <FormLabel>Message</FormLabel>
                <textarea
                  placeholder="Write your message"
                  autoComplete="off"
                  cols="30"
                  rows="10"
                  name="message"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "What's on Your Mind ??!",
                    },
                  })}
                ></textarea>
                <FormError>{errors?.message?.message}</FormError>
              </FormTextAreaContainer>
              <FormButton type="submit">Send Message</FormButton>
            </ContactForm>
          </div>
        </ContactContainer>
      </Container>
    </Section>
  );
};

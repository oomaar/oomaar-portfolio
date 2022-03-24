import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Button,
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
} from "./styledContact";

export const Contact = ({ data }) => {
  const {
    register,
    handleSubmit,
    setError,
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
        console.log("success");
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: Contact.js ~ line 38 ~ onSubmitForm ~ error",
        error
      );
    }
  };

  // try {
  //   const response = await axios(config);
  //   console.log(response);
  //   if (response.status == 200) {
  //     reset();
  //     toast(
  //       'success',
  //       'Thank you for contacting us, we will be in touch soon.'
  //     );
  //   }
  // } catch (err) {}

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

  return (
    <Section id="contact">
      <SectionSubTitle>Get in touch</SectionSubTitle>
      <SectionTitle>Contact Me</SectionTitle>
      <Container>
        <ContactContainer>
          <ContactContent>
            <ContactTitle>Talk to me</ContactTitle>
            <ContactInfo>{contactCards}</ContactInfo>
          </ContactContent>

          <ContactContent>
            <ContactTitle>Write to me your project</ContactTitle>
          </ContactContent>

          <ContactForm onSubmit={handleSubmit(onSubmitForm)}>
            <FormInputContainer>
              <FormLabel>Name</FormLabel>
              <FormInput
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
              <span>{errors?.name?.message}</span>
            </FormInputContainer>

            <FormInputContainer>
              <FormLabel>Mail</FormLabel>
              <FormInput
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
              <span>{errors?.email?.message}</span>
            </FormInputContainer>

            <FormTextAreaContainer>
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
              <span>{errors?.message?.message}</span>
            </FormTextAreaContainer>
            <Button type="submit">Send Message</Button>
          </ContactForm>
        </ContactContainer>
      </Container>
    </Section>
  );
};

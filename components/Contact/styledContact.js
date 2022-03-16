import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactInfo = styled.div`
  width: 50%;
`;

export const InfoContainer = styled.div`
  font-size: ${({ theme }) => theme.typo.smallTitleFont};
`;

export const ContactForm = styled.form`
  width: 50%;
`;

export const FormHeader = styled.div`
  font-size: ${({ theme }) => theme.typo.largeTitleFont};
  font-weight: 700;

  span {
    color: ${({ theme }) => theme.lightColors.primaryColor};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  margin: 2rem 0 0;

  input,
  textarea {
    border: 0;
    outline: 0;
    border-bottom: 1px solid ${({ theme }) => theme.lightColors.borderWhite};
    padding: 1rem;
    font-size: 1rem;
    background: transparent;
    transition: all 0.5s ease-in;

    :focus {
      border: 1px solid ${({ theme }) => theme.lightColors.borderWhite};
    }

    ::placeholder {
      color: #000;
    }
  }
`;

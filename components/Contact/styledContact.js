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

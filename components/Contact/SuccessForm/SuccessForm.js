import { FormButton } from "../styledContact";
import { FormSuccess, FormSuccessContainer } from "./styledSuccessForm";

export const SuccessForm = ({ confirmForm, setConfirmForm }) => {
  return (
    <FormSuccess confirmForm={confirmForm}>
      <FormSuccessContainer>
        <h3>Thank you for contacting me, I will be in touch soon.</h3>
        <FormButton onClick={() => setConfirmForm(false)}>Close</FormButton>
      </FormSuccessContainer>
    </FormSuccess>
  );
};

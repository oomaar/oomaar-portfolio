import {
  FooterContainer,
  FooterSubContainer,
  FooterCopy,
  InfoContainer,
  SocialContainer,
} from "./styledFooter";

export const Footer = ({ data }) => {
  return (
    <FooterContainer>
      <FooterSubContainer>
        <InfoContainer>
          <p>
            <span>Omar Hassan</span>
          </p>
          <p>{data.info.address}</p>
          <p>{data.info.phone}</p>
          <p>{data.info.email}</p>
        </InfoContainer>
        <SocialContainer>TODO: Social Here</SocialContainer>
      </FooterSubContainer>
      <FooterCopy>
        &copy; Designed and Developed by <span>Omar Hassan</span>
      </FooterCopy>
    </FooterContainer>
  );
};

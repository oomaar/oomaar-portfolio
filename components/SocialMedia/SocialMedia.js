import { SocialMediaContainer, SocialMediaIcon } from "./styledSocialMedia";

export const SocialMedia = ({ data }) => {
  const SocialMedia = data.map((media) => (
    <SocialMediaIcon key={media.id}>
      <a href={media.link} target="_blank">
        <img src={media.icon} alt={media.title} />
      </a>
    </SocialMediaIcon>
  ));

  return <SocialMediaContainer>{SocialMedia}</SocialMediaContainer>;
};

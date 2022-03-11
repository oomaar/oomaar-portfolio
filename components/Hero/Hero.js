import { HeroContainer, HeroFeature } from "./styledHero";

export const Hero = ({ data }) => {
  return (
    <HeroContainer id="home">
      <HeroFeature>
        <p>I'm a {data.profession}</p>
        <h1>
          <span>Hello,</span> I'm {data.name}
        </h1>
        <div></div>
      </HeroFeature>
    </HeroContainer>
  );
};

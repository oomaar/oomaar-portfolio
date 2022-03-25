import { NextHead } from "../global/NextHead";
import portfolioData from "../data/portfolioData.json";
import { Main } from "../global/GlobalStyle";
import {
  About,
  Contact,
  Footer,
  Hero,
  Projects,
  Qualification,
  Skills,
} from "../components";

export default function Home() {
  return (
    <div>
      <NextHead title="Omar's Resume" />
      <Main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Qualification data={portfolioData.qualification} />
        <Projects data={portfolioData.projects} />
        <Contact data={portfolioData.contact} />
      </Main>
      <Footer data={portfolioData.footer} />
    </div>
  );
}

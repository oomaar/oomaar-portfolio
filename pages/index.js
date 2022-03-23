import { useState } from "react";
import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Qualification,
  Sidebar,
  Skills,
  SocialMedia,
} from "../components";
import { NextHead } from "../global/NextHead";
import portfolioData from "../data/portfolioData.json";
import { Main } from "../global/GlobalStyle";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <NextHead title="Omar's Resume" />

      <Navbar
        data={portfolioData.navbar}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      {/* <Sidebar
        data={portfolioData.sidebar}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      /> */}
      {/* <SocialMedia data={portfolioData.socialMedia} /> */}
      <Main>
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Qualification data={portfolioData.qualification} />
      </Main>
      {/* <Projects data={portfolioData.projects} /> */}
      {/* <Contact data={portfolioData.contact} /> */}
      {/* <Footer data={portfolioData.footer} /> */}
    </div>
  );
}

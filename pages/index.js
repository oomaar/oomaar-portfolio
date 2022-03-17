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
      <Sidebar
        data={portfolioData.sidebar}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      <SocialMedia data={portfolioData.socialMedia} />
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Qualification data={portfolioData.qualification} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
      <Footer data={portfolioData.footer} />
    </div>
  );
}

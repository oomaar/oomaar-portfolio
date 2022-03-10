import { useState } from "react";
import {
  About,
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
      <Hero data={portfolioData.hero} />
      <SocialMedia data={portfolioData.socialMedia} />
      <About />
      <Qualification />
      <Skills />
      <Projects />
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  Nav,
  Logo,
  NavButton,
  NavButtonLine1,
  NavButtonLine2,
  NavButtonLine3,
} from "./styledNavbar";

export const Navbar = ({ showMenu, setShowMenu, data }) => {
  const [darkNav, setDarkNav] = useState(false);

  const handleDarkNav = () =>
    window.scrollY > 900 ? setDarkNav(true) : setDarkNav(false);

  useEffect(() => {
    window.addEventListener("scroll", handleDarkNav);
    return () => window.removeEventListener("scroll", handleDarkNav);
  }, []);

  return (
    <Nav darkNav={darkNav}>
      <Logo>{data.name}</Logo>
      <NavButton onClick={() => setShowMenu(true)}>
        <NavButtonLine1 showMenu={showMenu}></NavButtonLine1>
        <NavButtonLine2 showMenu={showMenu}></NavButtonLine2>
        <NavButtonLine3 showMenu={showMenu}></NavButtonLine3>
      </NavButton>
    </Nav>
  );
};

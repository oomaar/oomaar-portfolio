import { useState } from "react";
import {
  Nav,
  Logo,
  NavButton,
  NavButtonLine1,
  NavButtonLine2,
  NavButtonLine3,
} from "./styledNavbar";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Nav>
      <Logo>Omar H.</Logo>
      <NavButton onClick={() => setShowMenu((state) => !state)}>
        <NavButtonLine1 showMenu={showMenu}></NavButtonLine1>
        <NavButtonLine2 showMenu={showMenu}></NavButtonLine2>
        <NavButtonLine3 showMenu={showMenu}></NavButtonLine3>
      </NavButton>
    </Nav>
  );
};

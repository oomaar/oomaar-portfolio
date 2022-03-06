import {
  Nav,
  Logo,
  NavButton,
  NavButtonLine1,
  NavButtonLine2,
  NavButtonLine3,
} from "./styledNavbar";

export const Navbar = ({ showMenu, setShowMenu }) => {
  return (
    <Nav>
      <Logo>Omar H.</Logo>
      <NavButton onClick={() => setShowMenu(true)}>
        <NavButtonLine1 showMenu={showMenu}></NavButtonLine1>
        <NavButtonLine2 showMenu={showMenu}></NavButtonLine2>
        <NavButtonLine3 showMenu={showMenu}></NavButtonLine3>
      </NavButton>
    </Nav>
  );
};

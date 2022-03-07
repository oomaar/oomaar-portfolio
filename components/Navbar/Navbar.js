import {
  Nav,
  Logo,
  NavButton,
  NavButtonLine1,
  NavButtonLine2,
  NavButtonLine3,
} from "./styledNavbar";

export const Navbar = ({ showMenu, setShowMenu, data }) => {
  return (
    <Nav>
      <Logo>{data.name}</Logo>
      <NavButton onClick={() => setShowMenu(true)}>
        <NavButtonLine1 showMenu={showMenu}></NavButtonLine1>
        <NavButtonLine2 showMenu={showMenu}></NavButtonLine2>
        <NavButtonLine3 showMenu={showMenu}></NavButtonLine3>
      </NavButton>
    </Nav>
  );
};

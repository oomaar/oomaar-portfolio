import {
  Nav,
  Logo,
  NavThemeButton,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from "./styledNavbar";

export const Navbar = ({ data }) => {
  const navbarLinks = data.links.map((link) => (
    <NavbarItem key={link.id}>
      <NavbarLink href={link.href}>
        <i className={link.icon}></i>
      </NavbarLink>
    </NavbarItem>
  ));

  return (
    <Nav>
      <Logo>{data.name}</Logo>
      <NavbarList>{navbarLinks}</NavbarList>
      <NavThemeButton>
        <i className="bx bx-moon"></i>
        {/* <i className="bx bx-sun"></i> */}
      </NavThemeButton>
    </Nav>
  );
};

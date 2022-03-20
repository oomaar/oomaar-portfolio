import {
  Header,
  Nav,
  Logo,
  NavThemeButton,
  NavMenu,
  NavbarList,
  NavbarItem,
  NavbarLink,
} from "./styledNavbar";

export const Navbar = ({ data }) => {
  const navbarLinks = data.links.map((link) => (
    <NavbarItem key={link.id}>
      <NavbarLink
        href={link.href}
        className={link.id === "nav-link-1" && "active"}
      >
        {/* <NavbarLink href={link.href} className="active"> */}
        <i className={link.icon}></i>
      </NavbarLink>
    </NavbarItem>
  ));

  return (
    <Header>
      <Nav>
        <Logo>{data.name}</Logo>
        <NavMenu>
          <NavbarList>{navbarLinks}</NavbarList>
        </NavMenu>
        <NavThemeButton>
          <i className="bx bx-moon"></i>
          {/* <i className="bx bx-sun"></i> */}
        </NavThemeButton>
      </Nav>
    </Header>
  );
};

import { useState, useEffect } from "react";
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
  const [navShadow, setNavShadow] = useState(false);

  const handleNavShadow = () =>
    window.scrollY > 10 ? setNavShadow(true) : setNavShadow(false);

  useEffect(() => {
    window.addEventListener("scroll", handleNavShadow);
  }, []);

  const navbarLinks = data.links.map((link) => (
    <NavbarItem key={link.id}>
      <NavbarLink
        href={link.href}
        className={link.id === "nav-link-1" && "active"}
      >
        <i className={link.icon}></i>
      </NavbarLink>
      {/* <p>{link.title}</p> */}
    </NavbarItem>
  ));

  return (
    <Header navShadow={navShadow}>
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
